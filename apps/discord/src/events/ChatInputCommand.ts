import {
  ClientEvents,
  Colors,
  EmbedBuilder,
  Events,
  Interaction,
} from 'discord.js';
import Client from '../structures/Client';
import Event from '../structures/Event';

export default class InteractionCreateEvent extends Event {
  public name: keyof ClientEvents = Events.InteractionCreate;

  public async execute(
    client: Client,
    interaction: Interaction
  ): Promise<void> {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(Colors.Red)
            .setTitle('Error')
            .setDescription(error.message)
            .setTimestamp(),
        ],
        ephemeral: true,
      });
    }
  }
}
