import { Activity } from "./Activity";

interface Outbox {
  readonly orderedItems: {
    readonly type: string;
    readonly published: string;
    readonly object: {
      readonly id: string;
      readonly type: string;
      readonly contentMap: Record<string, string>;
    };
  }[];
}

export function fromJson(json: string): Activity[] {
  const outbox: Outbox = JSON.parse(json);
  return outbox.orderedItems.map((item) => {
    return {
      type: item.type,
      published: new Date(Date.parse(item.published)),
      object: item.object,
    };
  });
}
