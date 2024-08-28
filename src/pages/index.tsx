import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Pedro", 54, "4"),
  ];

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome )
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500
      text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
        <>
          <div className="flex justify-end">
            <Botao className="mb-4"
              onClick={() => setVisivel('form')}
            >Novo Cliente</Botao>
          </div>
          <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
        </> ) : (
        <Formulario 
          cliente={clientes[0]}
          cancelado={() => setVisivel('tabela')}
        />
        )}
      </Layout>
    </div>
  );
}
