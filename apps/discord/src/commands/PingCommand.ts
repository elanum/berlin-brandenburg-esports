import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import Command from '../structures/Command';

export default class PingCommand extends Command {
  public builder: SlashCommandBuilder = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('pong');

  public async execute(interaction: CommandInteraction): Promise<void> {
    await interaction.reply('PONG');
  }
}
