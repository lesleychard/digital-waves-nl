import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';

type Props = {
  children?: ReactNode,
  className?: string,
  showTopButtons?: boolean,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      zIndex: 1,
      '&:before': {
        display: 'block',
        content: '""',
        position: 'absolute',
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: theme.shape.borderRadius,
        zIndex: -1,
        top: '-1rem',
        left: '0.4rem',
        bottom: '-0.4rem',
        right:  '-0.4rem',
        background: theme.palette.secondary.main,
      },
    },
    showTopButtons: {},
    containerTopButtons: {
      display: 'flex',
      position: 'absolute',
      zIndex: 2,
      color: theme.palette.text.primary,
      top: '-1rem',
      left: '0.25rem',
    },
    topButton: {
      border: `1px solid ${theme.palette.text.primary}`,
      borderRadius: '50%',
      width: '1.2rem',
      height: '1.2rem',
      margin: `0 ${theme.spacing(0.25)}px`,
      fontSize: '0.9rem',
      textAlign: 'center',
    },
    topButtonClose: {
      background: theme.palette.secondary.light,
      lineHeight: 1.8,
    },
    topButtonMinimize: {
      background: theme.palette.lowlight.main,
    },
    topButtonExpand: {
      background: theme.palette.highlight.main,
      lineHeight: 1.8,
      transform: 'rotate(45deg)',
    },
    topButtonIcon: {
      fontSize: 'inherit',
    },
    content: {
      border: `1px solid ${theme.palette.text.primary}`,
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      padding: theme.spacing(2),
      position: 'relative',
      zIndex: 1,
      height: '100%',
      '&:before': {
        display: 'block',
        content: '""',
        position: 'absolute',
        border: `1px solid ${theme.palette.text.primary}`,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        background: theme.palette.highlight.main,
        left: -1,
        right: -1,
        height: '1.5rem',
        top: '-1.5rem',
        zIndex: 1,
      },
      '$showTopButtons &': {
        paddingTop: theme.spacing(3),
      },
      '$showTopButtons &:before': {
        height: '2rem',
      },
    },
  })
);

const RetroUI = (props: Props): ReactElement => {
  const classes = useStyles();
  const {
    children,
    className: classNameProp,
    showTopButtons,
  } = props;

  return (
    <div
      className={classNames(
        classes.root,
        {
          [classes.showTopButtons]: showTopButtons,
        },
        classNameProp
      )}
    >
      {
        showTopButtons
          ? (
            <div className={classes.containerTopButtons}>
              <div className={classNames(classes.topButton, classes.topButtonClose)}>
                <CloseIcon className={classes.topButtonIcon} />
              </div>
              <div className={classNames(classes.topButton, classes.topButtonMinimize)}>
                <MinimizeIcon className={classes.topButtonIcon} />
              </div>
              <div className={classNames(classes.topButton, classes.topButtonExpand)}>
                <UnfoldMoreIcon className={classes.topButtonIcon} />
              </div>
            </div>
          )
          : null
      }
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default RetroUI;
