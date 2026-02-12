import { fn } from 'storybook/test';
import Input from './input';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Поиск',
      },
    },
  },
  args: {
    leftIcon: '',
    rightIcon: '',
  },
};
