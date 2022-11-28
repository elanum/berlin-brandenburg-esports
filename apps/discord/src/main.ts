import { Client, Events, GatewayIntentBits } from 'discord.js';
import { env } from './env';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  // if (!interaction.isChatInputCommand()) return;
  // const command = interaction.client.commands.get(interaction.commandName);
  // if (!command) return;
  // try {
  //   await command.execute(interaction);
  // } catch (err) {
  //   await interaction.reply({
  //     content: 'There was an error while executing this command!',
  //     ephemeral: true,
  //   });
  // }
});

client.login(env.TOKEN);
