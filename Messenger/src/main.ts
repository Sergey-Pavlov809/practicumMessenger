import { Auth } from "./pages/Auth/Auth";
import { Dialogs } from "./pages/Dialogs/Dialogs";
import { Error400 } from "./pages/Error400/Error400";
import { Registration } from "./pages/Registration/Registration";

const ROUTES: Record<string, string> = {
  "/dialogs": Dialogs(),
  "/registration": Registration(),
  "/": Auth(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  console.log(root, Registration);

  if (root) {
    const component = ROUTES[window.location.pathname] || Error400()({});
    root.innerHTML = component;
  }
});
