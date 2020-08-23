import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "./invest.png";
import graph from "./trend.jpg";
import funds from ".././funds.json";
import ReactPaginate from "react-paginate";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class ShowInvestment extends React.Component {
  constructor() {
    super();
    console.log(funds);
    this.state = {
      offset: 0,
      data: funds.result.funds,
      elements: [],
      perPage: 10,
      currentPage: 0,
      pageCount: Math.ceil(funds.result.funds.length / 10),
    };
    console.log(this.state);
  }

  componentWillMount() {
    this.setElementsForCurrentPage();
  }

  showDetails = (e, fund) => {
    e.preventDefault();
    let index = this.state.data.indexOf(fund);
    let data = [...this.state.data];
    console.log(data[index]);
    data[index].show = true;
    this.setState({ data });
    console.log(data[index]);
    this.setElementsForCurrentPage();
  };

  hideDetails = (e, fund) => {
    e.preventDefault();
    let index = this.state.data.indexOf(fund);
    let data = [...this.state.data];
    console.log(data[index]);
    data[index].show = false;
    this.setState({ data });
    console.log(data[index]);
    this.setElementsForCurrentPage();
  };

  setElementsForCurrentPage() {
    let elements = this.state.data
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((fund) => (
        <>
          <Container
            style={{
              backgroundColor: "white",
              textAlign: "center",
              boxShadow: "5px 5px 4px -1px rgba(0,0,0,0.40)",
            }}
          >
            <Row className="funds">
              <Col>
                <img src={Img} alt="" width="75" height="75"></img>
              </Col>
              <Col
                md={9}
                xs={6}
                style={{
                  paddingTop: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                }}
              >
                <p style={{ fontWeight: "bolder" }}>{fund.name}</p>
                <p>{fund.FundType} Mid Cap</p>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3vh",
                  cursor: "pointer",
                }}
              >
                {" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
              </Col>
            </Row>
            {fund.show === true ? (
              <>
                <hr />

                <Row style={{ fontSize: "2vh", whiteSpace: "nowrap" }}>
                  <Col style={{ textAlign: "left" }}>
                    <img src={graph} alt="" width="75" height="75"></img>
                  </Col>
                  <Col>
                    Average 3Y
                    <br /> Rolling Return
                    <br />
            <b>{fund.threeyearReturn}%</b>
                  </Col>
                  <Col>
                    3Y Standard
                    <br /> Deviation
                    <br />
            <b>{fund.fiveyearReturn}%</b>
                  </Col>
                  <Col>
                    1Y <br />
                    Return
                    <br />
            <b>{fund.oneyearReturn}%</b>
                  </Col>
                </Row>
              </>
            ) : null}

            <Row style={{ textAlign: "center", whiteSpace: "nowrap" }}>
              {fund.show === true ? (
                <Col
                  style={{
                    backgroundColor: "#f2f2f2",
                    padding: "10px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => this.hideDetails(e, fund)}
                >
                  {" "}
                  Hide Performance details <ExpandLessIcon/>
                </Col>
              ) : (
                <Col
                  style={{
                    backgroundColor: "#f2f2f2",
                    padding: "10px",
                    fontSize: "1.7vh",
                    cursor: "pointer",
                  }}
                  onClick={(e) => this.showDetails(e, fund)}
                >
                  {" "}
                  Show Performance details <ExpandMoreIcon/>
                </Col>
              )}

              <Col
                style={{
                  backgroundColor: "#0593bf",
                  padding: "10px",
                  color: "white",
                  fontSize: "1.7vh",
                  cursor: "pointer",
                }}
              >
            
                <ShoppingCartIcon style={{float:"left"}}/>
                Invest Now
              </Col>
            </Row>
          </Container>
          <br />
        </>
      ));
    this.setState({ elements: elements });
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  };

  render() {
    let paginationElement;
    if (this.state.pageCount > 1) {
      paginationElement = (
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={<span className="gap">...</span>}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          onPageChange={this.handlePageClick}
          forcePage={this.state.currentPage}
          containerClassName={"pagination"}
          previousLinkClassName={"previous_page"}
          nextLinkClassName={"next_page"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      );
    }

    return (
      <>
        {this.state.elements}
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>{paginationElement}</Col>
          </Row>
        </Container>
      </>
    );
  }
}
