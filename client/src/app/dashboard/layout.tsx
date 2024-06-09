// import SideNav from '@/app/ui/dashboard/sidenav';
import SideNav from '@/app/ui/sidenav';
import Navbar from '../ui/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row  dashbord-layout bg-primary">
      <div className="w-full flex-none md:w-64">
       
        <SideNav />
      </div>
      <div className='w-full p-2'>
      <Navbar />
      <div className="flex-grow  md:overflow-y-auto py-2 ">{children}</div>
      </div>
   
    </div>
  );
}