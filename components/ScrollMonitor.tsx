import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, useEffect, useState } from 'react';

type Props = {
  className?: string,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'absolute',
      width: '100%',
      top: '-0.5rem',
      left: 0,
      height: '0.5rem',
      background: theme.palette.secondary.light,
      zIndex: 0,
    },
    scrollProgress: {
      height: '0.5rem',
      background: theme.palette.primary.main,
      width: 0,
      transition: `width ${theme.transitions.duration.shortest}ms`,
    },
  })
);

const ScrollMonitor = ({ className: classNameProp }: Props): ReactElement => {
  const classes = useStyles();
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const updateScrollProgress = () => {
    const body = document.body,
      html = document.documentElement;
    const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    const newScrollProgress = window.pageYOffset / height * 100;
    setScrollProgress(+newScrollProgress.toFixed(2));
  };

  useEffect(
    () => {
      window.addEventListener('scroll', updateScrollProgress);
      return () => {
        window.removeEventListener('scroll', updateScrollProgress);
      };
    },
    []
  );

  return (
    <div className={classNames(classes.root, classNameProp)}>
      <div
        className={classes.scrollProgress}
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};

export default ScrollMonitor;
