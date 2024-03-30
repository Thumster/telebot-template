import { Bot } from 'grammy';
import dotenv from 'dotenv';
import { CommandName, commandDescriptions } from './commands';

// Create an instance of the `Bot` class and pass your bot token to it.
const getBot = () => {
  dotenv.config();
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

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

  // Handle the /start command.
  bot.command(CommandName.Start, (ctx) =>
    ctx.reply('Welcome! Up and runninggg.'),
  );

  bot.command(CommandName.Help, (ctx) => ctx.reply('Help is on the wayyy'));

  // Handle other messages.
  bot.on('message', (ctx) => ctx.reply('Got another message!'));
};

export default getBot;
