import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notificatios-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notification-factory";
import { UnreadNotification } from "./unread-notifications";

describe('Unread notification', () => {

    it('should be able to unread a notification', async () => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnreadNotification(notificationsRepository);

        const notification = makeNotification({
            readAt: new Date()
        });

        await notificationsRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.getId
        });        

        expect(
            notificationsRepository
            .notifications[0]
            .getReadAt
        ).toBeNull();

    });

    it('should not be able to unread a non existing notification', async () => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnreadNotification(notificationsRepository);

        expect(() => {

            return unreadNotification.execute({
                notificationId: 'fake-notification-id'
            })

        }).rejects.toThrow(NotificationNotFound);



    })

});