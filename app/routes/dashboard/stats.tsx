import { ActionIcon, Group, Menu, Paper, SimpleGrid, Text } from '@mantine/core';
import { useState } from 'react';
import { ArrowDownRight } from 'tabler-icons-react';

export default function () {

    const Stat = ({ }) => {

        const [metric, setMetric] = useState<'Yesterday' | 'Last week' | 'Last month'>('Yesterday');
        
        const [value, setValue] = useState(0);
        const [percent, setPercent] = useState(0);
        const [positive, setPositive] = useState(false);

        return (
            <Paper withBorder p="md" radius="md">
                <Text
                    size="xs"
                    weight={600}>
                    Focus Sessions
                </Text>
                <Group position="apart">
                    <Group
                        style={{
                            alignItems: 'flex-end'
                        }}>
                        <Text
                            style={{
                                fontSize: '2.5rem',
                                fontWeight: 800,
                            }}>
                            {value}
                        </Text>
                        <Text
                            size="sm"
                            mr="xs"
                            mb="sm"
                            weight={600}
                            color={positive ? 'green' : 'red'}>
                            {percent}%
                        </Text>
                    </Group>
                    <ActionIcon
                        variant="light"
                        size="xl"
                        radius="xl"
                        color={positive ? 'green' : 'red'}>
                        <ArrowDownRight />
                    </ActionIcon>
                </Group>
                <Text
                    size="sm"
                    style={{
                        display: 'flex'
                    }}>
                    Compared to
                    <Menu
                        trigger="hover"
                        control={
                            <Text
                                ml="xs"
                                size="sm"
                                color="grape"
                                weight={600}
                                style={{ cursor: 'pointer' }}>
                                {metric}
                            </Text>
                        }>
                        <Menu.Item onClick={() => setMetric('Yesterday')}>Yesterday</Menu.Item>
                        <Menu.Item onClick={() => setMetric('Last week')}>Last Week</Menu.Item>
                        <Menu.Item onClick={() => setMetric('Last month')}>Last Month</Menu.Item>
                    </Menu>
                </Text>
            </Paper>
        )
    }

    return (
        <div>
            <SimpleGrid
                cols={4}
                breakpoints={[
                    { maxWidth: 'md', cols: 2 },
                    { maxWidth: 'xs', cols: 1 },
                ]}
            >
                <Stat />
            </SimpleGrid>
        </div >
    );
}