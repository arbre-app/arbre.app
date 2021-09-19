import { IntlProvider } from 'react-intl';
import { DefaultLocaleRedirect } from '../../components';
import { getAllLocaleSlugs, getLocale } from '../../i18n';

export default function PageIndex({ noRedirect, locale }) {
  return (
    <DefaultLocaleRedirect noRedirect={noRedirect} locale={locale} path="/">
      <IntlProvider locale={locale} messages={{}}>
        abc
      </IntlProvider>
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
