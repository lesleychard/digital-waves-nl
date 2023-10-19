import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';

import {
  dark,
  light,
  yellow,
} from '../styles/theme/_palette';

export type Props = {
  children?: ReactNode,
  className?: string,
  color?: 'pink' | 'yellow' | 'teal' | 'customColor',
  size?: 'sm' | 'md' | 'lg',
  caretDirection?: 'left' | 'right',
  customDimensions?: number,
  customColor?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      fontFamily: theme.typography.h1.fontFamily,
      borderRadius: '100%',
      lineHeight: 1.1,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: '1.5em',
      position: 'relative',
    },
    
    caret: (props: Props) => ({
      position: 'absolute',
      width: '3em',
      height: '3em',
      left: '50%',
      top: 'calc(100% - 0.5em)',
      '$customColor > &': {
        color: props.customColor,
      },
    }),
    caretDirectionLeft: {
      transform: 'translateX(-50%)',
    },
    caretDirectionRight: {
      transform: 'translateX(-50%) scaleX(-1)',
    },
    pink: {
      background: theme.palette.secondary.dark,
      color: light,
      '& > $caret': {
        color: theme.palette.secondary.dark,
      },
    },
    yellow: {
      background: yellow,
      color: dark,
      '& > $caret': {
        color: yellow,
      },
    },
    teal: {
      background: theme.palette.primary.dark,
      color: light,
      '& > $caret': {
        color: theme.palette.primary.dark,
      },
    },
    customColor: (props: Props) => ({
      background: props.customColor,
    }),
    sm: {
      fontSize: '1.25rem',
      width: '16rem',
      height: '16rem',
    },
    md: {
      fontSize: '1.4rem',
      width: '17rem',
      height: '17rem',
    },
    lg: {
      fontSize: '1.5rem',
      width: '18.5rem',
      height: '18.5rem',
    },
  })
);

const SpeechBubble = ({
  children,
  className,
  color = 'pink',
  size = 'md',
  caretDirection = 'left',
  customDimensions,
  customColor,
  style = {},
}: Props): ReactElement => {
  const classes = useStyles({ customColor });

  let customDimensionsStyle = style;
  if (customDimensions !== undefined) {
    customDimensionsStyle = {
      ...style,
      width: `${customDimensions}rem`,
      height: `${customDimensions}rem`,
      fontSize: `${customDimensions / 8}rem`,
    };
  }

  return (
    <div
      className={classNames(
        classes.root,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        classes[`${color}`],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        classes[`${size}`],
        className
      )}
      style={customDimensionsStyle}
    >
      <span>
        {children}
      </span>
      <svg
        className={classNames(
          classes.caret,
          {
            [classes.caretDirectionLeft]: caretDirection === 'left',
            [classes.caretDirectionRight]: caretDirection === 'right',
          },
        )}
        width="73"
        height="69"
        viewBox="0 0 73 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 68.5L19 0H73L0 68.5Z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default SpeechBubble;
