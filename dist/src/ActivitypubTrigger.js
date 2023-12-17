"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sanity_1 = require("./sanity");
const Post_1 = require("./Post");
const activitypub_1 = require("./activitypub");
const html_to_text_1 = require("html-to-text");
function publishedAscending(a, b) {
    if (a.published < b.published) {
        return -1;
    }
    else if (a.published > b.published) {
        return 1;
    }
    return 0;
}
const directRepliesOnlyFor = (actor) => (activity) => activity.cc.length === 1 && activity.cc.includes(`${actor.self}/followers`);
class ActivityPubTrigger extends sanity_1.Trigger {
    trigger() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { host, user } = this.options;
            const account = yield activitypub_1.WebFinger.discover(host, user);
            const actor = yield activitypub_1.ActivityPub.forAccount(account);
            if (actor) {
                const activities = yield activitypub_1.ActivityPub.activitiesFor(actor);
                const cutoff = new Date(Date.now());
                const adjustment = cutoff.getMinutes() - ActivityPubTrigger.cutoffPeriod;
                cutoff.setMinutes(adjustment);
                const notes = activities
                    .filter((activity) => activity.type == "Create")
                    .filter((activity) => activity.object.type == "Note")
                    .filter((activity) => activity.published > cutoff)
                    .filter(directRepliesOnlyFor(actor))
                    .sort(publishedAscending);
                const posts = notes.map((activity) => {
                    const item = activity.object;
                    const text = html_to_text_1.htmlToText(item.contentMap.en);
                    return new Post_1.Post(item.id, text, item.inReplyTo);
                });
                return posts;
            }
            return [];
        });
    }
}
exports.default = ActivityPubTrigger;
ActivityPubTrigger.cutoffPeriod = 30;
//# sourceMappingURL=ActivitypubTrigger.js.map