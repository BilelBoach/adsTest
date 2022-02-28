import { createStore, combineReducers } from "redux";
import vehicleReducer from "./pages/vehicle/logic/vehicleReducer"

const rootReducer = combineReducers({
  vehicle: vehicleReducer,
});

export const store =  createStore(rootReducer, {});

export type Store = ReturnType<typeof rootReducer>
