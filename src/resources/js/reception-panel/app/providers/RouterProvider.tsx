import { BookingsPage } from '@/reception/pages/bookings';
import { ClientsPage } from '@/reception/pages/clients';
import { DashboardPage } from '@/reception/pages/dashboard';
import { LoginPage } from '@/reception/pages/login';
import { RoomsPage } from '@/reception/pages/rooms';
import { StayingsPage } from '@/reception/pages/stayings/ui/Stayings';
import { routes } from '@/reception/shared/routing';
import { AuthLayout } from '@/reception/widgets/layouts/auth';
import { ReceptionistLayout } from '@/reception/widgets/layouts/receptionist';
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
        basename: '/reception'
    });

export const RouterProvider: FC = () => {
    return (
        <RP router={router} />
    );
};