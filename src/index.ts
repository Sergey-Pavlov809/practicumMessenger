import { Auth } from "./pages/Auth/Auth";
import { Dialogs } from "./pages/Dialogs/Dialogs";
import { Error400 } from "./pages/Error400/Error400";
import { Error500 } from "./pages/Error500/Error500";
import { Profile } from "./pages/Profile/Profile";
import { Registration } from "./pages/Registration/Registration";

const ROUTES: Record<string, string> = {
  "/dialogs": Dialogs(),
  "/registration": Registration(),
  "/profile": Profile(),
  "/server-error": Error500(),
  "/": Auth(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    const component = ROUTES[window.location.pathname] || Error400()({});
    root.innerHTML = component;
  }
});
