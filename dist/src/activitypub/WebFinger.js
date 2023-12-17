"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebFinger = void 0;
const tslib_1 = require("tslib");
const HttpClient_1 = require("typed-rest-client/HttpClient");
class WebFinger {
    static discover(host, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const uri = `https://${host}/.well-known/webfinger?resource=acct:${user}@${host}`;
            const response = yield WebFinger.http.get(uri);
            const body = yield response.readBody();
            const actor = JSON.parse(body);
            return actor;
        });
    }
}
exports.WebFinger = WebFinger;
WebFinger.http = new HttpClient_1.HttpClient("@actionsflow/trigger-activitypub");
//# sourceMappingURL=WebFinger.js.map