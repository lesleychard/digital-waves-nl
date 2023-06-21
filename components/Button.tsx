import classNames from 'classnames';
import { ElementType, ReactElement } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    outlined: {
      borderColor: theme.palette.text.primary,
    },
    outlinedSizeSmall: {
      lineHeight: 1,
      padding: '8px 10px 6px',
    },
    sizeSmall: {
      letterSpacing: 0,
      textTransform: 'none',
    },
    raised: {
      position: 'relative',
      border: `1px solid ${theme.palette.text.primary}`,
      color: theme.palette.primary.contrastText,
      padding: `${theme.spacing(1.5) + 2}px ${theme.spacing(3)}px ${theme.spacing(1.5)}px`,
      top: 0,
      left: 0,
      transition: `
        top ${theme.transitions.duration.shortest}ms,
        left ${theme.transitions.duration.shortest}ms,
        background ${theme.transitions.duration.shortest}ms
      `,
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.text.primary}`,
        left: theme.spacing(0.5) / 2,
        right: -theme.spacing(0.5),
        top: theme.spacing(0.5) / 2,
        bottom: -theme.spacing(0.5),
        transition: `transform ${theme.transitions.duration.shortest}ms`,
      },
      '&:active, &:focus': {
        top: theme.spacing(0.5),
        left: theme.spacing(0.5),
        '&:before': {
          transform: `translate(${-theme.spacing(0.5)}px, ${-theme.spacing(0.5)}px)`,
        },
      },
    },
    raisedPrimary: {
      background: theme.palette.primary.main,
      '&:before': {
        background: theme.palette.secondary.main,
      },
      '&:hover': {
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      },
      '&:active, &:focus': {
        background: theme.palette.primary.main,
      },
      '&:visited': {
        color: theme.palette.primary.contrastText,
      },
    },
    raisedSecondary: {
      background: theme.palette.secondary.light,
      '&:before': {
        background: theme.palette.primary.main,
      },
      '&:hover': {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
      '&:active, &:focus': {
        background: theme.palette.secondary.light,
      },
      '&:visited': {
        color: theme.palette.secondary.contrastText,
      },
    },
    raisedHighlight: {
      background: theme.palette.highlight.main,
      '&:before': {
        background: theme.palette.lowlight.main,
      },
      '&:hover': {
        background: theme.palette.highlight.dark,
        color: theme.palette.highlight.contrastText,
      },
      '&:active, &:focus': {
        background: theme.palette.highlight.main,
      },
    },
    raisedLowlight: {
      background: theme.palette.lowlight.light,
      '&:before': {
        background: theme.palette.primary.main,
      },
      '&:hover': {
        background: theme.palette.lowlight.main,
        color: theme.palette.highlight.contrastText,
      },
      '&:active, &:focus, &:visited': {
        background: theme.palette.lowlight.light,
        color: theme.palette.highlight.contrastText,
      },
    },
    raisedSmall: {
      padding: `${theme.spacing(1) + 1}px ${theme.spacing(2)}px ${theme.spacing(1)}px`,
    },
  }),
);

const Button = (props: ButtonProps): ReactElement => {
  const {
    className: classNameProp,
    classes: classesProp,
    color,
    variant,
    ...other
  } = props;
  const classes = useStyles();

  let colorProp;
  if (color === 'primary' || color === 'secondary') {
    colorProp = color;
  }

  let variantProp;
  if (variant === 'text' || variant === 'outlined' || variant === 'contained') {
    variantProp = variant;
  }

  return (
    <MuiButton
      {...other}
      className={classNames(
        classNameProp,
        {
          [classes.raised]: variant === 'raised',
          [classes.raisedPrimary]: color === 'primary' && variant === 'raised',
          [classes.raisedSecondary]: color === 'secondary' && variant === 'raised',
          [classes.raisedHighlight]: color === 'highlight' && variant === 'raised',
          [classes.raisedLowlight]: color === 'lowlight' && variant === 'raised',
        }
      )}
      classes={{
        outlined: classes.outlined,
        outlinedSizeSmall: classes.outlinedSizeSmall,
        sizeSmall: classes.sizeSmall,
        ...classesProp,
      }}
      color={colorProp}
      variant={variantProp}
    >
    </MuiButton>
  );
};

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'variant'> {
  color?: 'inherit' | 'primary' | 'secondary' | 'highlight' | 'lowlight' | 'inverted';
  variant?: 'contained' | 'outlined' | 'text' | 'raised';
  component?: ElementType;
}

export default Button;
