import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import { useContext, useEffect } from 'react';

export default function PageInsee() {
  const { locale, translateUrl } = useContext(TranslateUrlsContext);

  useEffect(() => {
    window.location.replace(translateUrl('/legacy/arbreomatic', locale));
  }, [locale, translateUrl]);

  return null;
}
