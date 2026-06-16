# DOCUMENTO DE ESPECIFICAÇÃO DE RECURSOS, INTERFACE E TECNOLOGIAS

## 📌 Projeto: ParkShare – Aluguel de Vagas de Garagem
**Contexto:** MVP (Minimum Viable Product) / Sistema Frontend

---

## 1. Descrição Geral do Sistema
O **ParkShare** é uma plataforma marketplace baseada no conceito de economia compartilhada (similar ao modelo do Airbnb), com o objetivo de conectar proprietários de imóveis que possuem vagas de garagem disponíveis com motoristas que necessitam de um local seguro para estacionar seus veículos por determinado período.

---

## 2. Tecnologias Aplicadas
O ecossistema tecnológico do projeto foi selecionado para garantir rapidez no carregamento, compatibilidade com dispositivos móveis e facilidade de manutenção:

* **HTML5:** Utilizado para estruturar de forma semântica o conteúdo do site (`<header>`, `<section>`, `<nav>`, `<footer>`), otimizando a acessibilidade e o SEO.
* **CSS3 Puro (Customizado):** Responsável por toda a identidade visual, tipografia moderna, espaçamentos, efeitos de transição (`transition: 0.3s`) e layout responsivo.
* **Bootstrap 5.3.3 (via CDN):** Incorporado no projeto de forma híbrida. Ele fornece a estrutura base de tipografia, reset global e classes auxiliares de espaçamento (ex: `my-5`, `mb-4`, `row g-4`).
* **JavaScript (Vanilla JS - ES6):** Utilizado de forma nativa e sem frameworks pesados para controlar a lógica de negócios local, filtros de busca de dados na memória do cliente (*Client-side*) e interações de formulários.

---

## 3. Recursos e Funcionalidades (Requisitos Funcionais)

### 🔗 RF01 - Navegação Interna (Âncoras)
* **Descrição:** O sistema possui um menu de navegação fixo no topo (*sticky*) que permite o direcionamento suave do usuário para as seções: *Início, Buscar Vagas, Como Funciona, Vantagens e Anunciar*.

### 🔍 RF02 - Busca de Vagas por Bairro
* **Descrição:** Permite ao usuário pesquisar por vagas inserindo o nome de um bairro.
* **Comportamento do Sistema:**
    1. O usuário digita o bairro na caixa de pesquisa e clica no botão **"🔍 Buscar Vaga"** ou pressiona a tecla `Enter`.
    2. Se o campo estiver vazio, exibe um alerta contextual: `⚠️ Por favor, digite o nome de um bairro para buscar.`
    3. A busca realiza uma varredura parcial e sem distinção de maiúsculas/minúsculas (*case-insensitive*) em um banco de dados mockado (`vagasDisponiveis`).
    4. Caso vagas sejam encontradas, a página rola suavemente (`scrollIntoView`) até a seção de listagem e gera dinamicamente os cartões com os detalhes (Bairro, descrição e valor/hora).
    5. Caso nenhuma vaga corresponda ao critério, exibe a mensagem amigável: `😕 Nenhuma vaga encontrada no bairro "[Nome]". Tente buscar por outro bairro!.`

### 📋 RF03 - Cadastro de Novas Vagas (Simulação de Lead)
* **Descrição:** Formulário de captação para usuários interessados em disponibilizar suas garagens.
* **Campos:** Nome Completo (Obrigatório) e Bairro da Vaga (Obrigatório).
* **Comportamento do Sistema:**
    1. Ao interceptar o envio do formulário (`preventDefault`), o JavaScript captura os dados digitados.
    2. Exibe uma mensagem de sucesso na tela customizada com os dados informados: `Olá, [Nome]! 🎉 Já temos motoristas interessados em vagas no bairro [Bairro]!...`
    3. Limpa os campos do formulário automaticamente (`reset`).
    4. A tela realiza um scroll suave para focar na mensagem e, após **10 segundos** (`setTimeout`), a mensagem é ocultada de forma automática.

---

## 4. Decisões de Layout e Interface (UI/UX)

### 🎨 4.1. Psicologia das Cores e Identidade Visual
A paleta de cores foi escolhida para transmitir os valores de confiança, solidez, agilidade e sustentabilidade:

| Cor | Código Hex | Aplicação / Significado |
| :--- | :--- | :--- |
| **Azul Escuro / Grafite** | `#1a252f` e `#2c3e50` | Cabeçalho, rodapé e fundo do Hero. Transmite profissionalismo, seriedade e segurança. |
| **Verde** | `#2ecc71` e `#27ae60` | Botões de conversão primária (CTA), barras de busca e preços. Simboliza economia, renda extra e sucesso. |
| **Fundo Neutro** | `#f8f9fa` e `#ffffff` | Alternância entre fundos cinza claro e branco para reduzir a fadiga visual e organizar a leitura. |

### 🔤 4.2. Tipografia e Legibilidade
Utilização da família de fontes padrão: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`. Isso garante que o texto seja renderizado com suavidade, boa legibilidade em telas digitais e sem exigir downloads adicionais de fontes externas, melhorando a performance.

### 📐 4.3. Hierarquia de Informação (Z-Pattern)
* **Hero Section:** O topo da página foca diretamente na proposta de valor da marca com um título de forte impacto (`<h1>`), seguido de um subtítulo explicativo e a barra de pesquisa logo abaixo. Essa estrutura guia o olhar do usuário diretamente para a ação principal.
* **Cards de Vantagens e Funcionamento:** Utilização de emoticons e ícones grandes (**50px a 60px**) para tornar a leitura dinâmica, escaneável e menos textual.

### ⚡ 4.4. Microinterações e Feedback Visual
* **Efeito Hover:** Todos os botões modificam suas cores suavemente ao passar o mouse.
* **Efeito de Elevação:** Os cartões de vaga e de funcionamento aplicam uma leve elevação vertical (`transform: translateY`) e sombreamento ampliado para dar a sensação de elemento clicável e interativo.

### 📱 4.5. Responsividade (Mobile-First / Breakpoints)
O layout foi projetado para se adaptar de forma fluida a qualquer tamanho de tela através de *Media Queries* focadas em dispositivos móveis (`max-width: 768px`):

> 📱 **Comportamento Mobile:**
> * **Menu/Navbar:** Passa de uma linha horizontal para uma disposição vertical centralizada no celular.
> * **Barra de Pesquisa:** Em telas grandes, o input e o botão ficam na mesma linha. Em telas menores, eles se empilham verticalmente para facilitar o toque (*touch target*).
> * **Grids de Conteúdo:** Tabelas e contêineres de cartões mudam de múltiplas colunas para uma coluna única (layout em lista), eliminando a rolagem horizontal indesejada.
