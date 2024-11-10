import CardProperty from './CardProperty';
import { propertiesData } from '@/app/data/propertiesData';

const CardProperties = () => {
  return (
    <>
      <h1 className='section-title'>Featured Properties</h1>
      <div className='grid-style1 clearfix'>
        {propertiesData.map((property, index) => (
          <CardProperty key={index} {...property} />
        ))}
      </div>
    </>
  );
};

export default CardProperties;
