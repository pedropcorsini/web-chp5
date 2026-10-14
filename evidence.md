# Evidence 1ESPU/pedropcorsini-web-chp5
hasGit: true
nextRoots: [
  {
    "pkgPath": "package.json",
    "dir": "/Volumes/externo/FIAP/corretor-avaliacoes/turmas/2026/checkpoint-5/1ESPU/pedropcorsini-web-chp5",
    "next": "16.4.0",
    "axios": "^1.20.0",
    "react": "19.3.0",
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "eslint"
    }
  }
]
API: Valorant
components: 5 (em components/: 5)
- ErrorState @ components/ErrorState.js
- Header @ components/Header.js
- List @ components/List.js
- ListItem @ components/ListItem.js
- Loader @ components/Loader.js

## axios (8)
app/details/[id]/page.js:6: import axios from "axios";
app/details/[id]/page.js:16: axios
app/page.js:4: import axios from "axios";
app/page.js:26: axios
package-lock.json:11: "axios": "^1.20.0",
package-lock.json:2684: "node_modules/axios": {
package-lock.json:2686: "resolved": "https://registry.npmjs.org/axios/-/axios-1.20.0.tgz",
package.json:12: "axios": "^1.20.0",

## fetch (0)


## useState (9) / useEffect (4)
use client: 2
dynamic routes:
app/details/[id]/page.js
Link/useRouter: link=6 router=0

## Extras hints
useMemo=2 useCallback=0 useRef=0
localStorage=2
loadingHints=5 errorHints=6 searchHints=10

## Honeypots
nenhum

## Vercel links
https://web-chp5-eiyl.vercel.app/

## Git commits: 18 branch=main
```
18	Laboratório FIAP <labsfiap@fiap.com.br>
```
```
c3bde44 feat: adiciona link do vercel no readme
4c9b24f fix: erro de identacao
5de0249 fix: erro de hooks
667c411 feat: adiciona details/id/page e ajusta page principal
472c4b8 feat: adiciona componente list.
c453b99 feat: add compomente listitem
2ad0ea5 Merge branch 'main' of https://github.com/pedropcorsini/web-chp5
2bf4df5 feat: adiciona header ao layout.js
4c7f2d7 Merge branch 'main' of https://github.com/pedropcorsini/web-chp5
de4c77b  feat: adicionando o componente Loader
addc003 feat: adiciona caminho details/id/
a1d7788 Merge branch 'main' of https://github.com/pedropcorsini/web-chp5
5a9c020 feat: adiciona componente errorstate
fca14b6  feat: adicionando o componente Header
c578a5e limpando pastas que nao serao utilizadas
5e7b257 feat: adiciona participantes.md
eabae8e feat: cria e starta app
8422c93 first commit
```

## README preview
Link vercel = https://web-chp5-eiyl.vercel.app/

## Participantes preview
Pedro Passos Corsini - RM573493
Daniel Gomes Torres - RM573436
Henrique Lira - RM571009
Pedro Thyago de Araújo Santos - RM570939