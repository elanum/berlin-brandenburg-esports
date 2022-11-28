import {
  Client as DiscordClient,
  Collection,
  GatewayIntentBits,
} from 'discord.js';
import Command from './command';

export default class Client extends DiscordClient {
  public commands: Collection<string, Command>;

  public constructor() {
    super({ intents: [GatewayIntentBits.Guilds] });
  }
}
