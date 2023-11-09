import Router from "./src/routing/Router";
import { StoreApp } from "./src/core/Store";
import { getUserInfo } from "./src/controllers/AuthController";
import { Error400 } from "./src/pages/Error400/index";
import { Error500 } from "./src/pages/Error500/index";
import { Dialog } from "./src/pages/Dialog/index";
import { Profile } from "./src/pages/Profile/index";
import { Login } from "./src/pages/Login";
import { SignUp } from "./src/pages/SignUp";

document.addEventListener("DOMContentLoaded", async () => {
  Router.use("/", Login);
  Router.use("/sign-up", SignUp);
  Router.use("/settings", Profile);
  Router.use("/messenger", Dialog);
  Router.use("/error404", Error400);
  Router.use("/error500", Error500);

  StoreApp.on("changed", () => {});

  let isProtectedRoute = true;

  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/signin"
  ) {
    isProtectedRoute = false;
  }

  try {
    await getUserInfo();
    Router.start();

    if (!isProtectedRoute) Router.go("/messenger");
  } catch (e) {
    Router.start();

    if (isProtectedRoute) Router.go("/");
  }
});
