import type { InputHTMLAttributes, ReactNode } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
