import {
  CommandInteraction,
  ModalSubmitInteraction,
  SlashCommandBuilder,
} from 'discord.js';

export default abstract class Command {
  public abstract builder: SlashCommandBuilder;

  public submit?(interaction: ModalSubmitInteraction): Promise<void>;

  public abstract execute(interaction: CommandInteraction): Promise<void>;
}
