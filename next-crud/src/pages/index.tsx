import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-linear-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo="Página Inicial">
        <h1>Conteúdo da Página Inicial</h1>
      </Layout>
    </div>
  );
}
