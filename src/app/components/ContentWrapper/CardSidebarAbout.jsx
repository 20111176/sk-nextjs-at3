import Link from 'next/link';
const CardSidebarAbout = ({
  img = 'http://placehold.it/100x100',
  date = 'Available Now',
  detail = '',
  location = '',
}) => {
  return (
    <li className='col-md-12'>
      <div className='image'>
        <Link href='#'></Link>
        <img alt='' src={img} />
      </div>

      <ul className='top-info'>
        <li>
          <i className='fa fa-calendar'></i>
          {date}
        </li>
      </ul>

      <h4>
        <Link href='#'>{detail}</Link>
        <p>{location}</p>
      </h4>
    </li>
  );
};

export default CardSidebarAbout;
