"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trigger = void 0;
class Trigger {
    constructor({ helpers, options }) {
        this.options = options;
        this.helpers = helpers;
    }
    run() {
        return this.trigger().then((results) => results.map((item) => item));
    }
    getItemKey(object) {
        const item = object;
        return item.key();
    }
}
exports.Trigger = Trigger;
//# sourceMappingURL=Trigger.js.map