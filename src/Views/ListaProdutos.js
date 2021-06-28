import React, { Component } from 'react';
import './../Styles/funcionario.css'; 
import ListagemProdutos from './../Components/ListagemProdutos';
import Header from './../Components/Header';
import { Link } from 'react-router-dom';
import baseURL from '../Services/api';
import { Redirect } from 'react-router'


export default class ListaProdutos extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrayProdutos:[],
            toggleClass: [],
            nome:[],
            valor:[],
            fabricante:[],
            descricao:[],
            cod_barras:[],
            tipoproduto:[],
            arrayProdutos:[],
            redirect: false,
            vencimento:[],
            selectValue:[]
        }
    }
    componentDidMount = () =>{
        fetch(`${baseURL}/listagemprodutos`,{
            method: 'GET',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
        }).then((responseData)=>{
            return responseData.json();
        }).then((data) => {
            this.setState({arrayProdutos: data})
            let arrayNome = this.state.nome,
                arrayCod_barras = this.state.cod_barras,
                arrayValor  = this.state.valor,
                arrayDescricao  = this.state.descricao,
                arrayVencimento  = this.state.vencimento,
                arrayFabricante = this.state.fabricante,
                arrayTipoproduto = this.state.tipoproduto,
                arrayDataToggle = this.state.toggleClass,
                arrayData = this.state.arrayProdutos;
            arrayData.map(nomes=>{
                arrayNome.push([nomes.Nome])
                arrayCod_barras.push([nomes.Cod_Barras])
                arrayValor.push([nomes.Valor])
                arrayDescricao.push([nomes.Descricao])
                arrayVencimento.push([nomes.Vencimento])
                arrayFabricante.push([nomes.Fabricante])
                arrayTipoproduto.push([nomes.TipoProduto])
                arrayDataToggle.push(false)
            })
            this.setState({toggleClass: arrayDataToggle})
        })
    }
    EditarFuncionario = (event, index) =>{
        let changeState = this.state.toggleClass[index]
        this.setState({toggleClass: !changeState})
        console.log(this.state.toggleClass[index])
    }
    SalvarProduto = (event, index) => {
        let id = event.target.value;
        fetch(`${baseURL}/editarprodutos`, {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nome: this.state.nome[index],
                cod_barras: this.state.cod_barras[index],
                valor : this.state.valor[index],
                descricao : this.state.descricao[index],
                vencimento : this.state.vencimento[index],
                fabricante: this.state.fabricante[index],
                tipoproduto: this.state.tipoproduto[index]
            })
        }).then((response) => {
            return response.json(); 
        }).then((json) => {
            alert("Produto Atualizado com Sucesso!");
            this.setState({ redirect: true });
        }).catch(error => console.log(error));
    }

    Filter = (event) =>{
        let datafilter = event.target.value;
        this.setState({filterdata: datafilter})

        fetch(`${baseURL}/buscaprodutos`,{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: this.state.filterdata
            })
        }).then((responseData)=>{
            this.setState({show: !this.state.show})
            return responseData.json();
        }).then((data) => {
            console.log(data)
            this.setState({arrayBuscaProduto: data})
            
        })
    }
    
    getNome = (event, index) => {
        this.state.nome[index] = event.target.value;
        this.setState({nome: this.state.nome});
    }
    getValor = (event, index) => {
        this.state.valor[index] = event.target.value;
        this.setState({valor: this.state.valor});
    }
    getDescricao = (event, index) => {
        this.state.descricao[index] = event.target.value;
        this.setState({descricao: this.state.descricao});
    }
    getFabricante = (event, index) => {
        this.state.fabricante[index] = event.target.value;
        this.setState({fabricante: this.state.fabricante});
    }

    getcod_barras = (event, index) => {
        this.state.cod_barras[index] = event.target.value;
        this.setState({cod_barras: this.state.cod_barras});
    }
    seletProdutos = (event, index) =>{
        this.state.selectValue[index] = event.target.value
        this.setState({tipoproduto: this.state.selectValue})
    }
    getvencimento= (event, index)=>{
        this.state.vencimento[index] = event.target.value
        this.setState({vencimento: this.state.vencimento})
    }
    render(){
        let data = this.state.arrayProdutos;
        let mapArray = data.map((item, index)=>{
            return(
                <>
                <h3>Produto {index + 1}</h3>
                <div className="wrapper__inputs">
                        <div className="wrapper__inputs-group">
                            <label for="input__nome">{this.state.toggleClass[index]}</label>
                            <input id={`input_nome-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.Nome : this.state.nome[index]}`} 
                            onChange={(event) => this.state.toggleClass[index] === false ? '' : this.getNome(event, index)}/>
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__valor">Valor</label>
                            <input id={`input_valor-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.Valor : this.state.valor[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getValor(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__rg">Fabricante</label>
                            <input id={`input_rg-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.Fabricante : this.state.fabricante[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getFabricante(event, index)}/> 
                            </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__endereco">Descrição</label>
                            <input id={`input_endereco-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.Descricao : this.state.descricao[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getDescricao(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__salario">Código de Barras</label>
                            <input id={`input_salario-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.Cod_Barras : this.state.cod_barras[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getcod_barras(event, index)}/> 
                            </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__telefone">Vencimento</label>
                            <input id={`input_telefone-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`}     
                            value={`${this.state.toggleClass[index] === false ? item.Vencimento : this.state.vencimento[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getvencimento(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__cargo">Tipo Produto</label>
                            <input id={`input_cargo-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : 'wrapper__btn--no-show'}`} 
                            value={item.TipoProduto}/>
                            <select className={`wrapper__input ${this.state.toggleClass[index] === false ? 'wrapper__btn--no-show' : 'wrapper__btn--show'}`}
                                onChange={(event)=> this.seletProdutos(event, index)}
                            >
                                <option value="">Selecione um cargo...</option>
                                <option value="Vendedor Agricola">Vendedor Agricola</option>
                                <option value="Vendedor de Máquinas">Vendedor de Máquinas</option>
                                <option value="Vendedor de Peças">Vendedor de Peças</option>
                                <option value="Vendedor Veterinário">Vendedor Veterinário</option>
                            </select>
                        </div>
                    </div>
                <button className="wrapper__btn wrapper__btn--edit" onClick={(event)=>{this.EditarFuncionario(event, index)}} value={this.state.toggleClass[index]}>Editar</button>
                <button 
                    className={`wrapper__btn wrapper__btn--save 
                    ${this.state.toggleClass[index] === false ? 
                    'wrapper__btn--no-show' : 'wrapper__btn--show'}`} 
                    onClick={(event)=>{this.SalvarProduto(event, index)}} value={item.Id}>
                        Salvar
                </button>
                 <hr></hr>
                </>
            )
        })
        const thisRedirect = this.state.redirect;
        if (thisRedirect) {
            return <Redirect to='/'/>;
        }
        return (
            <>
            <Header/>
            <div className="wrapper">
                <ListagemProdutos
                    mapArray={mapArray}
                />
                <Link to="/">Voltar para página inicial</Link>
            </div>
            </> 
        )
    }
}
