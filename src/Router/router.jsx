import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicePage from "../Pages/ServicePage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'about',
                Component: AboutPage
            },
            {
                path: 'services',
                Component: ServicePage
            },
            {
                path: 'blogs',
                Component: BlogPage
            },
            {
                path: 'contact',
                Component: ContactPage
            }
        ]
    }
]);

export default router;