import * as React from "react"
import { Link } from "gatsby"
import { Container } from 'react-bootstrap';
import { Layout } from '../components';

const PageNotFound = () => {
  return (
    <Layout>
      <Container className="pt-4 text-center">
        <h1 className="mb-4">Erreur 404</h1>
        <p>
          La page n'a pas été trouvée.
        </p>
        <p>
          Si vous pensez qu'il s'agit d'une erreur, merci de nous écrire à : <span>contact [arobase] arbre [point] app</span>
        </p>
        <p>
          <Link to="/">Retourner à l'accueil</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default PageNotFound;
