import Link from 'next/link';
const Footer = (props) => {
  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer id='footer'>
        <div id='footer-top' className='container'>
          <div className='row'>
            <div className='block col-sm-3'>
              <Link href='#'>
                <img src={props.logo} alt='One Ring Rentals' />
              </Link>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
                volutpat quam dignissim, convallis elit id, efficitur sem.
                Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
                pellentesque nec at metus.
              </p>
            </div>
            <div className='block col-sm-3'>
              <h3>Helpful Links</h3>
              <ul className='footer-links'>
                <li>
                  <Link href='#'>All rentals</Link>
                </li>
                <li>
                  <Link href='#'>List your rental</Link>
                </li>
                <li>
                  <Link href='#'>Read our FAQs</Link>
                </li>
              </ul>
            </div>
            <div className='block col-sm-6'>
              <h3>Popular regions</h3>
              <div className='row'>
                <div className='col-sm-6'>
                  <ul className='footer-listings'>
                    <li>
                      <div className='image'>
                        <Link href='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link href='#'>Rhovanion</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link href='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link href='#'>Eriador</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link href='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link href='#'>Bay of Belfalas</Link>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-6'>
                  <ul className='footer-listings'>
                    <li>
                      <div className='image'>
                        <Link href='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link href='#'>Mordor</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link href='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link href='#'>Arnor</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link href='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link href='#'>Forlindon</Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- BEGIN COPYRIGHT --> */}
        <div id='copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                &copy; 2024 One Ring Rentals
                {/* <!-- BEGIN SOCIAL NETWORKS --> */}
                <ul className='social-networks'>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-google'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-pinterest'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-youtube'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-rss'></i>
                    </Link>
                  </li>
                </ul>
                {/* <!-- END SOCIAL NETWORKS --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END COPYRIGHT --> */}
      </footer>
      {/* <!-- END FOOTER --> */}
    </>
  );
};

export default Footer;
