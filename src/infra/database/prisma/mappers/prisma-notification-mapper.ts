import { Notification as RawNotification } from "@prisma/client";
import { Notification } from '@app/entities/notification';
import { Content } from "@app/entities/content";

export class PrismaNotificationMapper {

    static toPrisma(notification: Notification) {
        return {
            id: notification.getId,
            content: notification.getContent,
            category: notification.getCategory,
            recipientId: notification.getRecipientId
        }
    }

    static toDomain(raw: RawNotification): Notification {

        return new Notification(
            {
                category: raw.category,
                content: new Content(raw.content),
                recipientId: raw.recipientId,
                readAt: raw.readAt,
                createdAt: raw.createdAt            
            }, raw.id
        );

    }

}