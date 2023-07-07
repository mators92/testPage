import React, {Component} from 'react';
import Main from "../components/main";
import './../style/main.scss';
import {Meta, Title} from "react-head";

class Kontakt extends Component {
    render() {
        return (
            <Main>
                <div>
                    <Title>OSP Rzeszów-Słocina</Title>
                    <Meta name="description" content="Kontakt do OSP Rzeszów-Słocina" />
                </div>

                <div className="card">
                    <h2>Kontakt</h2>
                    <p>E-mail: <a href="mailto:osp328@wp.pl">osp328@wp.pl</a></p>
                </div>

            </Main>
        );
    }
}

export default Kontakt;