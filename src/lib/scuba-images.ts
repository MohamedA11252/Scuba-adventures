/** PADI official course & specialty images */
export const SCUBA_IMAGES = {
	hero: "/images/courses/owd.webp",
	courses: {
		"course-01": "/images/courses/owd.webp",
		"course-02": "/images/courses/aowd.webp",
		"course-03": "/images/courses/rescue.webp",
		"course-bubblemaker": "/images/courses/bubblemaker.webp",
		"course-bubblemaker-01": "/images/courses/bubblemaker.webp",
		"course-bubblemaker-02": "/images/courses/bubblemaker.webp",
		"course-bubblemaker-03": "/images/courses/bubblemaker.webp",
		"course-bubblemaker-04": "/images/courses/bubblemaker.webp",
		"course-owd": "/images/courses/owd.webp",
		"course-owd-01": "/images/courses/owd.webp",
		"course-owd-02": "/images/courses/owd.webp",
		"course-owd-03": "/images/courses/owd.webp",
		"course-owd-04": "/images/courses/owd.webp",
		"course-aowd": "/images/courses/aowd.webp",
		"course-aowd-01": "/images/courses/aowd.webp",
		"course-aowd-02": "/images/courses/aowd.webp",
		"course-aowd-03": "/images/courses/aowd.webp",
		"course-aowd-04": "/images/courses/aowd.webp",
		"course-efr": "/images/courses/efr.webp",
		"course-efr-01": "/images/courses/efr.webp",
		"course-efr-02": "/images/courses/efr.webp",
		"course-efr-03": "/images/courses/efr.webp",
		"course-rescue": "/images/courses/rescue.webp",
		"course-rescue-01": "/images/courses/rescue.webp",
		"course-rescue-02": "/images/courses/rescue.webp",
		"course-rescue-03": "/images/courses/rescue.webp",
		"course-divemaster": "/images/courses/divemaster.webp",
		"course-divemaster-01": "/images/courses/divemaster.webp",
		"course-divemaster-02": "/images/courses/divemaster.webp",
		"course-divemaster-03": "/images/courses/divemaster.webp",
		"course-reactivate": "/images/courses/reactivate.webp",
		"course-reactivate-01": "/images/courses/reactivate.webp",
		"course-reactivate-02": "/images/courses/reactivate.webp",
		"course-junior": "/images/courses/junior.webp",
		"course-junior-01": "/images/courses/junior.webp",
		"course-junior-02": "/images/courses/junior.webp",
		"course-jowd": "/images/courses/jowd.webp",
		"course-jowd-01": "/images/courses/jowd.webp",
		"course-jowd-02": "/images/courses/jowd.webp",
		default: "/images/courses/owd.webp"
	},
	specialties: {
		"spec-deep": "/images/specialties/deep.webp",
		"spec-deep-01": "/images/specialties/deep.webp",
		"spec-deep-02": "/images/specialties/deep.webp",
		"spec-night": "/images/specialties/night.webp",
		"spec-night-01": "/images/specialties/night.webp",
		"spec-night-02": "/images/specialties/night.webp",
		"spec-nitrox": "/images/specialties/nitrox.webp",
		"spec-nitrox-01": "/images/specialties/nitrox.webp",
		"spec-nitrox-02": "/images/specialties/nitrox.webp",
		"spec-sidemount": "/images/specialties/sidemount.webp",
		"spec-sidemount-01": "/images/specialties/sidemount.webp",
		"spec-sidemount-02": "/images/specialties/sidemount.webp",
		"spec-wreck": "/images/specialties/wreck.webp",
		"spec-wreck-01": "/images/specialties/wreck.webp",
		"spec-wreck-02": "/images/specialties/wreck.webp",
		default: "/images/specialties/deep.webp"
	},
	trips: {
		"trip-01": "/images/courses/aowd.webp",
		"trip-02": "/images/courses/rescue.webp",
		default: "/images/courses/aowd.webp"
	},
	gallery: [
		"/images/courses/owd.webp",
		"/images/courses/aowd.webp",
		"/images/courses/rescue.webp",
		"/images/courses/divemaster.webp",
		"/images/specialties/deep.webp",
		"/images/specialties/wreck.webp"
	],
	og: "/images/courses/owd.webp"
} as const;

export const courseImage = (id: string) =>
	SCUBA_IMAGES.courses[id as keyof typeof SCUBA_IMAGES.courses] ?? SCUBA_IMAGES.courses.default;

export const tripImage = (id: string) =>
	SCUBA_IMAGES.trips[id as keyof typeof SCUBA_IMAGES.trips] ?? SCUBA_IMAGES.trips.default;

export const specialtyImage = (id: string) =>
	SCUBA_IMAGES.specialties[id as keyof typeof SCUBA_IMAGES.specialties] ?? SCUBA_IMAGES.specialties.default;
