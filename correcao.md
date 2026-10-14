#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Parcialmente correto
Nota: 0,50

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Incorreto
Nota: 0,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Parcialmente correto
Nota: 0,50

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 8,00

#Extra1 — Loading e erro
Conquistado
Nota extra: +1,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Conquistado
Nota extra: +1,00

Soma extras: 2,00
Extras conquistados: E1, E4

Subtotal com extras (teto 10,00): 10,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 10,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** Valorant.  
**Caminho base:** raiz (`app/`, `components/`).

**Critério 1 — Projeto Next.js:** `package.json` com `next`; `app/layout.js` e `app/page.js`.

**Critério 2 — Lista com axios:** `app/page.js` faz `axios.get` na Valorant API e renderiza `List`/`ListItem`.

**Critério 3 — useState e useEffect:** estados agentes/carregando/erro/busca; `useEffect` carrega dados; `"use client"`.

**Critério 4 — 6 componentes:** 5 componentes em `components/`: ErrorState, Header, List, ListItem, Loader (3–5 → Parcial).

**Critério 5 — Props:** List←agentes, ListItem←agente, ErrorState←mensagem, Header←titulo.

**Critério 6 — Detalhes + axios + navegação:** rota `app/details/[id]/page.js` com `axios.get` do agente + `Link` em `ListItem` para `/details/${uuid}`. Há bug (`id` sem `useParams()`), mas o requisito essencial (navegação + nova chamada axios no detalhe) está implementado → Correto (leitura generosa).

**Critério 7 — Comentários:** ausência de comentários explicativos no código da app.

**Critério 8 — Commits:** 18 commits na `main`.

**Critério 9 — README / deploy link:** só contém o link Vercel, sem instruções install/dev → Parcial.

**Critério 10 — Deploy Vercel:** `https://web-chp5-eiyl.vercel.app/` **LIVE (HTTP 200)**; também há evidência de GitHub Deployments Vercel.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Conquistado (+1,00). `Loader` e `ErrorState` na lista e no detalhe.
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). Apenas `useMemo` (precisa ≥ 2 entre useMemo/useCallback/useRef).
**Extra 3 — Busca/filtro:** Não conquistado (+0,00). Estado `busca` e `agentesFiltrados` existem, mas **não há input** na UI para digitar a busca.
**Extra 4 — localStorage:** Conquistado (+1,00). Leitura/gravação de `agentes` em `app/page.js`.
**Resumo extras:** E1, E4 (+2,00); subtotal critérios 8,00 + extras → teto 10,00.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- **remote:** `https://github.com/pedropcorsini/web-chp5`
- **branch:** `main`
- **trecho log:** `c3bde44` feat: adiciona link do vercel … `8422c93` first commit
- **autores:** 18 Laboratório FIAP
- **contagem Critério 8:** 18
