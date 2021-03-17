import React from 'react';
import {Modal, Button, ListGroup} from 'react-bootstrap';
import { Organization } from '../../model/Organization';
import MembersTable from "../tables/MembersTable";

interface ModalProps {
    show: boolean;
    organization: Organization;
    handleClose(): any;
}

export const OrganizationModal: React.FC<ModalProps> = (props) => {
    const organization = props.organization;

    function formattedAddress(organization: Organization) {
        return  organization.address_1 + ' ' +
                organization.city + ', ' +
                organization.state + ' ' +
                organization.zip_code;
    }

    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>{ organization.name }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    <ListGroup.Item><b>Founded:</b> { organization.created_at }</ListGroup.Item>
                    <ListGroup.Item><b>Head Count:</b> { organization.headcount }</ListGroup.Item>
                    <ListGroup.Item><b>Location:</b> { formattedAddress(organization) }</ListGroup.Item>
                </ListGroup>
                <br/>
                <MembersTable id={organization.id} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrganizationModal;
