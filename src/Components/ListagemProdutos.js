import React, { Component } from 'react';
export default class ListagemProdutos extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
             <div className="wrapper">
            <h2 className="wrapper__title">Lista de Produtos</h2>
                    {this.props.mapArray}
            </div>
            </>
        )
    }
}
