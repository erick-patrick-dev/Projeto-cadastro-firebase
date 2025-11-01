import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
    return (
        <>
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Fundamentos" />
        </>
    )
}

/* 
JSX fragment  <> </>  
elementos dentro dela irão ficar numa div com id __next
*/