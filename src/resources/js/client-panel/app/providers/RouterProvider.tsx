import { BookingsPage } from '@/pages/bookings';
import { ClientsPage } from '@/pages/clients';
import { DashboardPage } from '@/pages/dashboard';
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
            element: <Navigate to={routes.dashboard} replace />
        },
        {
            path: routes.rooms,
            element: <RoomsPage />
        },
        {
            path: routes.clients,
            element: <ClientsPage />
        },
        {
            path: routes.dashboard,
            element: <DashboardPage />
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
}],
    {
        basename: '/client'
    });

export const RouterProvider: FC = () => {
    return (
        <RP router={router} />
    );
};