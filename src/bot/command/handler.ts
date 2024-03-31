import { CommandContext, Context } from 'grammy';

export type CommandHandler = (ctx: CommandContext<Context>) => void;

export const startCommandHandler: CommandHandler = (
  ctx: CommandContext<Context>,
) => {
  ctx.reply('Welcome! Up and runninggg.');
};

export const helpCommandHandler: CommandHandler = (
  ctx: CommandContext<Context>,
) => {
  ctx.reply('Help is on the wayyy');
};
