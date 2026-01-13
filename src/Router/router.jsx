import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import ChatLayout from "../Layout/ChatLayout";
import StartChat from "../Components/Chat/StartChat";
import AiChat from "../Components/Chat/AiChat";
import Setting from "../Components/Chat/Setting";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
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
        Component: AiChat,
      },
      {
        path: "setting",
        Component: Setting,
      },
    ],
  },
  {
    path: "login",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: 'register',
        Component: Register
      }
    ],
  },
]);

export default router;
