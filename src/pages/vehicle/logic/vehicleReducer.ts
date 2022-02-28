import { VehicleAction,  } from "./vehicleActions";
import { VehicleActionType } from "./vehicleActionTypes";
import { IVehicle } from "./vehicleModel";

export interface IVehicleState{
    data : IVehicle;
}

const intialState: IVehicleState = {
    data : {"vehicle-models": [], years: [], coverage: {}},
};

const vehicleReducer = (state: IVehicleState = intialState, action: VehicleAction) : IVehicleState => {
    switch (action.type) {
        case VehicleActionType.DO_LOAD_DATA:
            return {data: action.payload.data};

        case VehicleActionType.DO_TOGGLE_BOX:
            const model = action.payload.model;
            const year = action.payload.year;
            const isChecked = action.payload.isCheked;
            let coverageModel;
            if (isChecked) {
                coverageModel = state.data.coverage[model].filter( y => y !== year);
            } else {
                coverageModel = [...state.data.coverage[model], year];
            }
            return { data : {...state.data, coverage: {...state.data.coverage, [model]: coverageModel}} };

        default:
            return state;
    }
}

export default vehicleReducer;
