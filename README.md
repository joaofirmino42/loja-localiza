# Fake Store - Next.js E-commerce App

Uma aplicação Next.js para uma loja fake usando a API do FakeStore.

## Tecnologias Utilizadas

- **Next.js 16** com App Router
- **React 19**
- **TypeScript**
- **Material-UI (MUI) v9**
- **React Query v5**
- **Axios** para chamadas de API
- **Jest** e **@testing-library/react** para testes

## Funcionalidades

- Listagem de produtos com paginação
- Página de detalhamento de produto (PDP)
- Design responsivo com Material-UI
- Header e Footer consistentes
- SSR para páginas de produto
- Testes unitários

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint
- `npm test` - Executa os testes
- `npm run test:watch` - Executa os testes em modo watch

## Estrutura do Projeto

- `app/` - Páginas Next.js
- `components/` - Componentes React
- `service/` - Serviços de API
- `types/` - Definições de tipos TypeScript
- `__tests__/` - Testes unitários

## API Utilizada

- [FakeStore API](https://fakestoreapi.com/)

## Deploy no Vercel

1. Faça push do código para um repositório GitHub
2. Conecte o repositório ao Vercel
3. Deploy automático

## Princípios Aplicados

- **SOLID**: Separação de responsabilidades, injeção de dependências
- **SSR/SSG**: Páginas de produto usam SSR para SEO
- **Material-UI**: Componentes consistentes e acessíveis
- **React Query**: Gerenciamento de estado e cache de dados
- **Testes**: Cobertura de componentes críticos

## Regras de IA

Consulte `AI_RULES.md` para as regras e diretrizes utilizadas no desenvolvimento assistido por IA.
