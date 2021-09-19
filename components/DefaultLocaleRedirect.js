import { defaultLocale } from '../i18n';
import { StaticRedirect } from './StaticRedirect';

export function DefaultLocaleRedirect({ noRedirect, locale, path, children }) {
  return (
    <StaticRedirect redirect={!noRedirect && locale === defaultLocale} path={path}>
      {children}
    </StaticRedirect>
  );
}
