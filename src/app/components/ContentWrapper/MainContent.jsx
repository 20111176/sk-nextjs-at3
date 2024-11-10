import CardProperties from './CardProperties';
import CardRegions from './CardRegions';
import CardArticles from './CardArticles';
import Link from 'next/link';
import { articlesData } from '@/app/data/articlesData';

const MainContent = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN CONTENT --> */}
      <div className='main col-sm-8'>
        <CardProperties />
        <CardRegions
          limit='6'
          title='POPULAR REGIONS'
          img='https://placehold.co/194x194'
        />
        <CardArticles title='Recent Articles' data={articlesData} />

        <div className='center'>
          <Link href='#' className='btn btn-default-color'>
            View All News
          </Link>
        </div>
      </div>
      {/* <!-- END MAIN CONTENT --> */}
    </>
  );
};

export default MainContent;
