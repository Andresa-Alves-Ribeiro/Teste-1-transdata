<h1 align="center"> 
	Caixa Eletrônico - Calculo de Notas
</h1>

<p align="center">
 <a href="#descricao">Descricão</a> •
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#execucao">Como Executar?</a> •
 <a href="#funciona">Como funciona?</a> •
 <a href="#contato">Contato</a> • 
 <a href="#licenca">Licença</a>
</p>

## Demonstração
![Captura de tela 2025-03-08 174116](https://github.com/user-attachments/assets/babf17b9-208b-4e7c-9cef-fdddb3cfb066)

<a id="descricao"></a>

## Descrição

Este projeto simula um **Caixa Eletrônico** simples, onde o usuário pode informar um valor numérico e o sistema calcula a **menor quantidade de cédulas necessárias** para o saque, utilizando notas de **R$ 20, R$ 10, R$ 5 e R$ 1**.

A aplicação foi construída em **ReactJS** e utiliza a biblioteca **Semantic UI** para a interface de usuário. O objetivo do projeto é demonstrar a implementação de um sistema de cálculo de notas e a criação de uma interface simples e intuitiva.

<a id="funcionalidades"></a>

## 📄 Funcionalidades

- O usuário insere um valor numérico (inteiro).
- O sistema valida a entrada e garante que apenas números inteiros sejam permitidos.
- A aplicação calcula a **menor quantidade de notas possíveis** (20, 10, 5 e 1) para o valor informado.
- Exibe uma tabela com a quantidade de cédulas de cada valor.
- Exibe um resumo do saque, com o valor retirado e o total de notas utilizadas.
- Caso o valor informado seja inválido (menor que 1 ou não numérico), um erro é mostrado.

<a id="tecnologias"></a>

## 🛠️ Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces.
- **Next.js**: Framework para React que facilita o roteamento e otimização da aplicação.
- **Semantic UI**: Biblioteca de componentes UI para React, usada para criar uma interface limpa e responsiva.
- **TypeScript**: Utilizado para adicionar tipagem estática ao projeto.

<a id="execucao"></a>

## 🖥️ Como Executar?

### 1. Clonar o repositório

Para começar, clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/caixa-eletronico.git
cd caixa-eletronico
```

### 2. Instalar as dependências

Execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

### 3. Executar a aplicação

Após instalar as dependências, execute o comando para rodar a aplicação em modo de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Acesse a aplicação em http://localhost:3000

<a id="funciona"></a>

## 🌐 Como Funciona?

- O usuário insere um valor desejado no campo de entrada.
- Clica no botão "Calcular Notas".
- O sistema calcula a menor quantidade de cédulas necessárias para o valor inserido, considerando as notas de **R$ 20**, **R$ 10**, **R$ 5** e **R$ 1**.
- A tabela de resultados é exibida com a quantidade de cada tipo de nota.
- Um resumo do saque é mostrado com o número total de notas e o valor retirado.

<a id="contato"></a>

## 🦸 Contato

- Autor: Andresa A Ribeiro
- E-mail: andresa_15ga@hotmail.com
- LinkedIn: http://linkedin.com/in/andresa-alves-ribeiro

<a id="licenca"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).
