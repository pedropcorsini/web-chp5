"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";
import List from "@/components/List";

const URL =
  "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR";

export default function Home() {
  const [agentes, setAgentes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const [busca, setBusca] = useState("");

  useEffect(() => {
    const salvo = localStorage.getItem("agentes");
    if (salvo) {
      setAgentes(JSON.parse(salvo));
      setCarregando(false);
    }

    axios
      .get(URL)
      .then((res) => {
        setAgentes(res.data.data);
        localStorage.setItem("agentes", JSON.stringify(res.data.data));
      })
      .catch((err) => setErro(err.message))
      .finally(() => setCarregando(false));
  }, []);

  const agentesFiltrados = useMemo(() => {
    return agentes.filter((agente) =>
      agente.displayName.toLowerCase().includes(busca.toLowerCase())
    );
  }, [agentes, busca]);

  if (carregando) return <Loader />;

  if (erro && agentes.length === 0) return <ErrorState mensagem={erro} />;

  return (
    <div>
      <List agentes={agentesFiltrados} />
    </div>
  );
}
