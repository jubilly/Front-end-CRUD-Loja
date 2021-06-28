import React from 'react';
import './../Styles/produto.css'; 
const Produto = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__´produto">
                <div className="wrapper__inputs-group">
                    <h2 className="wrapper__title">Cadastro de Produto</h2>
                    <input className="wrapper__input" placeholder="Digite o nome"/>
                    <input className="wrapper__input" placeholder="Digite o CPF"/>
                    <input className="wrapper__input" placeholder="Digite o RG"/>
                    <input className="wrapper__input" placeholder="Digite o endereço"/>
                    <input className="wrapper__input" placeholder="Digite o salário"/>
                    <input className="wrapper__input" placeholder="Digite o telefone"/>
                    <input className="wrapper__input" placeholder="Digite o cargo"/>
                    <select className="wrapper__input wrapper__input--select" >
                        <option>Vendedor Agricola</option>
                        <option>Vendedor de Máquinas</option>
                        <option>Vendedor de Peças</option>
                        <option>Vendedor de Veterinário</option>
                        <option>Atendente</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Produto
