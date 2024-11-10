import Link from 'next/link';
const CardSidebarActivity = ({
  request = 'Not yet reviewed',
  title = 'No title',
  comment = 'No comment',
  date = 'Just now',
}) => {
  return (
    <li className='col-lg-12'>
      <Link href='#'>
        <img src='http://placehold.it/70x70' alt='' />
      </Link>
      <div className='info'>
        <h5>
          {request}
          <Link href='#'>{title}</Link>
        </h5>
        <p>{comment}</p>
        <h6>{date}</h6>
      </div>
    </li>
  );
};

export default CardSidebarActivity;
