import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
class PageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          currency: '₹',
          currentDate: '',
          invoiceNumber: 1,
          dateOfIssue: '',
          billTo: '',
          billToEmail: '',
          billToAddress: '',
          billFrom: '',
          billFromEmail: '',
          billFromAddress: '',
          notes: '',
          total: '0.00',
          subTotal: '0.00',
          taxRate: '',
          taxAmmount: '0.00',
          discountRate: '',
          discountAmmount: '0.00'
        };
    }
    render(){
        return(
            <Card className="p-4 p-xl-5 my-3 my-xl-4">
            <hr className="my-4"/>
            <Row className="mb-5">
              <Col>
                <Form.Label className="fw-bold">Bill to:</Form.Label>
                <Form.Control placeholder={"Who is this invoice to?"} rows={3} value={this.state.billTo} type="text" name="billTo" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required="required"/>
                <Form.Control placeholder={"Email address"} value={this.state.billToEmail} type="email" name="billToEmail" className="my-2" onChange={(event) => this.editField(event)} autoComplete="email" required="required"/>
                <Form.Control placeholder={"Billing address"} value={this.state.billToAddress} type="text" name="billToAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required="required"/>
              </Col>
              <Col>
                <Form.Label className="fw-bold">Bill from:</Form.Label>
                <Form.Control placeholder={"Who is this invoice from?"} rows={3} value={this.state.billFrom} type="text" name="billFrom" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required="required"/>
                <Form.Control placeholder={"Email address"} value={this.state.billFromEmail} type="email" name="billFromEmail" className="my-2" onChange={(event) => this.editField(event)} autoComplete="email" required="required"/>
                <Form.Control placeholder={"Billing address"} value={this.state.billFromAddress} type="text" name="billFromAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required="required"/>
              </Col>
              </Row>
              </Card>
        )
    }
};
export default PageForm;
        
