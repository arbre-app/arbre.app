import { Link } from 'gatsby';
import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { Fragment, useContext } from 'react';
import * as React from 'react';
import { Badge, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { AppIndicator, Book, CodeSlash, Diagram2 } from 'react-bootstrap-icons';
import { FormattedMessage, useIntl } from 'react-intl';
import { Layout } from '../components';
import logo from '../images/logo.svg';

const IndexPage = () => {
  const intl = useIntl();
  const { locale, translateUrl } = useContext(TranslateUrlsContext);

  const contentPublished = [
    {
      url: '/insee',
      id: 'insee',
      icon: Book,
      keywords: ['search_engine', 'insee', 'archives', 'france'],
    },
    {
      url: '/arbreomatic',
      id: 'arbreomatic',
      icon: Diagram2,
      keywords: ['gedcom', 'infographics', 'print'],
    }
  ];

  const contentWorkInProgress = [
    {
      external: true,
      url: 'https://mon.arbre.app',
      id: 'monarbre',
      icon: AppIndicator,
      keywords: ['gedcom', 'application',]
    }
  ];

  const CardsContents = ({ data }) => (
    <Row className="justify-content-center">
      {data.map(({ url, id, icon: Icon, keywords, external }, i) => {
        const LinkCmp = ({ to, children, ...other }) => external ? <a href={to} {...other}>{children}</a> : <Link to={to} {...other}>{children}</Link>;
        return (
          <Col key={i} xs={12} md={6} xl={4} className="py-2">
            <LinkCmp to={url.startsWith('/') ? translateUrl(url, locale) : url} className="text-reset text-decoration-none">
              <Card className="card-highlight">
                <Card.Body>
                  <Card.Title>
                    <Icon className="icon mr-2" />
                    <FormattedMessage id={`page.home.apps.${id}.title`}/>
                  </Card.Title>
                  <Card.Subtitle className="mb-4 text-muted"><FormattedMessage id={`page.home.apps.${id}.subtitle`}/></Card.Subtitle>
                  <Card.Text>
                    <FormattedMessage id={`page.home.apps.${id}.description`}/>
                  </Card.Text>
                  <div className="text-center">
                    {/*<span className="text-muted d-block">(mots-clés)</span>*/}
                    {keywords.map((keyword, i) => (
                      <Fragment key={keyword}>
                        <Badge variant="secondary"><FormattedMessage id={`page.home.keywords.${keyword}`}/></Badge>
                        {i < keywords.length - 1 && ' '}
                      </Fragment>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </LinkCmp>
          </Col>
        )
      })}
    </Row>
  );

  return (
    <Layout
      title="page.home.title"
      description="page.home.description"
    >
      <div className="text-center p-4">
        <Link to={translateUrl('/', locale)} className="text-reset text-decoration-none">
          <Image src={logo} alt={intl.formatMessage({ id: 'common.alt_logo' })} style={{ width: '8em', maxWidth: '100%' }} />
          <h1><span style={{ color: '#637b39' }}>arbre</span>.app</h1>
        </Link>
      </div>
      <Container className="mb-4">
        <CardsContents data={contentPublished} />
        <h2 className="h4 text-center mt-5">
          <CodeSlash className="icon mr-3" />
          <FormattedMessage id="page.home.under_development" />
        </h2>
        <CardsContents data={contentWorkInProgress} />
      </Container>
    </Layout>
  )
}

export default IndexPage;
