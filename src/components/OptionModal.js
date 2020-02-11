import React from 'react';
import Modal from 'react-modal';

// The !! sets anything to either true or false e.g. 'test' is true undefined is false
// The onRequestClose allows it so if the user clicks outside of the modal or hit esc it closes the modal

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    className="modal"
  >
    <h3 className="modal__title"> Selected Option: </h3>
    {props.selectedOption && <p className="modal__body"> {props.selectedOption} </p>}
    <button className="button" onClick={props.handleClearSelectedOption}> Close </button>
  </Modal>
);

export default OptionModal; 