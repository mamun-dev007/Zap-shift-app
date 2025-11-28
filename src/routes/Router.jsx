import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import Mypercels from "../pages/dashboard/myPercels/Mypercels";
import Payment from "../pages/dashboard/myPercels/payment/Payment";
import PaymentSuccess from "../pages/dashboard/myPercels/payment/PaymentSuccess";
import PaymentCancel from "../pages/dashboard/myPercels/payment/PaymentCancel";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "/sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },

  {
    path: "dashboardLayout",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'mypercels',
        Component:Mypercels,
      },
      {
        path: 'payment/:percelId',
        Component:Payment,
      },
      {
        path: 'Payment-success',
        Component:PaymentSuccess,
      },
      {
        path: 'Payment-cancel',
        Component:PaymentCancel,
      },
      {
        path: 'PaymentHistory',
        Component:PaymentHistory,
      },
    ],
  },
]);

export default Router;
