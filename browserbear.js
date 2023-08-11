const fetch = require('node-fetch');

const TASK_ID = 'your_task_id';
const API_KEY = 'your_api_key';

module.exports.checkPrice = function () {
  console.log('Running price checker');
  const data = {
    webhook_url: 'https://2d15-2404-160-8105-64df-5c6a-2d82-f27d-d71c.ngrok-free.app/job-done',
  };
  fetch(`https://api.browserbear.com/v1/tasks/${TASK_ID}/runs`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};
