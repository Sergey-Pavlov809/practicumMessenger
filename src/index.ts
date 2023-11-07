import { Login } from "./pages/Auth";
import { SignIn } from "./pages/Registration";
import { Profile } from "./pages/profile";
import { Chat } from "./pages/Dialogs";
import Router from "./routing/Router";
import { StoreApp } from "./core/Store";
import { getUserInfo } from "./controllers/AuthController";
import { Error400 } from "./pages/Error400";
import { Error500 } from "./pages/Error500";

document.addEventListener("DOMContentLoaded", async () => {
  Router.use("/", Login);
  Router.use("/signin", SignIn);
  Router.use("/settings", Profile);
  Router.use("/messenger", Chat);
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
