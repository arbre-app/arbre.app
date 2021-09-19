import { DefaultLocaleRedirect } from '../../components';
import { StaticRedirect } from '../../components/StaticRedirect';
import { getAllLocaleSlugs, getLocale } from '../../i18n';

export default function PageArbreOMatic({ noRedirect, locale }) {
  return (
    <DefaultLocaleRedirect noRedirect={noRedirect} locale={locale} path="/">
      <StaticRedirect redirect path="/legacy/arbreomatic" />
    </DefaultLocaleRedirect>
  );
}

export async function getStaticPaths() {
  const paths = getAllLocaleSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const locale = getLocale(params.locale);
  return {
    props: {
      locale,
    },
  };
}
