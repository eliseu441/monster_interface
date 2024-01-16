import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import './Home.css';
import home1 from './img/header1.png';
import home2 from './img/header2.jpg';

function Home() {

    const [nutrition, setNutrition] = useState(false);
    const [tabela, setTabela] = useState(false);
    const data = [

        { Ingredientes: "Valor Energético (kcal):", Quantidade: 4.4 },

        { Ingredientes: "Carboidrator (g):", Quantidade: 2.4 },

        { Ingredientes: "Açúcares totais (g):", Quantidade: 0 },

        { Ingredientes: "Açúcares adicionados (g):", Quantidade: 0 },

        { Ingredientes: "Poliois totais (g):", Quantidade: 1 },

        { Ingredientes: "Eritritol (g):", Quantidade: 1 },

        { Ingredientes: "Sódio (mg):", Quantidade: 78 },

        { Ingredientes: "Vitamina B3 (mg):", Quantidade: 15 },

        { Ingredientes: "Vitamina B5 (mg):", Quantidade: 5 }

    ]
    const columns = [
        {
            name: "Ingredientes", selector: "Ingredientes", sortable: false,
        },
        {
            name: "Quantidade", selector: "Quantidade", sortable: false
        }
    ];





    return (
        <div className="page-content">
            <div className="background">
                <div className="row page1">
                    <div class="col-12 d-flex justify-content-center mt-5 img1" >
                        <img src={home1} class="img" width="100" />

                    </div>
                    <div class="col-12 d-flex justify-content-center mt-5 img1" >
                        <button class="button-over-img btn btn--inverse" type="button" >
                            <Link to="https://www.instagram.com/monsterenergy/?hl=pt-br" className="buttonText" >
                                <p>UNLEASH THE BEAST</p>
                            </Link>
                        </button>


                    </div>

                    <div class="col-12 d-flex justify-content-center mt-5 img1" >
                        <img src={home2} class="img watermelon" />
                        <div class="col-7 detail-desktop" >
                            <div class="detail-desktop-text">
                            <h1>UNLEASH THE ULTRA BEAST!</h1>
                            <p>Sob o céu noturno iluminado por fogos de artifício, você tem sua paixão ao seu lado. Com boa música e melhores amigos, é o melhor verão de todos. Ultra Watermelon é o verão na lata, então você pode aproveitá-lo a qualquer hora. Zero açúcar, sabor refrescante com a mistura explosiva de energia Monster para iluminar as noites quentes de verão.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="row col-12 d-flex justify-content-center mt-3  datatable-desktop img1" >
                            <DataTable
                                columns={columns}
                                data={data}
                            />
                        </div>

                    <div class="mobile-screen">
                        <div class="col-12 mb-3 d-flex justify-content-between details-mobile" >
                            <button class="buttonDetails1 col-4 " type="button" onClick={e => setTabela(true)} >
                                <p>TABELA</p>
                            </button>
                            <button class="buttonDetails1 col-4" type="button" onClick={e => setTabela(false)}>
                                <p>DETALHES</p>
                            </button>


                        </div>
                        <div class={tabela == true ? 'col-12 nutrition active' :  'col-12 nutrition'} >
                            <DataTable
                                columns={columns}
                                data={data}
                            />
                        </div>



                        <div class={tabela == false ? 'col-12 details active' :  'col-12 details'} >
                            <h1>UNLEASH THE ULTRA BEAST!</h1>
                            <p>Sob o céu noturno iluminado por fogos de artifício, você tem sua paixão ao seu lado. Com boa música e melhores amigos, é o melhor verão de todos. Ultra Watermelon é o verão na lata, então você pode aproveitá-lo a qualquer hora. Zero açúcar, sabor refrescante com a mistura explosiva de energia Monster para iluminar as noites quentes de verão.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;