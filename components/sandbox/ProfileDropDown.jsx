import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosGitNetwork } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useLoginStatus } from '../../hooks/useLoginStatus'

export default function ProfileDropDown() {
  const { logout } = useLoginStatus();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-bluedark text-sm font-medium hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <FaUserCircle size="1.7rem" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              <Link
                className={`bg-white text-black flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-bluedark hover:text-white`}
                href="/"
              >
                <FiUser
                  className="mr-2"
                  size="1.2rem"
                  aria-hidden="true"
                />
                My Profile
              </Link>
            </Menu.Item>
            <hr className='text-[#E4E4E7]' />
            <Menu.Item>
              <Link
                className={`bg-white text-black flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-bluedark hover:text-white`}
                href="/"
              >
                <IoIosGitNetwork
                  className="mr-2"
                  size="1.2rem"
                  aria-hidden="true"
                />
                Two-way SSL
              </Link>
            </Menu.Item>
            <hr className='text-[#E4E4E7]' />
            <Menu.Item>
              <button
                className={`bg-white text-black flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-bluedark hover:text-white`}
                onClick={handleLogout}
              >
                <CiLogout
                  className="mr-2"
                  size="1.2rem"
                  aria-hidden="true"
                />
                Logout
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}






