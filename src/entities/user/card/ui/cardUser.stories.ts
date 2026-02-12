import type { Meta, StoryObj } from '@storybook/react-vite';
import CardUser from './cardUser';

const meta: Meta<typeof CardUser> = {
  title: 'Components/CardUser',
  tags: ['autodocs'],
  component: CardUser,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CardUser>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Статус',
      },
    },
  },
  args: {
    user: {
      avatarUrl: '/row.png',
      userName: 'Ronald Richards',
      title: 'UI/UX Designer',
    },
  },
};
