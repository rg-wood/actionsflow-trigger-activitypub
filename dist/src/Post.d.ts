import { Item } from "./sanity";
export declare class Post implements Item {
    uri: string;
    message: string;
    replyto?: string;
    constructor(uri: string, message: string, replyto?: string);
    key(): string;
}
