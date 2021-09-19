import { defaultLocale } from '../i18n';
import PageInsee from './[locale]/insee';

export default function PageInseeDefault() {
  return (
    <PageInsee noRedirect locale={defaultLocale} />
  );
}
