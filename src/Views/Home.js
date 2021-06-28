import React from 'react';
import './../Styles/funcionario.css'; 
import Header from './../Components/Header';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
        <Header/>
        <div className="wrapper">
            <div className="wrapper__blocks">
                <Link className="wrapper_block" to="/funcionarios">Cadastrar de Funcionário</Link>
                <Link className="wrapper_block" to="/listafuncionarios">Listagem de Funcionário</Link>
                <Link className="wrapper_block" to="/cadastrocliente">Cadastro de Cliente</Link>
                <Link className="wrapper_block" to="/listaclientes">Listagem de Cliente</Link>
                <Link className="wrapper_block" to="/cadastroprodutos">Cadastro de Produtos</Link>
                <Link className="wrapper_block" to="/listaprodutos">Listagem de Produtos</Link>
            </div>
        </div>
        </> 
    )
}

export default Home;
