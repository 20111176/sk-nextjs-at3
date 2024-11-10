import Link from 'next/link';
import Image from 'next/image';

const Header = (props) => {
  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header id='header'>
        <div id='top-bar'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <ul id='top-buttons'>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-sign-in'></i> Login
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <i className='fa fa-pencil-square-o'></i> Register
                    </Link>
                  </li>
                  <li className='divider'></li>
                  <li>
                    <div className='language-switcher'>
                      <span>
                        <i className='fa fa-globe'></i> English
                      </span>
                      <ul>
                        <li>
                          <Link href='#'>Deutsch</Link>
                        </li>
                        <li>
                          <Link href='#'>Espa&ntilde;ol</Link>
                        </li>
                        <li>
                          <Link href='#'>Fran&ccedil;ais</Link>
                        </li>
                        <li>
                          <Link href='#'>Portugu&ecirc;s</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* <!-- BOOTSTRAP SEARCH BEGINS

								<li>
								<form id="site-search">
									<span><i className="fa fa-search"></i></span>
									<input type="text" name="q" placeholder="Search">
								</form>	
								</li> 

								BOOTSTRAP SEARCH ENDS --> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id='nav-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <Link href='/' className='nav-logo'>
                  <Image src={props.logo} alt='One Ring Rentals' width={187} height={85} />
                </Link>
                {/* <!-- BEGIN SEARCH --> */}
                <div id='sb-search' className='sb-search'>
                  <form>
                    <input
                      className='sb-search-input'
                      placeholder='Search...'
                      type='text'
                      // value=''
                      name='search'
                      id='search'
                    />
                    <input
                      className='sb-search-submit'
                      type='submit'
                      // value=''
                    />
                    <i className='fa fa-search sb-icon-search'></i>
                  </form>
                </div>
                {/* <!-- END SEARCH --> */}
                {/* <!-- BEGIN MAIN MENU --> */}
                <nav className='navbar'>
                  <button id='nav-mobile-btn'>
                    <i className='fa fa-bars'></i>
                  </button>

                  <ul className='nav navbar-nav is-active'>
                    <li>
                      <Link href='/'>Find a Rental</Link>
                    </li>
                    <li>
                      <Link href='#'>List your rental</Link>
                    </li>
                    <li>
                      <Link href='#'>Travel Guides</Link>
                    </li>
                    <li>
                      <Link href='/regions'>Regions</Link>
                    </li>
                    <li>
                      <Link href='/news'>News</Link>
                    </li>
                    <li>
                      <Link href='/contact'>Contact</Link>
                    </li>
                  </ul>
                </nav>
                {/* <!-- END MAIN MENU --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- END HEADER -->  */}
    </>
  );
};

export default Header;
