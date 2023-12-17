"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const globals_1 = require("@jest/globals");
const activitypub_1 = require("../../src/activitypub");
globals_1.describe('WebFinger', () => {
    globals_1.test('discover user', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const account = yield activitypub_1.WebFinger.discover("toot.io", "grislyeye");
        globals_1.expect(account.links.length).toBe(4);
    }));
});
//# sourceMappingURL=WebFinger.test.js.map