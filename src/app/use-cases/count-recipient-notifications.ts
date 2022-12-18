import { Injectable } from '@nestjs/common';
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NotificationNotFound } from './errors/notification-not-found';

interface CountRecipientNotificationPropsRequest {
    recipientId: string;
}

interface CountRecipientNotificationPropsResponse {
    count: number;
}

@Injectable()
export class CountRecipientNotification {

    constructor(
        private notificationsRepository: NotificationsRepository
    ) {}

    async execute(request: CountRecipientNotificationPropsRequest): Promise<CountRecipientNotificationPropsResponse> {

        const { recipientId } = request;

        const count = await this.notificationsRepository.countManyByRecipientId(recipientId); 

        return {
            count 
        }

    }

}