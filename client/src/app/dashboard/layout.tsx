// import SideNav from '@/app/ui/dashboard/sidenav';
import SideNav from '@/app/ui/sidenav';
import Navbar from '../ui/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row  dashbord-layout bg-primary">
      <div className="w-full flex-none md:w-64">
       
        <SideNav />
      </div>
      <div className='w-full'>
      <Navbar />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-primary">{children}</div>
      </div>
   
    </div>
  );
}