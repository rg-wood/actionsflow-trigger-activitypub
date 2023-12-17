import { Trigger } from "./sanity";
import { Post } from "./Post";
import { Actor, Activity, ActivityPub, WebFinger } from "./activitypub";
import { htmlToText } from "html-to-text";

type Minutes = number;

function publishedAscending(a: Activity, b: Activity) {
  if (a.published < b.published) {
    return -1;
  } else if (a.published > b.published) {
    return 1;
  }
  return 0;
}

const directRepliesOnlyFor: (actor: Actor) => (activity: Activity) => boolean =
  (actor: Actor) =>
    (activity: Activity) =>
      activity.cc.length === 1 &&  activity.cc.includes(`${actor.self}/followers`)

export default class ActivityPubTrigger extends Trigger<Post> {
  private static cutoffPeriod: Minutes = 30;

  async trigger(): Promise<Post[]> {
    const { host, user } = this.options as {
      host: string;
      user: string;
    };

    const account = await WebFinger.discover(host, user);
    const actor = await ActivityPub.forAccount(account);

    if (actor) {
      const activities = await ActivityPub.activitiesFor(actor);

      const cutoff = new Date(Date.now());
      const adjustment = cutoff.getMinutes() - ActivityPubTrigger.cutoffPeriod;
      cutoff.setMinutes(adjustment);

      const notes = activities!
        .filter((activity) => activity.type == "Create")
        .filter((activity) => activity.object.type == "Note")
        .filter((activity) => activity.published > cutoff)
        .filter(directRepliesOnlyFor(actor))
        .sort(publishedAscending);

      const posts = notes!.map((activity) => {
        const item = activity.object;
        const text = htmlToText(item.contentMap.en)
        return new Post(item.id, text, item.inReplyTo)
      });

      return posts;
    }

    return [];
  }
}
