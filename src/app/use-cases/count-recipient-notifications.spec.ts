import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notificatios-repository";
import { CancelNotification } from "./cancel-notification";
import { Notification } from "@app/entities/notification";
import { Content } from "@app/entities/content";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";

describe('Count recipients notifications', () => {

    it('should be able to count recipient notifications', async () => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientsNotifications = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-1' })
        );

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-1' })
        );

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-2' })
        );

        const { count } = await countRecipientsNotifications.execute({
            recipientId: 'recipient-1'
        });        

        expect(count).toEqual(2);

    });

});