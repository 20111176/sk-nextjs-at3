import CardArticles from '@/app/components/ContentWrapper/CardArticles';
import { newsData } from '@/app/data/newsData';

export default function Home() {
  return (
    <div className='main col-sm-12'>
      <CardArticles title='Latest News' data={newsData} />
    </div>
  );
}
