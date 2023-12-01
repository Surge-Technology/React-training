import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PageForm from './PageForm';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div >
        <Button variant="primary" onClick={this.openModal}>
          Open Form
        </Button>

        <Modal show={this.state.showModal} onHide={this.closeModal} size="xl"  >
          <Modal.Body>
            <PageForm />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Page;
