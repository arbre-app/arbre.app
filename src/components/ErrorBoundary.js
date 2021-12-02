import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import pkg from '../../package.json';
import { EMAIL_CONTACT_STRING } from '../config';

// Note that this (special) component cannot be functional
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.log(errorInfo);
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.errorInfo) {
      const getOwnProperties = obj => Object.fromEntries(Object.getOwnPropertyNames(obj).map(name => [name, obj[name]]));
      const errorString = JSON.stringify({ version: pkg.version, time: new Date().getTime(), userAgent: window.navigator.userAgent, error: getOwnProperties(this.state.error), errorInfo: getOwnProperties(this.state.errorInfo) });
      const errorStringEncoded = btoa(errorString);
      const errorStringEncodedBoundary = `==== BEGIN ERROR ====\n${errorStringEncoded}\n===== END ERROR =====`;
      return (
        <Container className="my-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <FormattedMessage id="page.error.title" />
              </Card.Title>
              <Card.Text>
                <FormattedMessage id="page.error.description" values={{ contact: <span>{EMAIL_CONTACT_STRING}</span> }} />
                <pre className="p-2 mt-2 mb-0" style={{ backgroundColor: '#f7f7f7', whiteSpace: 'pre-wrap' }}>
                  <code>
                    {errorStringEncodedBoundary}
                  </code>
                </pre>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      );
    } else {
      return this.props.children;
    }
  }
}