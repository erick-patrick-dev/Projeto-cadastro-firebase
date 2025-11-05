import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Fundamentos" />
        </Layout>
    )
}

/* 
JSX fragment  <> </>  
elementos dentro dela irão ficar numa div com id __next
*/