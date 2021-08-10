import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

type Props = {
  className?: string,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      height: 2,
      background: theme.palette.text.primary,
      margin: '4px 0',
      '&:before, &:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: theme.palette.text.primary,
        top: -1,
      },
      '&:before': {
        left: 0,
      },
      '&:after': {
        right: 0,
      },
    },
  })
);

const CircuitLine = ({ className: classNameProp }: Props): ReactElement => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.root,
        classNameProp
      )}
    />
  );
};

export default CircuitLine;
