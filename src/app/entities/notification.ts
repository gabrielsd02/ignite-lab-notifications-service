import { Replace } from "src/helpers/Replace";
import { Content } from "./content";
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}

export class Notification {

    private _id: string;
    public props: NotificationProps;

    constructor(
        props: Replace<NotificationProps, { createdAt?: Date }>, 
        id?: string
    ) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    public get getId(): string {
        return this._id;
    }

    public get getRecipientId(): string {
        return this.props.recipientId;
    }
    
    public set setRecipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }           
    
    public get getCreatedAt(): Date {
        return this.props.createdAt;
    }

    public read() {
        this.props.readAt = new Date();
    }

    public unread() {
        this.props.readAt = null;
    }
    
    public get getReadAt(): Date | null | undefined {
        return this.props.readAt;
    }
    
    public get getCategory() : string {
        return this.props.category;
    }
        
    public set setCategory(category : string) {
        this.props.category = category;
    }

    public get getContent() : Content {
        return this.props.content;
    }    

    public set setContent(content: Content) {        
        this.props.content = content;
    }

    public get getCanceledAt(): Date | null | undefined {
        return this.props.canceledAt
    }

    public cancel() {
        this.props.canceledAt = new Date();
    }
 
}