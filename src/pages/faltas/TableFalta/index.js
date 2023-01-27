import * as React from "react";
import { useState, useEffect } from "react";
import GeneralTable from "../../../components/GeneralTable";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export default function TableFalta() {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 1 },
    { field: "CodigoBarras", headerName: "Código de Barras", width: 2 },
    { field: "NomeProduto", headerName: "Nome do Produto" },
    { field: "Laboratorio", headerName: "Laboratório", width: 1 },
    { field: "Qtd", headerName: "Qtd.", width: 1 },
    { field: "NomeCliente", headerName: "Nome do Cliente", width: 2 },
    { field: "Telefone", headerName: "Telefone", width: 1 },
    { field: "Pago", headerName: "Pago?", width: 1 },
    { field: "Vendedor", headerName: "Vendedor", width: 1 },
    { field: "Status", headerName: "Status", width: 1 },
    { field: "ProcuraDivida", headerName: "", width: 1 },
  ];

  const rows = [
    {
      id: 1,
      CodigoBarras: 78936502018,
      NomeProduto: "Lamotrigina 50mg c/30 cpr",
      Laboratorio: "Medley",
      Qtd: 5,
      NomeCliente: "Maria Aparecida",
      Telefone: "98104-6565",
      Pago: "Sim",
      Vendedor: "Ricardo",
      ProcuraDivida: "Procura",
      Status: "Aguarde",
    },
    {
      id: 2,
      CodigoBarras: 78936502018,
      NomeProduto: "Lamotrigina 50mg c/30 cpr",
      Laboratorio: "Medley",
      Qtd: 5,
      NomeCliente: "Maria Aparecida",
      Telefone: "98104-6565",
      Pago: "Sim",
      Vendedor: "Ricardo",
      ProcuraDivida: "Procura",
      Status: "Aguarde",
    },
    {
      id: 3,
      CodigoBarras: 78936502018,
      NomeProduto: "Lamotrigina 50mg c/30 cpr",
      Laboratorio: "Medley",
      Qtd: 5,
      NomeCliente: "Maria Aparecida",
      Telefone: "98104-6565",
      Pago: "Sim",
      Vendedor: "Ricardo",
      ProcuraDivida: "Procura",
      Status: "Aguarde",
    },
    {
      id: 4,
      CodigoBarras: 78936502018,
      NomeProduto: "Lamotrigina 50mg c/30 cpr",
      Laboratorio: "Medley",
      Qtd: 5,
      NomeCliente: "Maria Aparecida",
      Telefone: "98104-6565",
      Pago: "Sim",
      Vendedor: "Ricardo",
      ProcuraDivida: "Divida",
      Status: "Aguarde",
    },
    {
      id: 5,
      CodigoBarras: 78936502018,
      NomeProduto: "Lamotrigina 50mg c/30 cpr",
      Laboratorio: "Medley",
      Qtd: 5,
      NomeCliente: "Maria Aparecida",
      Telefone: "98104-6565",
      Pago: "Sim",
      Vendedor: "Ricardo",
      ProcuraDivida: "Divida",
      Status: "Aguarde",
    },
  ];

  const handleDeleteRow = (rowId) => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };

  return (
    <>
      <GeneralTable
        columns={columns}
        rows={rows}
        editRow={() => {}}
        deleteRow={handleDeleteRow}
      />
      <Modal show={showModalDelete} onHide={handleCloseModalDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Falta</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja exluir a falta?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModalDelete}>
            Não
          </Button>
          <Button variant="danger" onClick={handleCloseModalDelete}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
