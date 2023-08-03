import type { AppProps } from 'next/app';

// Providers
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Themes
import { themeOverride } from '@/themes';

// Styles
import '@/styles/global.css';

export const theme = extendTheme({ ...themeOverride.default });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
