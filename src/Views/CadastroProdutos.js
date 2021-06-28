import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Components/Header';
import baseURL from './../Services/api'

export default class CadastroProdutos extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:'',
            valor:'',
            fabricante:'',
            descricao:'',
            cod_barras:'',
            tipoproduto:'',
            arrayProdutos:[],
            redirect: false,
            vencimento:'',
        }
    }
    cadastroproduto = () =>{
        fetch(`${baseURL}/cadastroproduto`,{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                cod_barras: this.state.cod_barras,
                valor : this.state.valor,
                descricao : this.state.descricao,
                vencimento : this.state.vencimento,
                fabricante: this.state.fabricante,
                tipoproduto: this.state.tipoproduto
            })
        }).then((response) => {
            return response.json(); 
        }).then((json) => {
            this.setState({arrayProdutos: json})
            this.setState({ redirect: true });
            alert("Produto Cadastrado com Sucesso!")
        }).catch(error => console.log(error));
        this.setState({ nome: "", valor:"", fabricante:"", 
        descricao:"", vencimento:"",cod_barras:"", 
        tipoproduto:"" });  
    }

    getNome = (event) => {
        let nome = event.target.value;
        this.setState({nome: nome});
    }
    getValor = (event) => {
        let valor = event.target.value;
        this.setState({valor: valor});
    }
    getDescricao = (event) => {
        let descricao = event.target.value;
        this.setState({descricao: descricao});
    }
    getFabricante = (event) => {
        let fabricante = event.target.value;
        this.setState({fabricante: fabricante});
    }

    getcod_barras = (event) => {
        let cod_barras = event.target.value;
        this.setState({cod_barras: cod_barras});
    }
    seletProdutos = (event) =>{
        let selectValue = event.target.value
        this.setState({tipoproduto: selectValue})
    }
    getvencimento= (event)=>{
        let vencimento = event.target.value
        this.setState({vencimento: vencimento})
    }
    Limpar = () =>{
        this.setState({ nome: "", valor:"", fabricante:"", descricao:"", vencimento:"",cod_barras:"", tipopessoa:"" }); 
    }
    render(){
        return (
            <>
            <Header/>
            <div className="wrapper__clientes">
                <div className="wrapper__inputs-group">
                    <h2 className="wrapper__title">Cadastro de Produtos</h2>
                    <div className="wrapper__inputs-group">
                        <label>Nome</label>
                        <input className="wrapper__input" onChange={this.getNome} value={this.state.nome} placeholder="Digite o nome"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Valor</label>
                        <input className="wrapper__input"  onChange={this.getValor} value={this.state.valor} placeholder="Digite o valor"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Fabricante</label>
                        <input className="wrapper__input" onChange={this.getFabricante} value={this.state.fabricante} placeholder="Digite o fabricante"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Descrição</label>
                        <textarea className="wrapper__input wrapper__input--select"  onChange={this.getDescricao} value={this.state.descricao} placeholder="Digite a descrição"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Código de Barras</label>
                        <input className="wrapper__input"  onChange={this.getcod_barras} value={this.state.cod_barras} placeholder="Digite o código de barras"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Data de Vencimento</label>
                        <input className="wrapper__input" type="date" onChange={this.getvencimento} value={this.state.vencimento} placeholder="Digite o Valor"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Tipo de Produto</label>
                        <select className="wrapper__input wrapper__input--select"
                            onChange={(event)=> this.seletProdutos(event)}
                        >
                                <option value="">Produto...</option>
                                <option value="Agricola">Agricóla</option>
                                <option value="Maquinas Agricolas">Máquinas Agricólas</option>
                                <option value="Peças">Peças</option>
                                <option value="Veterinário">Veterinário</option>
                            </select>
                    </div>
                </div>
                <button className="wrapper__btn wrapper__btn--save" onClick={(event)=>{this.cadastroproduto(event)}}>Cadastrar</button>
                <button className="wrapper__btn wrapper__btn--clean" onClick={(event)=>{this.Limpar(event)}}>Limpar</button>
            </div>
            <Link to="/">Voltar para página inicial</Link>
            </>
        )
    }
}
