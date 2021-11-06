import { Link } from 'gatsby';
import { Fragment } from 'react';
import * as React from "react"
import { Badge, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../components';
import logo from '../images/logo.svg';

const IndexPage = () => {

  const content = [
    {
      url: '/insee',
      title: 'Fichier des décès de l\'Insee',
      subtitle: 'Décès survenus en France depuis 1970',
      description: 'Un moteur de recherche ergonomique pour rechercher des informations sur un défunt parmi 25 millions de fiches.',
      keywords: ['moteur de recherche', 'insee', 'archives', 'france']
    },
    {
      url: '/arbreomatic',
      title: 'Arbre-o-matic',
      subtitle: 'Générateur d\'éventail généalogique',
      description: 'Un outil permettant de concevoir à partir d\'un fichier Gedcom des infographies pour illustrer votre généalogie.',
      keywords: ['gedcom', 'infographie', 'impression']
    }
  ];

  return (
    <Layout>
      <div className="text-center m-4">
        <Link to="/">
          <Image src={logo} style={{ width: '8em', maxWidth: '100%' }} />
        </Link>
        <Link to="/" className="text-reset text-decoration-none">
          <h1><span style={{ color: '#637b39' }}>arbre</span>.app</h1>
        </Link>
      </div>
      <Container className="mb-4">
        <Row className="justify-content-center">
          {content.map(({ url, title, subtitle, description, keywords }, i) => (
            <Col key={i} xs={12} md={6} xl={4} className="py-2">
              <Link to={url} className="text-reset text-decoration-none">
                <Card className="card-highlight">
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">{subtitle}</Card.Subtitle>
                    <Card.Text>
                      {description}
                    </Card.Text>
                    <div className="text-center">
                      {/*<span className="text-muted d-block">(mots-clés)</span>*/}
                      {keywords.map((keyword, i) => (
                        <Fragment key={keyword}>
                          <Badge variant="secondary">{keyword}</Badge>
                          {i < keywords.length - 1 && ' '}
                        </Fragment>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage;
