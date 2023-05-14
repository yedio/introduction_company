import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </>
  );
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className="w-[1024px] sm:w-full my-0 mx-auto sm:px-4">{children}</div>
  );
};
