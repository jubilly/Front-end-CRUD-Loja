import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ListagemClientes extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
             <div className="wrapper">
            <h2 className="wrapper__title">Lista de Clientes</h2>
                    {this.props.mapArray}
            </div>
            </>
        )
    }
}
