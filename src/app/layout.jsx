import Header from './components/Header';
import Footer from './components/Footer';
import '../../public/assets/css/bootstrap.min.css';
import '../../public/assets/css/style.css';
let logoImage = '/assets/images/logo.png';

export const metadata = {
  title: 'One Ring Rentals',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* <!-- Google Web Font --> */}
        <link
          href='http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic'
          rel='stylesheet'
          type='text/css'
        />
      </head>
      <body>
        <Header logo={logoImage} />
        {children}
        <Footer logo={logoImage} />
        <script src='/assets/js/common.js'></script>
        <script
          type='text/javascript'
          src='/assets/js/common/jquery-1.11.1.min.js'></script>
        <script
          type='text/javascript'
          src='/assets/js/common/bootstrap.min.js'></script>
        <script
          type='text/javascript'
          src='/assets/js/common/bootstrap-datepicker.js'></script>
        <script
          type='text/javascript'
          src='/assets/js/common/chosen.min.js'></script>
        <script
          type='text/javascript'
          src='/assets/js/common/bootstrap-checkbox.js'></script>
        <script
          type='text/javascript'
          src='/assets/js/common/nice-scroll.js'></script>
        <script
          type='text/javascript'
          src='/assets/js/common/jquery-browser.js'></script>
        <script type='text/javascript' src='/assets/js/scripts.js'></script>
      </body>
    </html>
  );
}
