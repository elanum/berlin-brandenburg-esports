import { EmbedBuilder } from '@discordjs/builders';
import { Colors } from 'discord.js';

export const errorMessage = new EmbedBuilder()
  .setColor(Colors.Red)
  .setTitle('Error');

export const successMessage = new EmbedBuilder()
  .setColor(Colors.Green)
  .setTitle('Success');
