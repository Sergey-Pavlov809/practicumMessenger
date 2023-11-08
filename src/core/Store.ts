import { User, DialogList, DialogUsers } from "../types";
import { Message } from "../types";
import EventBus from "./EventBus";

type Dispatch<State> = (nextStateOrAction: Partial<State> | Action<State>, payload?: any) => void;
type Action<State> = (dispatch: Dispatch<State>, state: State, payload: any) => void;

class Store<State extends Record<string, any>> extends EventBus {
  state: State = {} as State;

  constructor(defaultState: State) {
    super();

    this.state = defaultState;
    this.set(defaultState);
  }

  public getState() {
    return this.state;
  }

  public set(nextState: Partial<State>) {
    const prevState = { ...this.state };

    this.state = { ...this.state, ...nextState };

    this.emit("changed", prevState, nextState);
  }

  dispatch(nextStateOrAction: Partial<State> | Action<State>, payload?: any) {
    if (typeof nextStateOrAction === "function") {
      nextStateOrAction(this.dispatch.bind(this), this.state, payload);
    } else {
      this.set({ ...this.state, ...nextStateOrAction });
    }
  }
}

interface DefaultState {
  user: User | Record<string, any>;
  dialogList: DialogList[] | [];
  dialogUsers: DialogUsers[] | [];
  messageList: Message[] | Record<string | number, any>;
  selectedDialog: {
    title?: string;
    id?: number;
  };
  foundUsers: User[] | [];
  modals: Record<string, any> | {};
  openedNewDialog: boolean
}

const defaultState: DefaultState = {
  user: {},
  dialogList: [],
  dialogUsers: [],
  messageList: {},
  selectedDialog: {},
  foundUsers: [],
  modals: {},
  openedNewDialog: false,
};

export const StoreApp = new Store(defaultState);
