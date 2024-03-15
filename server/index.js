import { startApolloServer } from "./app.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { connectDB } from "./db.js";

async function initializeServer() {
    try {
        // Conecta a la base de datos
        await connectDB();

        // Inicia el servidor Apollo
        startApolloServer(typeDefs, resolvers);
    } catch (error) {
        console.error(`Error al inicializar el servidor: ${error.message}`);
        process.exit(1);
    }
}

initializeServer();
