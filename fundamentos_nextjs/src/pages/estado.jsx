import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {

    const [numero, alterarNumero] = useState(0)

    function incrementar() {
        alterarNumero(numero + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar} >Incrementar</button>
        </Layout>
    )
}