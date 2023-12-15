# `@actionsflow/activitypub-trigger`

This is an [Actionsflow](https://github.com/actionsflow/actionsflow) trigger for ActivityPub.

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
  "message": "hello world title"
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
        run: |
          echo uri: $uri
          echo message: $message
```
