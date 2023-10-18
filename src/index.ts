import { Auth } from "./pages/Auth/Auth";
import { Dialogs } from "./pages/Dialogs/Dialogs";
import { Error400 } from "./pages/Error400/Error400";
import { Error500 } from "./pages/Error500/Error500";
import { Profile } from "./pages/Profile/Profile";
import { Registration } from "./pages/Registration/Registration";

const ROUTES: Record<string, string> = {
  "/dialogs": Dialogs(),

  "/profile": Profile(),

  "/": "",
};

const ROUTES_NEW: Record<string, any> = {
  "/": new Auth(),
  "/register": new Registration(),
  "/server-error": new Error500(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  const component = ROUTES_NEW[window.location.pathname] || new Error400({});

  // console.log(new Auth());

  if (root) {
    root.append(component.element!);

    component.dispatchComponentDidMount();
    //const component = ROUTES[window.location.pathname] || Error400()({});
    //root.innerHTML = component;
  }
});
