import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import { getTestList } from '/@/api/test/test';
import Icon, { SvgIcon } from '/@/components/icon';

const Index: React.FC = (): JSX.Element => {
  useEffect(() => {
    const load = async () => {
      await getTestList({ pageNum: 1, pageSize: 10, workNumber: 'DXF00980' });
    };
    load();
  }, []);
  return (
    <div>
      Index
      <div>
        审时度势颠三倒四的
        <Icon icon="test-test|svg" />
        <SvgIcon name="avatar" />
        <Icon icon="i-ic-baseline-15mp" />
      </div>
      <button
        p="y-2 x-4"
        font="semibold"
        shadow="lg"
        bg="green-500 hover:green-700"
        border="rounded-lg none "
        cursor="pointer"
        text="primary"
      >
        Click me
      </button>
      <div className="i-ic-baseline-add-circle text-3xl bg-green-500" />
      <Button color="primary" fill="solid">
        Solid
      </Button>
    </div>
  );
};

export default Index;
