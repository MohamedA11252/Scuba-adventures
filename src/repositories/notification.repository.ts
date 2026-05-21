import { db } from "../db/client";

export class NotificationRepository {
  createNotification(userId: string, message: string) {
    const id = `note_${crypto.randomUUID()}`;
    const createdAt = Date.now();

    db.prepare(
      "INSERT INTO notifications (id, user_id, message, is_read, created_at) VALUES (?, ?, ?, ?, ?)"
    ).run(id, userId, message, 0, createdAt);

    return { id };
  }
}

export const notificationRepository = new NotificationRepository();
