import { appBrowserRouterConfig } from '@app/router/router.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
    console.log('hello world');
    return <RouterProvider router={appBrowserRouterConfig} />;
}

export default App;
