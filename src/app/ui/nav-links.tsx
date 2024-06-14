"use client"
import React, { useEffect } from 'react';
import { UserCircleIcon, HomeIcon, CommandLineIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useAuth } from '../context/AuthContext';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, roles: ['admin', 'user'] },
  { name: 'Courses', href: '/dashboard/courses', icon: CommandLineIcon, roles: ['user'] },
  { name: 'Webeditor', href: '/dashboard/webeditor', icon: CommandLineIcon, roles: ['user'] },
  { name: 'Course config', href: '/dashboard/Admin/course', icon: CommandLineIcon, roles: ['admin'] },
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon, roles: ['admin', 'user'] },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { user } = useAuth();

  // Debugging: Log the user object to verify it's loaded and has a role
  useEffect(() => {
    console.log('Current user:', user);
  }, [user]);

  if (!user) {
    // Handle case where user is not loaded or undefined
    return <div>Loading...</div>;
  }

  return (
    <>
      {links
        .filter(link => link.roles.includes(user.role.toLowerCase())) // Ensure role matching is case-insensitive
        .map((link) => {
          const LinkIcon = link.icon;
          return (
            <li key={link.name}>
              <Link href={link.href} className={clsx('flex items-center p-3 pl-0 my-6 mx-6 text-white dark:text-white hover:border-b hover:border-lime-400 hover:text-lime-400 dark:hover:bg-gray-700 group',
                {'transition-transform -translate-x-full sm:translate-x-0 hover:text-lime-400 text-lime-400 border-b-[0.5px] border-lime-400': pathname === link.href},)}>
                <LinkIcon className="w-6" />
                <span className="ms-3">{link.name}</span>
              </Link>
            </li>
          );
        })}
    </>
  );
}