import { appBrowserRouterConfig } from '@app/router/router.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
    return <RouterProvider router={appBrowserRouterConfig} />;
}

export default App;
