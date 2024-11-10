import CardSidebarActivity from './CardSidebarActivity';
import { activitiesData } from '@/app/data/activitiesData';

const CardSidebarActivities = () => {
  return (
    <div className='col-sm-12'>
      <h2 className='section-title'>Activity</h2>
      <ul className='activity'>
        {activitiesData.map((Activity, index) => (
          <CardSidebarActivity key={index} {...Activity} />
        ))}
      </ul>
    </div>
  );
};

export default CardSidebarActivities;
