import { Link } from 'gatsby';
import * as React from 'react';
import '../styles/globals.css';
import { Container } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import { FormattedMessage } from 'react-intl';
import { Header } from './Header';
import { version } from '../../package.json';
import { SelectLocale } from './SelectLocale';

export function Layout({ title, description, children }) {
  return (
    <>
      <Header title={title} description={description}>
        <body className="theme-light" />
      </Header>

      <Container>
        <Container className="position-absolute text-right ml-n3 p-0">
          <SelectLocale className="mt-2 mr-2" />
        </Container>
      </Container>

      <main>
        {children}
      </main>

      <footer>
        <Container className="text-center">
          <hr />
          <small className="d-block mb-1"><FormattedMessage id="footer.free_software" values={{ name: <strong>arbre.app</strong> }} /></small>
          <Link to="https://github.com/arbre-app/arbre.app" target="_blank" rel="noreferrer" className="text-reset text-decoration-none">
            <Github className="icon" />
          </Link>
          <small className="text-muted d-block"><FormattedMessage id="footer.version" values={{ version }}/></small>
        </Container>
      </footer>
    </>
  );
}
