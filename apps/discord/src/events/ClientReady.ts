import { Events } from 'discord.js';
import Client from '../structures/Client';
import Event from '../structures/Event';

export default class ClientReadyEvent extends Event {
  public constructor() {
    super(Events.ClientReady);
  }

  public async execute(client: Client): Promise<void> {
    this.logger.log(`Logged in as ${client.user.tag}`);
  }
}
