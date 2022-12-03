import ClientReadyEvent from './ClientReady';
import InteractionCreateEvent from './InteractionCreate';

export default [new InteractionCreateEvent(), new ClientReadyEvent()];
