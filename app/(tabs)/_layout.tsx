import MaterialDesignIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';
const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                tabBarStyle: {
                    height: 60,
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialDesignIcons name='home-flood' size={24} color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='about'
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <MaterialDesignIcons name='information' size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <MaterialDesignIcons name='account' size={24} color={color} />,
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
