import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicePage from "../Pages/ServicePage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import ChatLayout from "../Layout/ChatLayout";
import StartChat from "../Components/Chat/StartChat";
import AiChat from "../Components/Chat/AiChat";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "services",
        Component: ServicePage,
      },
    ],
  },
  {
    path: "chat",
    Component: ChatLayout,
    children: [
      {
        index: true,
        Component: StartChat,
      },
      {
        path: "ai-chat",
        Component: AiChat
      }
    ],
  },
]);

export default router;
