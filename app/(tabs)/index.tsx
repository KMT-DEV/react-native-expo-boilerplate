import LocalText from '@/locales/components/LocalText';
import i18next from '@/locales/config';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { setReduxRun } from '@/rtk/settings/settingsSlice';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Surface, Button as PaperButton } from 'react-native-paper';

const Home = () => {
    const dispatch = useAppDispatch();

    const reduxState: boolean = useAppSelector((state) => state.settings.reduxRun);
    const [direction, setDirection] = useState<'ltr' | 'rtl'>(i18next.language === 'ar' ? 'rtl' : 'ltr');

    const toggleLanguage = () => {
        const newLanguage = i18next.language === 'ar' ? 'en' : 'ar';
        i18next.changeLanguage(newLanguage);
        setDirection(newLanguage === 'ar' ? 'rtl' : 'ltr');
    };

    useEffect(() => {
        dispatch(setReduxRun(true));
        // eslint-disable-next-line
    }, []);

    return (
        <View style={[styles.container, { direction }]}>
            <Text>{reduxState ? 'Redux run' : 'Redux not run'}</Text>
            <View style={{ alignContent: 'flex-start', width: '100%' }}>
                <LocalText DictionaryKey={'HELLO'} />
            </View>
            <Button title='Toggle Language' onPress={toggleLanguage} />
            <Surface style={{ width: '100%', height:100 }}>
                <LocalText DictionaryKey={'HELLO'} />
                <PaperButton>
                    Press Me
                </PaperButton>
            </Surface>
        </View>
    );
};
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
