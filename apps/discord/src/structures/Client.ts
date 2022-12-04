import {
  Client as DiscordClient,
  Collection,
  GatewayIntentBits,
  REST,
  RESTPostAPIApplicationCommandsJSONBody,
  Routes,
} from 'discord.js';
import commands from '../commands';
import { env } from '../env';
import events from '../events';
import Logger from '../utils/Logger';
import Command from './Command';
import Event from './Event';

export default class Client extends DiscordClient {
  public commands: Collection<string, Command>;
  private logger = new Logger('Client');

  public constructor() {
    super({ intents: [GatewayIntentBits.Guilds] });
    this.commands = new Collection();
  }

  public async start(): Promise<void> {
    await this.registerCommands();
    await this.registerEvents();
    await this.login(env.TOKEN);
  }

  private async registerCommands(): Promise<void> {
    this.logger.log(`Try to register ${commands.length} commands`);
    const body: RESTPostAPIApplicationCommandsJSONBody[] = [];

    commands.forEach((command) => {
      if (command.builder.name) {
        this.commands.set(command.builder.name, command);
        body.push(command.builder.toJSON());
      }
    });

    const rest = new REST({ version: '10' }).setToken(env.TOKEN);

    try {
      await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID), { body });
      this.logger.log(`Successfully registered ${body.length} commands`);
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  private async handleEvent(event: Event): Promise<void> {
    const avoidException = async (...args: unknown[]): Promise<void> => {
      try {
        await event.execute(this, ...args);
      } catch (error) {
        this.logger.error(error.message);
      }
    };

    this.on(event.name, avoidException);
  }

  private async registerEvents(): Promise<void> {
    await Promise.all(events.map((event) => this.handleEvent(event)));
    this.logger.log(`Successfully registered ${events.length} events`);
  }
}
