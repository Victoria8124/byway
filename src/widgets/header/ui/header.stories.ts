import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from './header';
// import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  //    args: {
  //     onLogin: fn(),
  //     onCreateAccount: fn(),
  //     onBasket: fn(),
  //   },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
