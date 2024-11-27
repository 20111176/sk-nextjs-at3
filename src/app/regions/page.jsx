import CardRegions from '@/app/components/ContentWrapper/CardRegions';

export default function Home() {
  return (
    <div className='main col-sm-12'>
      <div className='grid-style1 clearfix'>
        <CardRegions
          title='REGIONS IN AUSTRALIA'
          img='https://placehold.co/400x400'
        />
      </div>
    </div>
  );
}
