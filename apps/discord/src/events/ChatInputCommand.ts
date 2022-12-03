import { Events, Interaction } from 'discord.js';
import Client from '../structures/Client';
import Event from '../structures/Event';
import { errorMessage } from '../utils/Messages';

export default class InteractionCreateEvent extends Event {
  public constructor() {
    super(Events.InteractionCreate);
  }

  public async execute(
    client: Client,
    interaction: Interaction
  ): Promise<void> {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      this.logger.log(
        `Execute /${command.builder.name} command for ${interaction.user.tag}`
      );
      await command.execute(interaction);
    } catch (error) {
      await interaction.reply({
        embeds: [errorMessage.setDescription(error.message)],
        ephemeral: true,
      });
    }
  }
}
