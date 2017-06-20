'use strict';

const axios = require('axios');

axios.defaults.baseURL = 'https://circleci.com/api/v1'

const {
  PROJECT,
  BRANCH,
  CIRCLE_TOKEN,
  TRIGGER_NAME,
  CIRCLE_JOB,
} = process.env;

module.exports.trigger = (event, context, callback) => {
  const triggerBuildUrl = `/project/${PROJECT}/tree/${BRANCH}?circle-token=${CIRCLE_TOKEN}`;
  const buildParameters = {};
  if (TRIGGER_NAME !== undefined) buildParameters[TRIGGER_NAME] = 'true';
  if (CIRCLE_JOB !== undefined) buildParameters['CIRCLE_JOB'] = CIRCLE_JOB;

  axios.post(triggerBuildUrl, {
    build_parameters: buildParameters
  })
  .then(response => { callback(null, 'Success'); })
  .catch(error => { callback(error, error.stack); })
};
