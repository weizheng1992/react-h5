import { AttributifyAttributes } from 'windicss/types/jsx';

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {
    p?: string;
    font?: string;
    shadow?: string;
    text?: string;
    bg?: string;
    border?: string;
    cursor?: string;
  }
}
