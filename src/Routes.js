import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Funcionario from './Views/Funcionario' 
import ListaFuncionario from './Views/ListaFuncionario' 
import Home from './Views/Home' 
import CadastroCliente from './Views/Cliente'
import ListaCliente from './Views/ListaCliente'
import ListaProdutos from './Views/ListaProdutos'
import CadastroProdutos from './Views/CadastroProdutos';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Funcionario} exact path="/funcionarios"/>
            <Route component={ListaFuncionario} exact path="/listafuncionarios"/>
            <Route component={CadastroCliente} exact path="/cadastrocliente"/>
            <Route component={ListaCliente} exact path="/listaclientes"/>
            <Route component={CadastroProdutos} exact path="/cadastroprodutos"/>
            <Route component={ListaProdutos} exact path="/listaprodutos"/>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes