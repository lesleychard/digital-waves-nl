import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import TeamMemberCard from '../../components/TeamMemberCard';
import { containerSm } from '../../styles/helpers/extend';

const TEAM_MEMBERS = [
  {
    id: 'lesley-chard',
    name: 'Lesley Chard',
    position: 'Lead Product Experience Designer',
    company: 'Zorbit\'s by Carnegie Learning',
    imageUrl: 'assets/images/bios/lesley-chard.jpg',
    profile: (
      <Typography>
        Lesley is an app designer and developer living in St. John’s, NL. 
        After designing her first webpage at nine years old, Lesley started freelance web designing at sixteen. 
        As a result of her finding a passion for technology at an early age, she pursued a B.Sc. in computer science from Memorial University. 
        She currently works for Zorbit’s by Carnegie Learning where she designs apps for early education. 
        Lesley is also Chapter Lead with Canada Learning Code, where she delivers coding and design workshops to women, kids and teachers.
      </Typography>
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
    id: 'sally-marchand',
    name: 'Sally Marchand',
    position: 'Program Manager',
    company: 'Women in Science and Engineering - Atlantic Region (WISEatlantic)',
    imageUrl: 'assets/images/bios/sally-marchand.jpg',
    profile: (
      <Typography>
        Sally Marchand is the Program Manager of the Women in Science and Engineering - Atlantic Region (WISEatlantic) program which aims to shift gendered STEM stereotypes by empowering girls to consider STEM-based careers by raising their awareness of the diversity of jobs within these fields. 
        Sally holds a BSc and BEd from Mount Saint Vincent University.
        She is passionate about making science fun and engaging for students.
      </Typography>
    ),
  },
  {
    id: 'laura-douglas',
    name: 'Laura Douglas',
    position: 'UX/UI Designer',
    company: 'Target Marketing & Communications',
    imageUrl: 'assets/images/bios/laura-douglas.jpg',
    profile: (
      <Typography>
        With experience in design, quality assurance, interactive media, and marketing, I have a unique perspective when it comes to designing thoughtful, elegant experiences backed by solid research and testing. I am curious and inquisitive, and I love to learn new things. 
        I’m always looking for the ‘why’ behind something and am eager to dig deep into a problem.
      </Typography>
    ),
  },
  {
    id: 'lysle-hood',
    name: 'Lysle Hood',
    position: 'Marketing Coordinator',
    company: 'Zorbit\'s by Carnegie Learning',
    imageUrl: 'assets/images/bios/lysle-hood.jpg',
  },
  {
    id: 'charlene-denief',
    name: 'Charlene Denief',
    position: 'UI/UX Designer',
    company: 'Zorbit\'s by Carnegie Learning',
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
    position: 'Intellectual Property Officer',
    company: 'Memorial University of Newfoundland (MUN)',
    imageUrl: 'assets/images/bios/kara-strickland.jpg',
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
        John's, NL. Starting out as a mechanical engineer, her career took her
        to Calgary where she spent a few years working in the oil and gas
        industry and at a digital marketing company. When she got into data she
        taught herself to code, which brought her to complete her Master's in
        Software Engineering. Upon completing the program she recognized that
        the tech industry was booming in NL and sought opportunities in her home
        province where she now works for Kraken Robotics. She recognizes that when she was growing up STEM wasn't a huge push for young females in
        school and loves that she can help change that for the current and
        future teenagers.
      </Typography>
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
    id: "john-lander",
    name: "John Lander",
    position: "Customer Success Manager",
    company: "Metricsflow",
    imageUrl: "assets/images/bios/john-lander.jpeg",
    profile: (
      <>
        <Typography gutterBottom>
          John Lander grew up in all the smallest Newfoundland towns. After
          graduating from Grenfell Campus, Memorial University with a BBA,
          Lander worked for the Association for New Canadians helping newcomers
          to Canada get their bearings in our cold province. After that, he
          entered the NL tech sector as a Marketing Operations Analyst with
          Zorbit’s by Carnegie Learning. Currently, he works for Metricsflow as
          their Customer Success Manager. Lander has also volunteered with the
          Planned Parenthood 2SLGBTQIA+ Helpline, with Happy City St. John’s on
          their board of directors, and is a part of the trail maintenance crew
          on the East Coast Trail.
        </Typography>
        <Typography>
          Lander is passionate about bringing the NL tech sector to rural
          Newfoundland and helping girls and gender-diverse youth in small towns
          see a future career in the sector.
        </Typography>
      </>
    ),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
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
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
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
