import {
  CommandInteraction,
  ModalSubmitInteraction,
  SlashCommandBuilder,
} from 'discord.js';
import Logger from '../utils/Logger';

export default abstract class Command {
  protected logger: Logger;

  public constructor(
    public builder: Omit<
      SlashCommandBuilder,
      'addSubcommand' | 'addSubcommandGroup'
    >
  ) {
    this.logger = new Logger(builder.name);
  }

  public submit?(interaction: ModalSubmitInteraction): Promise<void>;

  public abstract execute(interaction: CommandInteraction): Promise<void>;
}
