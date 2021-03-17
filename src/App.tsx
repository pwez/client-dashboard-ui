import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {OrganizationPage} from "./components/pages/OrganizationPage";
import {ManagersPage} from "./components/pages/ManagersPage";
import NavigationBar from "./components/navigation/NavigationBar";
import {HomePage} from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route exact path={'/organizations'} component={OrganizationPage} />
                <Route exact path={'/managers'} component={ManagersPage} />
                <Route path={'/'} component={HomePage} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
