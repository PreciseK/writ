import React from 'react';
import * as FiIcons from 'react-icons/fi';
import { FiAlertTriangle } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface SafeIconProps extends React.SVGAttributes<SVGElement> {
  icon?: IconType;
  name?: string;
}

const SafeIcon = ({ icon, name, ...props }: SafeIconProps) => {
  let IconComponent: IconType | null | undefined;
  try {
    IconComponent = icon || (name && (FiIcons as any)[`Fi${name}`]);
  } catch (e) {
    IconComponent = null;
  }

  return IconComponent
    ? React.createElement(IconComponent, props as any)
    : <FiAlertTriangle {...(props as any)} />;
};

export default SafeIcon;
