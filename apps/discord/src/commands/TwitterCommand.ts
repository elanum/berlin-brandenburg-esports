import {
  ActionRowBuilder,
  CommandInteraction,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  ModalSubmitInteraction,
  SlashCommandBuilder,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js';
import Command from '../structures/Command';

export default class TwitterCommand extends Command {
  public builder: SlashCommandBuilder = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription('send tweet to twitter');

  private get name(): string {
    return 'twitter';
  }

  public async execute(interaction: CommandInteraction): Promise<void> {
    const modal = new ModalBuilder().setCustomId(this.name).setTitle('Tweet');
    const textInput = new TextInputBuilder()
      .setCustomId('tweet-content')
      .setLabel('Content')
      .setStyle(TextInputStyle.Paragraph)
      .setMaxLength(280)
      .setRequired(true);

    const actionRow =
      new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
        textInput
      );

    modal.addComponents(actionRow);
    await interaction.showModal(modal);
  }

  public async submit(interaction: ModalSubmitInteraction): Promise<void> {
    const content = interaction.fields.getTextInputValue('tweet-content');
    await interaction.reply(content);
  }
}
