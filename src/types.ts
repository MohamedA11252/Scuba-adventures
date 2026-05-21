export interface User {
    id: string;
    email: string;
    hashedPassword: string;
    displayName: string | null;
    role: 'USER' | 'ADMIN';
    createdAt: Date;
}
