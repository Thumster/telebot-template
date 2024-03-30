export enum CommandName {
  Start = 'start',
  Help = 'help',
}

export const commandDescriptions: Record<CommandName, string> = {
  [CommandName.Start]: 'Eh hungry already ah, start the bot lah',
  [CommandName.Help]: 'Heloo, you need my help is it?',
};
