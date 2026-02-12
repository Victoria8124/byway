import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/index.scss';
import { LevelProvider } from './context/LevelProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LevelProvider>
      <App />
    </LevelProvider>
  </StrictMode>
);
