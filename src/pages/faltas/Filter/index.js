import GeneralInput from "../../../components/GeneralInput";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const handleChange = () => {};

export default function Filter() {
  const itemListVendedor = ["Vendedor 1", "Vendedor 2", "Vendedor 3"];
  const itemListStatus = ["Aguarde", "Comprado", "Falta", "Excluido"];
  return (
    <Card className="p-2">
      <Card.Header as="h6">Filtros:</Card.Header>
      <Card.Body>
        <Row className="Row">
          <Col sm={6}>
            <GeneralInput
              inputType="select"
              label="Vendedor"
              placeholder=""
              itemList={itemListVendedor}
              id="Vendedor"
              handleChange={handleChange}
            />
          </Col>
          <Col sm={6}>
            <GeneralInput
              inputType="select"
              label="Status"
              placeholder=""
              itemList={itemListStatus}
              id="Vendedor"
              handleChange={handleChange}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
