import { FC, ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { Main } from "../Main";

type Props = {
  children: ReactNode;
  hideHeader?: boolean;
  hideNav?: boolean;
  hideFooter?: boolean;
  page?: string;
};

const Layout: FC<Props> = ({
  children,
  hideHeader,
  hideNav,
  hideFooter,
  page,
}) => {
  return (
    <>
      {!hideHeader && <Header />}
      {!hideNav && <Nav />}
      <Main className={page && `page page-${page}`}>{children}</Main>
      {!hideFooter && <Footer />}
    </>
  );
};

export { Layout };
