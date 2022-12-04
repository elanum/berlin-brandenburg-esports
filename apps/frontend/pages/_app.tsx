import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
