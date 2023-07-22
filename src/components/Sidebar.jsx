import useSidebar from '../store';
import { useEffect } from 'react';

const items = [
  {
    title: 'Home',
  },
  {
    title: 'New',
  },
  {
    title: 'Popular',
  },
  {
    title: 'Trending',
  },
  {
    title: 'Categories',
  },
];

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar((state) => ({
    isOpen: state.isOpen,
    toggle: state.toggle,
  }));

  useEffect(() => {
    // Add or remove the "overflow-hidden" class to the body depending on whether the sidebar is open
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up the effect by removing the class when the component is unmounted
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } min-h-screen w-screen absolute right-0 top-0 bg-neutral-offWhite bg-transparent flex z-50 lg:hidden`}>
      <div
        className="flex-1 bg-neutral-veryDarkBlue opacity-40"
        onClick={toggle}></div>
      <div className="bg-neutral-offWhite p-10 w-64">
        <div className="flex justify-end">
          <img
            src="icon-menu-close.svg"
            alt="close"
            className="cursor-pointer"
            onClick={toggle}
          />
        </div>
        <ul className="flex flex-col gap-y-5 mt-24">
          {items.map((item) => (
            <li
              onClick={toggle}
              className="hover:text-primary-softOrange transition duration-200"
              key={item.title}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
