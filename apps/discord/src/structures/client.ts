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
import Command from './Command';
import Event from './Event';

export default class Client extends DiscordClient {
  public commands: Collection<string, Command>;

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
    console.log('Register Commands');
    const body: RESTPostAPIApplicationCommandsJSONBody[] = [];

    commands.forEach((command) => {
      if (command.builder.name) {
        this.commands.set(command.builder.name, command);
        body.push(command.builder.toJSON());
      }
    });

    const rest = new REST({ version: '10' }).setToken(env.TOKEN);

    try {
      await rest.put(
        Routes.applicationGuildCommands(env.CLIENT_ID, '983654643416584296'),
        { body }
      );
      console.log(
        `Successfully registered ${body.length}/${commands.length} commands`
      );
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  }

  private async handleEvent(event: Event): Promise<void> {
    const avoidException = async (...args: unknown[]): Promise<void> => {
      try {
        await event.execute(this, ...args);
      } catch (error) {
        console.error(
          `An error occurred in '${event.name}' event.\n${error}\n`
        );
      }
    };

    this.on(event.name, avoidException);
  }

  private async registerEvents(): Promise<void> {
    await Promise.all(events.map((event) => this.handleEvent(event)));
  }
}
