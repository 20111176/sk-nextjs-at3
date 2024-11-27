import MainContent from '@/app/components/ContentWrapper/MainContent';
import Sidebar from '@/app/components/ContentWrapper/Sidebar';

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
