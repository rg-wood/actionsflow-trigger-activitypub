export interface Activity {
    readonly type: string;
    readonly published: Date;
    readonly cc: string[];
    readonly object: {
        readonly id: string;
        readonly type: string;
        readonly contentMap: Record<string, string>;
        readonly inReplyTo?: string;
    };
}
