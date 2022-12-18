import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notificatios-repository";
import { makeNotification } from "@test/factories/notification-factory";
import { GetRecipientNotifications } from "@app/use-cases/get-recipients-notifications";
import { PrismaNotificationMapper } from '../../infra/database/prisma/mappers/prisma-notification-mapper'

describe('Get recipient notifications', () => {

    it('should be able to recipient notifications', async () => {

      const notificationsRepository = new InMemoryNotificationsRepository();
      const getRecipientNotifications = new GetRecipientNotifications(
        notificationsRepository,
      );
  
      await notificationsRepository.create(
        makeNotification({
          recipientId: 'recipient-1',
        }),
      );
  
      await notificationsRepository.create(
        makeNotification({
          recipientId: 'recipient-1',
        }),
      );
  
      await notificationsRepository.create(
        makeNotification({
          recipientId: 'recipient-2',
        }),
      );
  
      const { notifications } = await getRecipientNotifications.execute({
        recipientId: 'recipient-1',
      });
            
      expect(notifications).toHaveLength(2);
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' })
      ]);

    });

  });