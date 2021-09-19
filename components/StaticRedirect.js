import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function StaticRedirect({ redirect, path, children }) {
  const router = useRouter();

  useEffect(() => {
    if (redirect) {
      router.push(path);
    }
  });

  return redirect ? (
    <>
      <Head>
        <title>Redirection...</title>
        <meta httpEquiv="refresh" content={`0; url=${path}`} />
      </Head>
    </>
  ) : children;
}
