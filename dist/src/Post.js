"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(uri, message, replyto) {
        this.uri = uri;
        this.message = message;
        this.replyto = replyto;
    }
    key() {
        return this.uri;
    }
}
exports.Post = Post;
//# sourceMappingURL=Post.js.map