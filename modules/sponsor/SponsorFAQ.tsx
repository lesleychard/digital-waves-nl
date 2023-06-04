import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import { containerSm } from '../../styles/helpers/extend';

const FAQ_ITEMS = [
  {
    question: 'How do I know the Digital Waves experience will be effective for growing a more gender-diverse tech industry?',
    answer: [
      'We are committed to delivering an experience for participants that is authentic and engaging. We believe that by showing young people that technology can be used to help our communities and our planet they will start looking at the technology industry from a more accessible lens.',
      'All of our workshops will be delivered by real, local role models from diverse backgrounds. We hope that our participants will see themselves in our instructors, and thus themselves in a technology related field.',
      'We have partnered with a local organization (STEMforGIRLS - WRDC) to ensure this experience integrates their outreach and teaching philosophies. To read more about the impact STEMforGIRLS has had on our local communities, please download their white paper.',
    ],
  },
  {
    question: 'What organization will be receiving my donation?',
    answer: [
      'Digital Waves has partnered with STEMforGIRLS - Women in Resource Development Corporation (WRDC) to handle all donations and distribution of sponsored funds. All proceeds will go directly back into the community by an organization you can trust.',
    ],
  },
  {
    question: 'What will my donation be used for?',
    answer: [
      'We rely on sponsorships mainly for outreach and participant prizes. We hope that we can reward as many different skill sets during this experience to demonstrate that the technology industry has a wide range of careers to explore, and value different perspectives.',
      'We hope to reach as many Newfoundland and Labrador youth as possible, so some donations will also be funneled to targeted advertising and third-party endorsements.',
      'Digital Waves is a volunteer initiative, therefore no funds will be used for profit.',
    ],
  },
  {
    question: 'Will my donation be tax deductible?',
    answer: [
      'Yes! STEMforGIRLS - Women in Resource Development Corporation (WRDC) is a registered charity (Charitable # 86287 0318 RR 0001)',
    ],
  },
  {
    question: 'Where do I send my donation?',
    answer: [
      'If you are interested in donating, please fill out the Sponsor Us form and we will be happy to connect with you to start a sponsorship opportunity.',
    ],
  },
  {
    question: 'What happens to any donations not used for the 2023 experience?',
    answer: [
      'In the event we receive an overwhelming amount of community support, all extra donations will be carried over to further Digital Waves programs.',
    ],
  },
  {
    question: 'How can I sponsor this initiative all year round?',
    answer: [
      'If you are interested in supporting girls & gender-diverse youth after the Digital Waves experience, please consider donating to our official partner, STEMforGIRLS',
    ],
  },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.secondary.light,
    },
    container: {
      ...containerSm(theme),
      [theme.breakpoints.up('md')]: {
        textAlign: 'center',
      },
    },
    typographyHeading: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      fontSize: '2.5rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    typographyBody: {
      marginBottom: theme.spacing(4),
      '& a': {
        color: theme.palette.text.primary,
      },
    },
    accordion: {
      textAlign: 'left',
    },
  })
);

const SponsorFAQ = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography
          variant="overline"
          component="h1"
        >
          Sponsorship FAQ
        </Typography>
        <Typography
          variant="h1"
          component="p"
          className={classes.typographyHeading}
        >
          How can you help more kids<br />find their love of tech?
        </Typography>
        <Typography className={classes.typographyBody}>
          We&rsquo;re new in town and we know you have a lot of questions before partnering with us.
          These frequently asked questions should cover the basics, but we&rsquo;re here to assist with any additional questions you may have.
          Please contact <a href="mailto:lesley@digitalwavesnl.ca">lesley@digitalwavesnl.ca</a> to connect with one of our team members, or simply submit our Sponsor Us form and we will follow up.
        </Typography>
        {
          FAQ_ITEMS.map((faq, faqIndex) => (
            <Accordion
              key={faqIndex}
              className={classes.accordion}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {
                    faq.answer.map((p, index) => (
                      <Typography key={index} gutterBottom>
                        {p}
                      </Typography>
                    ))
                  }
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </div>
    </section>
  );
};

export default SponsorFAQ;
