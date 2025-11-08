import Layout from "../components/Layout";

// pré renderização estática

export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}



export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div className="Random">
                <p>{props.numero}</p>
            </div>
        </Layout>
    )
}