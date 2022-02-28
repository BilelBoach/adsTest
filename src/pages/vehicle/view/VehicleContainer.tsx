import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../../../components/Box";
import { Logo } from "../../../components/Logo";
import { Table } from "../../../components/Table";
import { doLoadData, doToggleBox } from "../logic/vehicleActionCreators";
import { getDataSelector } from "../logic/vehicleSelectors";
import { Store } from "../../../store";
import dataFromJson from "../../../data/coverage.json";

export const VehicleContainer: React.FC = () => {
  const dispatch = useDispatch();

  const data = useSelector((store: Store) => getDataSelector(store.vehicle));

  useEffect(() => {
    dispatch(doLoadData(dataFromJson));
  }, []);

  const isExistInCoverage = (year: string, model: string): boolean => {
    const key = model as keyof typeof data.coverage;
    const getModelFromCoverage: number[] = data.coverage[key];
    return getModelFromCoverage.some((y) => y === Number(year));
  };

  const onClickBox = (year: string, model: string): (() => void) => {
    return function () {
      dispatch(
        doToggleBox(Number(year), model, isExistInCoverage(year, model))
      );
    };
  };

  const renderCellTableContent = (
    columnName: string,
    rowName: string
  ): JSX.Element => (
    <Box
      isChecked={isExistInCoverage(columnName, rowName)}
      onClick={onClickBox(columnName, rowName)}
    />
  );

  const renderLogoTable = (): JSX.Element => (
    <Logo source={"./images/logo.png"} />
  );

  return (
    <div className="vehicle">
      <Table
        columns={data.years.map((year) => year.toString())}
        rows={data["vehicle-models"]}
        renderCellContent={renderCellTableContent}
        renderLogo={renderLogoTable}
      />
    </div>
  );
};

export default VehicleContainer;
