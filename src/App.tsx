import {
  ArrowNarrowRightIcon,
  RefreshIcon,
  TrashIcon,
} from '@heroicons/react/solid'
import {
  Button,
  Card,
  DonutChart,
  Flex,
  Bold,
  Divider,
  Legend,
  Metric,
  Text,
  Title,
  Grid,
  Col,
  TextInput,
} from '@tremor/react'
import { SearchIcon } from '@heroicons/react/solid'

const destX = [
  {
    name: 'Successful',
    value: 35000,
  },
  {
    name: 'Not Received',
    value: 0,
  },
  {
    name: 'In Error',
    value: 0,
  },
]

const destY = [
  {
    name: 'Successful',
    value: 751794,
  },
  {
    name: 'Not Received',
    value: 998206,
  },
  {
    name: 'In Error',
    value: 0,
  },
]

const destZ = [
  {
    name: 'Successful',
    value: 1035,
  },
  {
    name: 'Not Received',
    value: 115,
  },
  {
    name: 'In Error',
    value: 350,
  },
]

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`

function App() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <Grid numItems={3} numItemsSm={3} numItemsLg={3} className="gap-2">
        <Col numColSpan={3} numColSpanLg={3}>
          <TextInput
            className="my-5"
            icon={SearchIcon}
            placeholder="Search for a tenant..."
          />
          <Card className="max-w-md mx-3">
            <Text>Data Flow</Text>
            <Metric>Upstream A</Metric>
            <Divider />
            <Text className="mt-8">
              <Bold>Tenant</Bold>
            </Text>
            <Text>763f2c76-3c30-42c8-aaeb-510587312217</Text>
            <Divider />
            <Button className="mx-1" icon={RefreshIcon}>
              Resync data
            </Button>
            <Button className="mx-1" color="rose" icon={TrashIcon}>
              Delete data
            </Button>
          </Card>
        </Col>
        <Card className="max-w-md mx-3">
          <Flex
            className="space-x-8"
            justifyContent="between"
            alignItems="center"
          >
            <Title>Downstream X</Title>
          </Flex>
          <Text className="mt-8">Status</Text>
          <Metric color="teal">Success</Metric>
          <Divider />
          <Text className="mt-8">
            <Bold>Last Document Received</Bold>
          </Text>
          <Text>f70d947d-908b-426b-9926-96ee89b00d5e</Text>
          <Text>November 1, 2023 20:11:53</Text>
          <Legend
            categories={destX.map((dest) => dest.name)}
            className="mt-6"
            colors={['teal', 'yellow', 'rose']}
          />
          <DonutChart
            data={destX}
            showAnimation={false}
            category="value"
            index="name"
            valueFormatter={valueFormatter}
            className="mt-6"
            colors={['teal', 'yellow', 'rose']}
          />
          <Flex className="mt-6 pt-4 border-t">
            <Button
              size="xs"
              variant="light"
              icon={ArrowNarrowRightIcon}
              iconPosition="right"
            >
              Details
            </Button>
          </Flex>
        </Card>
        <Card className="max-w-md mx-3">
          <Flex
            className="space-x-8"
            justifyContent="between"
            alignItems="center"
          >
            <Title>Downstream Y</Title>
          </Flex>
          <Text className="mt-8">Status</Text>
          <Metric color="yellow">In Progress</Metric>
          <Divider />
          <Text className="mt-8">
            <Bold>Last Document Received</Bold>
          </Text>
          <Text>b62b63e2-0972-4bf4-b98e-7f5669408dbf</Text>
          <Text>November 2, 2023 09:15:46</Text>
          <Legend
            categories={destY.map((dest) => dest.name)}
            className="mt-6"
            colors={['teal', 'yellow', 'rose']}
          />
          <DonutChart
            data={destY}
            showAnimation={false}
            category="value"
            index="name"
            valueFormatter={valueFormatter}
            className="mt-6"
            colors={['teal', 'yellow', 'rose']}
          />
          <Flex className="mt-6 pt-4 border-t">
            <Button
              size="xs"
              variant="light"
              icon={ArrowNarrowRightIcon}
              iconPosition="right"
            >
              Details
            </Button>
          </Flex>
        </Card>
        <Card className="max-w-md mx-3">
          <Flex
            className="space-x-8"
            justifyContent="between"
            alignItems="center"
          >
            <Title>Downstream Z</Title>
          </Flex>
          <Text className="mt-8">Status</Text>
          <Metric color="rose">In Error</Metric>
          <Divider />
          <Text className="mt-8">
            <Bold>Last Document Received</Bold>
          </Text>
          <Text>1c0dda63-0dff-4e47-967c-9eb64d407d46</Text>
          <Text>November 1, 2023 15:37:21</Text>
          <Legend
            categories={destZ.map((dest) => dest.name)}
            className="mt-6"
            colors={['teal', 'yellow', 'rose']}
          />
          <DonutChart
            data={destZ}
            showAnimation={false}
            category="value"
            index="name"
            valueFormatter={valueFormatter}
            className="mt-6"
            colors={['teal', 'yellow', 'rose']}
          />
          <Flex className="mt-6 pt-4 border-t">
            <Button
              size="xs"
              variant="light"
              icon={ArrowNarrowRightIcon}
              iconPosition="right"
            >
              Details
            </Button>
          </Flex>
        </Card>
      </Grid>
    </div>
  )
}

export default App
