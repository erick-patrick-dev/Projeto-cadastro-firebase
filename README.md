# Projeto Cadastro Firebase | Next.js + TypeScript + Firebase

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-green)

Este projeto é um laboratório de desenvolvimento focado na construção de um sistema de cadastro robusto, utilizando a sinergia entre o framework **Next.js** (com **TypeScript**) e o **Firebase** (Firestore) como backend e banco de dados NoSQL.

## 💡 Exploração dos Fundamentos

O repositório é estruturado para explorar e consolidar diversos conceitos essenciais do desenvolvimento moderno, incluindo:

1.  **Fundamentos do Next.js:** Entendimento de roteamento, estrutura de pastas e a diferença entre renderização no cliente e no servidor.
2.  **Pré-renderização (SSR/SSG):** Experimentos com Server-Side Rendering (SSR) e Static Site Generation (SSG) para otimizar o carregamento e SEO das páginas de listagem de dados.
3.  **Tipagem Estrita com TypeScript:** Garantindo maior segurança e manutenibilidade do código, especialmente na manipulação de dados vindos do Firebase.
4.  **Arquitetura Orientada a Classes (Opcional):** Em alguns *branches*, exploramos a criação de classes de cliente para encapsular a lógica de acesso ao Firebase, mantendo os componentes React limpos e focados na UI.

---

## ⚙️ Foco Principal: CRUD com Next.js e Firebase

A funcionalidade central deste projeto é a implementação completa das operações **CRUD (Create, Read, Update, Delete)** para gerenciar registros (usuários, produtos, etc.) de forma eficiente.

### Estrutura do CRUD

| Operação | Método | Descrição |
| :--- | :--- | :--- |
| **Create** (Criar) | `POST` / Firebase `addDoc` | Inserção de novos registros no Firestore. |
| **Read** (Ler) | `GET` / Firebase `getDocs` | Listagem de todos os registros e visualização de um registro específico. |
| **Update** (Atualizar) | `PUT`/`PATCH` / Firebase `updateDoc` | Edição de dados de um registro existente. |
| **Delete** (Deletar) | `DELETE` / Firebase `deleteDoc` | Remoção permanente de um registro do banco de dados. |

### Vantagens da Pilha Tecnológica

*   **Next.js:** Oferece excelente performance e uma estrutura de API Routes que facilita a criação de endpoints para interagir com o Firebase de forma segura (ocultando as chaves de API do lado do cliente).
*   **TypeScript:** Garante que os objetos de dados (modelos) do Firebase estejam sempre corretos, prevenindo erros comuns de tipagem.
*   **Firebase (Firestore):** Proporciona um banco de dados rápido e escalável, ideal para prototipagem e aplicações de médio porte.

## 🛠️ Tecnologias Utilizadas

*   **Framework:** Next.js
*   **Linguagem:** TypeScript
*   **Backend/DB:** Firebase (Firestore)
*   **Estilização:** CSS e Tailwind
*   **Gerenciador de Pacotes:** npm

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

*   Node.js (versão LTS)
*   Conta no Firebase e um novo projeto configurado.

### 1. Clonar o Repositório

```bash
git clone https://github.com/erick-patrick-dev/Projeto-cadastro-firebase.git
cd next-crud
``

O aplicativo estará disponível em `http://localhost:3000`.
