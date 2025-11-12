import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  
  const clientes = [
    new Cliente('Ana', 30, '1'),
    new Cliente('Caio', 11, '7'),
    new Cliente('Tereza', 63, '2'),
    new Cliente('Rosa', 44, '8')
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-linear-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo="Página Inicial">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
