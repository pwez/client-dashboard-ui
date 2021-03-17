import * as React from "react";
import {Button, Jumbotron} from 'react-bootstrap';

export const HomePage: React.FC = () => {
    return(
        <div>
            <Jumbotron>
                <h1>Client Dashboard</h1>
                <p>
                    We have a number of clients that we serve. They’re scattered across the country,
                    and we want to keep track of them.
                </p>
                <p>
                    <Button variant="light">
                        <a href={'/organizations'}>View Organizations</a>
                    </Button>
                </p>
                <p>
                    <Button variant="light">
                        <a href={'/managers'}>View Managers</a>
                    </Button>
                </p>
            </Jumbotron>
        </div>
    );
}
