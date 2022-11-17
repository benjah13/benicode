import { FunctionComponent } from 'react';

import { i18n } from 'i18next';
import { I18nextProvider } from 'react-i18next';

interface I18nProviderProps {
  i18n: i18n;
}

const I18nProvider: FunctionComponent<React.PropsWithChildren<I18nProviderProps>> = (props) => {
  const { i18n, children } = props;
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
