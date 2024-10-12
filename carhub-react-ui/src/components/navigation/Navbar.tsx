import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
// import { useUser } from "@/hooks/fetchUser";
import UserProfile from "../UserProfile/UserProfile";
import { CarIcon } from "lucide-react";
import { user as dummyUser } from "@/dummyData/user";
import { useState } from "react";
import { User } from "@/types";
import { ModeToggle } from "../ModeToggle/ModeTogle";

const navigation = [
  { name: "All Cars", href: "all-cars", current: false },
  { name: "My Cars", href: "my-cars", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // TODO: Implement real user authentication and fetch user data when API is ready
  // const { user, loading } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  const handleLogin = () => {
    // TODO: Implement login logic when API is ready
    console.log("Login clicked");
    setUser(dummyUser);
  };

  const handleLogout = () => {
    // TODO: Implement logout logic when API is ready
    console.log("Logout clicked");
    setUser(null);
  };

  const updatedNavigation = navigation.map((item) => {
    return {
      ...item,
      current: location.pathname === `/${item.href}`,
    };
  });

  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <CarIcon className="h-8 w-8 mr-2 text-white hover:text-indigo-300 cursor-pointer" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {updatedNavigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* TODO ADD LOADING STATE */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ModeToggle />
            {user ? (
              <UserProfile user={user} handleLogout={handleLogout} />
            ) : (
              <button
                onClick={handleLogin}
                className="text-white hover:text-indigo-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
