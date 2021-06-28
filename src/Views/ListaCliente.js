import React, { Component } from 'react';
import './../Styles/funcionario.css'; 
import ListagemClientes from './../Components/ListagemClientes';
import Header from './../Components/Header';
import { Link } from 'react-router-dom';
import baseURL from '../Services/api';
import { Redirect } from 'react-router'


export default class ListaCliente extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrayListaCliente:[],
            toggleClass: [false, false, false],
            nome:[],
            endereco:[],
            telefone:[],
            rg: [],
            tipocliente:[],
            cpf:[],
            cnpj:[],
            razaosocial:[],
            redirect: false
        }
    }
    componentDidMount = () =>{
        fetch(`${baseURL}/listagemcliente`,{
            method: 'GET',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
        }).then((responseData)=>{
            return responseData.json();
        }).then((data) => {
            console.log(data)
            this.setState({arrayListaCliente: data})
            let arrayNome = this.state.nome;
            let arrayCpf = this.state.cpf;
            let arrayRg = this.state.rg;
            let arrayEndereco = this.state.endereco;
            let arraytipocliente = this.state.tipocliente;
            let arrayTelefone = this.state.telefone;
            let arrayrazaosocial = this.state.razaosocial;
            let arraycnpj = this.state.cnpj;
            let arrayData = this.state.arrayListaCliente;
            arrayData.map(nomes=>{
                arrayNome.push([nomes.nome])
                arrayCpf.push([nomes.CPF])
                arrayRg.push([nomes.RG])
                arrayEndereco.push([nomes.endereco])
                arraytipocliente.push([nomes.TipoCliente])
                arrayTelefone.push([nomes.telefone])
                arrayrazaosocial.push([nomes.RazaoSocial])
                arraycnpj.push([nomes.CNPJ])
            })
            this.setState({nome:arrayNome})
            
        })
    }
    EditarFuncionario = (event, index) =>{
        this.setState({toggleClass: !this.state.toggleClass})
    }
    SalvarCliente = (event, index) => {
        let id = event.target.value;
        fetch(`${baseURL}/editarcliente`, {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nome: this.state.nome[index],
                endereco: this.state.endereco[index],
                telefone: this.state.telefone[index],
                rg: this.state.rg[index],
                tipocliente: this.state.tipocliente[index],
                razaosocial: this.state.razaosocial[index],
                cnpj: this.state.cnpj[index],
                cpf: this.state.cpf[index],
            })
        }).then((response) => {
            return response.json(); 
        }).then((json) => {
            alert("Cliente Atualizado com Sucesso!");
            this.setState({ redirect: true });
        }).catch(error => console.log(error));
    }
    getNome = (event, index) => {
        this.state.nome[index] = event.target.value;
        this.setState({nome: this.state.nome});
    }
    getRazaoSocial = (event, index) =>{
        this.state.razaosocial[index] = event.target.value;
        this.setState({razaosocial: this.state.razaosocial});
    }
    getCpf = (event, index) => {
        this.state.cpf[index] = event.target.value;
        this.setState({cpf: this.state.cpf});
    }
    getCNPJ = (event, index) => {
        this.state.cnpj[index] = event.target.value;
        this.setState({cnpj: this.state.cnpj});
    }
    getRg = (event, index) => {
        this.state.rg[index] = event.target.value;
        this.setState({rg: this.state.rg});
    }
    getEndereco = (event, index) => {
        this.state.endereco[index] = event.target.value;
        this.setState({endereco: this.state.endereco});
    }
    gettipocliente = (event, index) => {
        this.state.tipocliente[index] = event.target.value;
        this.setState({tipocliente: this.state.tipocliente});
    }
    getTelefone = (event, index) => {
        this.state.telefone[index] = event.target.value;
        this.setState({telefone: this.state.telefone});
    }
    selectFuncionarios = (event, index) =>{
        this.state.razaosocial[index] = event.target.value
        this.setState({razaosocial: this.state.razaosocial})
    }
    render(){
        let data = this.state.arrayListaCliente;
        let mapArray = data.map((item, index)=>{
            return(
                <>
                <h3>Cliente {index + 1}</h3>
                <div className="wrapper__inputs">
                        <div className="wrapper__inputs-group">
                            <label for="input__nome">Nome</label>
                            <input id={`input_nome-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.nome : this.state.nome[index]}`} 
                            onChange={(event) => this.state.toggleClass[index] === false ? '' : this.getNome(event, index)}/>
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__rg">RG</label>
                            <input id={`input_rg-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.RG : this.state.rg[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getRg(event, index)}/> 
                            </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__endereco">Endereço</label>
                            <input id={`input_endereco-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.endereco : this.state.endereco[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getEndereco(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__telefone">Telefone</label>
                            <input id={`input_telefone-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`}     
                            value={`${this.state.toggleClass[index] === false ? item.telefone : this.state.telefone[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getTelefone(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__tipocliente">Tipo Cliente</label>
                            <input id={`input_tipocliente-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.TipoCliente : this.state.tipocliente[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.gettipocliente(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__razaosocial">Razão Social</label>
                            <input id={`input_razaosocial-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.RazaoSocial : this.state.razaosocial[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getRazaoSocial(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__razaosocial">CNPJ</label>
                            <input id={`input_razaosocial-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.CNPJ : this.state.cnpj[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getCNPJ(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__cpf">CPF</label>
                            <input id={`input_cpf-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.CPF : this.state.cpf[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getCpf(event, index)}/> 
                        </div>
                    </div>
                <button className="wrapper__btn wrapper__btn--edit" onClick={(event)=>{this.EditarFuncionario(event, index)}} value={this.state.toggleClass[index]}>Editar</button>
                <button className={`wrapper__btn wrapper__btn--save ${this.state.toggleClass[index] === false ? 'wrapper__btn--no-show' : 'wrapper__btn--show'}`} onClick={(event)=>{this.SalvarCliente(event, index)}} value={item.Id_cliente}>Salvar</button>
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
                {this.state.razaosocial}
                {this.state.rg}
                {this.state.cpf}
                {this.state.endereco}
              
                <ListagemClientes
                    mapArray={mapArray}
                />
                <Link to="/">Voltar para página inicial</Link>
            </div>
            </> 
        )
    }
}
