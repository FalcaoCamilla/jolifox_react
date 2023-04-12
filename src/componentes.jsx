import { useEffect, useState } from "react";
import "./App.css"
import style from "./App.module.css"

const ComponentUm = () => {

    const lista = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4"
    ];

    const [numero, setNumero] = useState(0);
    const [contador, setContador] = useState(0);

    const calback = () => {
        setNumero(numero +  1);
    }

    useEffect(() => {
        setTimeout(() => {
            setNumero(numero + 1);
        }, 100)
    }, [contador])
    //contador é um gatilho para a função

    return (
        <div className="divComponenteUm" style={{"backgroundColor": "blueviolet"}} id={style.componenteID}>
            <span>
                Texto do Componente Um
            </span> 
            {
                lista.map((item, key) => 
                    <span key={key}> {item} </span>
                )
            }
            <span>{numero}</span>
            <button onClick={calback} style={{"marginTop": "5px", "padding": "10px", "border":"none", "borderRadius": "16px"}}>
                Clique Aqui
            </button>
            <button onClick={() => { setContador(numero + 1);}}>
                UseEffect Aqui :D
            </button>
        </div>
    )
}

export const ComponentDois = () => {
    return (
        <>
            elemento dois
        </>
    )
}

export default ComponentUm