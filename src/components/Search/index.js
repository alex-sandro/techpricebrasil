import React from "react";
import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { produtos } from "./produtos";


const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    margin: 0;
    text-align: center;
    padding: 50px 0;
    height: 70px;
    width: 100%;
`
const Subtitulo = styled.h2`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
`

function Search () {
    const  [ produtoPesquisado, setProdutoPesquisado] = useState([])


    return (
        <SearchContainer>
            <Subtitulo>Encontre um produto:</Subtitulo>
            <Input 
                placeholder="Ex.: queijo, farinha, etc..."
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = produtos.filter( produto => produto.nome.includes(textoDigitado))
                    setProdutoPesquisado(resultadoPesquisa)
                }}
            />
            { produtoPesquisado.map( produto => (
                <Resultado>
                    <table>
                        <tr>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Preço</th>
                            <th>Loja</th>
                        </tr>
                        <tr>
                            <td>{ produto.nome }</td>
                            <td>{ produto.marca }</td>
                            <td>{ produto.preco }</td>
                            <td>{ produto.loja }</td>
                        </tr>
                    </table>
                </Resultado>
            ) ) }
        </SearchContainer>
    )
}

export default Search