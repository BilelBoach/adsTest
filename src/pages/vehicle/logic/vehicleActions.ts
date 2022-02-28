import { VehicleActionType } from "./vehicleActionTypes";
import { IVehicle } from "./vehicleModel";

interface IToggleBoxAction {
    type : VehicleActionType.DO_TOGGLE_BOX;
    payload: {
        year: number,
        model: string,
        isCheked: string;
    }
}

interface ILoadDataAction{
    type : VehicleActionType.DO_LOAD_DATA;
    payload: {
        data : IVehicle;
    }
}

export type VehicleAction = ILoadDataAction | IToggleBoxAction
