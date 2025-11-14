import Cliente from "@/src/core/Cliente";
import ClienteRepositorio from "@/src/core/ClienteRepositorio";
import { dataBase } from '../config'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    QueryDocumentSnapshot,
    SnapshotOptions,
    FirestoreDataConverter
} from 'firebase/firestore'



export default class ColecaoCliente implements ClienteRepositorio {

    #conversor: FirestoreDataConverter<Cliente> = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options?: SnapshotOptions): Cliente {
            const dados = snapshot.data(options) as { nome: string; idade: number }
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    #colecaoCliente = collection(dataBase, 'clientes').withConverter(this.#conversor)

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            await setDoc(
                doc(dataBase, 'clientes', cliente.id).withConverter(this.#conversor),
                cliente,
            )
            return cliente
        } else {
            const docRef = await addDoc(
                this.#colecaoCliente,
                cliente,
            )
            return new Cliente(cliente.nome, cliente.idade, docRef.id)
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        // VERIFICAÇÃO: Só podemos excluir se o cliente tiver um ID.
        if (!cliente?.id) {
            console.warn("Tentativa de excluir um cliente sem ID.")
            return
        }
        // Agora 'cliente.id' é garantidamente uma string
        return await deleteDoc(doc(dataBase, 'clientes', cliente.id))
    }

    async obterTodos(): Promise<Cliente[]> {
        const clientesCol = this.#colecaoCliente
        const clientesSnapshot = await getDocs(clientesCol)
        const clientesList = clientesSnapshot.docs.map((doc) => doc.data()) ?? []
        return clientesList
    }
}