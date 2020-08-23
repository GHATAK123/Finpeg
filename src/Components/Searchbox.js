import React from "react";
import Container from "react-bootstrap/Container";
import SearchIcon from '@material-ui/icons/Search';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Searchbox extends React.Component {
 
  render() {
    return (
      <Container className="filters">
        <Row>
          <Col>All funds
          <ExpandMoreIcon/>
          </Col>
          <Col>Screener</Col>
          <Col xs={5}>Filter by AMC</Col>
          <Col md={1}xs={2} style={{ backgroundColor: "#0593bf", color: "white" }}
          >
            <SearchIcon/>
          </Col>
        </Row>
      </Container>
    );
  }
}
