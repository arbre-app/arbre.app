import { TranslateUrlsContext } from 'gatsby-plugin-translate-urls';
import React, { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Globe2 } from 'react-bootstrap-icons';
import { FormattedMessage } from 'react-intl';
import { AVAILABLE_LANGUAGES_SELECT } from '../config';

// Partially borrowed from:
// https://github.com/arbre-app/browse-gedcom/blob/master/src/components/ChooseLanguage/ChooseLanguage.js

export function SelectLocale({ ...other }) {
  const { locale: currentLocale, originalUrl, translateUrl } = useContext(TranslateUrlsContext);

  return (
    <DropdownButton
      title={(
        <Globe2 className="icon mr-1" />
      )}
      variant="outline-info"
      {...other}
    >
      <Dropdown.Header>
        <FormattedMessage id="common.language" />
      </Dropdown.Header>
      {AVAILABLE_LANGUAGES_SELECT.map(({ locale, name, iconComponent: IconComponent }) => (
        <Dropdown.Item
          href={translateUrl(originalUrl, locale)}
          key={locale}
          active={locale === currentLocale}
        >
          <IconComponent className="icon mr-2" />
          {name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
