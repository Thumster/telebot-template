import getBot, { configureBot } from './bot';

// For local development and long polling
const bot = getBot();
configureBot(bot);

// For local long polling
bot.start();
