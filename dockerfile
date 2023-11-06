# Etapa de construcción
FROM node:14 as build
WORKDIR /usr/src/app

# Copia los archivos de origen TypeScript a la carpeta de trabajo
COPY src/ .

# Copia el archivo package.json y package-lock.json
COPY package*.json ./


# Instala las dependencias y compila TypeScript
RUN npm install
COPY . .
# Expose the port on which your application will run
EXPOSE 3000

# Start the Node.js application (app.js)
CMD ["npm","run", "dev"]