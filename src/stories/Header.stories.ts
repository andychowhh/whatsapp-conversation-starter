import type { Meta, StoryObj } from '@storybook/react';

// import { Header } from './Header';
import { Header } from '../components';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Header1: Story = {};
