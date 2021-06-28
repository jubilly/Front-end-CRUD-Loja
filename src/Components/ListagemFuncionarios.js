import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ListagemFuncionarios extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <>
            <div className="wrapper">
                
            <h2 className="wrapper__title">Lista de Funcionários</h2>
                <div className="wrapper__filter">
                    <label className="wrapper__filter-label">Pesquisar...</label>
                    <input className="wrapper__filter-input wrapper__filter-input--full" onChange={(event)=>{this.props.Filter(event)}} value={this.props.filterdata} placeholder="Digite aqui..."/>
                </div>
                    {this.props.mapArrayFilter}
                    {this.props.mapArray}
            </div>
            </>
        )
    }
}
