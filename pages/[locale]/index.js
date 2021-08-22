import { defaultLocale, getAllLocaleSlugs, getLocale } from '../../i18n';

export default function PageIndex({ locale }) {
  return (
    null
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
