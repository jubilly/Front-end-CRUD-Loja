import React, { Component } from 'react';
import baseURL from '../Services/api';

export default class CadastroClientes extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:'',
            cpf:'',
            rg: '',
            endereco:'',
            telefone:'',
            tipocliente:'',
            arrayCadastroFuncionario:[],
            redirect: false,
            razaosocial:'',
            cnpj:''
        }
        this.getCpf = this.getCpf.bind(this)
    }
    CadastroCliente = () =>{
        fetch(`${baseURL}/cadastrocliente`,{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                endereco: this.state.endereco,
                telefone: this.state.telefone,
                rg: this.state.rg,
                tipocliente: this.state.tipocliente,
                razaosocial: this.state.razaosocial,
                cnpj: this.state.cnpj,
                cpf: this.state.cpf
                
            })
        }).then((response) => {
            return response.json(); 
        }).then((json) => {
            this.setState({arrayCadastroFuncionario: json})
            this.setState({ redirect: true });
            alert("Cliente Cadastrado com Sucesso!")
        }).catch(error => console.log(error));
        this.setState({ nome: "", cpf:"", rg:"", endereco:"", telefone:"", tipocliente:"" });
        
    }

    getNome = (event) => {
        let nome = event.target.value;
        this.setState({nome: nome});
    }
    getCpf = (event) => {
        let cpf = event.target.value;
        this.setState({cpf: cpf});
    }
    getRg = (event) => {
        let rg = event.target.value;
        this.setState({rg: rg});
    }
    getEndereco = (event) => {
        let endereco = event.target.value;
        this.setState({endereco: endereco});
    }

    getTelefone = (event) => {
        let telefone = event.target.value;
        this.setState({telefone: telefone});
    }
    selectPessoa = (event) =>{
        let selectValue = event.target.value
        this.setState({tipocliente: selectValue})
    }
    getRazaoSocial= (event)=>{
        let razaosocial = event.target.value
        this.setState({razaosocial: razaosocial})
    }
    getCNPJ= (event)=>{
        let cnpj = event.target.value
        this.setState({cnpj: cnpj})
    }
    Limpar = () =>{
        this.setState({ nome: "", cpf:"", rg:"", endereco:"", telefone:"", tipocliente:"pessoa", razaosocial:"", cnpj:"" }); 
    }
    render(){
        return (
            <>
            <div className="wrapper__clientes">
                <div className="wrapper__inputs-group">
                    <h2 className="wrapper__title">Cadastro de Cliente</h2>
                    <div className="wrapper__inputs-group">
                        <label>Nome</label>
                        <input className="wrapper__input" onChange={this.getNome} value={this.state.nome} placeholder="Digite o nome"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>RG</label>
                        <input className="wrapper__input"  onChange={this.getRg} value={this.state.rg} placeholder="Digite o RG"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Endereço</label>
                        <input className="wrapper__input" onChange={this.getEndereco} value={this.state.endereco} placeholder="Digite o endereço"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Telefone</label>
                        <input className="wrapper__input"  onChange={this.getTelefone} value={this.state.telefone} placeholder="Digite o telefone"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Tipo de pessoa</label>
                        <select className="wrapper__input wrapper__input--select"
                            onChange={(event)=> this.selectPessoa(event)}
                        >
                                <option value="pessoa">Pessoa...</option>
                                <option value="pessoa-fisica">Pessoa Física</option>
                                <option value="pessoa-juridica">Pessoa Jurídica</option>
                            </select>
                    </div>
                    <div className={`wrapper__inputs-group ${this.state.tipocliente === 'pessoa-fisica' ? 'wrapper__inputs-group--show' : 'wrapper__inputs-group--no-show'}`}>
                        <label>CPF</label>
                        <input className="wrapper__input" onChange={this.getCpf} value={this.state.cpf} placeholder="Digite o CPF"/>
                    </div>
                    <div className={`wrapper__inputs-group ${this.state.tipocliente === 'pessoa-juridica' ? 'wrapper__inputs-group--show' : 'wrapper__inputs-group--no-show'}`}>
                        <label>Razão Social</label>
                        <input className="wrapper__input" onChange={this.getRazaoSocial} value={this.state.razaosocial} placeholder="Digite o razão social"/>
                    </div>
                    <div className={`wrapper__inputs-group ${this.state.tipocliente === 'pessoa-juridica' ? 'wrapper__inputs-group--show' : 'wrapper__inputs-group--no-show'}`}>
                        <label>CNPJ</label>
                        <input className="wrapper__input" onChange={this.getCNPJ} value={this.state.cnpj} placeholder="Digite o CPF"/>
                    </div>
                    
               
                </div>
                <button className="wrapper__btn wrapper__btn--save" onClick={(event)=>{this.CadastroCliente(event)}}>Cadastrar</button>
                <button className="wrapper__btn wrapper__btn--clean" onClick={(event)=>{this.Limpar(event)}}>Limpar</button>
            </div>
            </>
        )
    }
}
