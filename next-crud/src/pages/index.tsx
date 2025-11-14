import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  const clientes = [
    new Cliente('Ana', 30, '1'),
    new Cliente('Caio', 11, '2'),
    new Cliente('Tereza', 63, '3'),
    new Cliente('Rosa', 44, '4')
  ]


  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('formulario')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-linear-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo="Página Inicial">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}

      </Layout>
    </div>
  );
}
