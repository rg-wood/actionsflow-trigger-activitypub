"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const globals_1 = require("@jest/globals");
const ActivityPub_1 = require("../../src/ActivityPub");
globals_1.describe('ActivityPub', () => {
    globals_1.test('discover user', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const account = yield ActivityPub_1.WebFinger.discover("toot.io", "testgrislyeye");
        const actor = yield ActivityPub_1.ActivityPub.forAccount(account);
        globals_1.expect(actor.outbox).toBe("https://toot.io/users/testgrislyeye/outbox");
        if (actor) {
            const activities = yield ActivityPub_1.ActivityPub.activitiesFor(actor);
            console.log(activities);
            globals_1.expect(activities.length).toBe(20);
        }
    }));
});
//# sourceMappingURL=ActivityPub.test.js.map