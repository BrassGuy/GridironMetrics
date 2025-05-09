import Navigation from '@/components/Navigation'
import { Card, Title, Text, Grid, Col, Metric } from '@tremor/react'

export default function Home() {
  return (
    <main>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            NFL Analytics & Fantasy Insights
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Deep dive into player statistics, performance trends, and fantasy projections
          </p>
        </div>

        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
          <Col>
            <Card className="stat-card">
              <Title>Passing Leaders</Title>
              <Metric>4,965 YDS</Metric>
              <Text>Dak Prescott</Text>
            </Card>
          </Col>
          
          <Col>
            <Card className="stat-card">
              <Title>Rushing Leaders</Title>
              <Metric>1,167 YDS</Metric>
              <Text>Christian McCaffrey</Text>
            </Card>
          </Col>
          
          <Col>
            <Card className="stat-card">
              <Title>Receiving Leaders</Title>
              <Metric>1,799 YDS</Metric>
              <Text>CeeDee Lamb</Text>
            </Card>
          </Col>
        </Grid>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Featured Insights
          </h2>
          
          <Grid numItems={1} numItemsSm={2} className="gap-6">
            <Card className="stat-card">
              <Title>Top Fantasy Performers</Title>
              <Text className="mt-4">
                Track the highest scoring players across all positions and identify emerging trends
              </Text>
            </Card>
            
            <Card className="stat-card">
              <Title>Weekly Matchup Analysis</Title>
              <Text className="mt-4">
                Deep dive into player matchups and defensive rankings to optimize your lineup
              </Text>
            </Card>
          </Grid>
        </div>
      </div>
    </main>
  )
} 