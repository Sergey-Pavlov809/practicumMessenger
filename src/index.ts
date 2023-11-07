import { Login } from "./pages/Auth";
import { SignIn } from "./pages/Registration";
import { Error500 } from "./pages/500";
import { Error404 } from "./pages/404";
import { Profile } from "./pages/profile";
import { Chat } from "./pages/chat";
import Router from "./routing/Router";
import { StoreApp } from "./core/Store";
import { getUserInfo } from "./controllers/AuthController";

document.addEventListener("DOMContentLoaded", async () => {
  Router.use("/", Login);
  Router.use("/signin", SignIn);
  Router.use("/settings", Profile);
  Router.use("/messenger", Chat);
  Router.use("/error404", Error404);
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
