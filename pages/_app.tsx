import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AmplienceProvider } from '../services/useAmplience';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmplienceProvider>
      <Component {...pageProps} />
    </AmplienceProvider>
  ); 
}

export default MyApp
