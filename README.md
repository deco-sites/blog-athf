# Blog — deco.cx template 

Welcome to your [deco.cx](https://deco.cx) site!

## Usage

1 - [Install deno](https://docs.deno.com/runtime/manual/getting_started/installation/)


2 - Run the command

```sh
deno task start
```

This will install all dependencies and start your project.

Access `http://localhost:8000` to see your site.

## Recommended extensions (VSCode)

- [Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

- [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Dependencies

Keep your dependencies updated by running:

```sh
deno task update
```

## Help

- 📚 [Docs](https://www.deco.cx/docs/en/overview)

- 🚨 [Troubleshooting](https://deco.cx/docs/en/reference/troubleshooting)

- 🔤 [Glossary](https://deco.cx/glossary)

- 👥 [Discord](https://deco.cx/discord)

## Contributing

We are working on the instructions, for now feel free to contribute to this project.

Take a look on this ones:
- [deco](https://github.com/deco-cx/deco/)
- [apps](https://github.com/deco-cx/apps/)

Prompt
Quero que você converta um componente no padrão abaixo: 📘 **Padrão de referência** - As props devem ser totalmente tipadas em TypeScript com export interface Props - Cada campo deve conter comentários com @title, @description, @format, e @default - Nenhum conteúdo deve ser fixo dentro do JSX. Tudo deve vir das props. - O componente deve ser totalmente estático (sem React hooks como useState) - Caso o componente tenha menus mobile, substitua o comportamento por input type="checkbox" com peer para controlar o estado - O layout e as classes CSS devem ser mantidos iguais ao modelo que eu enviar - O código deve ser compatível com o padrão do Fresh/Deno ou framework similar (sem dependências externas como React ou lucide-react) - Use Image de "apps/website/components/Image.tsx" e ImageWidget de "apps/admin/widgets.ts" - Nomeie o componente de forma limpa e padronizada (ex: Header, HeroBanner, Footer, etc.) 🧩 **Tarefa** 1. Eu vou te enviar **um modelo de referência** (padrão que você deve seguir, como um componente tipo HeroFlats) 2. Em seguida, eu te enviarei **um segundo código** (o componente que quero aproveitar o layout) 3. Sua função é: - Reescrever o segundo código seguindo o padrão do primeiro - Tipar todas as props e criar @default coerentes com o conteúdo original - Substituir qualquer useState, onClick, etc. por input[type=checkbox] + peer (quando aplicável) - Deixar o componente pronto para receber conteúdo dinâmico via CMS 🧱 **Saída esperada** - Código completo e funcional - Tipagem detalhada (Props, CTA, etc.) - Comentários de documentação (@title, @description, @default, @format) - Mesmo layout e classes CSS do componente base - Sem React hooks, apenas estrutura declarativa Depois que eu enviar os dois códigos, você deve apenas responder com o componente final no novo padrão.