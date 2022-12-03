import { Awaitable, ClientEvents } from 'discord.js';
import { startCase } from 'lodash';
import Logger from '../utils/Logger';
import Client from './Client';

export default abstract class Event {
  protected logger: Logger;

  public constructor(public name: keyof ClientEvents) {
    this.name = name;
    this.logger = new Logger(startCase(name));
  }

  public abstract execute(client: Client, ...args: unknown[]): Awaitable<void>;
}
