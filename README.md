# `@actionsflow/activitypub-trigger`

This is an [Actionsflow](https://actionsflow.github.io/) trigger for ActivityPub.

## Install

```bash
npm i @actionsflow/trigger-activitypub
```

## Usage

```yaml
on:
  activitypub:
    host: example.org
    user: test
```

## Options

- `host`, required, hostname of source ActivityPub instance
- `user`, required, source user account

> You can use [General Config for Actionsflow Trigger](https://actionsflow.github.io/docs/workflow/#ontriggerconfig) for more customization.

## Outputs

This trigger's outputs will be the following object.

An outputs example:

```json
{
  "uri": "uniqueId",
  "message": "hello world title",
  "replyto": "optionalUniqueReplyId"
}
```

You can use the outputs like this:

```yaml
jobs:
  print:
    name: Print
    runs-on: ubuntu-latest
    steps:
      - name: Print Post Outputs
        env:
          uri: ${{on.activitypub.outputs.uri}}
          message: ${{on.activitypub.outputs.message}}
          reply: ${{ on.activitypub.outputs.replyto}}
        run: |
          echo uri: $uri
          echo message: $message
          echo reply: $reply
```

## Limitations

Please note that:

* **Direct replies only.** By design, the trigger will only fire for direct replies from the original account owner.
* **30 minute Cutoff.** Similarly, the trigger will ignore any posts made within a cutoff period of half-an-hour. Any posts made before `T - 30` will be ignored to prevent accidental spamming.
* **No media.** We do not currently support media attachments.
* **No polls.** We do not currently support poll posts.
* **Public only.** We only support public ActivityPub posts.
