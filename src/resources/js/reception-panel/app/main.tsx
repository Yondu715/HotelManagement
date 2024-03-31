import { createRoot } from 'react-dom/client';
import { App } from './App';
import { appStarted } from '@/reception/shared/config';
import { restoreToken } from '@/reception/shared/api/token/core';
import '@/reception/shared/assets/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

appStarted();
restoreToken();
root.render(
    <App />,
);