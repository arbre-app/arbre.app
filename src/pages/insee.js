import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { useContext } from 'react';
import * as React from 'react';
import { App } from 'insee-deces-front';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'insee-deces-front/build/index.css';
import { Container } from 'react-bootstrap';
import { Header, SelectLocale } from '../components';

export default function PageInsee() {
  const { locale, originalUrl, translateUrl } = useContext(TranslateUrlsContext);

  const headerCmp = () => (
    <Container>
      <Container className="position-absolute text-right ml-n3">
        <SelectLocale className="mt-2 mr-2" />
      </Container>
    </Container>
  );

  const HelmetCmp = ({ children }) => (
    <Header
      title="page.insee.title"
      description="page.insee.description"
    >
      {children}
    </Header>
  );

  return (
    <App
      locale={locale}
      setLocale={newLocale => window.location.href = translateUrl(originalUrl, newLocale)}
      legacyUrl={translateUrl('/legacy/insee', locale)}
      headerCmp={headerCmp}
      helmetCmp={HelmetCmp}
    />
  )
}
