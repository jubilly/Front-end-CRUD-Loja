import React, { Component } from 'react';

export default class CadastroFuncionario extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
            <div className="wrapper__funcionario">
                <div className="wrapper__inputs-group">
                    <h2 className="wrapper__title">Cadastro de Funcionário</h2>
                    <div className="wrapper__inputs-group">
                        <label>Nome</label>
                        <input className="wrapper__input" onChange={this.props.getNome} value={this.props.nome} placeholder="Digite o nome"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>CPF</label>
                        <input className="wrapper__input" onChange={this.props.getCpf} value={this.props.cpf} placeholder="Digite o CPF"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>RG</label>
                        <input className="wrapper__input" onChange={this.props.getRg} value={this.props.rg} placeholder="Digite o RG"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Endereço</label>
                        <input className="wrapper__input" onChange={this.props.getEndereco} value={this.props.endereco} placeholder="Digite o endereço"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Salário</label>
                        <input className="wrapper__input" onChange={this.props.getSalario} value={this.props.salario} placeholder="Digite o salário"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Telefone</label>
                        <input className="wrapper__input" onChange={this.props.getTelefone} value={this.props.telefone} placeholder="Digite o telefone"/>
                    </div>
                    <div className="wrapper__inputs-group">
                        <label>Cargo</label>
                        <select className="wrapper__input wrapper__input--select"
                            onChange={(event)=> this.props.selectFuncionarios(event)}
                        >
                            <option value="">Selecione um cargo...</option>
                            <option>Vendedor Agricola</option>
                            <option>Vendedor de Máquinas</option>
                            <option>Vendedor de Peças</option>
                            <option>Vendedor Veterinário</option>
                            <option>Atendente</option>
                        </select>
                    </div>
                </div>
                <button className="wrapper__btn wrapper__btn--save" onClick={this.props.CadastroFuncionarios}>Cadastrar</button>
                <button className="wrapper__btn wrapper__btn--clean" onClick={this.props.Limpar}>Limpar</button>
            </div>
            </>
        )
    }
}
