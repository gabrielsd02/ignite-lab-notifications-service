import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/use-cases/get-recipients-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    ReadNotification,
    CancelNotification,
    UnreadNotification,
    GetRecipientNotifications,
    CountRecipientNotification
  ]
})
export class HttpModule {}
