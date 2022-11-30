import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export default abstract class Command {
  public abstract builder: SlashCommandBuilder;

  public abstract execute(interaction: CommandInteraction): Promise<void>;
}
