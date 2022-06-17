import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, useMemo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
  const props = useMemo(() => {
    return {
      iconName,
      title,
      selected,
    }
  }, [selected])

  return (
    <button type="button" {...(props.selected && { className: 'selected' })} {...rest}>
      <Icon name={props.iconName} color={props.selected ? '#FAE800' : '#FBFBFB'} />
      {props.title}
    </button>
  );
}