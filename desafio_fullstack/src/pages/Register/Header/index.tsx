import { Link } from 'react-router-dom'
import Header from './styles'

const HeaderRegister = () => {
  return (
    <Header>
        <h1>Kenzie Hub</h1>
        <Link to='/login'>Voltar</Link>
    </Header>
  )
}

export default HeaderRegister