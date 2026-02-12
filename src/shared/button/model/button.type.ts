import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'icon';
  color?: 'blue' | 'cyan';
  onClick?: () => void;
}
