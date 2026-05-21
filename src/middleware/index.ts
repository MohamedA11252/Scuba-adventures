import { defineMiddleware } from "astro:middleware";
import { lucia } from "../lib/auth";

const PROTECTED_PREFIXES = [
	"/en/dashboard",
	"/en/user-dashboard",
	"/en/admin",
	"/pl/dashboard",
	"/pl/user-dashboard",
	"/pl/admin",
	"/ru/dashboard",
	"/ru/user-dashboard",
	"/ru/admin"
];

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname, origin } = context.url;
	const lang = pathname.split("/")[1] || "en";
	const method = context.request.method;

	if (pathname.includes("/checkout-success")) {
		const query = context.url.search;
		return context.redirect(`/${lang}/booking-success${query}`);
	}
	if (pathname.includes("/checkout-cancelled")) {
		return context.redirect(`/${lang}/booking-cancelled`);
	}

	if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
		const originHeader = context.request.headers.get("origin");
		if (originHeader && originHeader !== origin) {
			return new Response("Invalid origin", { status: 403 });
		}
	}

	const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? "";
	const { user, session } = await lucia.validateSession(sessionId);

	context.locals.user = user;
	context.locals.session = session;

	const needsAuth = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

	if (needsAuth && !session) {
		return context.redirect("/en/signin");
	}

	if ((pathname.startsWith("/en/admin") || pathname.startsWith("/pl/admin") || pathname.startsWith("/ru/admin")) && user?.role !== "ADMIN") {
		return context.redirect(`/${lang}/dashboard`);
	}

	return next();
});
