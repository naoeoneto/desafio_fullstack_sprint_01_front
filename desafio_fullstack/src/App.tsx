import UserProvider from './contexts/userContext'
import RoutesMain from './routes'
import ContainerApp from './styles/container'

function App() {
  return (
    <ContainerApp>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </ContainerApp>
  )
}

export default App
