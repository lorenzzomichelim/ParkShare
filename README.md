# ParkShare - Documentação do Projeto (Entrega Documental)

Este repositório contém o código-fonte da landing page institucional da **ParkShare**, desenvolvida como projeto prático para a disciplina de **Programação Front-End** no 3º semestre do curso de Engenharia de Software.

O projeto consiste em um sistema simples, responsivo e funcional focado em demonstrar a proposta de valor, funcionamento, planos e credibilidade de um marketplace de compartilhamento de vagas de garagem.

---

## 1. Recursos Implementados (Requisitos Funcionais)

Com base no escopo técnico da plataforma, a página entrega de forma simples as seguintes seções estruturadas:

* **Navegação Principal (Sticky Navbar):** Menu superior fixo no topo que acompanha a rolagem da página, contendo links de navegação por âncoras para acesso rápido às seções internas.
* **Apresentação (Hero Section):** Chamada principal com a proposta de valor do produto direcionada a motoristas e proprietários, acompanhada de botões de chamada para ação (CTA) para cadastro e busca.
* **Como Funciona:** Divisão em duas colunas que mapeia de forma numerada e sequencial o fluxo prático para Motoristas (buscar, reservar, pagar e estacionar) e para Proprietários (cadastrar, precificar, receber reservas e pagamentos).
* **Listagem de Vagas:** Exibição de cards simulados com exemplos reais de vagas disponíveis nas principais cidades (São Paulo, Curitiba e Rio de Janeiro), exibindo título, localização e valor por hora.
* **Área de Proprietários (Ganhos Potenciais):** Um painel destacado em gradiente com estimativa de faturamento médio mensal para incentivar novos cadastros de vagas ociosas.
* **Cobertura Nacional (Métricas):** Painel numérico em destaque exibindo estatísticas comerciais da plataforma: mais de 50 cidades atendidas, mais de 12 mil vagas cadastradas e suporte 24/7.
* **Planos e Preços:** Tabela comparativa contendo três opções de assinatura (Básico - Grátis, Pro - R$ 29/mês e Business - R$ 99/mês), listando os recursos incluídos e destacando visualmente o plano recomendado.
* **Depoimentos (Prova Social):** Espaço dedicado a avaliações contendo histórias de sucesso reais simuladas de uma proprietária e de um motorista para transmitir credibilidade.
* **FAQ (Perguntas Frequentes):** Seção de perguntas e respostas diretas para sanar dúvidas recorrentes sobre segurança e recebimento de valores.
* **Call-to-Action Final (Cadastro):** Formulário integrado e simplificado para captação de novos usuários com validação básica nativa (Nome, E-mail) e simulação de envio de dados.

---

## 2. Decisões de Layout e Interface

A concepção visual da página foi guiada por diretrizes de simplicidade, clareza e foco na conversão de usuários, adotando padrões comuns a startups de economia compartilhada:

* **Estilo Geral:** Minimalista com amplo uso de espaços em branco (padding/margin consistentes) para evitar a sobrecarga de informações e garantir uma hierarquia de leitura natural e confortável.
* **Paleta de Cores:**
    * *Cor Predominante:* Verde Esmeralda (`#10b981`), utilizada nos botões principais, destaques numéricos e bordas de destaque para associar a marca à segurança e à economia.
    * *Cor Secundária:* Teal (`#14b8a6`), aplicada em gradientes e fluxos secundários para trazer equilíbrio visual.
    * *Fundos e Textos:* Tons de cinza claro (`#f9fafb`) para seções alternadas e cinza escuro escurecido (`#111827`) para os textos, gerando excelente contraste de acessibilidade de leitura.
* **Tipografia:** Utilização da família de fontes nativas *Sans-Serif* de alta legibilidade, variando os pesos (*font-weight*) e tamanhos para diferenciar claramente títulos de blocos de texto.
* **Componentização e Organização:** Layout construído em um fluxo linear único e estruturado com tags HTML5 semânticas (`<header>`, `<section>`, `<form>`, `<footer>`), facilitando a manutenção e a explicação do código durante a arguição individual.
* **Responsividade (Requisitos Não Funcionais):** A interface foi projetada utilizando regras de grade fluidas que se adaptam perfeitamente a dispositivos móveis (smartphones) e telas desktop sem quebra de componentes ou sobreposição de textos.

---

## 3. Tecnologias Aplicadas

Para manter o projeto o mais enxuto e performático possível para o nível acadêmico de segundo semestre, optou-se pela utilização de ferramentas modernas sem a necessidade de configurações complexas de infraestrutura:

1.  **HTML5 Semântico:** Estruturação de toda a árvore de elementos com foco em legibilidade de código, SEO e acessibilidade.
2.  **Tailwind CSS (via CDN):** Framework de estilização baseado em classes utilitárias que elimina a necessidade de múltiplos arquivos CSS separados. Toda a identidade visual, responsividade, espaçamentos e efeitos de foco/hover foram aplicados diretamente nas tags através do motor de estilos injetado via CDN.
3.  **JavaScript Nativo (Vanilla JS):** Utilização simplificada de scripts embutidos na tag `onclick` para disparar respostas interativas simuladas de forma limpa na interface (ex: avisos de sucesso de cadastro).
