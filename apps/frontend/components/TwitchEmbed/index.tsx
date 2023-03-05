import { useRef } from 'react';
import { TwitchEmbed, TwitchEmbedInstance } from 'react-twitch-embed';

const Twitch = (): JSX.Element => {
  const embed = useRef<TwitchEmbedInstance | null>(null); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e: TwitchEmbedInstance): void => {
    embed.current = e;
  };

  return (
    <TwitchEmbed
      channel="bbesports_ev"
      darkMode
      allowFullscreen
      autoplay={false}
      withChat={false}
      onVideoReady={handleReady}
    />
  );
};

export default Twitch;
