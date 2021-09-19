import React from 'react';
import { App } from 'insee-deces-front';
import { DefaultLocaleRedirect } from '../../components';
import { getStaticPaths, getStaticProps } from './index';

export default function PageInsee({ noRedirect, locale }) {
  return (
    <DefaultLocaleRedirect noRedirect={noRedirect} locale={locale} path="/insee">
      <App
        locale={locale}
        setLocale={newLocale => console.log(newLocale)}
        legacyUrl="#"
      />
    </DefaultLocaleRedirect>
  )
};

export { getStaticPaths, getStaticProps };
