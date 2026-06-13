import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import "@cloudscape-design/global-styles/index.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AuthForm from "./components/AuthForm/AuthForm";
import AddChapter from "./components/CreateCourse/3-addChapter";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Course from "./views/Course/Course";
import CreateCourse from "./views/CreateCourse/CreateCourse";
import Home from "./views/Home/Home";
import AssignCourse from "./views/Management/AssignCourse/AssignCourse";
import ContentCatalog from "./views/Management/ContentCatalog/ContentCatalog";
import Management from "./views/Management/Management";
import CreateContent from "./views/Management/MyContents/CreateContent";
import MyContents from "./views/Management/MyContents/MyContents";
import MyCourses from "./views/Management/MyCourses/MyCourses";
import MyLectures from "./views/Management/MyLectures/MyLectures";
import PublicCourses from "./views/Management/PublicCourses/PublicCourses";
import PublicLectures from "./views/Management/PublicLectures/PublicLectures";
import User from "./views/Management/User/User";

Amplify.configure(awsExports);

const managementChildren = [
  {
    path: "",
    element: <Navigate to="/management/myContents" replace />,
  },
  {
    path: "myContents",
    element: <MyContents />,
  },
  {
    path: "createContent",
    element: <CreateContent />,
  },
  {
    path: "contentCatalog",
    element: <ContentCatalog />,
  },
  {
    path: "myLectures",
    element: <MyLectures />,
  },
  {
    path: "publicLectures",
    element: <PublicLectures />,
  },
  {
    path: "myCourses",
    element: <MyCourses />,
  },
  {
    path: "publicCourses",
    element: <PublicCourses />,
  },
  {
    path: "user",
    element: <User />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthForm />,
  },
  {
    path: "/course/:id",
    element: <Course />,
  },
  {
    path: "/course/CreateCourse",
    element: <CreateCourse />,
  },
  {
    path: "/assignCourse/:id",
    element: <AssignCourse />,
  },
  {
    path: "/management",
    element: <Management />,
    children: managementChildren,
  },
  {
    path: "/management/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/addChapter",
    element: <AddChapter />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
