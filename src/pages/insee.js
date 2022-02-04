import { Link } from 'gatsby';
import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { useContext } from 'react';
import * as React from 'react';
import { App } from 'insee-deces-front';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'insee-deces-front/build/index.css';
import { Button, Container } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useIntl } from 'react-intl';
import { Header, SelectLocale } from '../components';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function PageInsee() {
  const intl = useIntl();
  const { locale, translateUrl } = useContext(TranslateUrlsContext);

  const headerCmp = () => (
    <Container className="p-0 m-0 justify-content-between d-flex w-100" style={{ height: 0 }}>
      <div className="d-inline pt-2">
        <Button as={Link} to={translateUrl('/', locale)} variant="outline-secondary" aria-label={intl.formatMessage({ id: 'common.back_home' })}>
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
    <ErrorBoundary>
      <App
        locale={locale}
        legacyUrl={translateUrl('/legacy/insee', locale)}
        headerCmp={headerCmp}
        helmetCmp={HelmetCmp}
      />
    </ErrorBoundary>
  )
}
