import { defaultLocale } from '../i18n';
import PageIndex from './[locale]';

export default function PageIndexDefault() {
  return (
    <PageIndex noRedirect locale={defaultLocale} />
  );
}
