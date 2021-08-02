import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';
import TopNav from './TopNav';

type Props = {
  children?: ReactNode,
};

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const Layout = ({ children }: Props): ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <TopNav />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
