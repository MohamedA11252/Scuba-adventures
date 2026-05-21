export function formatDescription(text: string): string {
  const knownHeadings = [
    "COURSE OVERVIEW", "PRZEGLĄD KURSU", "ОБЗОР КУРСА",
    "What you'll learn", "Czego się nauczysz", "Чему вы научитесь",
    "The Scuba Gear You Will Use", "Sprzęt nurkowy", "Снаряжение для дайвинга",
    "Continue The Adventure", "Continue The Adventure…", "Kontynuuj przygodę", "Продолжайте приключение",
    "About the Course", "O kursie", "О курсе",
    "With Your Instructor", "Z instruktorem", "С вашим инструктором",
    "E-Learn before You Dive", "E-Learn before/while you take the course", "E-learning przed kursem", "Электронное обучение",
    "Course Prerequisites", "Wymagania wstępne", "Предварительные требования",
    "What You Can Teach", "Czego możesz uczyć", "Чему вы можете обучать",
    "Share the Knowledge…and love.", "Podziel się wiedzą", "Поделитесь знаниями",
  ];

  const knownItalics = [
    "mini dives", "Discover Scuba Diving", "PADI eLearning",
    "PADI Bubblemaker", "PADI Open Water Diver", "PADI Advanced Open Water",
    "PADI Rescue Diver", "PADI Divemaster", "PADI Specialty",
    "Emergency First Response", "PADI Junior Open Water Diver",
    "PADI Junior Advanced Open Water Diver", "PADI Master Scuba Diver",
    "PADI Assistant Instructor", "PADI Open Water Scuba Instructor",
    "PADI Discover Scuba Diving", "PADI Discover Local Diving",
    "PADI Scuba Review", "PADI Skin Diver", "PADI Discover Snorkelling",
    "Deep Adventure Dive", "Under Water Navigation Adventure Dive",
    "Underwater Navigation Adventure Dive",
  ];

  const lines = text.split('\n');
  const result: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '') {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push('');
      continue;
    }

    const isHeading = knownHeadings.some(h => line === h || line.startsWith(h));
    const isListLike = line.startsWith('- ') || line.startsWith('• ') || /^[\d]+\./.test(line);

    if (isHeading) {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push(`<h3 class="description-heading">${escapeHtml(line)}</h3>`);
    } else if (isListLike) {
      if (!inList) {
        result.push('<ul class="description-list">');
        inList = true;
      }
      const content = line.replace(/^[-•]\s*/, '').replace(/^[\d]+\.\s*/, '');
      result.push(`<li>${formatInline(escapeHtml(content), knownItalics)}</li>`);
    } else {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push(`<p>${formatInline(escapeHtml(line), knownItalics)}</p>`);
    }
  }

  if (inList) {
    result.push('</ul>');
  }

  return result.join('\n');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatInline(text: string, knownItalics: string[]): string {
  let result = text;
  for (const phrase of knownItalics) {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(
      new RegExp(escaped, 'gi'),
      `<em class="italic-term">${phrase}</em>`
    );
  }
  return result;
}
