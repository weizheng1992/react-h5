import { useMemo } from 'react';

type Props = {
  prefix?: string;
  name: string;
  size?: string | number;
  className?: string;
};

const SvgIcon = ({ prefix = 'icon', name, size = 16, className = '' }: Props) => {
  const symbolId = useMemo(() => `#${prefix}-${name}`, [prefix, name]);

  return (
    <svg
      className={`inline-block overflow-hidden align-middle fill-current ${className}`}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <use xlinkHref={symbolId} />
    </svg>
  );
};

export default SvgIcon;
