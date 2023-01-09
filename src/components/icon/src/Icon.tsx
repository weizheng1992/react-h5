import { CSSProperties, useMemo } from 'react';
import { isString } from '/@/utils/is';

import SvgIcon from './SvgIcon';

const SVG_END_WITH_FLAG = '|svg';

type Props = {
  icon: string;
  color: string;
  size: number;
  classname?: string;
};

// const defaultProps = {
//   size: 16,
// };

const Icon = ({ icon, color, size = 16, classname }: Props) => {
  const svgFile = useMemo(() => {
    const isSvg = icon?.endsWith(SVG_END_WITH_FLAG);
    const getSvgIcon = icon.replace(SVG_END_WITH_FLAG, '');
    return {
      isSvg,
      getSvgIcon,
    };
  }, [icon]);

  const getWrapStyle = useMemo((): CSSProperties => {
    let fs = size;
    if (isString(size)) {
      fs = parseInt(size, 10);
    }

    return {
      fontSize: `${fs}px`,
      color: color,
      display: 'inline-flex',
    };
  }, [size, color]);

  return (
    <>
      {svgFile.isSvg ? (
        <SvgIcon size={size} name={svgFile.getSvgIcon} className={classname} />
      ) : (
        <span className={`${icon} ${classname}`} style={getWrapStyle}></span>
      )}
    </>
  );
};

// Icon.defaultProps = defaultProps;

export default Icon;
