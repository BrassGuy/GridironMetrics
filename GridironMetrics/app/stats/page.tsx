import Navigation from '@/components/Navigation'
import {
  Card,
  Title,
  BarChart,
  LineChart,
  Grid,
  Col,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from '@tremor/react'

const passingData = [
  { name: 'Dak Prescott', yards: 4516 },
  { name: 'Josh Allen', yards: 4306 },
  { name: 'Patrick Mahomes', yards: 4183 },
  { name: 'Jared Goff', yards: 4575 },
  { name: 'Tua Tagovailoa', yards: 4624 },
]

const weeklyTrends = [
  { week: 1, points: 120 },
  { week: 2, points: 145 },
  { week: 3, points: 132 },
  { week: 4, points: 150 },
  { week: 5, points: 138 },
]

export default function StatsPage() {
  return (
    <main>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            League Statistics
          </h1>
        </div>

        <TabGroup>
          <TabList className="mb-8">
            <Tab>Passing</Tab>
            <Tab>Rushing</Tab>
            <Tab>Receiving</Tab>
          </TabList>
          
          <TabPanels>
            <TabPanel>
              <Grid numItems={1} numItemsLg={2} className="gap-6">
                <Col>
                  <Card>
                    <Title>Top Passers by Yards</Title>
                    <BarChart
                      data={passingData}
                      index="name"
                      categories={['yards']}
                      colors={['blue']}
                      className="mt-6"
                    />
                  </Card>
                </Col>
                
                <Col>
                  <Card>
                    <Title>Weekly Scoring Trends</Title>
                    <LineChart
                      data={weeklyTrends}
                      index="week"
                      categories={['points']}
                      colors={['emerald']}
                      className="mt-6"
                    />
                  </Card>
                </Col>
              </Grid>
            </TabPanel>
            
            <TabPanel>
              <Card>
                <Title>Rushing Statistics Coming Soon</Title>
              </Card>
            </TabPanel>
            
            <TabPanel>
              <Card>
                <Title>Receiving Statistics Coming Soon</Title>
              </Card>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </main>
  )
} 