import * as React from "react"
import { Link } from "gatsby"
import { Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../components';
import { EMAIL_CONTACT_STRING } from '../config';

const PageNotFound = () => {
  return (
    <Layout
      title="page.not_found.title"
      description="page.not_found.title"
    >
      <Container className="pt-4 text-center">
        <h1 className="mb-4"><FormattedMessage id="page.not_found.error" /></h1>
        <p>
          <FormattedMessage id="page.not_found.explanation" />
        </p>
        <p>
          <FormattedMessage id="page.not_found.contact" values={{ contact: <span>{EMAIL_CONTACT_STRING}</span> }} />
        </p>
        <p>
          <Link to="/"><FormattedMessage id="page.not_found.back_to_home" /></Link>
        </p>
      </Container>
    </Layout>
  );
}

export default PageNotFound;
