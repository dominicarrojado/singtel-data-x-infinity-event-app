import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import cn from 'classnames';
import ButtonArrow from './buttonArrow';
import {
  buttonClassName,
  buttonNoArrowClassName,
  buttonWithArrowClassName,
} from './button';

type Props = HTMLProps<HTMLAnchorElement> & {
  withArrow?: boolean;
};

const ButtonLink = forwardRef(
  (
    { withArrow, children, className, ...props }: Props,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <a
        {...props}
        ref={ref}
        className={cn(
          buttonClassName,
          className,
          withArrow ? buttonWithArrowClassName : buttonNoArrowClassName
        )}
      >
        {children}
        {withArrow && <ButtonArrow />}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
