import { Table } from "react-bootstrap";

export default function GeneralTable({ columns = [], rows = [], Component }) {
  let keys = columns.map((col) => col.field);
  let variant;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((item) => (
            <th className={item.field} sm={item.width} key={item.field}>
              {item.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.id}>
              {keys.map((key) => {
                if (key === "Component") {
                  return <Component row={row} />;
                }
                return <td key={`${row.id} ${key}`}>{row[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
