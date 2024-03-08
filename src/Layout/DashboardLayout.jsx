import NavBar from '../components/NavBar/NavBar';
import Sidebar from '../components/Sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <main className='d-flex flex-column flex-md-row justify-content-between'>
      <aside
        style={{ background: '#1F2224', height: 'auto', minHeight: '100vh' }}
        className='col-12 col-md-2 side'
      >
        <Sidebar />
      </aside>
      <article className='col-12 col-md-10 py-5'>
        <NavBar />
        {children}
      </article>
    </main>
  );
};

export default DashboardLayout;
