import type { Meta, StoryObj } from '@storybook/react-vite';
import CardCompact from './cardCompact';

const meta: Meta<typeof CardCompact> = {
  title: 'Components/CardCompact',
  tags: ['autodocs'],
  component: CardCompact,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CardCompact>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Курс',
      },
    },
  },
  args: {
    course: {
      coverUrl: '/cover.png',
      title: 'Beginner’s Guide to Design',
      authorName: 'By Ronald Richards',
      price: '$149.9',
    },
  },
};
