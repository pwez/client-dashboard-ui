import React, {useEffect, useState} from "react";
import axios from "axios";
import {Member} from "../../model/Member";
import {Manager} from "../../model/Manager";
import {useSelector} from 'react-redux';
import {Table} from "react-bootstrap";

const URL = `${process.env.REACT_APP_API_URL}/members`;

export const ManagersTable: React.FC = () => {
    const organizations = useSelector(state => state.organizations.value);
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        getManagers();
    }, [])

    const getManagers = async () => {
        const response = await axios.get<Member[]>(URL);
        let membersThatAreManagers = response.data.filter((member: Member) => {
            return member.title == 'Manager';
        });

        let managers: Manager[] = [];
        membersThatAreManagers.forEach((member: Member) => {
            managers.push({
              id: member.id,
              name: member.name,
              company: '',
              phone_number: member.phone_number
            });
        });
        setManagers(managers);
        if (organizations && organizations.length > 0) {
            console.log('orgs = ' + JSON.stringify(organizations));
            console.log('org0 = ' + JSON.stringify(organizations[0].name));
        }
    }

    return (
        <>
            <h1 id='title'>Managers</h1>
            <Table striped id='managers'>
                <thead>
                <tr>
                    {['name', 'company name', 'phone number'].map((key, index) => {
                        return <th key={index}>{key.toUpperCase()}</th>;
                    })}
                </tr>
                </thead>
                <tbody>
                {managers.map((manager: Manager) => {
                    return (<tr key={manager.id}>
                        <td>{manager.name}</td>
                        <td>{organizations[24]}</td>
                        <td>{manager.phone_number}</td>
                    </tr>)
                })}
                </tbody>
            </Table>
        </>
    );
};

