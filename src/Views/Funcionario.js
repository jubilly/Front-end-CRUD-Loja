import React, { Component } from 'react';
import './../Styles/funcionario.css'; 
import CadastroFuncionario from './../Components/CadastroFuncionario';
import Header from './../Components/Header';
import { Link } from 'react-router-dom';
import baseURL from './../Services/api'
export default class Funcionario extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:'',
            cpf:'',
            rg: '',
            endereco:'',
            salario:'',
            telefone:'',
            cargo:'',
            arrayCadastroFuncionario:[],
            redirect: false
        }
    }
    CadastroFuncionarios = () =>{
        fetch(`${baseURL}/cadastrofuncionario`,{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                cpf: this.state.cpf,
                rg: this.state.rg,
                endereco: this.state.endereco,
                salario: this.state.salario,
                telefone: this.state.telefone,
                cargo:  this.state.cargo       
            })
        }).then((response) => {
            return response.json(); 
        }).then((json) => {
            this.setState({arrayCadastroFuncionario: json})
            this.setState({ redirect: true });
            alert("Funcionario Cadastrado com Sucesso!")
        }).catch(error => console.log(error));
        this.setState({ nome: "", cpf:"", rg:"", endereco:"", salario:"", telefone:"", cargo:"" });
        
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
    getSalario = (event) => {
        let salario = event.target.value;
        this.setState({salario: salario});
    }
    getTelefone = (event) => {
        let telefone = event.target.value;
        this.setState({telefone: telefone});
    }
    selectFuncionarios = (event) =>{
        let selectValue = event.target.value
        this.setState({cargo: selectValue})
    }
    Limpar = () =>{
        this.setState({ nome: "", cpf:"", rg:"", endereco:"", salario:"", telefone:"", cargo:"" }); 
    }
    render(){
        return (
            <>
            <Header/>
            <div className="wrapper">
                <CadastroFuncionario
                    getNome={this.getNome}
                    nome={this.state.nome}
                    getCpf={this.getCpf}
                    cpf={this.state.cpf}
                    getRg={this.getRg}
                    rg={this.state.rg}
                    getEndereco={this.getEndereco}
                    endereco={this.state.endereco}
                    getSalario={this.getSalario}
                    salario={this.state.salario}
                    getTelefone={this.getTelefone}
                    telefone={this.state.telefone}
                    selectFuncionarios={this.selectFuncionarios}
                    CadastroFuncionarios={this.CadastroFuncionarios}
                    Limpar={this.Limpar}
                />
                <Link to="/">Voltar para página inicial</Link>
            </div>
            </> 
        )
    }
}