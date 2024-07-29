import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  fromairports: undefined,
  toairports: undefined,
  departure: undefined,
  returnDate: undefined,
  travellers: undefined,
  classType: undefined,
};

export const FlightContext = createContext(INITIAL_STATE);

const FlightReducer = (state, action) => {
  switch (action.type) {
    case "NEW_FSEARCH":
      return action.payload;
    case "RESET_FSEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const FlightContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FlightReducer, INITIAL_STATE);

  return (
    <FlightContext.Provider
      value={{
        fromairports: state.fromairports,
        toairports: state.toairports,
        departure: state.departure,
        returnDate: state.returnDate,
        travellers: state.travellers,
        classType: state.classType,
        dispatch,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};
