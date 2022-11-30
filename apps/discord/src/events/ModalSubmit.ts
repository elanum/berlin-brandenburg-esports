import {
  ClientEvents,
  Colors,
  EmbedBuilder,
  Events,
  Interaction,
} from 'discord.js';
import Client from '../structures/Client';
import Event from '../structures/Event';

export default class ModalSubmitEvent extends Event {
  public name: keyof ClientEvents = Events.InteractionCreate;

  public async execute(
    client: Client,
    interaction: Interaction
  ): Promise<void> {
    if (!interaction.isModalSubmit()) return;

    try {
      const command = client.commands.get(interaction.customId);

      if (!command || !command.submit)
        throw new Error('Submit handler is missing');

      await command.submit(interaction);
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
