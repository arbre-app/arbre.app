import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { useContext } from 'react';
import * as React from 'react';
import { Layout } from '../components';

export default function PageInsee() {
  const { locale, originalUrl, translateUrl } = useContext(TranslateUrlsContext);

  return (
    <Layout>

    </Layout>
  )
}
