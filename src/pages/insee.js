import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { useContext } from 'react';
import * as React from 'react';
import { App } from 'insee-deces-front';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'insee-deces-front/build/index.css';
import { Button, Container } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Header, SelectLocale } from '../components';

export default function PageInsee() {
  const { locale, originalUrl, translateUrl } = useContext(TranslateUrlsContext);

  const headerCmp = () => (
    <Container className="p-0 m-0 justify-content-between d-flex w-100" style={{ height: 0 }}>
      <div className="d-inline pt-2">
        <Button variant="outline-secondary" href={translateUrl('/', locale)}>
          <ArrowLeft className="icon" />
        </Button>
      </div>
      <SelectLocale className="d-inline pt-2" />
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
