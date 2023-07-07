import React, {Component} from 'react';
import './../style/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import {Link, Meta, Title} from "react-head";

function Main(props) {

    return (
        <div className={'main'}>

            <div>
                <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <Link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous"/>
            </div>

            <div className="header">
                <img src="/img/tlo.jpg" alt="Snow" style={{width: '100%'}}/>
                <div className="centered"><h1>OSP Rzeszów - Słocina</h1></div>
            </div>

            <div className="topnav">
                <a href="/">Aktualności</a>
                <a href="#">Historia</a>
                <a href="#">Galeria</a>
                <a href="/kontakt" style={{float: 'right'}}>Kontakt</a>
            </div>

            <div className={'row'}>

                {/*<div className="leftcolumn">*/}
                <div className={'col-lg-9'}>
                    {props.children}
                </div>

                {/*<div className="rightcolumn">*/}
                <div className={'col-lg-3'}>

                    <div className="card">
                        <h2>O nas</h2>
                        <p>Zapraszamy na <a href={'https://www.facebook.com/OSPSlocina'}>facebook.com/OSPSlocina</a></p>
                    </div>

                    <div className="card">
                        <h3>Follow Me</h3>
                        <a href='https://www.facebook.com/OSPSlocina'><i className="fa fa-facebook-square" aria-hidden={true}/></a>
                        <a href='https://www.instagram.com/osprzeszowslocina/'><i className="fa fa-instagram" aria-hidden={true}/></a>
                    </div>

                </div>

            </div>

            <div className="footer">
                <p>Copyright © 2021 Ochotnicza Straż Pożarna Rzeszów - Słocina</p>
            </div>

        </div>
    );

};

export default Main;