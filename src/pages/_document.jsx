import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Analytics and custom meta tags to go here */}
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
