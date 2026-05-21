/** Local scuba & diving photography — no generic beach-only shots */
export const SCUBA_IMAGES = {
	hero: "/images/hero.jpg",
	courses: {
		"course-01": "/images/courses/course-01.jpg",
		"course-02": "/images/courses/course-02.jpg",
		"course-03": "/images/courses/course-03.jpg",
		"course-bubblemaker": "/images/courses/bubblemaker/01.jpg",
		"course-bubblemaker-01": "/images/courses/bubblemaker/01.jpg",
		"course-bubblemaker-02": "/images/courses/bubblemaker/02.jpg",
		"course-bubblemaker-03": "/images/courses/bubblemaker/03.jpg",
		"course-bubblemaker-04": "/images/courses/bubblemaker/04.jpg",
		"course-owd": "/images/courses/owd/01.jpg",
		"course-owd-01": "/images/courses/owd/01.jpg",
		"course-owd-02": "/images/courses/owd/02.jpg",
		"course-owd-03": "/images/courses/owd/03.jpg",
		"course-owd-04": "/images/courses/owd/04.jpg",
		"course-aowd": "/images/courses/aowd/01.jpg",
		"course-aowd-01": "/images/courses/aowd/01.jpg",
		"course-aowd-02": "/images/courses/aowd/02.jpg",
		"course-aowd-03": "/images/courses/aowd/03.jpg",
		"course-aowd-04": "/images/courses/aowd/04.jpg",
		"course-efr": "/images/courses/efr/01.jpg",
		"course-efr-01": "/images/courses/efr/01.jpg",
		"course-efr-02": "/images/courses/efr/02.jpg",
		"course-efr-03": "/images/courses/efr/03.jpg",
		"course-rescue": "/images/courses/rescue/01.jpg",
		"course-rescue-01": "/images/courses/rescue/01.jpg",
		"course-rescue-02": "/images/courses/rescue/02.jpg",
		"course-rescue-03": "/images/courses/rescue/03.jpg",
		"course-divemaster": "/images/courses/divemaster/01.jpg",
		"course-divemaster-01": "/images/courses/divemaster/01.jpg",
		"course-divemaster-02": "/images/courses/divemaster/02.jpg",
		"course-divemaster-03": "/images/courses/divemaster/03.jpg",
		"course-reactivate": "/images/courses/reactivate/01.jpg",
		"course-reactivate-01": "/images/courses/reactivate/01.jpg",
		"course-reactivate-02": "/images/courses/reactivate/02.jpg",
		"course-junior": "/images/courses/junior/01.jpg",
		"course-junior-01": "/images/courses/junior/01.jpg",
		"course-junior-02": "/images/courses/junior/02.jpg",
		"course-jowd": "/images/courses/jowd/01.jpg",
		"course-jowd-01": "/images/courses/jowd/01.jpg",
		"course-jowd-02": "/images/courses/jowd/02.jpg",
		default: "/images/courses/bubblemaker/01.jpg"
	},
	specialties: {
		"spec-deep": "/images/specialties/deep/01.jpg",
		"spec-deep-01": "/images/specialties/deep/01.jpg",
		"spec-deep-02": "/images/specialties/deep/02.jpg",
		"spec-night": "/images/specialties/night/01.jpg",
		"spec-night-01": "/images/specialties/night/01.jpg",
		"spec-night-02": "/images/specialties/night/02.jpg",
		"spec-nitrox": "/images/specialties/nitrox/01.jpg",
		"spec-nitrox-01": "/images/specialties/nitrox/01.jpg",
		"spec-nitrox-02": "/images/specialties/nitrox/02.jpg",
		"spec-sidemount": "/images/specialties/sidemount/01.jpg",
		"spec-sidemount-01": "/images/specialties/sidemount/01.jpg",
		"spec-sidemount-02": "/images/specialties/sidemount/02.jpg",
		"spec-wreck": "/images/specialties/wreck/01.jpg",
		"spec-wreck-01": "/images/specialties/wreck/01.jpg",
		"spec-wreck-02": "/images/specialties/wreck/02.jpg",
		default: "/images/specialties/deep/01.jpg"
	},
	trips: {
		"trip-01": "/images/trips/trip-01.jpg",
		"trip-02": "/images/trips/trip-02.jpg",
		default: "/images/trips/trip-01.jpg"
	},
	gallery: [
		"/images/gallery/01.jpg",
		"/images/gallery/02.jpg",
		"/images/gallery/03.jpg",
		"/images/gallery/04.jpg",
		"/images/gallery/05.jpg",
		"/images/gallery/06.jpg"
	],
	og: "/images/gallery/01.jpg"
} as const;

export const courseImage = (id: string) =>
	SCUBA_IMAGES.courses[id as keyof typeof SCUBA_IMAGES.courses] ?? SCUBA_IMAGES.courses.default;

export const tripImage = (id: string) =>
	SCUBA_IMAGES.trips[id as keyof typeof SCUBA_IMAGES.trips] ?? SCUBA_IMAGES.trips.default;

export const specialtyImage = (id: string) =>
	SCUBA_IMAGES.specialties[id as keyof typeof SCUBA_IMAGES.specialties] ?? SCUBA_IMAGES.specialties.default;
