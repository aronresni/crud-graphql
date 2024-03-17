import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "./main.css"
// pages
import ProjectDetails from './Pages/Project'
import Projects from './Pages/ProjectDetail'

const client  = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<div className="container m-auto h-screen flex items-center justify-center">
					<Routes>
						<Route path="/" element={<Navigate to="/projects" replace />} />
						<Route path="/projects" element={<Projects/>} />
						<Route path="/projects/:id" element={<ProjectDetails/>} />
					</Routes>
				</div>
			</BrowserRouter>
		</ApolloProvider>
	);
};

export default App;