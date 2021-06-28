import React, { Component } from 'react';
import './../Styles/header.css'; 

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
            <div className="header">
                <h1 className="header__title">Projeto de Banco de Dados 2021 - Diogo Lopes e Marcelo Gotado</h1>
            </div>
            </>
        )
    }
}
