import { useEffect } from 'react';
import { RouterProvider } from './providers/RouterProvider';
import { sessionModel } from '../entity/session';

export const App = () => {

    useEffect(() => {
        sessionModel.getAuthFx();
    }, []);

    return (
        <RouterProvider />
    );
}