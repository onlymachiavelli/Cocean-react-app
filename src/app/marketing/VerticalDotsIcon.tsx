import React, { SVGProps } from "react";

interface VerticalDotsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  width?: number | string;
  height?: number | string;
}

const VerticalDotsIcon: React.FC<VerticalDotsIconProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size || '300px'}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size || '300px'}
    {...props}
  >
    <path
      d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill="currentColor"
    />
  </svg>
);

export default VerticalDotsIcon;
