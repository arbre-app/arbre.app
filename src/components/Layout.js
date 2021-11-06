import { Link } from 'gatsby';
import * as React from 'react';
import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { useContext } from 'react';
import '../styles/globals.css';
import { Container } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet';
import { Header } from './Header';
import { version, repository } from '../../package.json';

export function Layout({ children }) {
  const { locale, originalUrl, translateUrl } = useContext(TranslateUrlsContext);

  return (
    <div>
      <Header />

      <Helmet>
        <body className="theme-light" />
      </Helmet>

      <main>
        {children}
      </main>

      <footer>
        <Container className="text-center">
          <hr />
          <small className="d-block"><strong>arbre.app</strong> est un logiciel libre</small>
          <Link to={repository.url} target="_blank" rel="noreferrer" className="text-reset">
            <Github className="icon" />
          </Link>
          <small className="text-muted d-block">Version {version}</small>
        </Container>
      </footer>
    </div>
  );
}
