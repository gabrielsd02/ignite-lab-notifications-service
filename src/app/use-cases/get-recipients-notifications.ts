import { Injectable } from '@nestjs/common';
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface GetRecipientNotificationsPropsRequest {
    recipientId: string;
}

interface GetRecipientNotificationsPropsResponse {
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {

    constructor(
        private notificationsRepository: NotificationsRepository
    ) {}

    async execute(request: GetRecipientNotificationsPropsRequest): Promise<GetRecipientNotificationsPropsResponse> {

        const { recipientId } = request;

        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId); 
        
        return {
            notifications 
        }

    }

}