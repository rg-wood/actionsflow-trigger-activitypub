import { describe, expect, test } from '@jest/globals';
import { ActivityPub, WebFinger } from '../../src/ActivityPub';

describe('ActivityPub', () => {
  test('discover user', async () => {
    const account = await WebFinger.discover("toot.io", "testgrislyeye");
    const actor = await ActivityPub.forAccount(account);
    expect(actor!.outbox).toBe("https://toot.io/users/testgrislyeye/outbox");
    if (actor) {
      const activities = await ActivityPub.activitiesFor(actor);
      console.log(activities)
      expect(activities!.length).toBe(20);
    }
  });
});
