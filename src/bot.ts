import { Bot } from "grammy";
import dotenv from "dotenv";
import { CommandName, commandDescriptions } from "./commands";

dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(TELEGRAM_BOT_TOKEN);

bot.api.setMyCommands(
  Object.entries(commandDescriptions).map(([command, description]) => ({
    command,
    description,
  }))
);

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command(CommandName.Start, (ctx) =>
  ctx.reply("Welcome! Up and runninggg.")
);
bot.command(CommandName.Help, (ctx) => ctx.reply("Help is on the wayyy"));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
