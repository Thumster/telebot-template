import getBot, { configureBot } from './bot';

// For local development and long polling
const bot = getBot();
configureBot(bot);
bot.start();
