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
$ cp serverless.env.yml{.template,} # and Set environment variables in .env
$ export AWS_ACCESS_KEY_ID=<YOUR AWS_ACCESS_KEY_ID>
$ export AWS_SECRET_ACCESS_KEY=<YOUR AWS_SECRET_ACCESS_KEY>
$ export AWS_REGION=<YOUR AWS_REGION>
$ npm run deploy -- -s prod # or yarn run deploy -- -s prod
```

## Requirements

* Node.js
* yarn (option)

## Require Environment variables

* `$AWS_ACCESS_KEY_ID`
* `$AWS_SECRET_ACCESS_KEY`
* `$AWS_REGION` or `$AWS_DEFAULT_REGION`

## About serverless.env.yml

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

### SCHEDULE_EXPRESSION

Schedule rule to Start build.

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
