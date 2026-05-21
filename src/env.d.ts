/// <reference types="astro/client" />

import type { User, Session } from "lucia";

declare module "astro" {
	interface Locals {
		user: User | null;
		session: Session | null;
	}
}
