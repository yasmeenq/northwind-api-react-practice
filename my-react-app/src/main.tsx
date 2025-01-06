import { createRoot } from 'react-dom/client';
import './index.css';

import { Layout } from './components/LayoutArea/Layout/Layout';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Redux/store';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <Layout />
        </Provider>
    </BrowserRouter>

)


