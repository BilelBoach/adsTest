interface ITableProps {
  columns: string[];
  rows: string[];
  renderCellContent: (columnName: string, rowName: string) => JSX.Element;
  renderLogo?: () => JSX.Element;
}

export const Table: React.FC<ITableProps> = ({
  columns,
  rows,
  renderCellContent,
  renderLogo,
}) => {
  const renderHeader = () => (
    <thead>
      <tr>
        <td>{renderLogo ? renderLogo() : null}</td>
        {columns.map((column) => (
          <th key={column}>
            <div>{column}</div>
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderBody = () => (
    <tbody>
      {rows.map((row) => (
        <tr key={row}>
          <th>{row}</th>
          {columns.map((column) => (
            <td key={column}>{renderCellContent(column, row)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <table>
      {renderHeader()}
      {renderBody()}
    </table>
  );
};
