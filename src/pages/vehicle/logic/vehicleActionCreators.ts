
import { VehicleActionType } from "./vehicleActionTypes"
import { IVehicle } from "./vehicleModel";

export const doLoadData = (data: IVehicle) =>({
    type: VehicleActionType.DO_LOAD_DATA,
    payload: {
        data 
    }
});

export const doToggleBox = (year: number, model: string, isCheked: boolean) => ({
    type: VehicleActionType.DO_TOGGLE_BOX,
    payload: {
        year,
        model,
        isCheked
    }
});
