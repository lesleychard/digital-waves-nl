import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import TeamMemberCard from '../../components/TeamMemberCard';
import { containerSm } from '../../styles/helpers/extend';

const TEAM_MEMBERS = [
  {
    id: 'lesley-chard',
    name: 'Lesley Chard',
    pronouns: 'she/her',
    position: 'Vice President, Design and User Experience',
    company: 'Carnegie Learning',
    imageUrl: 'assets/images/bios/lesley-chard.jpeg',
    profile: (
      <>
        <Typography gutterBottom>
          Since entering NL&rsquo;s technology industry in 2015, Lesley has worked in almost every area of software production -
          including marketing, engineering, design, user experience, and product management. She currently works for a Pittsburgh, PA
          and St. John&rsquo;s, NL based Education Tecnology company, Carnegie Learning, where she acts as the company&rsquo;s head of Design and UX.
          In this role, Lesley leads a team of designers shaping K-12 education products for teachers and students across North America.
        </Typography>
        <Typography>
          Lesley has been an advocate for women in technology since her undergraduate degree in Computer Science at Memorial University.
          In 2021, she helped found Digital Waves NL, a non-profit dedicated to showing young girls and gender-diverse youth the impact of
          a career in technology. Through her professional and volunteer work, she hopes to help establish a more equitable and diverse
          workforce in the technology sector of our future.
        </Typography>
      </>
    ),
  },
  {
    id: 'trinalynn-porter',
    name: 'Trinalynn Porter',
    position: 'STEMforGIRLS Program Coordinator',
    company: 'Women in Resource Development Corporation',
    imageUrl: 'assets/images/bios/trinalynn-porter.jpg',
    profile: (
      <>
        <Typography gutterBottom>
          Trinalynn is a community advocate dedicated to projects that shift socialized norms and work towards fundamental change. 
          She is enthusiastic about her role at WRDC which empowers girls in choosing STEM and skilled trades career paths to advance women’s representation.
        </Typography>
        <Typography gutterBottom>
          She is current chair of the CBS Community Garden and operator of a market-garden farm, both with the goal of cultivating societal ownership over food security. 
          As a volunteer first responder and executive member of the Canadian Ski Patrol – NL Zone, she promotes safe outdoor recreation in all seasons for mental well-being.
          Trinalynn’s Master of Arts’ thesis in Political Science explored how to improve networking amongst organizations to propel social change.
        </Typography>
        <Typography variant="subtitle2">
          Bio provided by&nbsp;
          <a href="https://wrdc.ca" rel="noreferrer" target="_blank">
            https://wrdc.ca
          </a>
        </Typography>
      </>
    ),
  },
  {
    id: "freddie-pike",
    name: "Freddie Pike",
    position: "Software Developer",
    company: "CoLab Software",
    imageUrl: "assets/images/bios/freddie-pike.jpeg",
    profile: (
      <>
        <Typography gutterBottom>
          Freddie (he/him) is a full stack developer living in CBS, NL. Freddie
          has been fascinated with technology from an early age, which led to
          pursuing a honours degree in Computer Science Software Engineering at
          Memorial University. In 2017, he took on an internship as the first
          employee of newly-formed startup CoLab Software. Two years later CoLab
          became the first company in Atlantic Canada accepted to startup
          accelerator Y Combinator and now, CoLab helps empower Fortune 500
          engineering teams all over the world to speed up their design review
          process. Still part of the CoLab team today, Freddie&apos;s current focus is
          primarily on architecting and developing for the frontend web stack.
        </Typography>
        <Typography>
          With previous experience mentoring for Canada Learning Code and The Boys
          & Girls Clubs of St. John’s, Freddie is excited to volunteer with the
          Digital Waves team. Female and gender-diverse people are vastly
          underrepresented in the tech sector so he&apos;s pumped to contribute to this
          year&apos;s design challenge and to help make tech more open and diverse for
          young people of all identities.
        </Typography>
      </>
    ),
  },
  {
    id: 'charlene-denief',
    name: 'Charlene Denief',
    pronouns: 'she/her',
    position: 'UI/UX Designer',
    company: 'Carnegie Learning',
    imageUrl: 'assets/images/bios/charlene-denief.jpg',
    profile: (
      <Typography>
        Since graduating in 2017 from CNA’s Graphic Design program, Charlene
        Denief has spent the last four years working and volunteering with local
        nonprofits in the arts and culture sector. Fascinated by the
        ever-expanding potential of technology for positive change, she made the
        transition to the technology sector in April 2021 and hasn’t looked back
        since! Currently, she works as a UI/UX Designer at Zorbit’s Math by
        Carnegie Learning and has been volunteering on the VANL Board of
        Directors since November 2020.
      </Typography>
    ),
  },
  {
    id: 'kara-strickland',
    name: 'Kara Strickland',
    pronouns: 'she/her',
    position: 'Intellectual Property Officer',
    company: 'Memorial University of Newfoundland',
    imageUrl: 'assets/images/bios/kara-strickland.jpg',
  },
  {
    id: 'susan-kelly',
    name: 'Susan Kelly',
    position: 'High School Talent Lead',
    company: 'techNL',
    imageUrl: 'assets/images/bios/susan-kelly.jpg',
    profile: (
      <Typography>
        Susan Kelly is an experienced educator and passionate community
        connector who is currently serving as the High School Talent Lead at
        techNL. She holds a B. Ed and M. Ed (Leadership Studies) and has
        professional experience in the education and community sectors. Susan
        has worked as a classroom teacher in various communities in the province
        as well as in the community sector with youth and social programming.
        She is passionate about inspiring students to discover a passion for
        tech and envision meaningful careers right here in Newfoundland and
        Labrador.
      </Typography>
    ),
  },
  {
    id: 'steph-walsh',
    name: 'Steph Walsh',
    position: 'Software Developer',
    company: 'Kraken Robotics',
    imageUrl: 'assets/images/bios/steph-walsh.jpg',
    profile: (
      <Typography>
        Steph is a software developer who recently relocated back home to St.
        John&rsquo;s, NL. Starting out as a mechanical engineer, her career took her
        to Calgary where she spent a few years working in the oil and gas
        industry and at a digital marketing company. When she got into data she
        taught herself to code, which brought her to complete her Master&rsquo;s in
        Software Engineering. Upon completing the program she recognized that
        the tech industry was booming in NL and sought opportunities in her home
        province where she now works for Kraken Robotics. She recognizes that when she was
        growing up STEM wasn&rsquo;t a huge push for young females in
        school and loves that she can help change that for the current and
        future teenagers.
      </Typography>
    ),
  },
  {
    id: 'jillian-breau',
    name: 'Jillian Breau',
    position: 'Software Team Lead',
    company: 'HYKE Technologies',
    imageUrl: 'assets/images/bios/jillian-breau.jpg',
    profile: (
      <Typography>
        Jillian (she/her) works with the software team at HYKE Technologies, a
        local tech startup focused on bringing their first product to market.
        She completed her Computer Engineering degree at Memorial University,
        where she volunteered with groups focused on mental health and academic
        advocacy. Jillian currently volunteers with She Connects, a mentorship
        program for female and gender-diverse students across Canada. As someone
        passionate about sustainability and about helping young people of all
        identities see a future for themselves in tech, she is very excited for
        this year’s design challenge.
      </Typography>
    ),
  },
  {
    id: 'laura-douglas',
    name: 'Laura Douglas',
    position: 'Product Designer',
    company: 'CoLab Software',
    imageUrl: 'assets/images/bios/laura-douglas.jpg',
    profile: (
      <Typography>
        With experience in design, quality assurance, interactive media, and marketing, I have a unique perspective when it comes to designing thoughtful, elegant experiences backed by solid research and testing. I am curious and inquisitive, and I love to learn new things. 
        I&rsquo;m always looking for the &rsquo;why&rsquo; behind something and am eager to dig deep into a problem.
      </Typography>
    ),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    position: 'relative',
    zIndex: 0,
  },
  container: {
    ...containerSm(theme),
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
}));

const HomeOurTeam = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography
          variant="overline"
          component="h1"
          className={classes.typographyOverline}
        >
          Our Team
        </Typography>
        <Typography
          variant="h1"
          component="p"
          className={classes.typographyHeading}
        >
          Brought to you by community role models.
        </Typography>
        <Grid container spacing={4}>
          {
            TEAM_MEMBERS.map((member) => (
              <Grid item key={member.id} xs={6} sm={4} md={3}>
                <TeamMemberCard
                  name={member.name}
                  pronouns={member.pronouns}
                  position={member.position}
                  company={member.company}
                  imageUrl={member.imageUrl}
                  profile={member.profile}
                />
              </Grid>
            ))
          }
          <Grid item xs={6} sm={4} md={3}>
            <TeamMemberCard isPlaceholder />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default HomeOurTeam;
