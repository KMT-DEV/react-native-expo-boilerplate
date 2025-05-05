import { Middleware } from '@reduxjs/toolkit';

// Type guard
function isActionWithType(action: any): action is { type: string } {
    return typeof action.type === 'string';
}

// Custom Redux Logger Middleware with enhanced console output
// eslint-disable-next-line
export const customReduxLogger: Middleware<{}, any> = (storeAPI) => (next) => (action) => {
    const prevState = storeAPI.getState();

    const result = next(action);

    const nextState = storeAPI.getState();

    if (isActionWithType(action)) {
        console.groupCollapsed(
            `%c Redux Action → ${action.type}`,
            'color: white; background-color: #007acc; padding: 4px 8px; border-radius: 4px; font-weight: bold;'
        );

        // console.log('%cPrev State:', 'color: #9E9E9E; font-weight: bold;', prevState);
        // console.log('%cAction:', 'color: #03A9F4; font-weight: bold;', action);
        // console.log('%cNext State:', 'color: #4CAF50; font-weight: bold;', nextState);

        // Show state differences in table (flattened if possible)
        try {
            const changes = getStateChanges(prevState, nextState);
            if (Object.keys(changes).length > 0) {
                console.log('%cChanged Keys:', 'color: #FF9800; font-weight: bold;');
                console.table(changes);
            }
            // eslint-disable-next-line
        } catch (e) {
            // In case of complex states that can't be compared easily
        }

        console.groupEnd();
    }

    return result;
};

// Helper to compare prev vs next state and extract changed keys
function getStateChanges(prev: any, next: any) {
    const diff: Record<string, any> = {};
    for (const key in next) {
        if (prev[key] !== next[key]) {
            diff[key] = {
                from: prev[key],
                to: next[key]
            };
        }
    }
    return diff;
}
