import InteractionCreateEvent from './ChatInputCommand';
import ClientReadyEvent from './ClientReady';
import ModalSubmitEvent from './ModalSubmit';

export default [
  new InteractionCreateEvent(),
  new ClientReadyEvent(),
  new ModalSubmitEvent(),
];
