import Link from 'next/link';
const CardRegion = ({ img = 'http://placehold.it/194x194', region }) => {
  return (
    <div className='item'>
      <Link href='#'>
        <img src={img} alt='' />
        <h3>{region}</h3>
      </Link>
    </div>
  );
};

export default CardRegion;
