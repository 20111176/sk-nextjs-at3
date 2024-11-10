import CardSidebarAbout from './CardSidebarAbout';
import Link from 'next/link';
import { aboutData } from '@/app/data/about';

const CardSidebarAboutList = () => {
  return (
    <>
      {/* <!-- BEGIN SIDEBAR ABOUT --> */}
      <div className='col-sm-12'>
        <h2 className='section-title'>Last minute deals</h2>
        <ul className='latest-news'>
          {aboutData.map((About, index) => (
            <CardSidebarAbout key={index} {...About} />
          ))}
        </ul>
        <p className='center'>
          <Link className='btn btn-fullcolor' href='#'>
            More deals
          </Link>
        </p>
      </div>
      {/* <!-- END SIDEBAR ABOUT --> */}
    </>
  );
};

export default CardSidebarAboutList;
