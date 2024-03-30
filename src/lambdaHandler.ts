import { webhookCallback } from 'grammy';
import initBot from './bot';

const bot = initBot();

// For AWS Lambda deployment
export const handleIncomingMessage = webhookCallback(bot, 'aws-lambda-async');
