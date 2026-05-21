import { lucia } from '../lib/auth';
import { userRepository } from '../repositories/user.repository';
import { z } from 'zod';
import { Argon2id } from 'oslo/password';
import { generateId } from 'lucia';

const signupSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export class AuthService {
	async signup(data: unknown) {
		const parsed = signupSchema.safeParse(data);

		if (!parsed.success) {
			throw new Error(parsed.error.errors.map((e) => e.message).join(', '));
		}

		const { email, password } = parsed.data;

		const existingUser = await userRepository.findByEmail(email);
		if (existingUser) {
			throw new Error("Email already in use");
		}

		const hashedPassword = await new Argon2id().hash(password);
		const userId = generateId(15);

        const newUser = await userRepository.create({
            id: userId,
            email,
            hashedPassword,
            displayName: null,
            role: 'USER',
        });

		const session = await lucia.createSession(newUser.id, {});
		return lucia.createSessionCookie(session.id);
	}

	async signin(data: unknown) {
		const parsed = signupSchema.safeParse(data);

		if (!parsed.success) {
			throw new Error(parsed.error.errors.map((e) => e.message).join(', '));
		}

		const { email, password } = parsed.data;

		const existingUser = await userRepository.findByEmail(email);
		if (!existingUser) {
			throw new Error("Incorrect email or password");
		}

		const validPassword = await new Argon2id().verify(existingUser.hashedPassword, password);
		if (!validPassword) {
			throw new Error("Incorrect email or password");
		}

		const session = await lucia.createSession(existingUser.id, {});
		return lucia.createSessionCookie(session.id);
	}
}

export const authService = new AuthService();
