import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.toggleModal()}>
          Open Modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal__body">
              <h1>Modal Title</h1>
              <p>
                LOrems LOrems LOremsLOrems LOrem sLOremsLOre msLOremsL Orems
                LOrems
              </p>

              <button onClick={() => this.toggleModal()}>Close Modal</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
