// Components
import { Layout } from '@/components';
import Head from 'next/head';

// Constants
import { COLORS } from '@/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Manage users and links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{
        maxWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: COLORS.MAIN
      }}>
        <Layout />
      </main>
    </>
  );
}
