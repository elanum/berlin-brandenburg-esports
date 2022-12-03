import { Events, Interaction } from 'discord.js';
import Client from '../structures/Client';
import Event from '../structures/Event';
import { errorMessage } from '../utils/Messages';

export default class ModalSubmitEvent extends Event {
  public constructor() {
    super(Events.InteractionCreate);
  }

  public async execute(
    client: Client,
    interaction: Interaction
  ): Promise<void> {
    if (!interaction.isModalSubmit()) return;

    try {
      const command = client.commands.get(interaction.customId);

      if (!command || !command.submit)
        throw new Error('Submit handler is missing');

      this.logger.log(
        `Execute /${command.builder.name} submit to ${interaction.user.tag}`
      );
      await command.submit(interaction);
    } catch (error) {
      await interaction.reply({
        embeds: [errorMessage.setDescription(error.message)],
        ephemeral: true,
      });
    }
  }
}
