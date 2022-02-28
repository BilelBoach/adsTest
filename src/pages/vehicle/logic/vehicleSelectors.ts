import { createSelector } from "reselect";
import { IVehicleState } from './vehicleReducer';

export const getDataSelector = createSelector(
    (state: IVehicleState) => state.data,
    (data) => data
  );
  