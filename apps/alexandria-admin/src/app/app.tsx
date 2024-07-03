import { Button } from '@alexandria/shadcn-ui';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import List from './Pages/List';
import LoginPage from './Pages/LoginPage';


export function App() {
  
  return (
      <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage />
          }
        />
        <Route
          path="/admin"
          element={
            <List />
          }
        />
      </Routes>
      </Layout>
  );
}

export default App;
