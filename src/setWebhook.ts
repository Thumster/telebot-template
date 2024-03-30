import getBot from './bot';

const API_URL = process.argv[2];
console.log('API_URL:', API_URL);

if (!API_URL) {
  throw new Error('provide API_URL as an argument to this script');
}

const bot = getBot();
// To set the webhook when deploying to AWS Lambda
bot.api.setWebhook(API_URL);
