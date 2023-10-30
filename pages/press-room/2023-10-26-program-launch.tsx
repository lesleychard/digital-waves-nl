import { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

import MediaRelease from '../../modules/press-room/MediaRelease';

const singleMediaRelease = (): ReactElement => {
  return (
    <MediaRelease
      title="Digital Waves NL Launches Impact-Driven Technology Learning Experience to Newfoundland and Labrador Youth"
      subtitle="Participants learn coding and design skills to help develop Quadrangle NL&rsquo;s groundbreaking 2SLGBTQIA+ knowledge base app."
      body={(
        <>
          <img
            src="../../assets/images/press/2023-10-26-program-launch.png"
            alt="Learn to code for community impact."
          />
          <Typography variant="caption" component="p">
            Image by&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freepik.com/free-photo/close-up-smiley-friends-with-laptop_18492461.htm#query=teens%20laptop&position=2&from_view=search&track=ais"
            >
              Freepik
            </a>
          </Typography>

          <Typography>
            <strong>St. John&rsquo;s, NL [October 25, 2023]</strong> -&nbsp;
            <a href="https://digitalwavesnl.ca" target="_blank" rel="noreferrer">Digital Waves NL</a>, a non-profit organization dedicated to
            increasing diverse representation in the local technology sector, has opened registration to NL youth for a unique opportunity to
            learn digital skills while contributing to a charitable cause. While learning new skills for community impact, participants can also
            win prizes from local technology company sponsors.
          </Typography>
          <Typography>
            The free <a href="https://digitalwavesnl.ca/program-2023" target="_blank" rel="noreferrer">2023 program</a>, open to girls,
            gender-diverse, and 2SLGBTQIA+ youth ages 11-18 residing anywhere in the province, will include three virtual workshops that teach
            participants the essential skills of designing and coding a single-page website. Each participant will collaborate on&nbsp;
            <a href="https://thequadnl.com/" target="_blank" rel="noreferrer">Quadrangle NL&rsquo;s</a> 2SLGBTQIA+ knowledge base app
            as they work with peers and local mentors from NL&rsquo;s technology sector.
          </Typography>
          <Typography>
            “We are overjoyed to kick off this year&rsquo;s program, as well as extend our program&rsquo;s demographic to younger learners
            and those who identify in the 2SLGBTQIA+ spectrum,” says Digital Waves founder Lesley Chard. “It has never been more important
            to serve this demographic and show them they are welcome in educational experiences and the technology sector. By partnering with
            Quadrangle NL, we hope all participants will leave our experience seeing the technology sector in a new light and a place where
            they could shine someday.”
          </Typography>

          <Typography variant="h2">
            Addressing NL&rsquo;s Technology Diversity Challenge Head-On
          </Typography>
          <Typography>
            Lesley Chard, a Computer Science graduate from Memorial University of Newfoundland and Labrador, who also holds a leadership
            position in a local Education Technology (EdTech) company, has personally experienced the challenges that diverse undergraduates
            and professionals face in the technology sector. Chard worries about how the lack of diverse representation in the sector
            negatively affects the general population: &ldquo;As reliance on technology has become intertwined with our everyday lives,
            companies who introduce bias to the design of technology they develop could leave massive parts of society behind.&rdquo;
          </Typography>
          <Typography>
            Chard notes that hiring diverse talent in the province has become increasingly challenging, as the candidate pool needs to
            represent the population at large. Digital Waves&rsquo; mission is to reach young people when they start to consider their
            future careers and before they enter a post-secondary program. However, she admits there are still more commitments needed
            by many of the post-secondary institutions in the province to sustain diversity in the sector.
          </Typography>
          <Typography>
            “Enrolment for software engineering-related programs has quadrupled since I graduated in 2015, but the gender-diverse representation
            has remained static,” Chard states. “This is partly due to post-secondary institutions lacking initiatives and incentives to increase
            diversity. Still, if we can inspire younger students to see themselves in tech before they graduate high school, there is a greater
            chance they will enter related post-secondary programs without the much-needed diversity commitments from academic institutions themselves.”
          </Typography>

          <Typography variant="h2">
            Learning to Code for Community Impact
          </Typography>
          <Typography>
            Research shows that girls are more likely to consider future careers that can affect positive change in the world around them,
            and often do not consider a future career in technology because they do not see a technology-related role to be impactful in this way
            (<a href="https://news.microsoft.com/features/why-do-girls-lose-interest-in-stem-new-research-has-some-answers-and-what-we-can-do-about-it/" target="_blank" rel="noreferrer">Microsoft, 2018</a>). 
            People who identify in the 2SLGBTQIA+ spectrum also have more institutional barriers to working in the technology sector
            (<a href="https://queertech.org" target="_blank" rel="noreferrer">QueerTech, 2022</a>) due to social exclusion, harassment, and lack of equal opportunities compared to their peers.
          </Typography>
          <Typography>
            The new program will serve these two demographics and allow them to contribute to an impact-driven project helping NL&rsquo;s 2SLGBTQIA+ communities.
            The program aims to show participants the positive impact of technology and welcome them to the field. The program also hopes to raise public awareness
            of these groups&rsquo; challenges in the sector to inspire more companies and organizations to contribute to the ongoing solution.
          </Typography>
          <Typography>
            Those interested in participating in the Digital Waves 2023 program can register for free on their website until November 19, 2023.
          </Typography>
        </>
      )}
    />
  );
};

export default singleMediaRelease;
