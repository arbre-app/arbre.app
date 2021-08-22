import React from 'react';
import { App } from 'insee-deces-front';
import { getStaticPaths, getStaticProps } from './index';

export default function PageInsee({ locale }) {
  return (
    <App
      locale={locale}
      setLocale={newLocale => console.log(newLocale)}
      legacyUrl="#"
    />
  )
};

export { getStaticPaths, getStaticProps };
