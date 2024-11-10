/* eslint-disable react/prop-types */
import CardRegion from './CardRegion';
import { regionsData } from '@/app/data/regionsData';

const CardRegions = (props) => {
  return (
    <>
      <div className='row'>
        {/* <div className='col-sm-12'> */}
        <div className='col-sm-12'>
          <h1 className='section-title'>{props.title}</h1>
          <div id='regions'>
            {regionsData.slice(0, props.limit).map((Region, index) => (
              <CardRegion img={props.img} key={index} {...Region} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRegions;
