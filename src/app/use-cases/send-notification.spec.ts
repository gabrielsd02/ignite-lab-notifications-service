import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notificatios-repository";
import { SendNotification } from "./send-notification";

describe('Send notification', () => {

    it('should be able to send a notification', async () => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            category: 'social',
            content: 'Send Test',
            recipientId: 'example-recipient-id',
        });        

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);

    });

});