import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import Command from '../structures/Command';

export default class TwitterCommand extends Command {
  public builder: SlashCommandBuilder = new SlashCommandBuilder()
    .setName('twitter')
    .setDescription('send tweet to twitter');

  public async execute(interaction: CommandInteraction): Promise<void> {
    await interaction.reply({ content: 'tweety', ephemeral: true });
  }
}
