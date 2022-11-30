import { Awaitable, ClientEvents } from 'discord.js';
import Client from './Client';

export default abstract class Event {
  public abstract name: keyof ClientEvents;

  public abstract execute(client: Client, ...args: unknown[]): Awaitable<void>;
}
