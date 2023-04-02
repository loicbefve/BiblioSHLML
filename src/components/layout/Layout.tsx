import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;

  font-size: 12px;

  @media (min-width: 576px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
  padding: 0 100px;
`;

function Layout() {
  return (
    <LayoutWrapper>
      {import.meta.env.VITE_API_URL}
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
