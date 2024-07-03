import { Button } from '@alexandria/shadcn-ui';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import LoginPage from './Pages/LoginPage';
import ListPage from './Pages/List';


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
            <ListPage />
          }
        />
      </Routes>
      </Layout>
  );
}

export default App;
