import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header";

function App() {
  const AppLayout = () => {
    return (<>
      <Header />
      <Outlet />
    </>)
  }
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/browse',
          element: <Browse />,
        }
      ]
    }
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <AppLayout />
      </RouterProvider>
    </Provider>
  )
}
export default App;