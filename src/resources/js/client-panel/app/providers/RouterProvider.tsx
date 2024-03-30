import { BookingsPage } from '@/pages/bookings';
import { LoginPage } from '@/pages/login';
import { RoomsPage } from '@/pages/rooms';
import { StayingsPage } from '@/pages/stayings/ui/Stayings';
import { routes } from '@/shared/routing';
import { AuthLayout } from '@/widgets/layouts/auth';
import { ReceptionistLayout } from '@/widgets/layouts/receptionist';
import { FC } from 'react';
import { createBrowserRouter, Navigate, RouterProvider as RP } from 'react-router-dom';

const router = createBrowserRouter([{
    element: <ReceptionistLayout />,
    children: [
        {
            path: routes.root,
            element: <Navigate to={routes.rooms} replace />
        },
        {
            path: routes.rooms,
            element: <RoomsPage />
        },
        {
            path: routes.stayings,
            element: <StayingsPage />
        },
        {
            path: routes.bookings,
            element: <BookingsPage />
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