# gullas-adm-profissional

Estrutura reorganizada a partir do arquivo original da Gullas.

## Estrutura
- `index.html` — estrutura da interface
- `css/styles.css` — estilos visuais
- `js/` — JavaScript separado por responsabilidade/bloco existente
- `manifest.webmanifest` — metadados PWA (quando utilizado)

## JavaScript
- `js/app.js`
- `js/desktop-orders.js`

## Regra de manutenção
O `index.html` não contém os blocos grandes de CSS/JavaScript originais. Os arquivos externos são carregados na mesma ordem do sistema anterior para preservar dependências. O arquivo `app.js` ainda concentra o núcleo legado fortemente acoplado; ele deve ser modularizado internamente apenas com testes funcionais, para evitar quebrar o sistema em produção.
