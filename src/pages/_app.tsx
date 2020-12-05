// This file functions as a main layout for all pages
import '../styles/globals.scss';
import GlobalNavigation from '../components/globalNavigation';

export default function App({ Component, pageProps }: any) {
  return (
    <main className="global_wrapper">
      <GlobalNavigation />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </main>
  );
}
