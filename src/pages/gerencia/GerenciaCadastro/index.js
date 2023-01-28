import GeneralInput from "../../../components/GeneralInput";
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function GerenciaCadastro() {
  const [vendedor, setVendedor] = useState("");
  const handleChange = (e) => {
    setVendedor(e.target.value);
  };
  return (
    <>
      <Row className="justify-content-md-center mt-3">
        <Col sm={3}>
          <Card className="text-center">
            <Card.Header>Cadastro de Vendedor</Card.Header>
            <Card.Body>
              <Card.Text>
                <GeneralInput
                  inputType="text"
                  label="Nome"
                  placeholder=""
                  id="Nome"
                  handleChange={handleChange}
                  value={vendedor}
                />
              </Card.Text>
              <Button variant="primary" onClick={() => {}}>
                Salvar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
