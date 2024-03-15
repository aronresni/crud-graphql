import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from "cors";
import http from 'http';

export async function startApolloServer(typeDefs, resolvers) {
    // Crear una instancia de Express
    const app = express();

    // Crear un servidor HTTP utilizando Express
    const httpServer = http.createServer(app);

    // Crear una instancia de ApolloServer y configurar los esquemas y resolutores
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // Iniciar el servidor de Apollo
    await server.start();

    // Aplicar middleware para la ruta "/graphql" utilizando CORS y el middleware de Apollo Server para Express
    app.use('/graphql', cors(), express.json(), expressMiddleware(server));

    // Esperar a que el servidor HTTP escuche en el puerto 4000
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

    // Imprimir un mensaje en la consola indicando que el servidor está funcionando
    console.log('Servidor GraphQL en funcionamiento en http://localhost:4000/graphql');
}
