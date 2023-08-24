import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Home, CreatePost } from './pages';
import { styled } from 'styled-components';

const Header = styled.header`
  width: 99vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-color: #e6ebf4;
  padding: 1rem;

  .header-link-btn {
    color: white;
    text-decoration: none;
    font-family: 'Inter';
    background: #6469ff;
    padding: .5rem 1rem;
    border-radius: 5px;
  }

  img {
    height: 2rem;
  }
`;

const Main = styled.main`
  width: 99vw;
  margin: 0 auto;
  min-height: calc(100vh - 148px);
  background: #f9fafe;
  padding: 2rem;
  @media screen and (min-width: 992px) {
    padding: 2rem 1rem;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <Link to="/create-post" className='header-link-btn'>Create</Link>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create-post" element={<CreatePost />}/>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App;

