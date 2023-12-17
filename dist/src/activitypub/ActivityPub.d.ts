import { Account } from "./Account";
import { Actor } from "./Actor";
import { Activity } from "./Activity";
export declare class ActivityPub {
    private static http;
    private static mediaType;
    private static accept;
    static forAccount(account: Account): Promise<Actor | undefined>;
    static activitiesFor(actor: Actor): Promise<Activity[] | undefined>;
}
