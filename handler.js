'use strict';

const axios = require('axios');

axios.defaults.baseURL = 'https://circleci.com/api/v1'

module.exports.trigger = (event, context, callback) => {
  const circleToken = process.env.CIRCLE_TOKEN;
  const project = process.env.PROJECT;
  const branch = process.env.BRANCH;
  const triggerBuildUrl = `/project/${project}/tree/${branch}?circle-token=${circleToken}`;
  const triggerName = process.env.TRIGGER_NAME;
  const circleJob = process.env.CIRCLE_JOB;
  const buildParameters = {};
  if (triggerName !== undefined) buildParameters[triggerName] = 'true';
  if (circleJob !== undefined) buildParameters['CIRCLE_JOB'] = circleJob;

  axios.post(triggerBuildUrl, {
    build_parameters: buildParameters
  })
  .then(response => { callback(null, 'Success'); })
  .catch(error => { callback(error, error.stack); })
};
