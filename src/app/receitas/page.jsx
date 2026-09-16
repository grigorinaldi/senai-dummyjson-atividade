"use client";

import {useEffect, useState } from "react";

export default function Receitas(){

const [listaReceitas, setListaReceitas] = useState([]);
const [msgErro, setMsgErro] = useState("");

useEffect(() => {
    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // CORREÇÃO 1: Adicionado o .recipes aqui
            setListaReceitas(data.recipes); 
            setMsgErro("");
        })
}, [])

return (
    <main>
        <h1>Receitas</h1>
        {msgErro != "" && <p>ERRO: {msgErro}</p>}
        {listaReceitas.length > 0 ?

            <div>
                {listaReceitas.map((receita, idx) => {
                    return(
                        <div key={idx}>
                            <h2 className="nome">{receita.name}</h2>
                            <img src={receita.image} alt=""/>
                            <h3 className="ingredientes">{receita.ingredients}</h3>
                            <h3 className="instrucao">{receita.instructions}</h3>
                            
                        </div>
                    )
                })}
            </div>
            :
            <div>
                <p> Sem nenhuma receita...</p>
            </div>}
    </main>
)
}
