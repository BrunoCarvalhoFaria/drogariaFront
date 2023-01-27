import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function GeneralTable({
  columns = [],
  rows = [],
  editRow = () => {},
  deleteRow = () => {},
}) {
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
          if (row.ProcuraDivida === "Procura") {
            variant = "primary";
          } else {
            variant = "danger";
          }
          return (
            <tr key={row.id}>
              {keys.map((key) => {
                if (key === "ProcuraDivida") {
                  return;
                }
                return <td key={`${row.id} ${key}`}>{row[key]}</td>;
              })}
              <Dropdown>
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-${row.id}`}>
                      {row.ProcuraDivida}
                    </Tooltip>
                  }
                >
                  <Dropdown.Toggle
                    variant={variant}
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                </OverlayTrigger>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => editRow(row.id)}>
                    Editar
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteRow(row.id)}>
                    Excluir
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
