import { Trigger } from "./sanity";
import { Post } from "./Post";
export default class ActivityPubTrigger extends Trigger<Post> {
    private static cutoffPeriod;
    trigger(): Promise<Post[]>;
}
