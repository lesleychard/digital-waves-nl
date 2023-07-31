import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { forwardRef, ReactElement, LegacyRef } from 'react';

type Props = {
  className?: string;
  progress: number;
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      height: '0.5rem',
      background: theme.palette.secondary.light,
      zIndex: 99,
    },
    scrollProgress: {
      height: '0.5rem',
      background: theme.palette.primary.main,
      width: 0,
      transition: `width ${theme.transitions.duration.shortest}ms`,
    },
  })
);

const ScrollMonitor = ({ className: classNameProp }: Props, ref: LegacyRef<HTMLDivElement>): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, classNameProp)} ref={ref}>
      {/* <div
        className={classes.scrollProgress}
        style={{
          width: `${progress * 100}%`,
        }}
      /> */}
    </div>
  );
};

export default forwardRef(ScrollMonitor);
