import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
type Props = {
    DictionaryKey: string;
};
const LocalText = ({ DictionaryKey = '' }: Props) => {
    const { t } = useTranslation();
    return <Text>{t(DictionaryKey)}</Text>;
};

export default LocalText;
