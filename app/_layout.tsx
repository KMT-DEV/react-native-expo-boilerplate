import { Stack } from 'expo-router';
//import * as Updates from 'expo-updates';
import { useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import i18next from '../locales/config';
import { store } from '../rtk/store';
import { DarkTheme, LightTheme } from '../theme/ThemeConfig';

const setAppDirection = (language: string) => {
    const isRTL = language === 'ar';

    if (I18nManager.isRTL !== isRTL) {
        I18nManager.forceRTL(isRTL);
        I18nManager.allowRTL(isRTL);

        // Reload the app to apply the changes
        // if (!__DEV__ && Platform.OS !== 'web') {
        //     Updates.reloadAsync();
        // }
    }
};

// Set initial direction based on the current language
setAppDirection(i18next.language);

export default function RootLayout() {
    // Automatically detect system theme
    const [appTheme, setAppTheme] = useState<string>('light');

    useEffect(() => {
        console.log(`Current theme: ${appTheme}`);
    }, [appTheme]);

    return (
        <StoreProvider store={store}>
            <PaperProvider theme={appTheme === 'dark' ? DarkTheme : LightTheme}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='(tabs)' />
                </Stack>
            </PaperProvider>
        </StoreProvider>
    );
}
