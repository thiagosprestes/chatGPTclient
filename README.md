<h1 align="center">
<br>
  <img src=".github/logo.png" width="auto" height="70" alt="marvel-heroes-app">
<br>
<br>
ChatGPT client with React Native
</h1>

<p align="center">App desenvolvido com intuito de testar as APIs de geração de imagem e texto do ChatGPT.</p>

# 📋 Índice

- [Telas](#-Telas)
- [Sobre o projeto](#-Sobre-o-projeto)
- [Tecnologias utilizadas](#-Tecnologias-utilizadas)
- [Rodando o projeto](#-Rodando-o-projeto)
  - [Pré-requisitos](#-Pré-requisitos)
  - [Rodando o aplicativo mobile](#-Rodando-o-app)

## 🚧 Telas

## 📃 Sobre o projeto

App criado para testar implementação das APIs de geração de texto e de imagens do ChatGPT com React Native

## 🛠 Tecnologias utilizadas

- ⚛️ **React native** — Aplicativo mobile
- 🛳️ **React navigation** — Efeito de transição entre as rotas
- 🖼️ **React native svg** — Renderização de SVG
- 🖥️ **React query** — Gerenciamento de requests
- 🎨 **Lottie** — Animação de digitação

## 🚀 Rodando o projeto

A aplicação é dividida em duas partes, mobile e server, o aplicativo mobile precisa que o server esteja sendo executado para funcionar.

### Pré-requisitos

- <a href="https://reactnative.dev/docs/environment-setup">React Native CLI setup</a>

### 📲 Rodando o app

Clone o repositório

```bash

# Clona o repositório
git clone https://github.com/thiagosprestes/chatGPTclient.git

```

Navegue até a pasta do projeto clonado e execute os comando abaixo

```bash

# Instala as dependências
yarn

```

Após concluir a instalação das dependências, renomeie o arquivo chamado `.env.example` para `.env`, após isso abra o arquivo e adicione a API key fornecida pelo chat GPT para sua conta

Após isso execute o comando abaixo

```bash

# Inicia o app no Android
yarn android

# Inicia o app no iOS
yarn iOS

```
