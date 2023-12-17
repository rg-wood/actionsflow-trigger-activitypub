import { Account } from "./Account";
export declare class WebFinger {
    private static http;
    static discover(host: string, user: string): Promise<Account>;
}
