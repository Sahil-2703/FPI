/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Details from './components/Details.jsx';
import { BinanceTestnet, PolygonAmoyTestnet } from '@thirdweb-dev/chains';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
]);
// const activeChain = 'binance-testnet';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={'30c2fbbb4516940e848263d491f938f4'}
      chainId={80002}
      supportedChains={[PolygonAmoyTestnet]}
      autoConnect={false}>
      <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);
