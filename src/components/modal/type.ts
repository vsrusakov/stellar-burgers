import { ReactNode } from 'react';

export type TModalProps = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
};

export type TModalHandle = {
  title: string;
};