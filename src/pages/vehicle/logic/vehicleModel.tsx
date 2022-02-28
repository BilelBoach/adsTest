export interface IVehicle {
  "vehicle-models": string[];
  years: number[];
  coverage: {
    [key: string]: number[];
  };
}
