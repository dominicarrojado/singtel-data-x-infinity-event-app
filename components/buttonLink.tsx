import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import cn from 'classnames';
import ButtonArrow from './buttonArrow';
import {
  buttonClassName,
  buttonDefaultClassName,
  buttonPrimaryClassName,
} from './button';
import { ButtonArrowDirection, ButtonVariant } from '../lib/types';

type Props = HTMLProps<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const ButtonLink = forwardRef(
  (
    { variant = ButtonVariant.DEFAULT, children, className, ...props }: Props,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <a
        {...props}
        ref={ref}
        className={cn(buttonClassName, className, {
          [buttonDefaultClassName]: variant === ButtonVariant.DEFAULT,
          [buttonPrimaryClassName]: variant === ButtonVariant.PRIMARY,
        })}
      >
        <ButtonArrow variant={variant} direction={ButtonArrowDirection.LEFT} />
        {children}
        <ButtonArrow variant={variant} direction={ButtonArrowDirection.RIGHT} />
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
