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
import Journal from "../Components/Chat/Journal";
import Challenge from "../Components/Chat/Challenge";
import Win from "../Components/Chat/Win";
import ProfessionalChallenge from "../Components/Chat/ProfessionalChallenge";
import ProfessionalWin from "../Components/Chat/ProfessionalWin";
import MindsetMantra from "../Components/Chat/MindsetMantra";
import MindsetChat from "../Components/Chat/MindsetChat";
import InternalChallenge from "../Components/Chat/InternalChallenge";
import InternalChat from "../Components/Chat/InternalChat";
import JournalHistory from "../Components/Chat/JournalHistory";
import Coach from "../Pages/Coach";

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
        path:'coach',
        Component: Coach
      }
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
      {
        path: 'journal',
        Component: Journal
      },
      {
        path: 'challenge',
        Component: Challenge
      },
      {
        path: 'win',
        Component: Win
      },
      {
        path: 'professionalChallenge',
        Component: ProfessionalChallenge
      },
      {
        path: 'professionalWin',
        Component: ProfessionalWin
      },
      {
        path: 'mindsetMantra',
        Component: MindsetMantra
      },
      {
        path: 'mindsetChat',
        Component: MindsetChat
      },
      {
        path: 'internalChallenge',
        Component: InternalChallenge
      },
      {
        path: 'internalChat',
        Component: InternalChat
      },
      {
        path: 'journalHistory',
        Component: JournalHistory
      }
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
