
## Live Coding - Instruções e auxílios para rodar o projeto

### 1) Para instalar o NodeJS
- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) (Linux e Mac) - Mais fácil para gerenciar as versões do NodeJS na máquina
- [https://nodejs.org/en/](https://nodejs.org/en/) (Windows, Linux e Mac)

### 2) IDE para desenvolvimento
- [https://code.visualstudio.com/](https://code.visualstudio.com/)

### 3) NPM (Gerenciador de pacotes do NodeJS)
- [https://www.npmjs.com](https://www.npmjs.com)

### 4) Google Vision
- [https://cloud.google.com/vision](https://cloud.google.com/vision)
#### Criando o OCR
- Crie um projeto no GCP (https://console.cloud.google.com/projectcreate)
- Escolha o projeto criado no dashboard (https://console.cloud.google.com/home/dashboard)
- No menu esquerdo, clique em API e serviços
- Pesquise por "Vision" e selecione "Cloud Vision API"
- Ative a API
- Volte para a página de APIs e serviços e crie uma conta de serviço
- Faça o download do seu arquivo de credenciais
- Armazene seu arquivo de credenciais no projeto
- Para utilizar a API do Vision é necessário habilitar conta de faturamento no projeto (O google oferece $300 para degustação durante 3 meses)

### 5) Bibliotecas utilizadas no projeto
- [https://www.npmjs.com/package/youtube-node](https://www.npmjs.com/package/ejs) (View Engine - Interface gráfica)
- [https://www.npmjs.com/package/dialogflow](https://www.npmjs.com/package/express) (Servidor Web - HTTP)
- [https://www.npmjs.com/package/node-telegram-bot-api](https://www.npmjs.com/package/multer) (Upload de arquivos)


### 6) Para rodar o projeto
- Efetuar o clone do repositório em uma pasta do sistema operacional
- Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
- Substituir os arquivos de credenciais do google-cloud-credentials.json
- Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código
