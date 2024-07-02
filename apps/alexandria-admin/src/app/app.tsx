import { Button } from '@alexandria/shadcn-ui';
import { Route, Routes, Link } from 'react-router-dom';
import Layout from './Layout';
import { TableComponent } from './molecules/Table';


export function App() {
  
  return (
      <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Button>Click here for page 2.</Button>
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <TableComponent />
          }
        />
      </Routes>
      </Layout>
  );
}

export default App;
