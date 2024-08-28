import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
      <div>
        {id ? (
          <Entrada somenteLeitura texto="Nome" valor={id} className="mb-5" />
        ) : (
          false
        )}
        <Entrada
          texto="Nome"
          valor={nome}
          valorMudou={setNome}
          className="mb-5"
        />

        <Entrada
          texto="Idade"
          tipo="number"
          valor={idade}
          valorMudou={setIdade}
        />

        <div className="flex justify-end mt-3 ">
          <Botao className="mr-2 bg-gradient-to-r from-gray-400 to-gray-700">
            {id ? "Alterar" : "Salvar"}
          </Botao>
          <Botao onClick={props.cancelado} className="bg-gradient-to-r from-gray-400 to-gray-700">
            Cancelar
          </Botao>
        </div>
      </div>
    );
}