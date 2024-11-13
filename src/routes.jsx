import App from "./App";
import PageNotFound from "./pages/404/PageNotFound";
import CartPage from "./pages/cart/CartPage";
import HomePage from "./pages/home/HomePage";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/cart', element: <CartPage /> },
            { path: '*', element: <PageNotFound /> },
        ]
    }
]

export default routes