import React from 'react';
import { Button } from 'antd-mobile';

const Index: React.FC = (): JSX.Element => {
  return (
    <div>
      Index
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
