import { ClientEvents, Events } from 'discord.js';
import Client from '../structures/Client';
import Event from '../structures/Event';

export default class ClientReadyEvent extends Event {
  public name: keyof ClientEvents = Events.ClientReady;

  public async execute(client: Client): Promise<void> {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  }
}
