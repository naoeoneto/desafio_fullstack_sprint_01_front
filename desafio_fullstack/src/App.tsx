import UserProvider from './contexts/userContext'
import RoutesMain from './routes'
import ContainerApp from './styles/container'
import GlobalStyle from './styles/global'

function App() {
  return (
    <ContainerApp>
      <GlobalStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </ContainerApp>
  )
}

export default App
