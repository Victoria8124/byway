import type { Meta, StoryObj } from '@storybook/react-vite';
import Status from './status';

const meta: Meta<typeof Status> = {
  title: 'Components/Status',
  tags: ['autodocs'],
  component: Status,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Статус',
      },
    },
  },
  args: {
    sta: {
      sum: '250+',
      text: 'Courses by our best mentors',
    },
  },
};
