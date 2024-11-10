import Header from './components/Header';
import Footer from './components/Footer';

let logo = '/assets/images/logo.png';

export default function Home() {
  return (
    <>
      <Header logo={logo} />
      <Footer logo={logo} />
    </>
  );
}
