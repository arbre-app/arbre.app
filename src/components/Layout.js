import * as React from 'react';
import '../styles/globals.css';
import { Container } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import { FormattedMessage, useIntl } from 'react-intl';
import { Header } from './Header';
import { version } from '../../package.json';
import { SelectLocale } from './SelectLocale';

export function Layout({ title, description, children }) {
  const intl = useIntl();

  return (
    <>
      <Header title={title} description={description}>
        <body className="theme-light" />
      </Header>

      <Container>
        <Container className="p-0 m-0" style={{ height: 0 }}>
          <SelectLocale className="text-right pt-2" />
        </Container>
      </Container>

      <main>
        {children}
      </main>

      <footer className="mb-2">
        <Container className="text-center">
          <hr />
          <small className="d-block mb-1"><FormattedMessage id="footer.free_software" values={{ name: <strong>arbre.app</strong> }} /></small>
          <a href="https://github.com/arbre-app/arbre.app" target="_blank" rel="noreferrer" className="text-reset text-decoration-none" aria-label={intl.formatMessage({ id: 'footer.github' })}>
            <Github className="icon" />
          </a>
          <small className="text-muted d-block"><FormattedMessage id="footer.version" values={{ version }}/></small>
        </Container>
      </footer>
    </>
  );
}
