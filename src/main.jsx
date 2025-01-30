
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/screens/home/Home'
import OtherProgram_ from './OtherProgram/OtherProgram.jsx'; // Импорт компонента

import './assets/style/global.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <hr style={{ margin: '50px 0', border: '1px solid #ccc' }} />  {/* Добавляем разделительную линию */}
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>  {/* Добавляем отступ сверху */}
    <OtherProgram_ />
    </div>
  </StrictMode>
);
