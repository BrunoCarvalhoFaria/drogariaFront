import GeneralInput from "../../../components/GeneralInput";
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Bloqueio({ login }) {
  const Password = "";
  const [psw, setpsw] = useState("");
  const handleChange = (e) => {
    setpsw(e.target.value);
  };

  const checkPassword = () => {
    if (psw === Password) {
      login();
    } else {
      setpsw("");
    }
  };
  return (
    <>
      <Row className="justify-content-md-center mt-3">
        <Col sm={3}>
          <Card className="text-center">
            <Card.Header>Gerência</Card.Header>
            <Card.Body>
              <Card.Title>Acesso Restrito</Card.Title>
              <Card.Text>
                <GeneralInput
                  inputType="password"
                  label="Senha"
                  placeholder=""
                  id="Senha"
                  handleChange={handleChange}
                  value={psw}
                />
              </Card.Text>
              <Button variant="primary" onClick={checkPassword}>
                Entrar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
