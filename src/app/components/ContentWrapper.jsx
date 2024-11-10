import MainContent from './ContentWrapper/MainContent';
import Sidebar from './ContentWrapper/Sidebar';

const ContentWrapper = () => {
  return (
    <>
      {/* <!-- BEGIN CONTENT WRAPPER --> */}
      <div className='content'>
        <div className='container'>
          <div className='row'>
            <MainContent />
            <Sidebar />
          </div>
        </div>
      </div>
      {/* <!-- END CONTENT WRAPPER -->  */}
    </>
  );
};

export default ContentWrapper;
