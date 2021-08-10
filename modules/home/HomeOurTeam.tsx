import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import TeamMemberCard from '../../components/TeamMemberCard';
import { container } from '../../styles/helpers/extend';

const TEAM_MEMBERS = [
  {
    id: 'jane-1',
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Company Name',
    imageUrl: 'assets/images/home/home-team-member-placeholder.jpg',
    profile: (
      <Typography>
        This is an example bio.
      </Typography>
    ),
  },
  {
    id: 'jane-2',
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Company Name',
    imageUrl: 'assets/images/home/home-team-member-placeholder.jpg',
    profile: (
      <Typography>
        This is an example bio 2.
      </Typography>
    ),
  },
  {
    id: 'jane-3',
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Company Name',
    imageUrl: 'assets/images/home/home-team-member-placeholder.jpg',
    profile: (
      <Typography>
        This is an example bio 3.
      </Typography>
    ),
  },
  {
    id: 'jane-4',
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Company Name',
    imageUrl: 'assets/images/home/home-team-member-placeholder.jpg',
    profile: (
      <Typography>
        This is an example bio 4.
      </Typography>
    ),
  },
  {
    id: 'jane-5',
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Company Name',
    imageUrl: 'assets/images/home/home-team-member-placeholder.jpg',
    profile: (
      <Typography>
        This is an example bio 5.
      </Typography>
    ),
  },
  {
    id: 'jane-6',
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Company Name',
    imageUrl: 'assets/images/home/home-team-member-placeholder.jpg',
    profile: (
      <Typography>
        This is an example bio 6.
      </Typography>
    ),
  },
  {
    id: 'jane-7',
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Company Name',
    imageUrl: 'assets/images/home/home-team-member-placeholder.jpg',
    profile: (
      <Typography>
        This is an example bio 7.
      </Typography>
    ),
  },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.secondary.main,
      position: 'relative',
      zIndex: 0,
    },
    container: {
      ...container(theme),
    },
    typographyOverline: {
      marginBottom: theme.spacing(3),
    },
    typographyHeading: {
      marginBottom: theme.spacing(6),
      [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
      },
    },
  })
);

const HomeOurTeam = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography variant="overline" component="h1" className={classes.typographyOverline}>
          Our Team
        </Typography>
        <Typography variant="h1" component="p" className={classes.typographyHeading}>
          Brought to you by community role models.
        </Typography>
        <Grid container spacing={4}>
          {
            TEAM_MEMBERS.map(member => (
              <Grid
                item
                key={member.id}
                xs={6}
                sm={4}
                md={3}
                lg={2}
              >
                <TeamMemberCard
                  name={member.name}
                  position={member.position}
                  company={member.company}
                  imageUrl={member.imageUrl}
                  profile={member.profile}
                />
              </Grid>
            ))
          }
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
          >
            <TeamMemberCard isPlaceholder />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default HomeOurTeam;
