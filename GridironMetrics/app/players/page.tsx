import Navigation from '@/components/Navigation'
import {
  Card,
  Title,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
  TextInput,
} from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const players = [
  {
    name: 'Christian McCaffrey',
    position: 'RB',
    team: 'SF',
    rushYds: 1167,
    recYds: 564,
    totalTD: 21,
    fantasyPts: 390.1,
  },
  {
    name: 'CeeDee Lamb',
    position: 'WR',
    team: 'DAL',
    rushYds: 113,
    recYds: 1749,
    totalTD: 12,
    fantasyPts: 332.2,
  },
  {
    name: 'Dak Prescott',
    position: 'QB',
    team: 'DAL',
    passYds: 4516,
    passTD: 36,
    int: 9,
    fantasyPts: 351.8,
  },
]

export default function PlayersPage() {
  return (
    <main>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            Player Statistics
          </h1>
          <TextInput
            icon={MagnifyingGlassIcon}
            placeholder="Search players..."
            className="max-w-xs"
          />
        </div>

        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Position</TableHeaderCell>
                <TableHeaderCell>Team</TableHeaderCell>
                <TableHeaderCell>Fantasy Points</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.name}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>
                    <Badge color="blue">
                      {player.position}
                    </Badge>
                  </TableCell>
                  <TableCell>{player.team}</TableCell>
                  <TableCell>{player.fantasyPts}</TableCell>
                  <TableCell>
                    <Badge color="green">
                      Active
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  )
} 