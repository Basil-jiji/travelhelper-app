import './App.css';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default App;
