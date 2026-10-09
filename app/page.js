"use client";

import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function carregar() {
      const res = await axios.get(
        "https://valorant-api.com/v1/agents?language=pt-BR"
      );
      setData(res.data.data);
    }
    carregar();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}


