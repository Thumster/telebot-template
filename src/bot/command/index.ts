import {
  CommandHandler,
  helpCommandHandler,
  startCommandHandler,
} from './handler';

enum CommandName {
  Start = 'start',
  Help = 'help',
}

export const commandDescriptions: Record<CommandName, string> = {
  [CommandName.Start]: 'Description on how to start the bot',
  [CommandName.Help]: 'Description on how to get help',
};

export const commandHandlers: Record<CommandName, CommandHandler> = {
  [CommandName.Start]: startCommandHandler,
  [CommandName.Help]: helpCommandHandler,
};
