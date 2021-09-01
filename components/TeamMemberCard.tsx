import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { ReactElement, ReactNode, useState } from 'react';

import { fontSmoothOn } from '../styles/helpers/extend';
import { light } from '../styles/theme/_palette';
import Button from './Button';

type Props = {
  imageUrl?: string,
  name?: string,
  position?: string,
  company?: string,
  isPlaceholder?: boolean,
  profile?: ReactNode,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      '& > div': {
        width: '100%',
      },
    },
    img: {
      width: '100%',
    },
    imgPlaceholder: {
      width: '103%',
    },
    typographyName: {
      color: light,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.33em',
      paddingTop: theme.spacing(1),
      marginTop: theme.spacing(0.33),
      marginBottom: theme.spacing(1),
      borderTop: `1px solid ${theme.palette.text.primary}`,
    },
    typographyJob: {
      ...fontSmoothOn,
      fontSize: '0.8rem',
      lineHeight: 1.3,
      '& strong': {
        display: 'block',
        marginBottom: theme.spacing(1),
      },
    },
    button: {
      marginTop: theme.spacing(1.5),
    },
    buttonPlaceholder: {
      background: theme.palette.text.primary,
      color: light,
    },
    dialogPaper: {
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up(400)]: {
        flexDirection: 'row',
        padding: theme.spacing(2),
      },
    },
    iconButtonDialogClose: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
    containerDialogImg: {
      flex: '0 0 40%',
      [theme.breakpoints.up('sm')]: {
        flex: '0 0 33%',
      },
      [theme.breakpoints.up('md')]: {
        flex: '0 0 50%',
      },
      [theme.breakpoints.up('lg')]: {
        flex: '0 0 33%',
      },
    },
    dialogTitleTypography: {
      [theme.breakpoints.down(400)]: {
        textAlign: 'center',
      },
    },
    dialogContent: {
      [theme.breakpoints.down(400)]: {
        textAlign: 'center',
      },
    },
  })
);

const TeamMemberCard = (props: Props): ReactElement => {
  const {
    imageUrl,
    name,
    position,
    company,
    isPlaceholder,
    profile,
  } = props;
  const classes = useStyles();
  const [profileDialogOpen, setProfileDialogOpen] = useState<boolean>(false);
  const cardName = name && !isPlaceholder ? name : 'Your Name';

  const openProfileDialog = () => {
    setProfileDialogOpen(true);
  };

  const handleProfileDialogClose = () => {
    setProfileDialogOpen(false);
  };

  return (
    <div className={classes.root}>
      <div>
        <img
          src={imageUrl && !isPlaceholder ? imageUrl : 'assets/images/home/home-team-card-empty.svg'}
          alt={name}
          className={classNames(
            classes.img,
            {
              [classes.imgPlaceholder]: isPlaceholder,
            }
          )}
        />
        <Typography className={classes.typographyName}>
          {cardName}
        </Typography>
        <Typography className={classes.typographyJob}>
          <strong>
            {position && !isPlaceholder ? position : 'Your Position'}
          </strong>
          {company && !isPlaceholder ? company : 'Your Company'}
        </Typography>
      </div>
      {
        isPlaceholder
          ? (
            <Link href="/volunteer">
              <Button
                className={classNames(
                  classes.button,
                  classes.buttonPlaceholder,
                )}
                variant="outlined"
                size="small"
                onClick={openProfileDialog}
              >
                Volunteer With Us
              </Button>
            </Link>
          )
          : (
            <>
              <Button
                className={classNames(
                  classes.button,
                  {
                    [classes.buttonPlaceholder]: isPlaceholder,
                  }
                )}
                variant="outlined"
                size="small"
                onClick={openProfileDialog}
                disabled={!profile}
              >
                View Profile
              </Button>
              <Dialog
                classes={{
                  paper: classes.dialogPaper,
                }}
                open={profileDialogOpen}
                onClose={handleProfileDialogClose}
                maxWidth="md"
              >
                <IconButton
                  className={classes.iconButtonDialogClose}
                  onClick={handleProfileDialogClose}
                  aria-label="Close profile"
                >
                  <CloseIcon />
                </IconButton>
                <div className={classes.containerDialogImg}>
                  <img
                    src={imageUrl && !isPlaceholder ? imageUrl : 'assets/images/home/home-team-card-empty.svg'}
                    alt={name}
                    className={classes.img}
                  />
                </div>
                <div>
                  <DialogTitle disableTypography>
                    <Typography variant="h2" className={classes.dialogTitleTypography}>
                      About {name}
                    </Typography>
                  </DialogTitle>
                  <DialogContent className={classes.dialogContent}>
                    {profile}
                  </DialogContent>
                </div>
              </Dialog>
            </>
          )
      }
    </div>
  );
};

export default TeamMemberCard;
