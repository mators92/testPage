import * as React from "react"
// import React from 'react';
import Main from "../components/main";
import './../style/main.scss';
import { Title, Link, Meta } from "react-head";

// markup
class IndexPage extends React.Component {
// const IndexPage = () => {

    render() {

        return (
            <Main>
                <div>
                    <Title>OSP Rzeszów-Słocina</Title>
                    <Meta name="description" content="Lorem ipsum dolor sit amet." />
                </div>

                <div className="card">
                    <h2>NABÓR DO MŁODZIEŻOWEJ DRUŻYNY POŻARNICZEJ</h2>
                    <p>Marzysz, żeby zostać strażakiem? A może po prostu chcesz miło i aktywnie spędzać czas? Dołącz do nas! <br/>Zapisy już trwają <a href="http://bit.ly/MDP-Slocina">http://bit.ly/MDP-Slocina</a> lub tel. 798247674.</p>
                    <img id="myImg1" className="myImg" src="/img/mdpzapisy.png" alt="MDP" style={{width: '100%'}}/>
                </div>

                <div className="card">
                    <h2>ZAPRASZAMY DO ZŁOŻENIA OFERTY</h2>
                    <h5>Rzeszów, 24.05.2021</h5>

                    <p>OSP Rzeszów-Słocina zaprasza do złożenia oferty w postępowaniu o udzielenie zamowienia
                        publicznego w trybie podstawowym z faklutatywnymi negocjacjami
                        o wartości zamówienia nie przekraczającej progów unijnych o jakich
                        stanowi art. 3 Ustawy z 11 września 2019 r. Prawo zamowień publicznych,

                        Dalej pzp pn.:</p>

                    <p>„Dostawę samochodu ratowniczo-gaśniczego
                        dla jednostki Ochotniczej Straży Pożarnej w Rzeszowie -Słocina w
                        ramach zadania Modernizacja taboru ratowniczego poprzez zakup
                        samochodu 4*4 typu pic-up z zabudową modułową dla OSP Rzeszów -
                        Słocina”</p>

                    <h5>Załączniki:</h5>
                    <p><a href="/files/zp2/SWZ.docx">SWZ.docx</a></p>
                    <p><a href="/files/zp2/Załącznik nr 1 do SWZ.docx">Załącznik nr 1 do SWZ.docx</a></p>
                    <p><a href="/files/zp2/Załącznik nr 2 do SWZ.docx">Załącznik nr 2 do SWZ.docx</a></p>
                    <p><a href="/files/zp2/Załącznik nr 3 do SWZ.docx">Załącznik nr 3 do SWZ.docx</a></p>
                    <p><a href="/files/zp2/Załącznik nr 4 do SWZ.docx">Załącznik nr 4 do SWZ.docx</a></p>
                    <p><a href="/files/zp2/Załącznik nr 5 do SWZ.docx">Załącznik nr 5 do SWZ.docx</a></p>
                    <p><a href="/files/zp2/Załącznik nr 6 wzór umowy.docx">Załącznik nr 6 wzór umowy.docx</a></p>

                    <hr/>
                    <h4>Informacje dla wykonawców:</h4>
                    <p><b>Nazwa odbiorcy:</b> GMINA MIASTO RZESZÓW (35-064 RZESZÓW (MIASTO), WOJ. PODKARPACKIE)</p>
                    <p><b>Adres skrzynki Gov(ePUAP):</b> /umrz/SkrytkaESP</p>
                    <p><b>Postępowanie na miniPortal:</b> <a
                        href="https://miniportal.uzp.gov.pl/Postepowania/5a9a1214-2643-4a20-934b-75a196272336">https://miniportal.uzp.gov.pl/Postepowania/5a9a1214-2643-4a20-934b-75a196272336</a>
                    </p>
                    <p>Na sfinansowanie zamówienia Zamawiający zamierza przeznaczyć kwotę 210 000,00 zł brutto.</p>
                    <hr/>
                    <p><a href="/files/zp2/Protokół z otwarcia ofert.PDF">Protokół z otwarcia ofert.PDF</a></p>
                    <p><a href="/files/zp2/Protokół z wyboru oferty.PDF">Protokół z wyboru oferty.PDF</a></p>
                </div>

                <div className="card">
                    <h2>ZAPRASZAMY DO ZŁOŻENIA OFERTY</h2>
                    <h5>Rzeszów, 30.04.2021 - <i style={{color: 'red'}}>(Aktualizacja 14.05.2021) Przetarg unieważniony z powodu braku ofert.</i></h5>

                    <p>OSP Rzeszów-Słocina zaprasza do złożenia oferty w postępowaniu o udzielenie zamowienia
                        publicznego w trybie podstawowym z faklutatywnymi negocjacjami
                        o wartości zamówienia nie przekraczającej progów unijnych o jakich
                        stanowi art. 3 Ustawy z 11 września 2019 r. Prawo zamowień publicznych,
                        Dalej pzp pn.:</p>

                    <p>„Dostawę samochodu ratowniczo-gaśniczego
                        dla jednostki Ochotniczej Straży Pożarnej w Rzeszowie -Słocina w
                        ramach zadania Modernizacja taboru ratowniczego poprzez zakup
                        samochodu 4*4 typu pic-up z zabudową modułową dla OSP Rzeszów -
                        Słocina”</p>

                    <h5>Załączniki:</h5>
                    <p><a href="/files/SWZ.docx">SWZ.docx</a></p>
                    <p><a href="/files/Załącznik nr 1 do SWZ.docx">Załącznik nr 1 do SWZ.docx</a></p>
                    <p><a href="/files/Załącznik nr 2 do SWZ.docx">Załącznik nr 2 do SWZ.docx</a></p>
                    <p><a href="/files/Załącznik nr 3 do SWZ.docx">Załącznik nr 3 do SWZ.docx</a></p>
                    <p><a href="/files/Załącznik nr 4 do SWZ.docx">Załącznik nr 4 do SWZ.docx</a></p>
                    <p><a href="/files/Załącznik nr 5 do SWZ.docx">Załącznik nr 5 do SWZ.docx</a></p>
                    <p><a href="/files/Załącznik nr 6 wzór umowy.docx">Załącznik nr 6 wzór umowy.docx</a></p>

                </div>

            </Main>
        )
    }
}

export default IndexPage
