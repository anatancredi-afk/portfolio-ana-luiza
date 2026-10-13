# Portfólio Profissional — Ana Luiza Tancredi

> Site pessoal desenvolvido para apresentar minha formação, habilidades, interesses, projetos e experiências acadêmicas. Projeto da disciplina de Desenvolvimento e Integração de Aplicações Web (DIW), do curso de Ciência da Computação da PUC Minas.

## Status do projeto

Em fase de revisão e publicação na nuvem.

## Links úteis

- **Site publicado:** link da Vercel a adicionar após o deploy.
- **Protótipo:** desenvolvido no Canva, utilizado como referência visual para a implementação.
- **GitHub da autora:** https://github.com/anatancredi-afk
- **LinkedIn:** https://www.linkedin.com/in/ana-tancredi-0aa499415

## Sobre o projeto

O portfólio reúne informações sobre minha trajetória na Ciência da Computação, meus conhecimentos técnicos e experiências. A interface foi desenvolvida com identidade visual em tons de roxo e layout responsivo, com navegação entre páginas e conteúdo em português e inglês.

## Funcionalidades principais

- Página inicial com apresentação pessoal, habilidades, interesses, curiosidades e certificados.
- Página de currículo com visualização e opção de download em PDF.
- Página de projetos com linha do tempo, imagens e links externos quando disponíveis.
- Página de experiências com atividades acadêmicas e voluntárias.
- Página de contato com links para redes profissionais e formulário com nome, e-mail e mensagem.
- Alternância entre português e inglês por JavaScript.
- Menu adaptado para dispositivos móveis.
- Animações de destaque ao passar o mouse sobre elementos da interface.

**Observação sobre o formulário:** ao enviar, o site abre o aplicativo de e-mail configurado no dispositivo do visitante, com o assunto e a mensagem preenchidos. O envio só é concluído quando o visitante confirma no aplicativo. Não há serviço de envio automático nem armazenamento das mensagens.

## Tecnologias utilizadas

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura e conteúdo das páginas |
| CSS3 | Estilização, layout responsivo e animações |
| JavaScript | Tradução da interface, menu móvel e formulário de contato |
| Google Fonts | Carregamento das fontes DM Sans, Great Vibes e Bebas Neue |
| Git e GitHub | Versionamento e hospedagem do repositório |
| Vercel | Plataforma prevista para publicação do site |

## Dependências, bibliotecas e frameworks

O projeto **não utiliza frameworks JavaScript, bibliotecas de componentes ou dependências instaladas por npm**. Não possui `package.json`, backend ou banco de dados.

As fontes são carregadas por meio de uma importação CSS do serviço externo Google Fonts. Para visualizá-las corretamente, é necessária conexão com a internet; caso contrário, o navegador utiliza as fontes alternativas definidas no CSS.

## Arquitetura

Aplicação web estática composta por cinco páginas HTML que compartilham os arquivos `style.css` e `script.js`. As imagens e o currículo em PDF ficam na pasta `assets/`. A navegação utiliza links entre as páginas; as interações são executadas diretamente no navegador.

## Estrutura de diretórios

```text
portfolio-ana/
├── assets/
│   ├── arduino-bobit.png
│   ├── casa-irmao-sol.jpg
│   ├── curriculo-publico.pdf
│   ├── foto-ana.jpeg
│   ├── irmao-sol-logo.png
│   ├── linkedin-roxo.png
│   └── medifind-logo.png
├── index.html
├── curriculo.html
├── projetos.html
├── experiencias.html
├── contato.html
├── style.css
├── script.js
└── README.md
```

## Instalação e execução local

### Pré-requisitos

- Navegador atualizado (Chrome, Edge, Firefox ou similar).
- Visual Studio Code é recomendado para visualizar e editar o código.
- Extensão Live Server (opcional) para executar o site em um servidor local.

### Passo a passo

1. Baixe o repositório pelo botão **Code > Download ZIP** no GitHub ou clone-o com Git.
2. Extraia o ZIP, se necessário, e abra a pasta do projeto no VS Code.
3. Abra `index.html` no navegador. Alternativamente, clique com o botão direito no arquivo e selecione **Open with Live Server**, caso a extensão esteja instalada.
4. Utilize o menu superior para navegar pelas páginas.

Não é necessário executar `npm install`, configurar banco de dados ou iniciar um backend.

## Deploy

A publicação será feita pela Vercel, conectando o repositório do GitHub. Por ser um projeto estático, a pasta raiz contém o `index.html` e não há etapa de compilação.

**URL de produção:** a adicionar após a primeira publicação na Vercel.

## Testes e verificação

Antes da entrega, verificar:

- [ ] Navegação entre as cinco páginas.
- [ ] Layout em computador e celular.
- [ ] Alternância entre português e inglês.
- [ ] Carregamento das imagens e visualização do currículo.
- [ ] Funcionamento dos links externos.
- [ ] Abertura do aplicativo de e-mail pelo formulário de contato.
- [ ] Acesso ao endereço publicado na Vercel.

## Autora

**Ana Luiza Tancredi** — Ciência da Computação, PUC Minas.

## Referência de documentação

README adaptado ao projeto com base no [template disponibilizado pelo professor João Paulo Aramuni](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/blob/main/TEMPLATES/template_README.md).
