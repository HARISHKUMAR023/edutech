'use client';


import { UserCircleIcon ,HomeIcon, CommandLineIcon,UserGroupIcon , ClipboardIcon,ChartBarIcon,ChatBubbleBottomCenterIcon,FolderIcon} from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Courses', href: '/dashboard/courses', icon:  CommandLineIcon },
  // { name: 'Assignments', href: '/dashboard/assignments', icon: ClipboardIcon },
  //  { name: 'Grades', href: '/dashboard/grades', icon: ChartBarIcon },
  // { name: 'Discussion', href: '/dashboard/discussion', icon: ChatBubbleBottomCenterIcon },
  //  { name: 'Resources', href: '/dashboard/resources', icon: FolderIcon },
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
];
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (

     
          <li key={link.name} >
             <Link href={link.href} className={clsx('flex items-center p-3 my-6  rounded-lg text-white dark:text-white hover:bg-lime-500 dark:hover:bg-gray-700 group',{'transition-transform -translate-x-full sm:translate-x-0  shadow-lg shadow-lime-500 bg-lime-500 text-black': pathname === link.href},)}>
             <LinkIcon className="w-6" />
                <span className="ms-3">{link.name}</span>
             </Link>
          </li>
         
          // <Link
          //   key={link.name}
          //   href={link.href}
          //   className={clsx(
          //     'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-blue-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 text-white',
          //     {
          //       'bg-orange-500 text-white': pathname === link.href,
          //     },
          //   )}
          // >
          //   <LinkIcon className="w-6" />
          //   <p className="hidden md:block">{link.name}</p>
          // </Link>
        );
      })}
    </>
  );
}