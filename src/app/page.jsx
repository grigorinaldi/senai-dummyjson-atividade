"use client";

import { useEffect, useState } from "react";
import CardRecipe from "../components/cardRecipe";

export default function Home() {

    const [listaReceitas, setListaReceitas] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {

        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => {
                setListaReceitas(data.recipes);
                setMsgErro("");
            })
            .catch(erro => {
                setMsgErro("Não foi possível carregar as receitas.");
            });

    }, []);

    return (
        <main>

            <h1>Receitas</h1>

            {msgErro != "" && <p>ERRO: {msgErro}</p>}

            {listaReceitas.length > 0 ? (

                <div className="lista-receitas">

                    {listaReceitas.map((receita) => (
                        <CardRecipe
                            key={receita.id}
                            receita={receita}
                        />
                    ))}

                </div>

            ) : (

                <p>Sem nenhuma receita...</p>

            )}

        </main>
    );
}