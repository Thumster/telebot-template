import { Bot } from 'grammy';
import dotenv from 'dotenv';
import { commandDescriptions, commandHandlers } from './command';

// Create an instance of the `Bot` class and pass your bot token to it.
const getBot = () => {
  dotenv.config();
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error(
      'You have to provide the bot-token from @BotFather via environment variable (TELEGRAM_BOT_TOKEN)',
    );
  }

  return new Bot(TELEGRAM_BOT_TOKEN);
};

export const configureBot = (bot: Bot) => {
  // Bot Commands
  bot.api.setMyCommands(
    Object.entries(commandDescriptions).map(([command, description]) => ({
      command,
      description,
    })),
  );

  // Bot Listeners
  Object.entries(commandHandlers).forEach(([command, handler]) => {
    bot.command(command, handler);
  });

  // Handle other messages.
  bot.on('message', (ctx) => ctx.reply('Got another message!'));
};

export default getBot;
