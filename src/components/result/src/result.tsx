import { ReactNode } from 'react';
import empty from '/@/assets/empty.png';

type Props = {
  title?: string;
  description?: string;
  icon?: ReactNode;
};

const result = ({ title = '暂无数据', description }: Props) => {
  return (
    <div w="full" h="full" flex="~ col" items="center" justify="center">
      <img src={empty} w="32" h="32" />
      <div text="light">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default result;
