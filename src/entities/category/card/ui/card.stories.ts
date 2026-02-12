import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Карта категории',
      },
    },
  },
  args: {
    card: {
      url: '/circle.svg',
      category: 'Design',
      coursesCount: '12 courses',
    },
  },
};
