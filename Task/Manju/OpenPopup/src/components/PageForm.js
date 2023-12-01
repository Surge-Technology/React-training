import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class PageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      billTo: '',
      billToEmail: '',
      billToAddress: '',
      billFrom: '',
      billFromEmail: '',
      billFromAddress: '',
      showPopup: false,
    };
  }


  openPopup = () => {
    this.setState({ showPopup: true });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  editField = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.showPopup) {
      return (
        <div className="popup ">
          <Card className="p-4 p-xs-5 my-3 w-100 h-65  ">
           
            <Row className="mb-5">
              <div className="container">

                <h1>Admin ProductList Page</h1>

                <Link className="btn btn-warning btn-block float-end m-2" to="/user/add">

                  Add Product

                </Link>

                <table class="table">

                  <thead>

                    <tr className="bg-dark text-white">
                      <th scope="col">Product Name</th>

                      <th scope="col">Product Price</th>

                      <th scope="col">Stock</th>

                      <th scope="col">Actions</th>



                    </tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td>Blue Star Ac</td>
                      <td>75000</td>
                      <td>200</td>
                    <Button> <td>Add</td></Button> 
                    </tr>
                  </tbody>

                </table>


              </div>


            </Row>
            <div className="col-md-12 text-center " >
              <button type="button" className="btn btn-primary m-3" >
                Submit
              </button>
              <button type="button" className="btn btn-warning" onClick={this.closePopup}>
                Close
              </button>
            </div>
          </Card>
        </div>
      );
    }

    return (<div className='bg-secondary custom-button'>
      <button type="button" className="
btn btn-success btn-sm float-start " onClick={this.openPopup}>
        Open Popup
      </button>
    </div>

    );
  }
}

export default PageForm;
