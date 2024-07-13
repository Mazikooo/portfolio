// pages/_app.js

import '../styles/globals.css';
import { AppProps } from 'next/app';  // Tambahkan jika Anda menggunakan TypeScript

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
