import '../styles/index.css'
import '../styles/index2.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
