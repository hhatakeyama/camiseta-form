import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Curiosa?",
  description: "Curiosa?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <meta ></meta>
        <ColorSchemeScript />
      </head>
      <body className={roboto.className} style={{ height: '100%' }}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
