import { createRoot } from 'react-dom/client';
import { App } from './App';
import { appStarted } from '@/shared/config';
import { restoreToken } from '@/shared/api/token/core';
import '@/shared/assets/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

appStarted();
restoreToken();
root.render(
    <App />,
);