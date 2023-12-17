"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityPub = void 0;
const tslib_1 = require("tslib");
const Outbox = tslib_1.__importStar(require("./Outbox"));
const HttpClient_1 = require("typed-rest-client/HttpClient");
class ActivityPub {
    static forAccount(account) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const self = account.links.filter((link) => link.rel == "self")[0];
            const uri = self.href;
            if (uri) {
                const response = yield ActivityPub.http.get(uri, ActivityPub.accept);
                const body = yield response.readBody();
                const user = JSON.parse(body);
                return user;
            }
            return undefined;
        });
    }
    static activitiesFor(actor) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const uri = `${actor.outbox}?page=true`;
            const response = yield ActivityPub.http.get(uri, ActivityPub.accept);
            const body = yield response.readBody();
            return Outbox.fromJson(body);
        });
    }
}
exports.ActivityPub = ActivityPub;
ActivityPub.http = new HttpClient_1.HttpClient("@actionsflow/trigger-activitypub");
ActivityPub.mediaType = "application/activity+json";
ActivityPub.accept = { Accept: ActivityPub.mediaType };
//# sourceMappingURL=ActivityPub.js.map