import Layout from "../components/Layout";

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/clientes/cabral')
    const data = await res.json()
    return {
        props: {
            ...data,
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Dinâmico">
            <div className="Random">
                <p>{props.id}</p>
                <p>{props.nome}</p>
                <p>{props.email}</p>
                <p>{props.numero}</p>
            </div>
        </Layout>
    )
}