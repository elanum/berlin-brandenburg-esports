import { TwitterApi } from '@bbe/apis';
import {
  ActionRowBuilder,
  ChatInputCommandInteraction,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  ModalSubmitInteraction,
  SlashCommandBuilder,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js';
import Command from '../structures/Command';
import { errorMessage, successMessage } from '../utils/Messages';

export default class TwitterCommand extends Command {
  public constructor() {
    super(
      new SlashCommandBuilder()
        .setName('twitter')
        .setDescription('Send a tweet directly to the @bbesports_ev Twitter Account')
        .addStringOption((option) => option.setName('content').setDescription('Content of the tweet'))
    );
  }

  public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    const value = interaction.options.getString('content') ?? '';
    const modal = new ModalBuilder().setCustomId(this.builder.name).setTitle('Tweet');
    const textInput = new TextInputBuilder()
      .setCustomId('tweet-content')
      .setLabel('Content')
      .setValue(value)
      .setStyle(TextInputStyle.Paragraph)
      .setMaxLength(280)
      .setRequired(true);

    const actionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(textInput);

    modal.addComponents(actionRow);
    await interaction.showModal(modal);
  }

  public async submit(interaction: ModalSubmitInteraction): Promise<void> {
    const content = interaction.fields.getTextInputValue('tweet-content');

    try {
      const tweet = await TwitterApi.sendTweet(content);
      await interaction.reply({
        embeds: [
          successMessage
            .setDescription(`${TwitterApi.getTweetUrl(tweet)}\n\`\`\`${tweet.full_text || tweet.text}\`\`\``)
            .setFooter({
              text: tweet.user.name,
              iconURL: tweet.user.profile_image_url_https,
            }),
        ],
      });
    } catch (error) {
      await interaction.reply({
        embeds: [errorMessage.setDescription(error.message)],
        ephemeral: true,
      });
    }
  }
}
