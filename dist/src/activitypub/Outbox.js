"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJson = void 0;
function fromJson(json) {
    const outbox = JSON.parse(json);
    return outbox.orderedItems.map((item) => {
        return {
            type: item.type,
            published: new Date(Date.parse(item.published)),
            object: item.object,
        };
    });
}
exports.fromJson = fromJson;
//# sourceMappingURL=Outbox.js.map