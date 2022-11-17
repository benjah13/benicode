import { TFuncKey, Trans, TransProps as UntypedTransProps } from 'react-i18next';

interface TransProps extends UntypedTransProps<TFuncKey> {
  i18nKey: string;
}

export default Trans as React.FC<React.PropsWithChildren<TransProps>>;
