# circleci-build-trigger

Scheduler to build your CircleCI project with [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

## Use case
Introduce use cases of this Lambda function.

* [bitjourney/ci-npm-update](https://github.com/bitjourney/ci-npm-update)
* [masutaka/circleci-bundle-update-pr](https://github.com/masutaka/circleci-bundle-update-pr)
* [taichi/ci-yarn-upgrade](https://github.com/taichi/ci-yarn-upgrade)

## Quick Start

```sh
$ git clone git@github.com:tsub/circleci-build-trigger.git
$ cd circleci-build-trigger
$ npm install # or yarn install
$ cp .env.template .env # and Set environment variables in .env
$ export AWS_ACCESS_KEY_ID=<YOUR AWS_ACCESS_KEY_ID>
$ export AWS_SECRET_ACCESS_KEY=<YOUR AWS_SECRET_ACCESS_KEY>
$ export SCHEDULE_EXPRESSION="rate(1 weeks)"
$ npm run deploy # or yarn run deploy
```

## Requirements

* Node.js
* yarn (option)

## Require Environment variables

* `$AWS_ACCESS_KEY_ID`
* `$AWS_SECRET_ACCESS_KEY`
* `$SCHEDULE_EXPRESSION`

## About SCHEDULE_EXPRESSION

[Schedule Expression Syntax for Rules - Amazon CloudWatch Events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html)

### Examples

Run weekly.

```
rate(1 weeks)
```

Run at 00:00 am (UTC) every Monday.

```
cron(0 0 ? * Mon *)
```

## About .env

### CIRCLE_TOKEN

Access token to access the CircleCI API.

`CircleCI: Project Settings -> API Permissions -> Create a token with 'All' scope`

### PROJECT

GitHub repository to build.

e.g. `tsub/circleci-build-trigger`

### BRANCH

Git branch to build.

### TRIGGER_NAME

Key name to use the [CircleCI build_parameters](https://circleci.com/docs/parameterized-builds/).
