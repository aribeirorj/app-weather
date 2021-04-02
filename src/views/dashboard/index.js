import { Search } from '../../components';
import { Container } from './styles';
import { Card } from '../../components';

function Dashboard() {
  return (
    <Container>
      <Search />
      <Card />
    </Container>
  );
}

export default Dashboard;
