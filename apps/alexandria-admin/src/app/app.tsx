import { Button } from '@alexandria/shadcn-ui';
import { Route, Routes, Link } from 'react-router-dom';
import Layout from './Layout';


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
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      </Layout>
  );
}

export default App;
