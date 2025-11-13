import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 30, '1'),
    new Cliente('Caio', 11, '2'),
    new Cliente('Tereza', 63, '3'),
    new Cliente('Rosa', 44, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-linear-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo="Página Inicial">
        <div className="flex justify-end">
          <Botao className="mb-4" cor="green">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  );
}
