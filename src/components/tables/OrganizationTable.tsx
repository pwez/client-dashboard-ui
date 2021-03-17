import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Organization } from "../../model/Organization";
import OrganizationModal from "../modals/OrganizationModal";
import { addOrganizations } from '../../app/organizations';
import { useSelector, useDispatch } from 'react-redux';
import {Table} from "react-bootstrap";

const getOrganizationsURL = `${process.env.REACT_APP_API_URL}/organization`;

const OrganizationsTable: React.FC = () => {
    const organizations = useSelector(state => state.organizations.value);
    const [organization, setOrganization] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getOrganizations();
    }, [])

    const handleClose = () => {
        setShowModal(false);
    }

    const getOrganizations = async () => {
        const response = await axios.get<Organization[]>(getOrganizationsURL);
        dispatch(addOrganizations(response.data));
    }

    function openOrganizationModal(organization: Organization) {
        return function (p1: React.MouseEvent<HTMLTableRowElement>) {
            setOrganization(organization);
            setShowModal(true);
        };
    }

    return (
        <>
            <h1 id='title'>Organizations</h1>
            <Table striped id='organizations'>
                <thead>
                    <tr>
                    {['name', 'headcount', 'is public'].map((key, index) => {
                        return <th key={index}>{key.toUpperCase()}</th>;
                    })}
                    </tr>
                </thead>
                <tbody>
                {organizations.map((organization: Organization) => {
                    return (<tr key={organization.id} onClick={openOrganizationModal(organization)}>
                                <td>{organization.name}</td>
                                <td>{organization.headcount}</td>
                                <td>{organization.is_public ? 'Yes' : 'No' }</td>
                            </tr>)
                })}
                </tbody>
            </Table>
            { organization ? <OrganizationModal show={showModal} organization={organization} handleClose={handleClose} /> : null }
        </>
    )
};


export default OrganizationsTable
