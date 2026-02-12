import { fn } from 'storybook/test';
import Button from './button';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка с иконкой стрелочки',
      },
    },
  },
  args: {
    variant: 'primary',
    children: '',
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка выхода',
      },
    },
  },
  args: {
    variant: 'outline',
    children: 'Log in',
  },
};

export const Icon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка иконка',
      },
    },
  },
  args: {
    variant: 'icon',
  },
};
