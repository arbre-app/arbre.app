import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { useContext } from 'react';
import * as React from 'react';
import { App } from 'insee-deces-front';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'insee-deces-front/build/index.css';

export default function PageInsee() {
  const { locale, originalUrl, translateUrl } = useContext(TranslateUrlsContext);

  return (
    <App
      locale={locale}
      setLocale={newLocale => window.location.href = translateUrl(originalUrl, newLocale)}
      legacyUrl="#"
    />
  )
}
