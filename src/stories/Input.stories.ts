import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: "Example/Input",
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {
        label: "test-input",
        placeholder: "placeholder",
    }
}

