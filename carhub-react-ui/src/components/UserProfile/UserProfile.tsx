import { User } from "@/types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const UserProfile = ({ user }: { user: User }) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <BellIcon aria-hidden="true" className="h-6 w-6" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              alt="Profile image"
              //TODO : replace with user image
              src={user.imageUrl}
              className="h-8 w-8 rounded-full"
            />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <Link
              to={"/profile"}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"/settings"}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            >
              Settings
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              //TODO Sing out functionality
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            >
              Sign out
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default UserProfile;
