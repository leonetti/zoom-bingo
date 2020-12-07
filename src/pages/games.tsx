import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface GameList {
  games: Game[]
}

interface Game {
  id: number,
  name: string;
  rules: string;
}

export default function Games({ games }: GameList) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Rules</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((row: Game) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.rules}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Games.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/games');
  const json = await res.json();
  return { games: json };
};
