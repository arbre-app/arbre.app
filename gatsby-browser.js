import { IntlProvider } from 'react-intl';
import React from 'react';
import messagesEn from './src/i18n/en.json';
import messagesFr from './src/i18n/fr.json';

const messages = {
  en: messagesEn,
  fr: messagesFr,
}

export const wrapPageElement = ({ element, props }) => {
  const { locale: currentLocale } = props.pageContext;
  const fallbackLocale = 'fr';

  return (
    <IntlProvider
      locale={currentLocale || fallbackLocale}
      messages={messages[currentLocale] || messages[fallbackLocale]}
    >
      {element}
    </IntlProvider>
  )
};
