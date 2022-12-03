import {
  SendTweetV1Params,
  TweetV1,
  TwitterApi as TwitterClient,
} from 'twitter-api-v2';
import { env } from '../env';

export class TwitterApi {
  private static client = new TwitterClient({
    appKey: env.TWITTER_APP_KEY,
    appSecret: env.TWITTER_APP_SECRET,
    accessToken: env.TWITTER_ACCESS_TOKEN,
    accessSecret: env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  public static async sendTweet(
    content: string,
    payload?: Partial<SendTweetV1Params>
  ): Promise<TweetV1> {
    if (env.NODE_ENV !== 'production') {
      return {
        text: content,
        full_text: content,
        id_str: '1447652040117731334',
        user: {
          name: 'Developer',
          profile_image_url_https:
            'https://cdn.discordapp.com/embed/avatars/0.png',
          id_str: '1440711912291913732',
        },
      } as TweetV1;
    }

    return this.client.v1.tweet(content, payload);
  }

  public static getTweetUrl(tweet: TweetV1): string {
    return `https://twitter.com/${tweet.user.id_str}/status/${tweet.id_str}`;
  }
}
