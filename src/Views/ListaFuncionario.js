import React, { Component } from 'react';
import './../Styles/funcionario.css'; 
import ListagemFuncionarios from './../Components/ListagemFuncionarios';
import Header from './../Components/Header';
import { Link } from 'react-router-dom';
import baseURL from '../Services/api';
import { Redirect } from 'react-router'


export default class ListaFuncionario extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrayListaFuncionario:[],
            toggleClass: [false, false, false, false],
            nome:[],
            cpf:[],
            rg: [],
            endereco:[],
            salario:[],
            telefone:[],
            cargo:[],
            arrayBuscaFuncionario:[],
            redirect: false, 
            filterdata: '',
            show: false

        }
    }
    componentDidMount = () =>{
        fetch(`${baseURL}/listagemfuncionario`,{
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
            this.setState({arrayListaFuncionario: data})
            let arrayNome = this.state.nome;
            let arrayCpf = this.state.cpf;
            let arrayRg = this.state.rg;
            let arrayEndereco = this.state.endereco;
            let arraySalario = this.state.salario;
            let arrayTelefone = this.state.telefone;
            let arrayCargo = this.state.cargo;
            let arrayData = this.state.arrayListaFuncionario;
            arrayData.map(nomes=>{
                arrayNome.push([nomes.Nome])
                arrayCpf.push([nomes.CPF])
                arrayRg.push([nomes.RG])
                arrayEndereco.push([nomes.Endereco])
                arraySalario.push([nomes.salario])
                arrayTelefone.push([nomes.telefone])
                arrayCargo.push([nomes.cargo])
            })
            this.setState({nome:arrayNome})
            
        })
    }
    EditarFuncionario = (event, index) =>{
        this.setState({toggleClass: !this.state.toggleClass})
    }
    SalvarFuncionario = (event, index) => {
        let id = event.target.value;
        fetch(`${baseURL}/editarfuncionario`, {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nome: this.state.nome[index],
                cpf: this.state.cpf[index],
                rg: this.state.rg[index],
                endereco: this.state.endereco[index],
                salario: this.state.salario[index],
                telefone: this.state.telefone[index],
                cargo: this.state.cargo[index]
            })
        }).then((response) => {
            return response.json(); 
        }).then((json) => {
            alert("Funcionário Atualizado com Sucesso!");
            this.setState({ redirect: true });
        }).catch(error => console.log(error));
    }
    getNome = (event, index) => {
        this.state.nome[index] = event.target.value;
        this.setState({nome: this.state.nome});
    }
    getCpf = (event, index) => {
        this.state.cpf[index] = event.target.value;
        this.setState({cpf: this.state.cpf});
    }
    getRg = (event, index) => {
        this.state.rg[index] = event.target.value;
        this.setState({rg: this.state.rg});
    }
    getEndereco = (event, index) => {
        this.state.endereco[index] = event.target.value;
        this.setState({endereco: this.state.endereco});
    }
    getSalario = (event, index) => {
        this.state.salario[index] = event.target.value;
        this.setState({salario: this.state.salario});
    }
    getTelefone = (event, index) => {
        this.state.telefone[index] = event.target.value;
        this.setState({telefone: this.state.telefone});
    }
    selectFuncionarios = (event, index) =>{
        this.state.cargo[index] = event.target.value
        this.setState({cargo: this.state.cargo})
    }
    Filter = (event) =>{
        let datafilter = event.target.value;
        this.setState({filterdata: datafilter})

        fetch(`${baseURL}/buscafuncionario`,{
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
            this.setState({arrayBuscaFuncionario: data})
            
            })
    }
    render(){
        let data = this.state.arrayListaFuncionario;
        let dataFilter = this.state.arrayBuscaFuncionario;
        let mapArrayFilter = dataFilter.map((item,index)=>{
            return(
                <>
                    <h3>Funcionário {index + 1}</h3>
                   <div className="wrapper__inputs">
                        <div className="wrapper__inputs-group">
                            <label for="input__nome">Nome</label>
                            <input id={`input_nome-${index}`} 
                            className={`wrapper__input input_events`} 
                            value={ item.Nome} 
                            onChange={(event) => this.state.toggleClass[index] === false ? '' : this.getNome(event, index)}/>
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__cpf">CPF</label>
                            <input id={`input_cpf-${index}`}  
                            className={`wrapper__input input_events`} 
                            value={ item.CPF} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getCpf(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__rg">RG</label>
                            <input id={`input_rg-${index}`}  
                            className={`wrapper__input input_events`} 
                            value={ item.RG} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getRg(event, index)}/> 
                            </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__endereco">Endereço</label>
                            <input id={`input_endereco-${index}`} 
                            className={`wrapper__input input_events`} 
                            value={ item.Endereco} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getEndereco(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__salario">Salário</label>
                            <input id={`input_salario-${index}`} 
                            className={`wrapper__input input_events`} 
                            value={ item.salario } 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getSalario(event, index)}/> 
                            </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__telefone">Telefone</label>
                            <input id={`input_telefone-${index}`}  
                            className={`wrapper__input input_events`}     
                            value={ item.telefone} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getTelefone(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__cargo">Cargo</label>
                            <input id={`input_cargo-${index}`}  
                            className={`wrapper__input input_events : 'wrapper__btn--no-show'}`} 
                            value={item.cargo}/>
                        </div>
                        </div>
                </>
            )
        })
        let mapArray = data.map((item, index)=>{
            return(
                <>
                <h3 className={`${this.state.show === true ? 'wrapper--no-show' : 'wrapper--show'}`}>Funcionário {index + 1}</h3>
                <div className={`wrapper__inputs ${this.state.show === true ? 'wrapper--no-show' : 'wrapper--show'}`}>
                        <div className="wrapper__inputs-group">
                            <label for="input__nome">Nome</label>
                            <input id={`input_nome-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.Nome : this.state.nome[index]}`} 
                            onChange={(event) => this.state.toggleClass[index] === false ? '' : this.getNome(event, index)}/>
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__cpf">CPF</label>
                            <input id={`input_cpf-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.CPF : this.state.cpf[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getCpf(event, index)}/> 
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
                            value={`${this.state.toggleClass[index] === false ? item.Endereco : this.state.endereco[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getEndereco(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__salario">Salário</label>
                            <input id={`input_salario-${index}`} 
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`} 
                            value={`${this.state.toggleClass[index] === false ? item.salario : this.state.salario[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getSalario(event, index)}/> 
                            </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__telefone">Telefone</label>
                            <input id={`input_telefone-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : ''}`}     
                            value={`${this.state.toggleClass[index] === false ? item.telefone : this.state.telefone[index]}`} 
                            onChange={(event)=>this.state.toggleClass[index] === false ? '' : this.getTelefone(event, index)}/> 
                        </div>
                        <div className="wrapper__inputs-group">
                            <label for="input__cargo">Cargo</label>
                            <input id={`input_cargo-${index}`}  
                            className={`wrapper__input ${this.state.toggleClass[index] === false ? 'input_events' : 'wrapper__btn--no-show'}`} 
                            value={item.cargo}/>
                            <select className={`wrapper__input ${this.state.toggleClass[index] === false ? 'wrapper__btn--no-show' : 'wrapper__btn--show'}`}
                                onChange={(event)=> this.selectFuncionarios(event, index)}
                            >
                                <option value="">Selecione um cargo...</option>
                                <option value="Vendedor Agricola">Vendedor Agricola</option>
                                <option value="Vendedor de Máquinas">Vendedor de Máquinas</option>
                                <option value="Vendedor de Peças">Vendedor de Peças</option>
                                <option value="Vendedor Veterinário">Vendedor Veterinário</option>
                                <option>Atendente</option>
                            </select>
                        </div>
                    </div>
                <button className="wrapper__btn wrapper__btn--edit" onClick={(event)=>{this.EditarFuncionario(event, index)}} value={this.state.toggleClass[index]}>Editar</button>
                <button className={`wrapper__btn wrapper__btn--save ${this.state.toggleClass[index] === false ? 'wrapper__btn--no-show' : 'wrapper__btn--show'}`} onClick={(event)=>{this.SalvarFuncionario(event, index)}} value={item.Id}>Salvar</button>
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
              
                <ListagemFuncionarios
                    mapArray={mapArray}
                    Filter={this.Filter}
                    filterdata={this.state.filterdata}
                    mapArrayFilter={mapArrayFilter}
                />
                <Link to="/">Voltar para página inicial</Link>
            </div>
            </> 
        )
    }
}
