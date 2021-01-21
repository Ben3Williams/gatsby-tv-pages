import React from 'react';
import ReactModal from 'react-modal';

import './channel-modal.scss';

ReactModal.setAppElement('#___gatsby');

class ChannelModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({
            showModal: true
        });
    }

    handleCloseModal() {
        this.setState({
            showModal: false
        });
    }
    render () {
        return (
        <>
            <button className="modal__link" onClick = {
                this.handleOpenModal
            }>See all channels included in this package</button>
            <ReactModal
                isOpen = {this.state.showModal}
                contentLabel = "Channels included in this package"
            >
                <h2>Channels included in this package</h2>
                <button className="modal__close" onClick = {
                    this.handleCloseModal
                }>X</button>
            </ReactModal>
        
        </>
        );
    };
};

export default ChannelModal;