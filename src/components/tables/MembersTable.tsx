import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Member } from "../../model/Member";
import {Table} from "react-bootstrap";


interface MembersTableProps {
    id: number;
}

const URL = `${process.env.REACT_APP_API_URL}/members`;

const MembersTable: React.FC<MembersTableProps> = (props) => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        getMembersByOrganizationId(props.id);
    }, [])

    const getMembersByOrganizationId = async (id: number) => {
        const response = await axios.get<Member[]>(URL);
        let data = response.data.filter((member: Member) => {
           return member.organization_id.endsWith(' ' + id.toString());
        });
        setMembers(data);
        console.log('Members = ' + JSON.stringify(data));
    }

    const getMembers = async () => {
        const response = await axios.get<Member[]>(URL);
        setMembers(response.data);
    }

    const updateMemberOrganization = async(member: Member, organizationId: string) => {
        let UPDATE_URL = `${process.env.REACT_APP_API_URL}/members`;
        member.organization_id = organizationId;
        const response = await axios.post(UPDATE_URL, member);
        console.log('POST response = ' + response);
    }

    const renderHeader = () => {
        let headerElement = ['name', 'roll', 'phone']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return members && members.map((member: Member) => {
            return (
                <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.title}</td>
                    <td>{member.phone_number}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <h4 id='title'>Members</h4>
            <Table striped id='members'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </Table>
        </>
    )
}


export default MembersTable
