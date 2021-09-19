import { defaultLocale } from '../i18n';
import PageArbreOMatic from './[locale]/arbreomatic';

export default function PageArbreOMaticDefault() {
  return (
    <PageArbreOMatic noRedirect locale={defaultLocale} />
  );
}
