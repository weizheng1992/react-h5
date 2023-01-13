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
    w?: string;
    h?: string;
    flex?: string;
    align?: string;
    justify?: string;
    items?: string;
    opacity?: string;
    animate?: string;
    pos?: string;
    m?: string;
    left?: string;
    transform?: string;
    translate?: string;
  }
}
