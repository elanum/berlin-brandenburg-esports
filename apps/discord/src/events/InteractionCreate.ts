import {
  ChatInputCommandInteraction,
  Events,
  Interaction,
  InteractionReplyOptions,
  ModalSubmitInteraction,
} from 'discord.js';
import Client from '../structures/Client';
import Event from '../structures/Event';
import { errorMessage } from '../utils/Messages';

export default class InteractionCreateEvent extends Event {
  public constructor() {
    super(Events.InteractionCreate);
  }

  public async execute(client: Client, interaction: Interaction): Promise<void> {
    if (interaction.isChatInputCommand()) await this.chatInput(client, interaction);
    if (interaction.isModalSubmit()) await this.modalSubmit(client, interaction);
  }

  private errorMessage(error: Error): InteractionReplyOptions {
    this.logger.error(error.message);

    return {
      embeds: [errorMessage.setDescription(error.message)],
      ephemeral: true,
    };
  }

  private async chatInput(client: Client, interaction: ChatInputCommandInteraction): Promise<void> {
    try {
      const command = client.commands.get(interaction.commandName);
      if (!command) return;
      this.logger.log(`Execute /${command.builder.name} command for ${interaction.user.tag}`);
      await command.execute(interaction);
    } catch (error) {
      await interaction.reply(this.errorMessage(error));
    }
  }

  private async modalSubmit(client: Client, interaction: ModalSubmitInteraction): Promise<void> {
    const command = client.commands.get(interaction.customId);

    try {
      if (!command || !command.submit) throw new Error('Submit handler is missing');

      this.logger.log(`Execute /${command.builder.name} submit to ${interaction.user.tag}`);
      await command.submit(interaction);
    } catch (error) {
      await interaction.reply(this.errorMessage(error));
    }
  }
}
