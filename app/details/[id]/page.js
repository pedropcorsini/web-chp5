"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";

export default function Details() {
    const { id } = useParams();

    const [agente, setAgente] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        axios
            .get(`https://valorant-api.com/v1/agents/${id}?language=pt-BR`)
            .then((res) => setAgente(res.data.data))
            .catch((err) => setErro(err.message))
            .finally(() => setCarregando(false));
    }, [id]);

    if (carregando) return <Loader />;
    if (erro) return <ErrorState mensagem={erro} />;

    return (
        <div>
            <Link href="/">Voltar para a lista</Link>

            <h2>{agente.displayName}</h2>
            <p>
                <strong>Funcao:</strong> {agente.role.displayName}
            </p>

            <img src={agente.fullPortrait} alt={agente.displayName} width={240} />

            <p>{agente.description}</p>

            <h3>Habilidades</h3>
            <ul>
                {agente.abilities.map((habilidade) => (
                    <li key={habilidade.slot}>
                        <strong>{habilidade.displayName}</strong>
                        <p>{habilidade.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
