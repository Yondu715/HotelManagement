import { FC } from 'react';
import { createBrowserRouter, Navigate, RouterProvider as RP } from 'react-router-dom';
import { routes } from '@/client/shared/routing';
import { ClientLayout } from '@/client/widgets/layouts/client';
import { AuthLayout } from '@/client/widgets/layouts/auth';
import { LoginPage } from '@/client/pages/auth';
import { RoomsPage } from '@/client/pages/rooms';

const router = createBrowserRouter([{
    element: <ClientLayout />,
    children: [
        {
            path: routes.root,
            element: <Navigate to={routes.rooms} replace />
        },
        {
            path: routes.rooms,
            element: <RoomsPage />
        }
    ]
},
{
    element: <AuthLayout />,
    children: [
        {
            path: routes.auth.login,
            element: <LoginPage />
        }
    ]
}]);

export const RouterProvider: FC = () => {
    return (
        <RP router={router} />
    );
};