# Caroline Lage - Portfólio Pessoal

<p align="center">
  <img src="https://img.shields.io/badge/Role-Software%20Engineer-4b5563?style=for-the-badge" alt="Role">
  <img src="https://img.shields.io/badge/Status-Em%20Constru%C3%A7%C3%A3o-6b7280?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Architecture-FDD-374151?style=for-the-badge" alt="Architecture">
</p>

<p align="center">
  Repositório do meu portfólio pessoal, projetado para exibir minha trajetória, projetos e habilidades como Engenheira de Software e Designer.
</p>

---

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de consolidar minha experiência profissional em uma aplicação moderna, performática e escalável. O desenvolvimento foi pautado pela união de um design visual sofisticado com as melhores práticas de engenharia de software, garantindo um código limpo, componentização eficiente e alta manutenibilidade.

---

## Tecnologias e Ferramentas

O portfólio foi construído utilizando um stack tecnológico atualizado e focado em performance:

* **React:** Biblioteca principal para a construção de interfaces de usuário dinâmicas.
* **Vite:** Ferramenta de build de nova geração, garantindo um ambiente de desenvolvimento rápido e otimizado.
* **Tailwind CSS (v4):** Framework CSS utilitário utilizado para a estilização ágil e responsiva da aplicação.
* **Framer Motion:** Biblioteca de animações para React, responsável por transições fluidas e interações avançadas de UI.
* **React-i18next:** Solução de internacionalização (i18n) para suporte a múltiplos idiomas (Português e Inglês).
* **TypeScript:** Adição de tipagem estática ao JavaScript para maior segurança e previsibilidade de código.

---

## Principais Funcionalidades

* **Internacionalização (i18n):** Suporte nativo e troca dinâmica entre os idiomas Português e Inglês na interface.
* **Preloader Customizado:** Tela de carregamento inicial desenvolvida para otimizar a percepção de performance.
* **Jornada Dinâmica (Timeline):** Componente de linha do tempo interativo que consome dados estruturados para exibição do histórico profissional.
* **Download de Currículo Inteligente:** Funcionalidade que identifica o idioma ativo da aplicação e fornece o arquivo de currículo correspondente.

---

## Arquitetura: Feature-Driven Development (FDD)

Para garantir a escalabilidade e organização do projeto, a arquitetura adotada baseia-se no modelo **Feature-Driven Development (FDD)**. Em vez de acoplar arquivos baseados em seus papéis técnicos, o código é modularizado por contexto funcional, promovendo um isolamento eficiente e facilitando manutenções futuras.

### Estrutura de Diretórios
```text
src/
├── assets/             # Arquivos estáticos (imagens, ícones e currículos)
├── components/         # Componentes globais e genéricos (ex: Navbar, Footer)
├── data/               # Estruturas de dados estáticos do projeto
├── features/           # Módulos separados por contexto de funcionalidade
│   ├── about/          # Componentes e lógicas da seção "Sobre"
│   ├── experience/     # Componentes e lógicas da "Jornada Profissional"
│   └── hero/           # Componentes e lógicas da seção inicial
├── i18n/               # Arquivos de configuração e dicionários de tradução
├── App.tsx             # Componente raiz de agregação da aplicação
└── index.css           # Estilos globais e injeção do Tailwind CSS