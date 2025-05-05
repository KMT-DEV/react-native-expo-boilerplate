import { configureStore } from '@reduxjs/toolkit';
import { customReduxLogger } from './middlewares/ReduxDebugger';
import settingsReducer from './settings/settingsSlice';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                warnAfter: 200,
            },
        });

        // Add the custom logger only in development
        if (process.env.NODE_ENV === 'development') {
        middlewares.push(customReduxLogger);
        }

        return middlewares;
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
