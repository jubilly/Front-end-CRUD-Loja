import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CadastroClientes from './../Components/CadastroClientes';
import Header from './../Components/Header';

export default class Cliente extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
            <Header/>
            <div className="wrapper">
                <CadastroClientes/>
                <Link to="/">Voltar para página inicial</Link>
            </div>
            </>
        )
    }
}
