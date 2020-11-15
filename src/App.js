import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Saladeaula from './View/Saladeaula';
import Turma from './View/Turma';
import Espera from './View/Espera';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return(
    <Router>
      <Container fluid>
        <Row>
          <Col lg={3} style={{backgroundColor:"#efefef"}}>
            <div className='logo'>
              <Image src="/img/logo.png" fluid className/>
            </div>

            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Link to="/">Sala de Aula</Link>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse variant="link" eventKey="0">
                  <Card.Body><Link to="/turma">Turma</Link></Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse variant="link" eventKey="0">
                  <Card.Body><Link to="/espera">Espera</Link></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>


          <Col lg={9} style={{backgroundColor:"#e9e9e9"}} className='main'>

            <h1>SALA DE AULA</h1>
            
            <div className='box'>
              <Switch>
                <Route path="/saladeaula">
                  <Saladeaula/>
                </Route>

                <Route path="/turma">
                  <Turma/>
                </Route>

                <Route path="/espera">
                  <Espera/>
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
