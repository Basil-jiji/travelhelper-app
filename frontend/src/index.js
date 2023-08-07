import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import PlaceScreen from './screens/PlaceScreen';
import Signup from './components/Signup';
import AddPlace from './components/AddPlace';
import Login from './components/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/places/:id" element={<PlaceScreen />} />
      <Route path="/users/signup" element={<Signup />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/places/add" element={<AddPlace />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
