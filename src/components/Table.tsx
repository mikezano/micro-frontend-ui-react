import { IItem } from "../interface/interface";

interface ITableColumnsProps {
  columns: string[];
}

interface ITableRowsProps {
  rows: Map<number, string[]>;
}

interface ITableProps extends ITableColumnsProps, ITableRowsProps {}

const TableColumns = ({ columns }: ITableColumnsProps) => {
  return (
    <thead className="table__columns">
      <tr>
        {columns.map((column: string) => (
          <th className="table__column" key={Math.random()}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableRows = ({ rows }: ITableRowsProps) => {
  return (
    <tbody className="table__rows">
      {Array.from(rows.entries()).map(([key, values]) => (
        <tr className="table__row" key={Math.random()}>
          {values.map((value: string) => (
            <td className="table__cell" key={Math.random()}>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
export const Table = ({ columns, rows }: ITableProps) => {
  return (
    <table className="table">
      <TableColumns columns={columns} />
      <TableRows rows={rows} />
    </table>
  );
};
