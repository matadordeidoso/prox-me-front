import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'


class Turma extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Form>
                                <h4>Curso</h4>
                                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                                        <Form.Label></Form.Label>
                                        <Form.Control as="select" size="sm" custom>
                                        <option>Selecione um Curso...</option>
                                        <option>Engenharia de Software</option>
                                        <option>Engenharia de Computação</option>
                                        <option>Engenharia Civil</option>
                                        <option>Engenharia Mecânica</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}></Col>
                    </Row>
                </Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>Turma</th>
                            <th>Situação</th>
                            <th>Tempo de Atendimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estrutura de Dados 2</td>
                            <td>B</td>
                            <td>
                                <Form>
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                    />
                                </Form>
                            </td>
                            <td>(contagem regressiva)</td>
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Turma;