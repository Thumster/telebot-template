import { webhookCallback } from 'grammy';
import getBot, { configureBot } from './bot';

const bot = getBot();
configureBot(bot);

// For AWS Lambda deployment
export const handleIncomingMessage = webhookCallback(bot, 'aws-lambda-async');
