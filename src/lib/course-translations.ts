import { courseImage, specialtyImage } from "./scuba-images";

type CourseTranslation = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  difficulty: string;
  price: number;
  durationDays: number;
  seats: number;
  certification: string;
  instructor: string;
  nextStart: string;
  equipment: string;
  requirements: string;
  includes: string[];
  excludes: string[];
  image: string;
};

type SpecialtyTranslation = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  difficulty: string;
  price: number;
  durationDays: number;
  certification: string;
  equipment: string;
  requirements: string;
  includes: string[];
  excludes: string[];
  image: string;
};

const coursesEN: CourseTranslation[] = [
  {
    id: "course-bubblemaker",
    title: "PADI Bubblemaker",
    shortDescription: "Experience scuba diving under the direct supervision of a PADI Pro. Take your first breaths underwater in water shallower than 2 metres/6 ft. For children who are at least 8 years old.",
    longDescription: `COURSE OVERVIEW

Has your child ever dreamed of actually finding Nemo or swimming in an aquarium? Well now you can make their dreams come true. The PADI Bubblemaker experience is an easy and fun introduction to the exciting underwater world.

They will learn and develop new skills and the PADI Bubblemaker program will enable them to experience a feeling of total weightlessness surrounded by hundereds of brightly coloured fish. They may even spot a turtle or a passing dolphin.

What you'll learn

PADI Bubblemaker takes place at one of our local shallow dive sites or in the pool if required. The maximum depth they will go to is 6 metres.

The session will begin with an informative talk, covering safety aspects of Scuba and what breathing underwater for the first time will be like. Your PADI instructor will teach you the basics of diving in easy to understand steps and will also explain how to use the basic diving equipment in a safe and effective way.

Our team of PADI professionals will assist your child putting on the scuba equipment and help them to adjust to the exhilarating feeling of breathing underwater before setting off on their exploration. Your PADI instructor will also show you how to handle small problems if they should occur such as clearing your mask or equalizing your ears.

The Scuba Gear You Will Use

All the equipment you will need is provided for a Discover Scuba Diving experience. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. You just need to bring a towel and your swimming costume.

Continue The Adventure…

Now that you have taken your first scuba diving lesson, you are well on your way to becoming a certified scuba diver. Once you reach 10 years old you can participate in the PADI Discover Scuba Diving programme or why not take it further and embark on the PADI Junior Open Water Diver Course.`,
    difficulty: "Beginner",
    price: 130,
    durationDays: 1,
    seats: 10,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Included",
    requirements: "Age of 8",
    includes: [
      "Transfer from and to your hotel if required.",
      "Lunch if on the dive boat.",
      "Hot and cold beverages if on the dive boat.",
      "Dive guide and instructor.",
      "Dive equipment.",
      "2 dive experiences (pool or shallow dive site). Each dive takes about 30 minutes."
    ],
    excludes: [],
    image: courseImage("course-bubblemaker"),
  },
  {
    id: "course-owd",
    title: "PADI Open Water Diver Course",
    shortDescription: "The PADI Open Water Diver course is the world's most popular scuba course, and has introduced millions of people to the adventurous diving lifestyle.",
    longDescription: `COURSE OVERVIEW

About the Course

PADI® Open Water Diver is the first scuba certification level. A highly-trained PADI Instructor will teach you how to scuba dive in a relaxed, supportive learning environment.

By the end of the course, you'll have the skills and knowledge to dive at home or abroad and be an ambassador for the underwater world.

PADI eLearning®

PADI eLearning makes it easy to fit scuba lessons into a busy schedule. Learn about scuba diving principles and terminology whenever, wherever it's convenient for you.

It's your course on your time. Study offline, or online using a computer or mobile device. Connect with your instructor whenever you have a question.

eLearning time commitment: 5-10 hours

With Your Instructor

Practice using scuba gear in a pool (or pool-like environment) until you're comfortable. PADI training includes practice "mini dives" to help you build confidence in your new abilities before making four dives in open water.

Prerequisites: Able to swim; medically fit for diving
Total time commitment: 4-7 days
Minimum age: 10 years or older
Depth: expect shallow dives (12m/40ft), the maximum allowed depth is 18m/60ft`,
    difficulty: "Beginner",
    price: 405,
    durationDays: 4,
    seats: 8,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Included",
    requirements: "Minimum age: 10",
    includes: [
      "PADI Dive Instructor",
      "Dive equipment",
      "Confined water training sessions",
      "4 Open water training dives",
      "Transfer from and to your hotel to the marina for the dives",
      "Logbook",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable",
      "PADI Open Water Diver materials",
      "PADI certification fee",
      "1 day Divecomputer"
    ],
    excludes: [],
    image: courseImage("course-owd"),
  },
  {
    id: "course-aowd",
    title: "PADI Advanced Open Water Diver Course",
    shortDescription: "The PADI Advanced Open Water Course is a natural progression once completing the PADI Open Water Course.",
    longDescription: `COURSE OVERVIEW

The PADI Advanced Open Water Course is a natural progression once completing the PADI Open Water Course. This course takes place over two days and builds on the skills you learnt during your PADI Open Water Course. It provides adventure, fun and lets you try out different types of dives, making it one of the most exciting dive courses you can do. You don't need to be an "advanced" diver to start the PADI Advanced Open Water course as it is designed so that you can go straight into it after your PADI Open Water course.

Once you've completed the PADI Advanced Open Water Course, you will be a qualified PADI Advanced Open Water diver. This means you can safely dive around the world up to 30 metres and you'll have the qualification for life. This opens up a whole new world of dive sites that are out of the reach of PADI Open Water divers who are only qualified to dive to 18 metres.

What you'll learn

The PADI Advanced Open Water certification requires you to complete 5 PADI Adventure Dives. There are 2 required dives, PADI Deep Adventure Dive and PADI Under Water Navigation Adventure Dive. These two core dives are fundamental to your advancement as a diver. 

During the Deep Adventure Dive, you learn how to plan dives to a maximum depth of 30 meters (21 meters for Junior Advanced Open Water divers). You learn how to manage the physiological effects and challenges of deeper scuba diving under the direct supervision of your PADI instructor. The Underwater Navigation Adventure Dive refines and extends your range of navigational skills, from using a variety of compass patterns to natural navigation and kick-cycles/time skills.

Your other 3 Speciality Adventure dives can be chosen from the following:

PADI Enriched Air Adventure Dive
PDI Wreck Diver Adventure Dive
PADI Peak Performance Buoyancy Adventure Dive
PADI Underwater Photographer Adventure Dive
PADI Search and Recovery Adventure Dive
PADI Underwater Naturalist Adventure Dive
PADI Diver Propulsion Vehicle Adventure Dive
PADI Boat Diver Adventure Dive
PADI Drift Diver Adventure Dive
PAD Aware Fish Identification Adventure Dive
PADI Underwater Naturalist Adventure Dive
PADI Multi-level and Computer Adventure Dive

Speak to your instructor about where your interests lie and they can advise you on what the best options for you.

E-Learn before You Dive

The PADI Advance Open Water course has e-learning modules available. Discounts are available for anyone who has signed up to PADI e-Learning and has associated the course to us through the online portal.

The Scuba Gear You Will Use

All the equipment you will need is provided for the PADI Advanced Open Water Diving course. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. Your PADI instructor will also provide you with a dive computer and compass which are necessary for the two compulsory modules.  

You will also need to complete a standard PADI Medical form which may require a doctor's signature to say you are fit to dive if you have any pertinent medical history. If you've never suffered from any of the conditions listed, you can sign it yourself.

Continue The Adventure…

Once you have completed the PADI Advanced Open Water Diver course we know that you'll be thirty for more! We recommend that you look at the range of PADI Specialty Diving courses available. PADI Specialties will take your abilities to the next level and focus on developing skills in specific areas such as deep diving, wreck diving or underwater photography. You may also want to consider the PADI Rescue Diver Course!`,
    difficulty: "Intermediate",
    price: 360,
    durationDays: 3,
    seats: 6,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Included",
    requirements: "To enrol on the PADI Advanced Open Water Diver course you need to be at least 12 years old, and have earned the PADI Open Water Diver/Junior Open Water Diver certification. Children 12 to 15 years of age will earn a PADI Junior Advanced Open Water Diver certification.",
    includes: [
      "PADI Advanced Open Water Diver materials",
      "PADI certification fee",
      "PADI Dive Instructor",
      "Dive equipment",
      "5 Open water training dives",
      "Transfer from and to your hotel to the marina for the dives",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable",
      "Divecomputer for the Deepdive"
    ],
    excludes: [
      "Physical Card from PADI"
    ],
    image: courseImage("course-aowd"),
  },
  {
    id: "course-efr",
    title: "Emergency First Response Course (EFR)",
    shortDescription: "First aid and CPR are important skills for anyone involved in adventure sports as you never know when you might need them. Emergency First Response is a PADI affiliate course that specialises in teaching vital lifesaving skills.",
    longDescription: `COURSE OVERVIEW

First aid and CPR are important skills for anyone involved in adventure sports as you never know when you might need them. Emergency First Response is a PADI affiliate course that specialises in teaching vital lifesaving skills.

The one-day Emergency First Response course gives you the confidence to respond to medical emergencies - not just in the diving world, but in everyday life with your family, friends, neighbours and co-workers.

The EFR course meets the CPR and first aid training requirements for the PADI Rescue Diver course.

We also recommend that you consider taking the PADI Emergency Oxygen Provider course in conjunction with the EFR course.

The course could take place in the class room at our dive centre or on the dive boat during a daily dive session. Your PADI instructor will advise you accordingly.

What you'll learn

Primary Care (CPR) – This teaches you the steps and techniques for handling life-threatening emergencies. You'll practice skills for aiding patients who aren't breathing, have no heartbeat, may have a spinal injury, may be in shock or who may have serious bleeding. You'll learn how to perform CPR and continue to monitor the patient, so that you provide every possible chance of survival while waiting for emergency medical services to arrive.

Secondary Care (First Aid) – Because many medical conditions are not life-threatening and emergency medical services are sometimes delayed or unavailable, this section teaches you how to provide first aid that eases pain and reduces the risk of further harm. You'll learn to assess a variety of injuries and illnesses and practice bandaging and splinting through knowledge and skill development with realistic scenario practice.

Continue The Adventure...

If you're taking your EFR there is a good change that you are taking the steps to becoming a PADI Rescue Diver. Becoming a PADI Rescue Diver is one of the more challenging yet rewarding courses you'll take. Once qualified you will be equipped to deal with situations as and when they occur while out diving.`,
    difficulty: "Beginner",
    price: 170,
    durationDays: 1,
    seats: 12,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Not included",
    requirements: "None",
    includes: [
      "Emergency First Response course materials",
      "PADI Dive Instructor",
      "EFR certification",
      "Transfer from and to your hotel to the marina if taking place on the dive boat",
      "Lunch if on the boat",
      "Hot and cold beverages if on the boat"
    ],
    excludes: [],
    image: courseImage("course-efr"),
  },
  {
    id: "course-rescue",
    title: "PADI Rescue Diver Course",
    shortDescription: "Take a subject like accident prevention and management and turn it into fun! The PADI Rescue Diver programme does just that by introducing new topics and expanding on existing skills in an enjoyable way.",
    longDescription: `COURSE OVERVIEW

Take a subject like accident prevention and management and turn it into fun! The PADI Rescue Diver programme does just that by introducing new topics and expanding on existing skills in an enjoyable way. The end result is a diver with the knowledge and confidence to help others in distress.

Being more confident in the water is what every diver desires and the PADI Rescue Diver course will help you get there. It also teaches you to be a better buddy. During the course, you learn how to spot potential problems and quickly deal with them before they become big issues. You'll be ready to rescue someone in an emergency, but you'll also have the skills and awareness to prevent problems. For many, earning a PADI Rescue Diver certification is the start of a career in diving.

The PADI Rescue Diver course is designed to introduce topics and skills progressively. Your abilities are assessed throughout the course and culminate in your involvement in various accident scenarios. 

What you'll learn

The PADI Rescue Diver course prepares you to deal with dive emergencies, minor and major, using a variety of techniques. Through knowledge development and rescue exercises, you'll learn what to look for and how to respond as well as giving you the skills to know how to identify and adapt if your own dive isn't going quite to plan.

The PADI Rescue Diver course uses a mixture of self-study and knowledge reviews, classroom sessions and practical exercises in both the pool and open water situations.

Topics covered include;

Dive planning and emergency procedures
Search and Recovery techniques
Recognising and managing stress in other divers
Emergency management and equipment
Rescuing panicked divers
Rescuing unresponsive divers
Emergency First Response & First Aid (Click here for details of the EFR course)

The PADI Rescue Diver Course will test your physical and mental performance under pressure, but we are confident you will have fun doing it. 

The Scuba Gear You Will Use

All the equipment you will need is provided for the PADI Rescue Diver course. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. Your PADI instructor will also provide you with a dive computer and compass which are necessary for the course.  

Course Prerequisites

To enrol on the PADI Rescue Diver course you need to be at least 12 years old, and have earned the PADI Advanced Open Water Diver/Junior Advanced Open Water Diver certification. Children 12 to 15 years of age will earn a PADI Junior Rescue Diver certification.

You will need a completed first aid certification, including CPR, from within the past two years. Alternatively, you can take the Emergency First Responder course in conjunction with your PADI Rescue Diver Course - Click here for details of the EFR course

You will also need to complete a standard PADI Medical form which may require a doctor's signature to say you are fit to dive if you have any pertinent medical history. If you've never suffered from any of the conditions listed, you can sign it yourself.

Continue The Adventure…

Once you have completed the PADI Rescue Diver course you are almost at the top of the recreational diving education ladder. If you have 5 PADI Specialties and 50 logged dives your PADI Instructor can certify you to become a PADI Master Scuba Diver. This is the highest certification of recreational diver before you embark on the professional educational journey to becoming a PADI Divemaster.`,
    difficulty: "Advanced",
    price: 350,
    durationDays: 3,
    seats: 6,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Included",
    requirements: "PADI Advanced Open Water Diver certification, EFR certification within past 2 years, minimum age 12",
    includes: [
      "PADI Rescue Diver course materials",
      "PADI certification fee",
      "PADI Dive Instructor",
      "Dive equipment",
      "Transfer from and to your hotel to the marina for the dives",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable"
    ],
    excludes: [
      "EFR Course",
      "PADI Emergency Oxygen Provider course",
      "Dive Computer"
    ],
    image: courseImage("course-rescue"),
  },
  {
    id: "course-divemaster",
    title: "PADI Divemaster Course",
    shortDescription: "Love scuba diving? Can you picture yourself doing it for a living? Take the PADI Divemaster course and do what you love as a career.",
    longDescription: `COURSE OVERVIEW

Love scuba diving? Can you picture yourself doing it for a living? Take the PADI Divemaster course and do what you love as a career. Scuba divers look up to PADI Divemasters because they are leaders who mentor and motivate others. As a PADI Divemaster, you not only get to dive a lot but also experience the joy of seeing others have as much fun diving as you do.

The PADI Divemaster course is your first level of professional training. Working closely with a PADI Instructor, you'll fine-tune your dive skills, like perfecting the effortless hover, and refine your rescue skills so you anticipate and easily solve common problems. You'll gain dive knowledge, management, and supervision abilities so you become a role model to divers everywhere.

As a PADI Divemaster, you'll lead others as you supervise scuba diving activities and assist with diver training. Whether you want to work at a faraway dive destination or close to home at a local dive shop, the adventure of a lifetime awaits you. PADI Divemasters are respected dive professionals who are aligned with the largest and most respected dive organisation in the world – PADI.

What you'll learn

During the PADI Divemaster program, you learn dive leadership skills through both classroom and independent study. You complete water skills and stamina exercises. There are also training exercises that stretch your ability to organise and solve problems as well as help others improve their scuba skill set. You put this knowledge into action through a structured internship or series of practical training exercises.

As you progress through your Divemaster course, you'll expand your diving knowledge, hone your skills and increase your confidence. Then, as a PADI Divemaster, you'll use these attributes to lead, mentor and motivate other divers and experience the joy of seeing them transformed by the majesty of the aquatic realm.

Topics and practical workshops include:

The role and characteristics of the PADI Divemaster
Supervising dive activities and assisting with student divers
Diver safety and risk management
Divemaster conducted programs and specialised skills
Business of diving and your career
Awareness of the dive environment
Dive setup and management
Mapping an open water site
Conducting dive briefings
Conduct a Search & Recovery and a Deep Dive scenario or gain the specialties
Conducting a scuba review and skin diver course
Assisting with Discover Scuba Diving and leading Discover Local Diving programs

E-Learn before/while you take the course

Discounts are available for anyone who has signed up to PADI e-Learning and has associated the course to us through the online portal.

What You Can Teach

After becoming certified as a PADI Divemaster you will be qualified to:

Supervise both training and non-training related activities by planning, organising and directing dives
Assist a PADI Instructor during the training sessions for any PADI Diver course
Conduct the PADI Skin Diver course and PADI Discover Snorkelling program
Conduct the PADI Discover Local Diving experience
Conduct the PADI Scuba Review programme
Conduct PADI Discover Snorkelling programs
Lead PADI Scuba Divers on guided dive tours
Independently guide Open Water Diver course students on the tour portion of Open Water Diver course training dives 2, 3 and 4 at a ratio of two student divers per certified Divemaster.

The Scuba Gear You Will Use

As a dive professional, you'll want to have all your basic scuba equipment, including a dive computer, a dive knife, and at least two surface signalling devices.

During practical skills exercises, like underwater mapping and search and recovery, you'll use a compass, floats, marker buoys, lift bags, and slates. Your PADI Instructor may suggest additional gear that will be useful throughout your diving career.

You also need to have:

Emergency First Response Primary and Secondary Care (CPR and First Aid) training within the past 24 months.
A Medical Statement signed by a physician within the last 12 months.
At least 40 logged dives to begin the course and 60 dives to earn certification.

Share the Knowledge…and love.

Wondering what's next? Check out the PADI Assistant Instructor or PADI Open Water Scuba Instructor courses.`,
    difficulty: "Professional",
    price: 950,
    durationDays: 15,
    seats: 4,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Not included",
    requirements: "To enrol on the PADI Divemaster course you need to be at least 18 years old and have earned your PADI Rescue Diver certification.",
    includes: [
      "PADI Dive Instructor",
      "Transfer from and to your hotel to the marina for the dives",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable"
    ],
    excludes: [
      "PADI Divemaster course materials",
      "PADI certification fee"
    ],
    image: courseImage("course-divemaster"),
  },
  {
    id: "course-reactivate",
    title: "PADI ReActivate Scuba Refresher Program",
    shortDescription: "ReActivate is the engaging, efficient way to refresh your dive knowledge and scuba skills. Move quickly through topics you know well, dive deeper on topics where your knowledge may have lapsed.",
    longDescription: `COURSE OVERVIEW

It's been a long time since your last dive and you want to start a short refresher programme? 

Possible with Master Diving. You can start the e-learning programme from the comfort of your own home so that you have the theory back in your head.

On site, you will discuss and implement your dive with your instructor. Customised exactly to your wishes.

After this course, you can continue your diving trip as usual.`,
    difficulty: "Beginner",
    price: 110,
    durationDays: 1,
    seats: 12,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Not included",
    requirements: "Dive Certificate",
    includes: [
      "e-learning, PADI e-card Certificate",
      "1 Dive with instructor"
    ],
    excludes: [
      "Equipment"
    ],
    image: courseImage("course-reactivate"),
  },
  {
    id: "course-junior",
    title: "Junior scuba diver",
    shortDescription: "The (Junior) Scuba Diver Course is fun, fast and an easy way to earn your first certificate.",
    longDescription: `COURSE OVERVIEW

The (Junior) Scuba Diver Course is actually a intermediate step to your Open Water Diver certificate. It is a part of the Open Water Diver Course i.e. the first 3 modules of theory, 2 confined water sessions concerning these modules and 2 open water dives.

You will first be taught by your instructor the essentials of diving during the theory lessons of the 3 modules in a relaxed atmosphere.

In the swimming pool or in shallow water you will perform the confined water sessions where you will practice to master the required skills to dive efficiently and safely.

Buoyancy control, ascending and descending, breathing underwater, buddy diving techniques, preventing common problems underwater, diving environments and aquatic life are all part of the course.

During the 2 open water dives you will put into practice the skills you learned in the swimming pool. And above all you will discover the wonderful underwater world of the Red Sea. You have the chance to gain confidence and comfort underwater.

The (Junior) Scuba Diver certificate allows you to dive under the supervision of a dive professional till a depth of maximum 12 meters.

After finishing successfully the (Junior) Scuba Diver Course it is just a small step to the Open Water Diver Course.

Are you ready to start your journey to become a certified diver? Start easy and subscribe to our (Junior) Scuba Diver Course.

Course place: The course takes place at the diving center.

Course schedule:

day in the class room (theory and knowledge reviews) and confined water dives.
 day on the boat for 2 open water dives.`,
    difficulty: "Beginner",
    price: 305,
    durationDays: 2,
    seats: 8,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Included",
    requirements: "To sign up for the (Junior) Scuba Diver Course you need to be at least 10 years of age, have the adequate swimming skills and you have to be in a good health condition.",
    includes: [
      "Transfer from and to your hotel.",
      "Instructor.",
      "Diving Equipment.",
      "Tanks and weights.",
      "Course material."
    ],
    excludes: [
      "Any personal expenses."
    ],
    image: courseImage("course-junior"),
  },
  {
    id: "course-jowd",
    title: "PADI Junior Open Water Diver Course",
    shortDescription: "The PADI Junior Open Water Diver course is perfect for kids aged 10 to 14 who have a thirst for knowledge and adventure. Thousands of children around the world have been certified via PADI and are now enjoying exploring the mysteries of the underwater world.",
    longDescription: `COURSE OVERVIEW

The PADI Junior Open Water Diver course is perfect for kids aged 10 to 14 who have a thirst for knowledge and adventure. Thousands of children around the world have been certified via PADI and are now enjoying exploring the mysteries of the underwater world.

The PADI Junior Open Water Certification is recognised in more countries around the world than any other qualification and ensures that younger divers have the appropriate level of knowledge, skills and training to safely dive to depths of up to 18 metres.

During the course, you'll make four pool dives and four Open Water dives at a local dive site under the supervision of your PADI Instructor.

What you'll learn

The PADI Junior Open Water Diver course consists of three main phases:

Knowledge Development to understand basic principles of scuba diving. This can also be done via e-learning, see below.
Confined Water Dives to learn basic scuba skills
Open Water Dives to review your skills and explore the underwater world.

As a result, you will become a confident and skilled diver who can assemble and use scuba gear, descend and ascend safely, manage your buoyancy and handle common problems. You'll also begin to understand and appreciate the delicate marine ecosystems and respectfully approach marine life.

If you've participated in a PADI Discover Scuba Diving experience, the skills you learned may be credited towards a portion of the full PADI Junior Open Water Diver course certification.

E-Learn before You Dive

Discounts are available for anyone who has signed up to PADI e-Learning and has associated the course to us through the online portal.

For more information on eLearning Click Here

The Scuba Gear You Will Use

All the equipment you will need is provided for the PADI Junior Open Water Diving course. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. Your PADI instructor will also give you an introduction into using dive computers and compasses.

Course Prerequisites

To enrol on the PADI Junior Open Water Diver course you need to be at least 10 years old, be able to swim at least 200m without stopping and be able to tread water for 10 minutes. For children under 10 years of age there is the PADI Bubblemaker course.

You will also need to complete a standard PADI Medical form which may require a doctor's signature to say you are fit to dive if you have any pertinent medical history. If you've never suffered from any of the conditions listed, your parent or guardian can sign it on your behalf.

Continue The Adventure...

Now you're an excited certified PADI Junior Open Water Diver, where do you go from here?

You can continue learning with one of the many PADI Specialty Diving courses. The PADI Fish Identification course is a great way to get to know all the colourful and interesting sea creatures you are diving with.

Once you reach the age of 15 you have the option of moving onto the PADI Advanced Open Water diver course, where you will increase your diving experience and develop your underwater skills to increase your proficiency as a diver.`,
    difficulty: "Beginner",
    price: 405,
    durationDays: 4,
    seats: 8,
    certification: "PADI",
    instructor: "Staff Instructor",
    nextStart: "TBA",
    equipment: "Included",
    requirements: "At least 10 years old, able to swim 200m, tread water for 10 minutes",
    includes: [
      "PADI Junior Open Water Diver materials",
      "PADI certification fee",
      "PADI Dive Instructor",
      "Dive equipment",
      "Confined water training sessions",
      "4 Open water training dives",
      "Transfer from and to your hotel to the marina for the dives",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable"
    ],
    excludes: [],
    image: courseImage("course-jowd"),
  }
];

const coursesPL: CourseTranslation[] = [
  {
    id: "course-bubblemaker",
    title: "PADI Bubblemaker",
    shortDescription: "Doświadcz nurkowania pod bezpośrednią opieką profesjonalisty PADI. Weź pierwsze oddechy pod wodą na głębokości mniejszej niż 2 metry. Dla dzieci od 8 roku życia.",
    longDescription: `PRZEGLĄD KURSU

Czy Twoje dziecko marzyło kiedykolwiek o znalezieniu Nemo lub pływaniu w akwarium? Teraz możesz spełnić ich marzenia. Doświadczenie PADI Bubblemaker to łatwe i zabawne wprowadzenie do ekscytującego podwodnego świata.

Nauczą się nowych umiejętności, a program PADI Bubblemaker pozwoli im doświadczyć uczucia całkowitej nieważności w otoczeniu setek kolorowych ryb. Mogą nawet dostrzec żółwia lub przepływającego delfina.

Czego się nauczysz

PADI Bubblemaker odbywa się na jednym z naszych lokalnych płytkich miejsc nurkowych lub w basenie. Maksymalna głębokość to 6 metrów.

Sesja rozpocznie się od informacyjnej rozmowy o bezpieczeństwie nurkowania i tym, jak wygląda oddychanie pod wodą po raz pierwszy. Twój instruktor PADI nauczy Cię podstaw nurkowania w łatwych do zrozumienia krokach.

Nasz zespół profesjonalistów PADI pomoże Twojemu dziecku założyć sprzęt i dostosować się do ekscytującego uczucia oddychania pod wodą. Instruktor pokaże również, jak radzić sobie z drobnymi problemami, takimi jak czyszczenie maski lub wyrównywanie ciśnienia w uszach.

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Użyjesz podstawowego sprzętu nurkowego, w tym maski, fajki, płetw, pianki, kamizelki wypornościowej (BCD), automatu oddechowego i manometrów. Wystarczy ręcznik i strój kąpielowy.

Kontynuuj przygodę…

Po pierwszej lekcji nurkowania jesteś na drodze do zostania certyfikowanym nurkiem. Po ukończeniu 10 lat możesz uczestniczyć w programie PADI Discover Scuba Diving lub rozpocząć kurs PADI Junior Open Water Diver.`,
    difficulty: "Początkujący",
    price: 130,
    durationDays: 1,
    seats: 10,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "W cenie",
    requirements: "Wiek 8 lat",
    includes: [
      "Transfer z i do hotelu w razie potrzeby.",
      "Obiad na łodzi nurkowej.",
      "Gorące i zimne napoje na łodzi.",
      "Przewodnik nurkowy i instruktor.",
      "Sprzęt nurkowy.",
      "2 nurkowania (basen lub płytkie miejsce). Każde trwa około 30 minut."
    ],
    excludes: [],
    image: courseImage("course-bubblemaker"),
  },
  {
    id: "course-owd",
    title: "Kurs PADI Open Water Diver",
    shortDescription: "Kurs PADI Open Water Diver to najpopularniejszy kurs nurkowy na świecie, który wprowadził miliony ludzi w przygodowy styl życia nurkowania.",
    longDescription: `PRZEGLĄD KURSU

O kursie

PADI® Open Water Diver to pierwszy poziom certyfikacji nurkowej. Wysoko wykwalifikowany instruktor PADI nauczy Cię nurkowania w relaksującej, wspierającej atmosferze.

Po zakończeniu kursu będziesz miał umiejętności i wiedzę, aby nurkować w domu i za granicą oraz być ambasadorem podwodnego świata.

PADI eLearning®

PADI eLearning ułatwia dopasowanie lekcji nurkowania do napiętego harmonogramu. Ucz się zasad i terminologii nurkowania kiedykolwiek i gdziekolwiek Ci to odpowiada.

To Twój kurs w Twoim czasie. Ucz się offline lub online za pomocą komputera lub urządzenia mobilnego.

Czas na eLearning: 5-10 godzin

Z instruktorem

Ćwicz używanie sprzętu nurkowego w basenie, aż poczujesz się komfortowo. Szkolenie PADI obejmuje praktyczne „mini nurkowania", które pomogą Ci zbudować pewność siebie przed czterema nurkowaniami na otwartym akwenie.

Wymagania wstępne: Umiejętność pływania; sprawność medyczna do nurkowania
Całkowity czas: 4-7 dni
Minimalny wiek: 10 lat lub więcej
Głębokość: płytkie nurkowania (12m/40ft), maksymalna dozwolona głębokość to 18m/60ft`,
    difficulty: "Początkujący",
    price: 405,
    durationDays: 4,
    seats: 8,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "W cenie",
    requirements: "Minimalny wiek: 10 lat",
    includes: [
      "Instruktor nurkowania PADI",
      "Sprzęt nurkowy",
      "Sesje treningowe w wodach zamkniętych",
      "4 nurkowania treningowe na otwartym akwenie",
      "Transfer z i do hotelu do mariny",
      "Dziennik nurkowy",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby",
      "Materiały PADI Open Water Diver",
      "Opłata za certyfikację PADI",
      "1 dzień komputer nurkowy"
    ],
    excludes: [],
    image: courseImage("course-owd"),
  },
  {
    id: "course-aowd",
    title: "Kurs PADI Advanced Open Water Diver",
    shortDescription: "Kurs PADI Advanced Open Water to naturalna kontynuacja po ukończeniu kursu PADI Open Water.",
    longDescription: `PRZEGLĄD KURSU

Kurs PADI Advanced Open Water to naturalna kontynuacja po ukończeniu PADI Open Water. Kurs odbywa się przez dwa dni i buduje umiejętności zdobyte podczas kursu Open Water. Dostarcza przygody, zabawy i pozwala wypróbować różne typy nurkowań.

Po ukończeniu kursu będziesz kwalifikowanym nurkiem PADI Advanced Open Water. Oznacza to, że możesz bezpiecznie nurkować na całym świecie do 30 metrów i masz kwalifikację na całe życie.

Czego się nauczysz

Certyfikacja PADI Advanced Open Water wymaga ukończenia 5 nurkowań przygodowych. 2 są wymagane: PADI Deep Adventure Dive i PADI Under Water Navigation Adventure Dive.

Podczas Deep Adventure Dive nauczysz się planować nurkowania do maksymalnej głębokości 30 metrów. Underwater Navigation Adventure Dive doskonali Twoje umiejętności nawigacyjne.

Twoje pozostałe 3 nurkowania specjalnościowe możesz wybrać spośród:

PADI Enriched Air Adventure Dive
PADI Wreck Diver Adventure Dive
PADI Peak Performance Buoyancy Adventure Dive
PADI Underwater Photographer Adventure Dive
PADI Search and Recovery Adventure Dive
PADI Underwater Naturalist Adventure Dive
PADI Diver Propulsion Vehicle Adventure Dive
PADI Boat Diver Adventure Dive
PADI Drift Diver Adventure Dive
PADI Fish Identification Adventure Dive
PADI Multi-level and Computer Adventure Dive

Porozmawiaj ze swoim instruktorem o swoich zainteresowaniach, a doradzi Ci najlepsze opcje.

E-Learn przed nurkowaniem

Kurs PADI Advanced Open Water ma dostępne moduły e-learningowe. Zniżki dla osób zapisanych na PADI e-Learning.

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Instruktor zapewni również komputer nurkowy i kompas niezbędne do dwóch obowiązkowych modułów.

Kontynuuj przygodę…

Po ukończeniu kursu polecamy zapoznać się z ofertą kursów specjalnościowych PADI. Możesz również rozważyć kurs PADI Rescue Diver!`,
    difficulty: "Średniozaawansowany",
    price: 360,
    durationDays: 3,
    seats: 6,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "W cenie",
    requirements: "Aby zapisać się na kurs, musisz mieć co najmniej 12 lat i posiadać certyfikat PADI Open Water Diver/Junior Open Water Diver. Dzieci w wieku 12-15 lat otrzymają certyfikat PADI Junior Advanced Open Water Diver.",
    includes: [
      "Materiały PADI Advanced Open Water Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI",
      "Sprzęt nurkowy",
      "5 nurkowań treningowych na otwartym akwenie",
      "Transfer z i do hotelu do mariny",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby",
      "Komputer nurkowy na nurkowanie głębokie"
    ],
    excludes: [
      "Fizyczna karta od PADI"
    ],
    image: courseImage("course-aowd"),
  },
  {
    id: "course-efr",
    title: "Kurs Emergency First Response (EFR)",
    shortDescription: "Pierwsza pomoc i CPR to ważne umiejętności dla każdego, kto uprawia sporty przygodowe. Emergency First Response to kurs afiliowany PADI specjalizujący się w nauczaniu kluczowych umiejętności ratowania życia.",
    longDescription: `PRZEGLĄD KURSU

Pierwsza pomoc i CPR to ważne umiejętności dla każdego, kto uprawia sporty przygodowe. Emergency First Response to kurs afiliowany PADI specjalizujący się w nauczaniu kluczowych umiejętności ratowania życia.

Jednodniowy kurs Emergency First Response daje Ci pewność siebie w reagowaniu na sytuacje medyczne - nie tylko w świecie nurkowania, ale w codziennym życiu z rodziną, przyjaciółmi i współpracownikami.

Kurs EFR spełnia wymagania szkolenia CPR i pierwszej pomocy dla kursu PADI Rescue Diver.

Zalecamy również rozważenie kursu PADI Emergency Oxygen Provider wraz z kursem EFR.

Kurs może odbyć się w sali naszego centrum nurkowego lub na łodzi nurkowej podczas codziennej sesji nurkowej.

Czego się nauczysz

Opieka podstawowa (CPR) – Nauczy Cię kroków i technik postępowania w sytuacjach zagrażających życiu. Nauczysz się wykonywać CPR i monitorować pacjenta.

Opieka wtórna (Pierwsza pomoc) – Ta sekcja uczy udzielania pierwszej pomocy łagodzącej ból i zmniejszającej ryzyko dalszych obrażeń. Nauczysz się oceniać różne urazy i choroby oraz ćwiczyć bandażowanie i unieruchamianie.

Kontynuuj przygodę...

Jeśli przechodzisz EFR, prawdopodobnie robisz kroki w kierunku zostania PADI Rescue Diver. To jeden z bardziej wymagających, ale satysfakcjonujących kursów.`,
    difficulty: "Początkujący",
    price: 170,
    durationDays: 1,
    seats: 12,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "Nie w cenie",
    requirements: "Brak",
    includes: [
      "Materiały kursu Emergency First Response",
      "Instruktor nurkowania PADI",
      "Certyfikacja EFR",
      "Transfer z i do hotelu do mariny jeśli kurs na łodzi",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi"
    ],
    excludes: [],
    image: courseImage("course-efr"),
  },
  {
    id: "course-rescue",
    title: "Kurs PADI Rescue Diver",
    shortDescription: "Zamień temat zapobiegania wypadkom w zabawę! Program PADI Rescue Diver robi właśnie to, wprowadzając nowe tematy i rozwijając istniejące umiejętności w przyjemny sposób.",
    longDescription: `PRZEGLĄD KURSU

Zamień temat zapobiegania wypadkom w zabawę! Program PADI Rescue Diver robi właśnie to. Efektem końcowym jest nurek z wiedzą i pewnością siebie, aby pomóc innym w potrzebie.

Bycie bardziej pewnym siebie w wodzie to coś, czego pragnie każdy nurek, a kurs PADI Rescue Diver Ci w tym pomoże. Uczysz się również być lepszym partnerem. Podczas kursu nauczysz się dostrzegać potencjalne problemy i szybko sobie z nimi radzić.

Kurs PADI Rescue Diver jest zaprojektowany, aby wprowadzać tematy i umiejętności stopniowo. Twoje umiejętności są oceniane przez cały kurs i kulminują w uczestnictwie w różnych scenariuszach wypadkowych.

Czego się nauczysz

Kurs PADI Rescue Diver przygotowuje Cię do radzenia sobie z nagłymi przypadkami nurkowymi, małymi i dużymi, przy użyciu różnych technik.

Kurs wykorzystuje mieszankę samodzielnej nauki, sesji klasycznych i ćwiczeń praktycznych zarówno w basenie, jak i na otwartym akwenie.

Omawiane tematy:

Planowanie nurkowania i procedury awaryjne
Techniki poszukiwań i odzyskiwania
Rozpoznawanie i zarządzanie stresem u innych nurków
Zarządzanie sytuacjami awaryjnymi i sprzęt
Ratowanie zpanikowanych nurków
Ratowanie nurków bez reakcji
Emergency First Response i Pierwsza Pomoc

Kurs PADI Rescue Diver przetestuje Twoją wydolność fizyczną i psychiczną pod presją, ale jesteśmy pewni, że będziesz się dobrze bawić.

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Instruktor zapewni komputer nurkowy i kompas niezbędne do kursu.

Wymagania wstępne

Aby zapisać się na kurs, musisz mieć co najmniej 12 lat i posiadać certyfikat PADI Advanced Open Water Diver. Dzieci w wieku 12-15 lat otrzymają certyfikat PADI Junior Rescue Diver.

Potrzebujesz ukończonej certyfikacji pierwszej pomocy, w tym CPR, z ostatnich dwóch lat. Możesz również odbyć kurs Emergency First Responder wraz z kursem PADI Rescue Diver.

Kontynuuj przygodę…

Po ukończeniu kursu jesteś prawie na szczycie rekreacyjnej edukacji nurkowej. Jeśli masz 5 specjalności PADI i 50 zalogowanych nurkowań, Twój instruktor może Cię certyfikować na PADI Master Scuba Diver.`,
    difficulty: "Zaawansowany",
    price: 350,
    durationDays: 3,
    seats: 6,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "W cenie",
    requirements: "Certyfikat PADI Advanced Open Water Diver, certyfikat EFR z ostatnich 2 lat, minimalny wiek 12 lat",
    includes: [
      "Materiały kursu PADI Rescue Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI",
      "Sprzęt nurkowy",
      "Transfer z i do hotelu do mariny",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby"
    ],
    excludes: [
      "Kurs EFR",
      "Kurs PADI Emergency Oxygen Provider",
      "Komputer nurkowy"
    ],
    image: courseImage("course-rescue"),
  },
  {
    id: "course-divemaster",
    title: "Kurs PADI Divemaster",
    shortDescription: "Kochasz nurkowanie? Wyobrażasz sobie robienie tego zawodowo? Zrób kurs PADI Divemaster i rób to, co kochasz jako karierę.",
    longDescription: `PRZEGLĄD KURSU

Kochasz nurkowanie? Wyobrażasz sobie robienie tego zawodowo? Zrób kurs PADI Divemaster i rób to, co kochasz jako karierę. Nurkowie patrzą w górę na PADI Divemasterów, ponieważ są liderami, którzy mentorują i motywują innych.

Kurs PADI Divemaster to Twój pierwszy poziom szkolenia zawodowego. Pracując blisko z instruktorem PADI, dopracujesz swoje umiejętności nurkowe, jak doskonałe unoszenie się w wodzie, i udoskonalisz umiejętności ratownicze.

Jako PADI Divemaster będziesz prowadzić innych, nadzorować aktywności nurkowe i pomagać w szkoleniu nurków.

Czego się nauczysz

Podczas programu PADI Divemaster nauczysz się umiejętności przywódczych poprzez naukę w klasie i samodzielne studia. Wykonujesz ćwiczenia wodne i wytrzymałościowe.

Tematy i warsztaty praktyczne:

Rola i cechy PADI Divemastera
Nadzorowanie aktywności nurkowych i pomoc studentom
Bezpieczeństwo nurków i zarządzanie ryzykiem
Programy prowadzone przez Divemastera i umiejętności specjalistyczne
Biznes nurkowy i Twoja kariera
Świadomość środowiska nurkowego
Konfiguracja i zarządzanie nurkowaniem
Mapowanie miejsca na otwartym akwenie
Prowadzenie odpraw nurkowych
Prowadzenie scenariusza Search & Recovery i Deep Dive
Prowadzenie przeglądu nurkowego i kursu skin diver
Pomoc w Discover Scuba Diving i prowadzenie programów Discover Local Diving

E-Learn przed/podczas kursu

Zniżki dla osób zapisanych na PADI e-Learning.

Czego możesz uczyć

Po uzyskaniu certyfikatu PADI Divemaster będziesz kwalifikowany do:

Nadzorowania aktywności szkoleniowych i nieszkoleniowych
Pomocy instruktorowi PADI podczas sesji szkoleniowych
Prowadzenia kursu PADI Skin Diver i programu PADI Discover Snorkelling
Prowadzenia doświadczenia PADI Discover Local Diving
Prowadzenia programu PADI Scuba Review
Prowadzenia programów PADI Discover Snorkelling
Prowadzenia PADI Scuba Divers na guidowanych nurkowaniach
Samodzielnego prowadzenia studentów Open Water Diver na części wycieczkowej nurkowań 2, 3 i 4

Sprzęt nurkowy

Jako profesjonalista nurkowy będziesz chciał mieć cały podstawowy sprzęt nurkowy, w tym komputer nurkowy, nóż nurkowy i co najmniej dwa urządzenia sygnalizacyjne.

Potrzebujesz również:

Szkolenie Emergency First Response Primary and Secondary Care (CPR i First Aid) z ostatnich 24 miesięcy.
Oświadczenie medyczne podpisane przez lekarza w ciągu ostatnich 12 miesięcy.
Minimum 40 zalogowanych nurkowań, aby rozpocząć kurs i 60 nurkowań, aby uzyskać certyfikację.`,
    difficulty: "Profesjonalny",
    price: 950,
    durationDays: 15,
    seats: 4,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "Nie w cenie",
    requirements: "Aby zapisać się na kurs, musisz mieć co najmniej 18 lat i posiadać certyfikat PADI Rescue Diver.",
    includes: [
      "Instruktor nurkowania PADI",
      "Transfer z i do hotelu do mariny",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby"
    ],
    excludes: [
      "Materiały kursu PADI Divemaster",
      "Opłata za certyfikację PADI"
    ],
    image: courseImage("course-divemaster"),
  },
  {
    id: "course-reactivate",
    title: "Program odświeżający PADI ReActivate",
    shortDescription: "ReActivate to angażujący, efektywny sposób na odświeżenie wiedzy nurkowej i umiejętności. Szybko przejdź przez znane tematy, zgłęb te, które mogły ulec zapomnieniu.",
    longDescription: `PRZEGLĄD KURSU

Minęło dużo czasu od Twojego ostatniego nurkowania i chcesz rozpocząć krótki program odświeżający?

Możliwe z Master Diving. Możesz rozpocząć program e-learning z komfortu własnego domu, aby odświeżyć teorię.

Na miejscu omówisz i zrealizujesz nurkowanie z instruktorem. Dostosowane dokładnie do Twoich życzeń.

Po tym kursie możesz kontynuować swoją przygodę nurkową jak zwykle.`,
    difficulty: "Początkujący",
    price: 110,
    durationDays: 1,
    seats: 12,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "Nie w cenie",
    requirements: "Certyfikat nurkowy",
    includes: [
      "e-learning, certyfikat PADI e-card",
      "1 nurkowanie z instruktorem"
    ],
    excludes: [
      "Sprzęt"
    ],
    image: courseImage("course-reactivate"),
  },
  {
    id: "course-junior",
    title: "Junior Scuba Diver",
    shortDescription: "Kurs (Junior) Scuba Diver to zabawny, szybki i łatwy sposób na zdobycie pierwszego certyfikatu.",
    longDescription: `PRZEGLĄD KURSU

Kurs (Junior) Scuba Diver to pośredni krok do certyfikatu Open Water Diver. Jest częścią kursu Open Water Diver, czyli pierwsze 3 moduły teorii, 2 sesje w wodach zamkniętych i 2 nurkowania na otwartym akwenie.

Najpierw instruktor nauczy Cię podstaw nurkowania podczas lekcji teoretycznych 3 modułów w relaksującej atmosferze.

W basenie lub na płytkiej wodzie wykonasz sesje w wodach zamkniętych, gdzie będziesz ćwiczyć wymagane umiejętności do efektywnego i bezpiecznego nurkowania.

Kontrola wyporności, wynurzanie i zanurzanie, oddychanie pod wodą, techniki nurkowania z partnerem, zapobieganie powszechnym problemom pod wodą, środowiska nurkowe i życie wodne - wszystko to jest częścią kursu.

Podczas 2 nurkowań na otwartym akwenie zastosujesz umiejętności zdobyte w basenie. Przede wszystkim odkryjesz wspaniały podwodny świat Morza Czerwonego.

Certyfikat (Junior) Scuba Diver pozwala nurkować pod opieką profesjonalisty do głębokości maksymalnie 12 metrów.

Po pomyślnym ukończeniu kursu to już tylko mały krok do kursu Open Water Diver.

Czy jesteś gotowy rozpocząć swoją podróż do zostania certyfikowanym nurkiem? Zacznij łatwo i zapisz się na nasz kurs (Junior) Scuba Diver.

Miejsce kursu: Kurs odbywa się w centrum nurkowym.

Harmonogram kursu:

dzień w sali (teoria i przeglądy wiedzy) i nurkowania w wodach zamkniętych.
 dzień na łodzi na 2 nurkowania na otwartym akwenie.`,
    difficulty: "Początkujący",
    price: 305,
    durationDays: 2,
    seats: 8,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "W cenie",
    requirements: "Aby zapisać się na kurs (Junior) Scuba Diver musisz mieć co najmniej 10 lat, posiadać odpowiednie umiejętności pływackie i być w dobrym stanie zdrowia.",
    includes: [
      "Transfer z i do hotelu.",
      "Instruktor.",
      "Sprzęt nurkowy.",
      "Butle i obciążenia.",
      "Materiały kursowe."
    ],
    excludes: [
      "Wydatki osobiste."
    ],
    image: courseImage("course-junior"),
  },
  {
    id: "course-jowd",
    title: "Kurs PADI Junior Open Water Diver",
    shortDescription: "Kurs PADI Junior Open Water Diver jest idealny dla dzieci w wieku 10-14 lat, które mają głód wiedzy i przygody. Tysiące dzieci na całym świecie uzyskało certyfikat PADI i cieszy się odkrywaniem tajemnic podwodnego świata.",
    longDescription: `PRZEGLĄD KURSU

Kurs PADI Junior Open Water Diver jest idealny dla dzieci w wieku 10-14 lat, które mają głód wiedzy i przygody. Tysiące dzieci na całym świecie uzyskało certyfikat PADI i cieszy się odkrywaniem tajemnic podwodnego świata.

Certyfikat PADI Junior Open Water jest rozpoznawany w większej liczbie krajów niż jakakolwiek inna kwalifikacja i zapewnia, że młodsi nurkowie mają odpowiedni poziom wiedzy, umiejętności i szkolenia, aby bezpiecznie nurkować do głębokości 18 metrów.

Podczas kursu wykonasz cztery nurkowania basenowe i cztery nurkowania na otwartym akwenie pod opieką instruktora PADI.

Czego się nauczysz

Kurs PADI Junior Open Water Diver składa się z trzech głównych faz:

Rozwój wiedzy - zrozumienie podstawowych zasad nurkowania. Można to zrobić również przez e-learning.
Nurkowania w wodach zamkniętych - nauka podstawowych umiejętności nurkowych
Nurkowania na otwartym akwenie - przegląd umiejętności i eksploracja podwodnego świata.

W rezultacie staniesz się pewnym siebie i wykwalifikowanym nurkiem, który potrafi składać i używać sprzętu nurkowego, bezpiecznie zanurzać się i wynurzać, zarządzać wypornością i radzić sobie z powszechnymi problemami.

E-Learn przed nurkowaniem

Zniżki dla osób zapisanych na PADI e-Learning.

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Instruktor wprowadzi Cię również w używanie komputerów nurkowych i kompasów.

Wymagania wstępne

Aby zapisać się na kurs, musisz mieć co najmniej 10 lat, umieć pływać co najmniej 200m bez zatrzymywania się i umieć utrzymywać się na wodzie przez 10 minut.

Kontynuuj przygodę...

Teraz jesteś podekscytowanym certyfikowanym nurkiem PADI Junior Open Water Diver, gdzie dalej?

Możesz kontynuować naukę jednym z wielu kursów specjalnościowych PADI. Kurs PADI Fish Identification to świetny sposób na poznanie kolorowych i interesujących stworzeń morskich.

Po ukończeniu 15 lat masz możliwość przejścia na kurs PADI Advanced Open Water Diver.`,
    difficulty: "Początkujący",
    price: 405,
    durationDays: 4,
    seats: 8,
    certification: "PADI",
    instructor: "Instruktor",
    nextStart: "Do ustalenia",
    equipment: "W cenie",
    requirements: "Co najmniej 10 lat, umiejętność pływania 200m, utrzymanie się na wodzie przez 10 minut",
    includes: [
      "Materiały PADI Junior Open Water Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI",
      "Sprzęt nurkowy",
      "Sesje treningowe w wodach zamkniętych",
      "4 nurkowania treningowe na otwartym akwenie",
      "Transfer z i do hotelu do mariny",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby"
    ],
    excludes: [],
    image: courseImage("course-jowd"),
  }
];

const coursesRU: CourseTranslation[] = [
  {
    id: "course-bubblemaker",
    title: "PADI Bubblemaker",
    shortDescription: "Почувствуйте дайвинг под непосредственным наблюдением профессионала PADI. Сделайте первые вдохи под водой на глубине менее 2 метров. Для детей от 8 лет.",
    longDescription: `ОБЗОР КУРСА

Ваш ребёнок когда-нибудь мечтал найти Немо или плавать в аквариуме? Теперь вы можете осуществить их мечты. Опыт PADI Bubblemaker — это лёгкое и весёлое введение в захватывающий подводный мир.

Они научатся новым навыкам, а программа PADI Bubblemaker позволит им почувствовать полную невесомость в окружении сотен ярких рыб. Они могут даже заметить черепаху или проплывающего дельфина.

Чему вы научитесь

PADI Bubblemaker проходит на одном из наших местных мелководных дайв-сайтов или в бассейне. Максимальная глубина — 6 метров.

Сессия начнётся с информативной беседы о безопасности дайвинга и о том, каково это — дышать под водой в первый раз. Ваш инструктор PADI научит вас основам дайвинга простыми шагами.

Наша команда профессионалов PADI поможет вашему ребёнку надеть снаряжение и приспособиться к захватывающему ощущению дыхания под водой. Инструктор также покажет, как справляться с мелкими проблемами, такими как очистка маски или продувка ушей.

Снаряжение

Всё необходимое снаряжение предоставляется. Вы будете использовать базовое снаряжение, включая маску, трубку, ласты, гидрокостюм, компенсатор плавучести (BCD), регулятор и манометры. Достаточно полотенца и купальника.

Продолжайте приключение…

После первого урока дайвинга вы на пути к сертификации. По достижении 10 лет вы можете участвовать в программе PADI Discover Scuba Diving или начать курс PADI Junior Open Water Diver.`,
    difficulty: "Начинающий",
    price: 130,
    durationDays: 1,
    seats: 10,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Включено",
    requirements: "Возраст 8 лет",
    includes: [
      "Трансфер из отеля и обратно при необходимости.",
      "Обед на дайв-боте.",
      "Горячие и холодные напитки на дайв-боте.",
      "Дайв-гид и инструктор.",
      "Дайв-снаряжение.",
      "2 погружения (бассейн или мелководье). Каждое около 30 минут."
    ],
    excludes: [],
    image: courseImage("course-bubblemaker"),
  },
  {
    id: "course-owd",
    title: "Курс PADI Open Water Diver",
    shortDescription: "Курс PADI Open Water Diver — самый популярный дайв-курс в мире, познакомивший миллионы людей с приключенческим стилем жизни дайвинга.",
    longDescription: `ОБЗОР КУРСА

О курсе

PADI® Open Water Diver — первый уровень сертификации дайвинга. Высококвалифицированный инструктор PADI научит вас дайвингу в расслабленной, поддерживающей атмосфере.

К концу курса вы получите навыки и знания для дайвинга дома и за рубежом и станете послом подводного мира.

PADI eLearning®

PADI eLearning позволяет легко вписать уроки дайвинга в напряжённый график.

Время на eLearning: 5-10 часов

С инструктором

Практикуйте использование снаряжения в бассейне, пока не почувствуете себя комфортно.

Требования: Умение плавать; медицинская пригодность
Общее время: 4-7 дней
Минимальный возраст: 10 лет
Глубина: ожидайте неглубокие погружения (12м), максимальная глубина 18м`,
    difficulty: "Начинающий",
    price: 405,
    durationDays: 4,
    seats: 8,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Включено",
    requirements: "Минимальный возраст: 10 лет",
    includes: [
      "Инструктор дайвинга PADI",
      "Дайв-снаряжение",
      "Тренировочные сессии в закрытой воде",
      "4 тренировочных погружения в открытой воде",
      "Трансфер из отеля до марины",
      "Логбук",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости",
      "Материалы PADI Open Water Diver",
      "Плата за сертификацию PADI",
      "1 день дайв-компьютер"
    ],
    excludes: [],
    image: courseImage("course-owd"),
  },
  {
    id: "course-aowd",
    title: "Курс PADI Advanced Open Water Diver",
    shortDescription: "Курс PADI Advanced Open Water — естественное продолжение после завершения курса PADI Open Water.",
    longDescription: `ОБЗОР КУРСА

Курс PADI Advanced Open Water — естественное продолжение после PADI Open Water. Курс проходит два дня и развивает навыки, полученные на курсе Open Water.

После завершения курса вы станете квалифицированным дайвером PADI Advanced Open Water. Это означает, что вы можете безопасно нырять по всему миру до 30 метров.

Чему вы научитесь

Сертификация требует 5 приключенческих погружений. 2 обязательных: PADI Deep Adventure Dive и PADI Under Water Navigation Adventure Dive.

Остальные 3 погружения можно выбрать из:

PADI Enriched Air Adventure Dive
PADI Wreck Diver Adventure Dive
PADI Peak Performance Buoyancy Adventure Dive
PADI Underwater Photographer Adventure Dive
PADI Search and Recovery Adventure Dive
PADI Underwater Naturalist Adventure Dive
PADI Diver Propulsion Vehicle Adventure Dive
PADI Boat Diver Adventure Dive
PADI Drift Diver Adventure Dive
PADI Fish Identification Adventure Dive
PADI Multi-level and Computer Adventure Dive

E-Learn перед погружением

Курс имеет модули электронного обучения. Скидки для зарегистрированных на PADI e-Learning.

Продолжайте приключение…

После курса рекомендуем ознакомиться со специальными курсами PADI. Вы также можете рассмотреть курс PADI Rescue Diver!`,
    difficulty: "Средний",
    price: 360,
    durationDays: 3,
    seats: 6,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Включено",
    requirements: "Для записи на курс вам должно быть не менее 12 лет и иметь сертификат PADI Open Water Diver/Junior Open Water Diver. Дети 12-15 лет получат сертификат PADI Junior Advanced Open Water Diver.",
    includes: [
      "Материалы PADI Advanced Open Water Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI",
      "Дайв-снаряжение",
      "5 тренировочных погружений в открытой воде",
      "Трансфер из отеля до марины",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости",
      "Дайв-компьютер для глубокого погружения"
    ],
    excludes: [
      "Физическая карта от PADI"
    ],
    image: courseImage("course-aowd"),
  },
  {
    id: "course-efr",
    title: "Курс Emergency First Response (EFR)",
    shortDescription: "Первая помощь и СЛР — важные навыки для всех, кто занимается приключенческим спортом. Emergency First Response — аффилированный курс PADI, специализирующийся на обучении жизненно важным навыкам спасения.",
    longDescription: `ОБЗОР КУРСА

Первая помощь и СЛР — важные навыки для всех. Emergency First Response — курс PADI, специализирующийся на обучении навыкам спасения жизни.

Однодневный курс даёт уверенность в реагировании на медицинские ситуации — не только в дайвинге, но и в повседневной жизни.

Курс EFR соответствует требованиям СЛР и первой помощи для курса PADI Rescue Diver.

Чему вы научитесь

Основная помощь (СЛР) — Научит шагам и техникам работы с угрожающими жизни ситуациями.

Вторичная помощь (Первая помощь) — Учит оказывать первую помощь, облегчающую боль и снижающую риск дальнейшего вреда.

Продолжайте приключение...

Если вы проходите EFR, вероятно, вы делаете шаги к PADI Rescue Diver. Это один из самых сложных, но rewarding курсов.`,
    difficulty: "Начинающий",
    price: 170,
    durationDays: 1,
    seats: 12,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Не включено",
    requirements: "Нет",
    includes: [
      "Материалы курса Emergency First Response",
      "Инструктор дайвинга PADI",
      "Сертификация EFR",
      "Трансфер из отеля до марины если на лодке",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке"
    ],
    excludes: [],
    image: courseImage("course-efr"),
  },
  {
    id: "course-rescue",
    title: "Курс PADI Rescue Diver",
    shortDescription: "Превратите тему предотвращения аварий в удовольствие! Программа PADI Rescue Diver делает именно это, вводя новые темы и расширяя существующие навыки.",
    longDescription: `ОБЗОР КУРСА

Превратите тему предотвращения аварий в удовольствие! Результат — дайвер с знаниями и уверенностью, чтобы помочь другим в беде.

Курс PADI Rescue Diver помогает стать увереннее в воде и лучшим напарником. Вы научитесь замечать потенциальные проблемы и быстро справляться с ними.

Чему вы научитесь

Курс готовит к дайв-чрезвычайным ситуациям, малым и большим, с использованием различных техник.

Темы:

Планирование погружения и аварийные процедуры
Техники поиска и восстановления
Распознавание и управление стрессом
Управление чрезвычайными ситуациями
Спасение паникующих дайверов
Спасение дайверов без реакции
Emergency First Response и Первая Помощь

Снаряжение

Всё необходимое снаряжение предоставляется. Инструктор обеспечит компьютер и компас.

Требования

Минимум 12 лет, сертификат PADI Advanced Open Water Diver. Дети 12-15 лет получат PADI Junior Rescue Diver.

Нужна сертификация первой помощи, включая СЛР, за последние два года.

Продолжайте приключение…

После курса вы почти на вершине рекреационного дайвинга. С 5 специальностями PADI и 50 logged погружениями вы можете стать PADI Master Scuba Diver.`,
    difficulty: "Продвинутый",
    price: 350,
    durationDays: 3,
    seats: 6,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Включено",
    requirements: "Сертификат PADI Advanced Open Water Diver, сертификат EFR за последние 2 года, минимум 12 лет",
    includes: [
      "Материалы курса PADI Rescue Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI",
      "Дайв-снаряжение",
      "Трансфер из отеля до марины",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости"
    ],
    excludes: [
      "Курс EFR",
      "Курс PADI Emergency Oxygen Provider",
      "Дайв-компьютер"
    ],
    image: courseImage("course-rescue"),
  },
  {
    id: "course-divemaster",
    title: "Курс PADI Divemaster",
    shortDescription: "Любите дайвинг? Представляете себя в этом профессионально? Пройдите курс PADI Divemaster и сделайте то, что любите, своей карьерой.",
    longDescription: `ОБЗОР КУРСА

Любите дайвинг? Пройдите курс PADI Divemaster и сделайте это своей карьерой. Дайверы уважают PADI Divemaster, потому что они лидеры, которые наставляют и мотивируют.

Курс PADI Divemaster — ваш первый уровень профессионального обучения. Работая с инструктором, вы отточите навыки дайвинга и спасения.

Чему вы научитесь

Темы и практические занятия:

Роль и характеристики PADI Divemaster
Надзор за дайв-активностями
Безопасность дайверов и управление рисками
Бизнес дайвинга и ваша карьера
Осознание дайв-окружения
Настройка и управление погружением
Картирование дайв-сайта
Проведение дайв-брифингов
Проведение Search & Recovery и Deep Dive

Что вы можете преподавать

После сертификации PADI Divemaster вы сможете:

Надзирать за тренировочными и не тренировочными активностями
Помогать инструктору PADI
Проводить курс PADI Skin Diver
Проводить PADI Discover Local Diving
Проводить PADI Scuba Review
Вести PADI Scuba Divers на гайд-погружениях

Снаряжение

Вам понадобится базовое снаряжение, включая компьютер, нож и сигнальные устройства.

Также нужно:

СЛР и Первая Помощь за последние 24 месяца.
Медицинская справка за последние 12 месяцев.
Минимум 40 logged погружений для начала и 60 для сертификации.`,
    difficulty: "Профессиональный",
    price: 950,
    durationDays: 15,
    seats: 4,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Не включено",
    requirements: "Для записи на курс вам должно быть не менее 18 лет и иметь сертификат PADI Rescue Diver.",
    includes: [
      "Инструктор дайвинга PADI",
      "Трансфер из отеля до марины",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости"
    ],
    excludes: [
      "Материалы курса PADI Divemaster",
      "Плата за сертификацию PADI"
    ],
    image: courseImage("course-divemaster"),
  },
  {
    id: "course-reactivate",
    title: "Программа освежения PADI ReActivate",
    shortDescription: "ReActivate — это увлекательный, эффективный способ освежить знания и навыки дайвинга. Быстро пройдите знакомые темы, углубитесь в забытые.",
    longDescription: `ОБЗОР КУРСА

Прошло много времени с последнего погружения и вы хотите пройти короткую программу освежения?

Возможно с Master Diving. Вы можете начать e-learning из дома, чтобы освежить теорию.

На месте вы обсудите и реализуете погружение с инструктором. Настроено точно под ваши пожелания.

После курса вы можете продолжить дайвинг как обычно.`,
    difficulty: "Начинающий",
    price: 110,
    durationDays: 1,
    seats: 12,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Не включено",
    requirements: "Дайв-сертификат",
    includes: [
      "e-learning, сертификат PADI e-card",
      "1 погружение с инструктором"
    ],
    excludes: [
      "Снаряжение"
    ],
    image: courseImage("course-reactivate"),
  },
  {
    id: "course-junior",
    title: "Junior Scuba Diver",
    shortDescription: "Курс (Junior) Scuba Diver — весёлый, быстрый и лёгкий способ получить первый сертификат.",
    longDescription: `ОБЗОР КУРСА

Курс (Junior) Scuba Diver — промежуточный шаг к сертификату Open Water Diver. Это часть курса Open Water Diver: первые 3 модуля теории, 2 сессии в закрытой воде и 2 погружения в открытой воде.

Сначала инструктор научит вас основам дайвинга на теоретических уроках.

В бассейне или на мелководье вы выполните сессии в закрытой воде, где будете практиковать навыки для эффективного и безопасного дайвинга.

Контроль плавучести, всплытие и погружение, дыхание под водой, техники напарника, предотвращение проблем — всё это часть курса.

Во время 2 погружений в открытой воде вы примените навыки, изученные в бассейне. Вы откроете прекрасный подводный мир Красного моря.

Сертификат (Junior) Scuba Diver позволяет нырять под наблюдением профессионала до глубины 12 метров.

Место курса: Центр дайвинга.

Расписание:

день в классе (теория) и погружения в закрытой воде.
 день на лодке для 2 погружений в открытой воде.`,
    difficulty: "Начинающий",
    price: 305,
    durationDays: 2,
    seats: 8,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Включено",
    requirements: "Для записи на курс (Junior) Scuba Diver вам должно быть не менее 10 лет, иметь навыки плавания и быть в хорошем состоянии здоровья.",
    includes: [
      "Трансфер из отеля и обратно.",
      "Инструктор.",
      "Дайв-снаряжение.",
      "Баллоны и грузы.",
      "Учебные материалы."
    ],
    excludes: [
      "Личные расходы."
    ],
    image: courseImage("course-junior"),
  },
  {
    id: "course-jowd",
    title: "Курс PADI Junior Open Water Diver",
    shortDescription: "Курс PADI Junior Open Water Diver идеально подходит для детей 10-14 лет, которые жаждут знаний и приключений. Тысячи детей по всему миру сертифицированы через PADI и наслаждаются исследованием подводного мира.",
    longDescription: `ОБЗОР КУРСА

Курс PADI Junior Open Water Diver идеально подходит для детей 10-14 лет. Тысячи детей сертифицированы через PADI и наслаждаются исследованием подводного мира.

Сертификат PADI Junior Open Water recognised в большем количестве стран и гарантирует, что молодые дайверы имеют знания и навыки для безопасного погружения до 18 метров.

Чему вы научитесь

Курс состоит из трёх фаз:

Развитие знаний — понимание основ дайвинга через e-learning.
Погружения в закрытой воде — базовые навыки дайвинга
Погружения в открытой воде — обзор навыков и исследование подводного мира.

E-Learn перед погружением

Скидки для зарегистрированных на PADI e-Learning.

Снаряжение

Всё снаряжение предоставляется. Инструктор познакомит с дайв-компьютерами и компасами.

Требования

Минимум 10 лет, умение плавать 200м, удержание на воде 10 минут.

Продолжайте приключение...

Теперь вы сертифицированный PADI Junior Open Water Diver!

Вы можете продолжить обучение курсами специальностей PADI. Курс PADI Fish Identification — отличный способ узнать морских обитателей.

По достижении 15 лет вы можете перейти на курс PADI Advanced Open Water Diver.`,
    difficulty: "Начинающий",
    price: 405,
    durationDays: 4,
    seats: 8,
    certification: "PADI",
    instructor: "Инструктор",
    nextStart: "Уточняется",
    equipment: "Включено",
    requirements: "Минимум 10 лет, умение плавать 200м, удержание на воде 10 минут",
    includes: [
      "Материалы PADI Junior Open Water Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI",
      "Дайв-снаряжение",
      "Тренировочные сессии в закрытой воде",
      "4 тренировочных погружения в открытой воде",
      "Трансфер из отеля до марины",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости"
    ],
    excludes: [],
    image: courseImage("course-jowd"),
  }
];

const specialtiesEN: SpecialtyTranslation[] = [
  {
    id: "spec-deep",
    title: "PADI Deep Diver Specialty",
    shortDescription: "Do you want to explore a little deeper? Have you wondered what those same dive sites look like from a deeper perspective?",
    longDescription: `COURSE OVERVIEW

Do you want to explore a little deeper? Have you wondered what those same dive sites look like from a deeper perspective? Do you want to get more from your dive holidays and explore some of those deeper wrecks? Whatever it is, if you want to scuba dive with confidence at depths down to 40 metres/130 feet, you should consider the PADI Deep Diver Specialty course.

What you'll learn

Deep diving has more risk factors, so your training starts by reviewing the reasons for deep diving and how important it is to know your personal limits. During the course you'll explore ways to manage hazards, planning and managing air consumption and understanding reduced no-decompression limits.

With your PADI instructor you will cover;

Techniques for diving in the deeper range of 18-40 metres/ 60-130 feet.
Specialised deep diving equipment considerations.
Deep dive planning, buddy contact procedures and buoyancy control.
Additional hazards and considerations for deep diving and planning including increased risk of narcosis, managing your air supply, and shorter no decompression limits.
Emergency decompression procedures.
Experience in planning, organising, and making at least four deep dives under the supervision of your PADI Instructor.

The Scuba Gear You Will Use

All the equipment you will need is provided for the PADI Deep Diver Specialty. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. Your PADI instructor will also provide you with a dive computer which is necessary for the course.

Continue The Adventure...

Planning & executing a deep dive is awesome enough but why not take advantage of your extended depth limits during the PADI Wreck Diver specialty.`,
    difficulty: "Advanced",
    price: 260,
    durationDays: 2,
    certification: "PADI",
    equipment: "Not included",
    requirements: "If you've earned the PADI Adventure Diver rating or higher, and you're at least 15 years old, you can enrol in the PADI Deep Diver course.",
    includes: [
      "PADI Deep Diver course materials",
      "PADI certification fee",
      "PADI Dive Instructor",
      "Dive equipment",
      "4 training dives",
      "Transfer from and to your hotel to the marina for the dives",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable"
    ],
    excludes: [],
    image: specialtyImage("spec-deep"),
  },
  {
    id: "spec-night",
    title: "PADI Night Diver Specialty",
    shortDescription: "Ever been on a dive during the day and watched the marine life while wondering \"what happens to you at night?\" Dive sites takes on a new personality at night as many underwater creatures are active at night.",
    longDescription: `COURSE OVERVIEW

Ever been on a dive during the day and watched the marine life while wondering "what happens to you at night?" Dive sites takes on a new personality at night as many underwater creatures and plant life are active at night.

The PADI Night Diver Specialty offers a unique opportunity to witness marine life's nocturnal behaviour under the moonlight and learn a whole new way of communicating with light!

What you'll learn

You'll perform three training dives during the PADI Night Diver Specialty. You will focus on what's visible in your light's beam, controlling your buoyancy with less visual references and close buddy contact.

· Planning, organization, procedures, techniques, problems & hazards of night diving
· Proper procedures for buoyancy control, navigation and communication
· Use of dive lights and buddy-system techniques
· Disorientation and emergency procedures
· Orientation to nocturnal aquatic life

The Scuba Gear You Will Use

All the equipment you will need is provided for the PADI Night Diver Specialty. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. Your PADI instructor will also share with you a dive torch and compass.

Continue The Adventure...

Now you have seen marine life at night, you might want to capture the moment! The PADI Underwater Photographer Specialty will teach you about light sources and the best angles to shoot from.`,
    difficulty: "Intermediate",
    price: 290,
    durationDays: 1,
    certification: "PADI",
    equipment: "Not included",
    requirements: "You must be a PADI Open Water Diver or PADI Junior Open Water Diver and be at least 12 years old to participate in the PADI Night Diver Specialty.",
    includes: [
      "PADI Night Diver course materials",
      "PADI certification fee",
      "PADI Dive Instructor",
      "Dive equipment",
      "3 training dives",
      "Marine Park fees where applicable"
    ],
    excludes: [],
    image: specialtyImage("spec-night"),
  },
  {
    id: "spec-nitrox",
    title: "PADI Enriched Air Diver (Nitrox) Specialty",
    shortDescription: "Chances are you have heard divers or your PADI Instructor talk about Nitrox. But what is it exactly and why might you want to take the PADI Enriched Air (Nitrox) specialty course?",
    longDescription: `COURSE OVERVIEW

Nitrox is when they change the regular tank of air you breath when diving and add in more oxygen to it. When you are diving with Nitrox, you are breathing enriched air (with extra Oxygen in it).

Why would you need to dive with Nitrox? Diving with enriched air nitrox lets you safely extend your no stop time beyond the no decompression limits for air.

What you'll learn

The PADI Enriched Air Diver Specialty course does not required in-water training. The course has two sections, theory and a practical session which will be held in our classroom or while our on the boat during a daily dive day.

You will learn everything you need to know to take advantage of higher oxygen content including;

Techniques for getting more dive time by using enriched air nitrox
Enriched air scuba diving equipment considerations
Enriched air considerations, including managing oxygen exposure, how to tell what's in your scuba tank
Practice analysing oxygen content in your scuba tank
How to set and use your dive computer when diving with Nitrox

Continue The Adventure...

Underwater photographers often dive with enriched air to maximise the number of pictures they capture. Now that you are nitrox certified why not harness this skill to improve your photography skills by undertaking the PADI Digital Underwater Photographer specialty.`,
    difficulty: "Beginner",
    price: 240,
    durationDays: 1,
    certification: "PADI",
    equipment: "Not included",
    requirements: "To participate in the PADI Enriched Air Diver Specialty Course you must be at least 12 years old and hold a PADI Open (Junior) Water Diver certification.",
    includes: [
      "PADI Enriched Air Diver course materials",
      "PADI certification fee",
      "PADI Dive Instructor"
    ],
    excludes: [
      "As this is a 'dry' course dives with or without Nitrox are not included",
      "Nitrox tanks"
    ],
    image: specialtyImage("spec-nitrox"),
  },
  {
    id: "spec-sidemount",
    title: "PADI Sidemount Diver Specialty",
    shortDescription: "You'll have most likely learned to dive in the normal fashion with a single tank on your back. But having scuba tanks on your back isn't a requirement for exploring the underwater world.",
    longDescription: `COURSE OVERVIEW

You'll have most likely learned to dive in the normal fashion with a single tank on your back. But having scuba tanks on your back isn't a requirement for exploring the underwater world. The PADI Sidemount Diver Specialty will teach you the fundamentals of diving with one, two or more scuba tanks mounted down your side instead of on your back.

People often ask, why dive sidemount? Those that have experienced this style of diving list the benefits as:

An alternate and often easier way to streamline in the water. You will feel free and less restricted.
Increased air supply without overloading your body with cumbersome and heavy dive equipment.
Enables easier equipment transportation, more relaxed entries and exits as well as reducing strain on the body.
Increases safety with a redundant air source and allows incredibly easy access to your air supply.

What you'll learn

The PADI Sidemount Diver Specialty teaches you about the many benefits of diving with a sidemount configuration.

During one confined water and three open water scuba dives you'll learn how to:

Properly assemble and configure sidemount scuba diving equipment.
Trim your weight system and sidemount gear so you're perfectly balanced in the water.
Manage air by switching second stages as planned, if wearing two cylinders.
Understand the planning considerations and safety concerns for sidemount diving
Respond correctly to potential problems when sidemount diving.

The Scuba Gear You Will Use

All the equipment you will need is provided for the PADI Sidemount Diver Specialty. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. Your PADI instructor will provide the necessary sidemout configuration for the tanks.

Continue The Adventure...

Sidemount and drift diving are perfect partners. Now that you have earned your PADI Sidemount Diver certification why not continue your learning journey with the PADI Drift Diver Specialty.`,
    difficulty: "Advanced",
    price: 350,
    durationDays: 2,
    certification: "PADI",
    equipment: "Included",
    requirements: "You must be a PADI Open Water Diver or PADI Junior Open Water Diver and be at least 15 years old to participate in the PADI Sidemount Diver Specialty.",
    includes: [
      "PADI Sidemount Diver course materials",
      "PADI certification fee",
      "PADI Dive Instructor",
      "Dive equipment",
      "4 training dives",
      "Transfer from and to your hotel to the marina for the dives",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable"
    ],
    excludes: [],
    image: specialtyImage("spec-sidemount"),
  },
  {
    id: "spec-wreck",
    title: "PADI Wreck Diver Specialty",
    shortDescription: "Whether sunk on purpose as an artificial reef or the result of a disaster, wrecks open intriguing windows to the past. Most divers find wrecked ships fascinating and enjoy unlocking the mysteries they have to offer.",
    longDescription: `COURSE OVERVIEW

Whether sunk on purpose as an artificial reef or the result of a disaster, wrecks open intriguing windows to the past. Most divers find wrecked ships and vessel's fascinating and enjoy unlocking the mysteries they have to offer. They are also usually teeming with aquatic life so are perfect dive sites for the keen underwater naturalists or photographers.

What you'll learn

The PADI Wreck diving specialty introduces the fundamentals of limited wreck penetration with line laying techniques. Navigating around and inside wrecks is particularly important as low visibility, silt and poor light penetration mean buoyancy, trim and finning techniques are incredibly important.

With the emphasis on safety, with your PADI Instructor you'll cover;

Techniques for diving exploring and navigating shipwrecks
How to avoid common hazards and deal with challenging situations.
How to research and learn the background of your favourite wrecks.
Mapping and measuring wrecks.
Wreck diving equipment considerations.
Considerations and techniques for entering/penetrating intact wrecks.
Experience in planning, organising and making at least four wreck dives under the supervision of your PADI Instructor.

The Scuba Gear You Will Use

All the equipment you will need is provided for the PADI Wreck Diver Specialty. You'll use all the basic scuba gear including a mask and snorkel, fins, a wetsuit, a buoyancy compensating jacket (BCD) that carries the scuba tank, a scuba regulator to breathe from and gauges to monitor depth and air supply. Your PADI instructor will also provide you with a dive computer and navigation lines/measures which are necessary for the course.

Continue The Adventure...

Many shipwrecks are often found in deeper water. That's why the PADI Wreck Diver course is a natural companion to the PADI Deep Diver course.`,
    difficulty: "Advanced",
    price: 240,
    durationDays: 1,
    certification: "PADI",
    equipment: "Not included",
    requirements: "If you've earned the PADI Adventure Diver rating or higher, and you're at least 15 years old, you can enrol in the PADI Wreck Diver course.",
    includes: [
      "PADI Wreck Diver course materials",
      "PADI certification fee",
      "PADI Dive Instructor",
      "2 training dives",
      "Transfer from and to your hotel to the marina for the dives",
      "Lunch when on the boat",
      "Hot and cold beverages when on the boat",
      "Marine Park fees where applicable"
    ],
    excludes: [
      "Dive equipment"
    ],
    image: specialtyImage("spec-wreck"),
  }
];

const specialtiesPL: SpecialtyTranslation[] = [
  {
    id: "spec-deep",
    title: "Specjalność PADI Deep Diver",
    shortDescription: "Chcesz eksplorować trochę głębiej? Zastanawiałeś się, jak wyglądają te same miejsca nurkowe z głębszej perspektywy?",
    longDescription: `PRZEGLĄD KURSU

Chcesz eksplorować głębiej? Jeśli chcesz nurkować z pewnością na głębokościach do 40 metrów, powinieneś rozważyć kurs PADI Deep Diver.

Czego się nauczysz

Nurkowanie głębokie ma więcej czynników ryzyka, więc szkolenie zaczyna się od przeglądu przyczyn nurkowania głębokiego i znajomości swoich limitów.

Z instruktorem PADI omówisz:

Techniki nurkowania w zakresie 18-40 metrów.
Rozważania dotyczące sprzętu do nurkowania głębokiego.
Planowanie nurkowania, procedury kontaktu z partnerem i kontrola wyporności.
Dodatkowe zagrożenia i rozważania, w tym zwiększone ryzyko narkozy, zarządzanie powietrzem i krótsze limity bezdekompresyjne.
Procedury awaryjnej dekompresji.
Doświadczenie w planowaniu i wykonaniu co najmniej czterech głębokich nurkowań.

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Instruktor zapewni komputer nurkowy niezbędny do kursu.

Kontynuuj przygodę...

Planowanie i wykonanie głębokiego nurkowania jest niesamowite, ale dlaczego nie wykorzystać swoich wydłużonych limitów głębokości podczas specjalności PADI Wreck Diver.`,
    difficulty: "Zaawansowany",
    price: 260,
    durationDays: 2,
    certification: "PADI",
    equipment: "Nie w cenie",
    requirements: "Jeśli masz rating PADI Adventure Diver lub wyższy i masz co najmniej 15 lat, możesz zapisać się na kurs PADI Deep Diver.",
    includes: [
      "Materiały kursu PADI Deep Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI",
      "Sprzęt nurkowy",
      "4 nurkowania treningowe",
      "Transfer z i do hotelu do mariny",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby"
    ],
    excludes: [],
    image: specialtyImage("spec-deep"),
  },
  {
    id: "spec-night",
    title: "Specjalność PADI Night Diver",
    shortDescription: "Byles kiedys na nurkowaniu w ciagu dnia i zastanawiales sie co dzieje sie w nocy? Miejsca nurkowe zyskuja nowa osobowosc noca, gdy wiele podwodnych stworzen jest aktywnych.",
    longDescription: `PRZEGLĄD KURSU

Byłeś kiedyś na nurkowaniu w ciągu dnia i zastanawiałeś się „co dzieje się w nocy?" Miejsca nurkowe zyskują nową osobowość nocą, gdy wiele podwodnych stworzeń jest aktywnych.

Specjalność PADI Night Diver oferuje unikalną okazję do obserwacji nocnego zachowania życia morskiego przy świetle księżyca i nauki zupełnie nowego sposobu komunikacji światłem!

Czego się nauczysz

Wykonasz trzy nurkowania treningowe. Skupisz się na tym, co widoczne w wiązce światła, kontroli wyporności przy mniejszej liczbie odniesień wizualnych i bliskim kontakcie z partnerem.

· Planowanie, organizacja, procedury, techniki, problemy i zagrożenia nurkowania nocnego
· Właściwe procedury kontroli wyporności, nawigacji i komunikacji
· Używanie latarek nurkowych i techniki systemu partnerskiego
· Dezorientacja i procedury awaryjne
· Orientacja w nocnym życiu wodnym

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Instruktor udostępni latarkę nurkową i kompas.

Kontynuuj przygodę...

Teraz widziałeś życie morskie nocą, możesz chcieć uchwycić moment! Specjalność PADI Underwater Photographer nauczy Cię o źródłach światła i najlepszych kątach do fotografowania.`,
    difficulty: "Średniozaawansowany",
    price: 290,
    durationDays: 1,
    certification: "PADI",
    equipment: "Nie w cenie",
    requirements: "Musisz być PADI Open Water Diver lub PADI Junior Open Water Diver i mieć co najmniej 12 lat, aby uczestniczyć w specjalności PADI Night Diver.",
    includes: [
      "Materiały kursu PADI Night Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI",
      "Sprzęt nurkowy",
      "3 nurkowania treningowe",
      "Opłaty za park morski w razie potrzeby"
    ],
    excludes: [],
    image: specialtyImage("spec-night"),
  },
  {
    id: "spec-nitrox",
    title: "Specjalność PADI Enriched Air Diver (Nitrox)",
    shortDescription: "Prawdopodobnie słyszałeś nurków lub instruktora mówiących o Nitrox. Ale czym dokładnie jest i dlaczego warto wziąć kurs PADI Enriched Air (Nitrox)?",
    longDescription: `PRZEGLĄD KURSU

Nitrox to zmiana regularnej butli z powietrzem, którą oddychasz podczas nurkowania, i dodanie więcej tlenu. Nurkując z Nitrox, oddychasz wzbogaconym powietrzem (z dodatkowym tlenem).

Dlaczego warto nurkować z Nitrox? Nurkowanie z wzbogaconym powietrzem pozwala bezpiecznie wydłużyć czas nurkowania bez dekompresji.

Czego się nauczysz

Kurs PADI Enriched Air Diver nie wymaga treningu w wodzie. Kurs ma dwie sekcje: teorię i sesję praktyczną.

Nauczysz się wszystkiego, co potrzebne, aby skorzystać z wyższej zawartości tlenu:

Techniki uzyskiwania więcej czasu nurkowania przez użycie wzbogaconego powietrza
Rozważania dotyczące sprzętu do nurkowania z wzbogaconym powietrzem
Zarządzanie ekspozycją na tlen, jak sprawdzić co jest w butli
Praktyka analizowania zawartości tlenu w butli
Jak ustawić i używać komputera nurkowego przy nurkowaniu z Nitrox

Kontynuuj przygodę...

Fotografowie podwodni często nurkują z wzbogaconym powietrzem, aby zmaksymalizować liczbę zdjęć. Teraz, gdy jesteś certyfikowany nitrox, dlaczego nie poprawić swoich umiejętności fotograficznych?`,
    difficulty: "Początkujący",
    price: 240,
    durationDays: 1,
    certification: "PADI",
    equipment: "Nie w cenie",
    requirements: "Aby uczestniczyć w kursie PADI Enriched Air Diver musisz mieć co najmniej 12 lat i posiadać certyfikat PADI Open (Junior) Water Diver.",
    includes: [
      "Materiały kursu PADI Enriched Air Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI"
    ],
    excludes: [
      "Poniewaz jest to kurs suchy, nurkowania z lub bez Nitrox nie sa wliczone",
      "Butle Nitrox"
    ],
    image: specialtyImage("spec-nitrox"),
  },
  {
    id: "spec-sidemount",
    title: "Specjalność PADI Sidemount Diver",
    shortDescription: "Prawdopodobnie nauczyłeś się nurkować w normalny sposób z pojedynczą butlą na plecach. Ale posiadanie butli na plecach nie jest wymaganiem do eksploracji podwodnego świata.",
    longDescription: `PRZEGLĄD KURSU

Prawdopodobnie nauczyłeś się nurkować z pojedynczą butlą na plecach. Ale posiadanie butli na plecach nie jest wymaganiem. Specjalność PADI Sidemount Diver nauczy Cię podstaw nurkowania z jedną, dwiema lub więcej butlami zamontowanymi z boku.

Dlaczego nurkować sidemount? Korzyści:

Alternatywny i często łatwiejszy sposób opływu w wodzie. Będziesz czuł się swobodniej.
Zwiększona ilość powietrza bez przeciążania ciała nieporęcznym sprzętem.
Łatwiejszy transport sprzętu, bardziej zrelaksowane wejścia i wyjścia oraz zmniejszenie obciążenia ciała.
Zwiększone bezpieczeństwo z redundantnym źródłem powietrza.

Czego się nauczysz

Specjalność PADI Sidemount Diver uczy o wielu korzyściach nurkowania z konfiguracją sidemount.

Podczas jednego nurkowania w wodzie zamkniętej i trzech w otwartej nauczysz się:

Prawidłowo składać i konfigurować sprzęt sidemount.
Wyważyć system obciążeniowy i sprzęt sidemount dla idealnej równowagi.
Zarządzać powietrzem przez przełączanie drugich stopni.
Zrozumieć rozważania planistyczne i kwestie bezpieczeństwa
Reagować prawidłowo na potencjalne problemy

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Instruktor zapewni konfigurację sidemount dla butli.

Kontynuuj przygodę...

Sidemount i drift diving to idealni partnerzy. Teraz, gdy masz certyfikat Sidemount, dlaczego nie kontynuować nauki z PADI Drift Diver?`,
    difficulty: "Zaawansowany",
    price: 350,
    durationDays: 2,
    certification: "PADI",
    equipment: "W cenie",
    requirements: "Musisz być PADI Open Water Diver lub PADI Junior Open Water Diver i mieć co najmniej 15 lat, aby uczestniczyć w specjalności PADI Sidemount Diver.",
    includes: [
      "Materiały kursu PADI Sidemount Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI",
      "Sprzęt nurkowy",
      "4 nurkowania treningowe",
      "Transfer z i do hotelu do mariny",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby"
    ],
    excludes: [],
    image: specialtyImage("spec-sidemount"),
  },
  {
    id: "spec-wreck",
    title: "Specjalność PADI Wreck Diver",
    shortDescription: "Czy zatopione celowo jako sztuczna rafa, czy w wyniku katastrofy, wraki otwierają intrygujące okna na przeszłość. Większość nurków uważa wraki statków za fascynujące.",
    longDescription: `PRZEGLĄD KURSU

Czy zatopione celowo jako sztuczna rafa, czy w wyniku katastrofy, wraki otwierają intrygujące okna na przeszłość. Większość nurków uważa wraki statków za fascynujące i lubi odkrywać tajemnice, które oferują. Zwykle są pełne życia wodnego, więc są idealnymi miejscami dla fotografów podwodnych.

Czego się nauczysz

Specjalność PADI Wreck diving wprowadza podstawy ograniczonej penetracji wraków z technikami układania lin. Nawigacja wokół i wewnątrz wraków jest szczególnie ważna.

Z naciskiem na bezpieczeństwo, z instruktorem PADI omówisz:

Techniki eksploracji i nawigacji wraków statków
Jak unikać powszechnych zagrożeń i radzić sobie z trudnymi sytuacjami.
Jak badać i poznawać historię ulubionych wraków.
Mapowanie i mierzenie wraków.
Rozważania dotyczące sprzętu do nurkowania wrakowego.
Rozważania i techniki wchodzenia/penetracji nienaruszonych wraków.
Doświadczenie w planowaniu i wykonaniu co najmniej czterech nurkowań wrakowych.

Sprzęt nurkowy

Cały potrzebny sprzęt jest zapewniony. Instruktor zapewni komputer nurkowy i linie nawigacyjne/miary niezbędne do kursu.

Kontynuuj przygodę...

Wiele wraków statków często znajduje się w głębszej wodzie. Dlatego kurs PADI Wreck Diver jest naturalnym towarzyszem kursu PADI Deep Diver.`,
    difficulty: "Zaawansowany",
    price: 240,
    durationDays: 1,
    certification: "PADI",
    equipment: "Nie w cenie",
    requirements: "Jeśli masz rating PADI Adventure Diver lub wyższy i masz co najmniej 15 lat, możesz zapisać się na kurs PADI Wreck Diver.",
    includes: [
      "Materiały kursu PADI Wreck Diver",
      "Opłata za certyfikację PADI",
      "Instruktor nurkowania PADI",
      "2 nurkowania treningowe",
      "Transfer z i do hotelu do mariny",
      "Obiad na łodzi",
      "Gorące i zimne napoje na łodzi",
      "Opłaty za park morski w razie potrzeby"
    ],
    excludes: [
      "Sprzęt nurkowy"
    ],
    image: specialtyImage("spec-wreck"),
  }
];

const specialtiesRU: SpecialtyTranslation[] = [
  {
    id: "spec-deep",
    title: "Специальность PADI Deep Diver",
    shortDescription: "Хотите исследовать немного глубже? Задавались вопросом, как выглядят те же дайв-сайты с более глубокой перспективы?",
    longDescription: `ОБЗОР КУРСА

Хотите исследовать глубже? Если хотите нырять с уверенностью на глубинах до 40 метров, вам стоит рассмотреть курс PADI Deep Diver.

Чему вы научитесь

Глубокое погружение имеет больше факторов риска, поэтому обучение начинается с обзора причин глубокого дайвинга и важности знания своих личных лимитов.

С инструктором PADI вы изучите:

Техники дайвинга в диапазоне 18-40 метров.
Рассмотрение специализированного снаряжения для глубокого дайвинга.
Планирование глубокого погружения, процедуры контакта с напарником и контроль плавучести.
Дополнительные опасности и considerations, включая повышенный риск наркоза, управление воздухом и более короткие бездекомпрессионные лимиты.
Процедуры аварийной декомпрессии.
Опыт планирования и выполнения как минимум четырёх глубоких погружений.

Снаряжение

Всё необходимое снаряжение предоставляется. Инструктор обеспечит дайв-компьютер, необходимый для курса.

Продолжайте приключение...

Планирование и выполнение глубокого погружения — это здорово, но почему бы не использовать свои расширенные лимиты глубины во время специальности PADI Wreck Diver.`,
    difficulty: "Продвинутый",
    price: 260,
    durationDays: 2,
    certification: "PADI",
    equipment: "Не включено",
    requirements: "Если у вас рейтинг PADI Adventure Diver или выше и вам не менее 15 лет, вы можете записаться на курс PADI Deep Diver.",
    includes: [
      "Материалы курса PADI Deep Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI",
      "Дайв-снаряжение",
      "4 тренировочных погружения",
      "Трансфер из отеля до марины",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости"
    ],
    excludes: [],
    image: specialtyImage("spec-deep"),
  },
  {
    id: "spec-night",
    title: "Специальность PADI Night Diver",
    shortDescription: "Были когда-нибудь на погружении днём и наблюдали за морской жизнью, задаваясь вопросом «что происходит ночью?» Дайв-сайты обретают новую личность ночью, когда многие подводные существа активны.",
    longDescription: `ОБЗОР КУРСА

Были когда-нибудь на погружении днём и задавались вопросом «что происходит ночью?» Дайв-сайты обретают новую личность ночью.

Специальность PADI Night Diver предлагает уникальную возможность наблюдать за ночным поведением морской жизни при лунном свете и научиться совершенно новому способу общения светом!

Чему вы научитесь

Вы выполните три тренировочных погружения. Сосредоточитесь на том, что видно в луче света, контроле плавучести при меньшем визуальном ориентировании и близком контакте с напарником.

· Планирование, организация, процедуры, техники, проблемы и опасности ночного дайвинга
· Правильные процедуры контроля плавучести, навигации и коммуникации
· Использование дайв-фонарей и техники системы напарников
· Дезориентация и аварийные процедуры
· Ориентация в ночной водной жизни

Снаряжение

Всё необходимое снаряжение предоставляется. Инструктор поделится с вами дайв-фонарём и компасом.

Продолжайте приключение...

Теперь, когда вы видели морскую жизнь ночью, возможно, захотите запечатлеть момент! Специальность PADI Underwater Photographer научит вас об источниках света и лучших углах съёмки.`,
    difficulty: "Средний",
    price: 290,
    durationDays: 1,
    certification: "PADI",
    equipment: "Не включено",
    requirements: "Вы должны быть PADI Open Water Diver или PADI Junior Open Water Diver и иметь не менее 12 лет для участия в специальности PADI Night Diver.",
    includes: [
      "Материалы курса PADI Night Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI",
      "Дайв-снаряжение",
      "3 тренировочных погружения",
      "Сборы морского парка при необходимости"
    ],
    excludes: [],
    image: specialtyImage("spec-night"),
  },
  {
    id: "spec-nitrox",
    title: "Специальность PADI Enriched Air Diver (Nitrox)",
    shortDescription: "Вероятно, вы слышали, как дайверы или инструктор говорят о Nitrox. Но что это такое и зачем вам курс PADI Enriched Air (Nitrox)?",
    longDescription: `ОБЗОР КУРСА

Nitrox — это когда меняют обычный баллон с воздухом, которым вы дышите при дайвинге, и добавляют больше кислорода. Ныряя с Nitrox, вы дышите обогащённым воздухом (с дополнительным кислородом).

Зачем нырять с Nitrox? Дайвинг с обогащённым воздухом позволяет безопасно увеличить время погружения без декомпрессии.

Чему вы научитесь

Курс PADI Enriched Air Diver не требует тренировок в воде. Курс имеет два раздела: теорию и практическую сессию.

Вы узнаете всё, что нужно, чтобы воспользоваться более высоким содержанием кислорода:

Техники получения большего времени дайвинга с обогащённым воздухом
Рассмотрение снаряжения для дайвинга с обогащённым воздухом
Управление кислородной экспозицией, как определить содержимое баллона
Практика анализа содержания кислорода в баллоне
Как настроить и использовать дайв-компьютер при дайвинге с Nitrox

Продолжайте приключение...

Подводные фотографы часто ныряют с обогащённым воздухом, чтобы максимизировать количество снимков. Теперь, когда вы сертифицированы по nitrox, почему бы не улучшить навыки фотографии?`,
    difficulty: "Начинающий",
    price: 240,
    durationDays: 1,
    certification: "PADI",
    equipment: "Не включено",
    requirements: "Для участия в курсе PADI Enriched Air Diver вам должно быть не менее 12 лет и иметь сертификат PADI Open (Junior) Water Diver.",
    includes: [
      "Материалы курса PADI Enriched Air Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI"
    ],
    excludes: [
      "Поскольку это «сухой» курс, погружения с или без Nitrox не включены",
      "Баллоны Nitrox"
    ],
    image: specialtyImage("spec-nitrox"),
  },
  {
    id: "spec-sidemount",
    title: "Специальность PADI Sidemount Diver",
    shortDescription: "Вы скорее всего научились нырять обычным способом с одним баллоном на спине. Но наличие баллонов на спине не является требованием для исследования подводного мира.",
    longDescription: `ОБЗОР КУРСА

Вы скорее всего научились нырять с одним баллоном на спине. Но это не требование. Специальность PADI Sidemount Diver научит вас основам дайвинга с одним, двумя или более баллонами, закреплёнными сбоку.

Почему нырять sidemount? Преимущества:

Альтернативный и часто более простой способ обтекаемости в воде. Вы будете чувствовать себя свободнее.
Увеличенный запас воздуха без перегрузки тела громоздким снаряжением.
Более лёгкая транспортировка снаряжения, более расслабленные входы и выходы, снижение нагрузки на тело.
Повышенная безопасность с резервным источником воздуха.

Чему вы научитесь

Специальность PADI Sidemount Diver учит о многих преимуществах дайвинга с конфигурацией sidemount.

Во время одного погружения в закрытой воде и трёх в открытой вы научитесь:

Правильно собирать и настраивать снаряжение sidemount.
Балансировать систему грузов и снаряжение sidemount для идеального баланса в воде.
Управлять воздухом, переключая вторые ступени.
Понимать considerations планирования и вопросы безопасности
Правильно реагировать на потенциальные проблемы

Снаряжение

Всё необходимое снаряжение предоставляется. Инструктор обеспечит конфигурацию sidemount для баллонов.

Продолжайте приключение...

Sidemount и drift дайвинг — идеальные партнёры. Теперь, когда у вас сертификат Sidemount, почему бы не продолжить обучение с PADI Drift Diver?`,
    difficulty: "Продвинутый",
    price: 350,
    durationDays: 2,
    certification: "PADI",
    equipment: "Включено",
    requirements: "Вы должны быть PADI Open Water Diver или PADI Junior Open Water Diver и иметь не менее 15 лет для участия в специальности PADI Sidemount Diver.",
    includes: [
      "Материалы курса PADI Sidemount Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI",
      "Дайв-снаряжение",
      "4 тренировочных погружения",
      "Трансфер из отеля до марины",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости"
    ],
    excludes: [],
    image: specialtyImage("spec-sidemount"),
  },
  {
    id: "spec-wreck",
    title: "Специальность PADI Wreck Diver",
    shortDescription: "Будь то затопленные намеренно как искусственный риф или в результате катастрофы, рэки открывают интригующие окна в прошлое. Большинство дайверов находят затонувшие корабли fascинирующими.",
    longDescription: `ОБЗОР КУРСА

Будь то затопленные намеренно как искусственный риф или в результате катастрофы, рэки открывают интригующие окна в прошлое. Большинство дайверов находят затонувшие корабли fascинирующими и любят раскрывать их тайны. Обычно они полны водной жизни, поэтому идеальны для подводных фотографов.

Чему вы научитесь

Специальность PADI Wreck diving вводит основы ограниченной пенетрации рэков с техниками прокладки линий. Навигация вокруг и внутри рэков особенно важна.

С акцентом на безопасность, с инструктором PADI вы изучите:

Техники исследования и навигации по корабельным рэкам
Как избегать распространённых опасностей и справляться с трудными ситуациями.
Как исследовать и узнавать историю любимых рэков.
Картирование и измерение рэков.
Рассмотрение снаряжения для рэк-дайвинга.
Рассмотрения и техники входа/пенетрации неповреждённых рэков.
Опыт планирования и выполнения как минимум четырёх рэк-погружений.

Снаряжение

Всё необходимое снаряжение предоставляется. Инструктор обеспечит дайв-компьютер и навигационные линии/меры, необходимые для курса.

Продолжайте приключение...

Многие корабельные рэки часто находятся в более глубокой воде. Поэтому курс PADI Wreck Diver — естественный компаньон курса PADI Deep Diver.`,
    difficulty: "Продвинутый",
    price: 240,
    durationDays: 1,
    certification: "PADI",
    equipment: "Не включено",
    requirements: "Если у вас рейтинг PADI Adventure Diver или выше и вам не менее 15 лет, вы можете записаться на курс PADI Wreck Diver.",
    includes: [
      "Материалы курса PADI Wreck Diver",
      "Плата за сертификацию PADI",
      "Инструктор дайвинга PADI",
      "2 тренировочных погружения",
      "Трансфер из отеля до марины",
      "Обед на лодке",
      "Горячие и холодные напитки на лодке",
      "Сборы морского парка при необходимости"
    ],
    excludes: [
      "Дайв-снаряжение"
    ],
    image: specialtyImage("spec-wreck"),
  }
];

export function getCoursesByLang(lang: string): CourseTranslation[] {
  switch (lang) {
    case 'pl':
      return coursesPL;
    case 'ru':
      return coursesRU;
    default:
      return coursesEN;
  }
}

export function getSpecialtiesByLang(lang: string): SpecialtyTranslation[] {
  switch (lang) {
    case 'pl':
      return specialtiesPL;
    case 'ru':
      return specialtiesRU;
    default:
      return specialtiesEN;
  }
}

export function getCourseById(id: string, lang: string): CourseTranslation | undefined {
  return getCoursesByLang(lang).find(c => c.id === id);
}

export function getSpecialtyById(id: string, lang: string): SpecialtyTranslation | undefined {
  return getSpecialtiesByLang(lang).find(s => s.id === id);
}
