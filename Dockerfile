# Imagem base
FROM node:14.17.6-alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código fonte da aplicação
COPY . .

# Compila a aplicação
RUN npm run build

# Define o comando de inicialização do container
CMD ["npm", "start"]
