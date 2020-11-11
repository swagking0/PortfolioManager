import { notify } from "../../Components/Notification/Notification";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOG_IN":
      notify("login successful.");
      return state;
    case "LOG_IN_ERROR":
      notify(action.err.message);
      return state;
    case "LOG_OUT":
      notify("logout successful.");
      return state;
    case "LOG_OUT_ERROR":
      notify(action.err.message);
      return state;
    default:
      return state;
  }
};

export default authReducer;
