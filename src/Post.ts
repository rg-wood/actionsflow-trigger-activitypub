import { Item } from "./sanity";

export class Post implements Item {
  uri: string;
  message: string;
  replyto?: string;

  constructor(uri: string, message: string, replyto?: string) {
    this.uri = uri;
    this.message = message;
    this.replyto = replyto;
  }

  key() {
    return this.uri;
  }
}
