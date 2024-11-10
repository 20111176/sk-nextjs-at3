import Header from './components/Header';
import Footer from './components/Footer';
import '../../public/assets/css/bootstrap.min.css';
import '../../public/assets/css/style.css';
let logo = '/assets/images/logo.png';

export default function Home() {
  return (
    <>
      <Header logo={logo} />
      <Footer logo={logo} />
    </>
  );
}
