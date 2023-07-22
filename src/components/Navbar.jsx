import Burger from './Burger';

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

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-10">
      <a href="#" className="cursor-pointer">
        <img src="logo.svg" alt="logo" />
      </a>

      <ul className="gap-x-5 hidden lg:flex">
        {items.map((item) => (
          <li
            className="hover:text-primary-softOrange transition duration-200"
            key={item.title}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
      <Burger />
    </nav>
  );
};

export default Navbar;
