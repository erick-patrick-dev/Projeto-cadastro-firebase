import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";

export default function ClientePorCodigo() {
    const router = useRouter() 
    return (
        <Layout titulo="Navegação Dinâmica">
            <span> Código= {router.query.codigo} </span>
            <div> Filial= {router.query.filial} </div>
        </Layout>
    )
}

/* 
O nextjs não permite usar o router diretamente, a não ser que
seja usado o hook useRouter.  

*/