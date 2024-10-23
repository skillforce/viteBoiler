import { appBrowserRouterConfig } from '@app/router/router.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
    console.log('hello world');
    const sdcsd = 'dscdscsdc';
    return <RouterProvider router={appBrowserRouterConfig} />;
}

export default App;
