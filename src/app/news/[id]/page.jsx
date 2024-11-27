import CardArticle from '@/app/components/ContentWrapper/CardArticle';
import { articlesData } from '@/app/data/articlesData';

export default function RegionPage({ params }) {
  const { id } = params;

  if (id > 0 && id <= articlesData.length) {
    return (
      <>
        <h1 className='section-title'>{articlesData[id - 1].title}</h1>
        <div className='main col-sm-12'>
          <div className='grid-style1 '>
            <CardArticle
              title={articlesData[id - 1].title}
              date={articlesData[id - 1].date}
              tags={articlesData[id - 1].tags}
              body={articlesData[id - 1].body}
              comments={articlesData[id - 1].comments}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className='section-title'>Page Not Found</h1>
        <p className='p-'>
          Sorry, the article you're looking for does not exist.
        </p>
      </>
    );
  }
}
