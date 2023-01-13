import { SvgIcon } from '/@/components/icon';

const Loading = () => {
  return (
    <div
      w="22.8"
      h="22.8"
      bg="black"
      opacity=" 80"
      pos="fixed left-1/2 top-1/2"
      transform="translate-x--1/2 translate-y--1/2"
      flex="~ col"
      items="center"
      justify="center"
      color="white"
    >
      {/* <Icon icon="i-ic-baseline-autorenew" classname="animate-spin" size={30} /> */}
      <SvgIcon name="loading" size={30} className="animate-spin" />
      <p m="b-1">正在加载</p>
    </div>
  );
};

export default Loading;
