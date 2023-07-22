import useSideBar from '../store';

const Burger = () => {
  const toggle = useSideBar((state) => state.toggle);
  console.log('s');

  return (
    <div
      className="flex flex-col gap-y-1 cursor-pointer lg:hidden"
      onClick={toggle}>
      <div className="h-[4px] w-12 bg-neutral-veryDarkBlue"></div>
      <div className="h-[4px] w-12 bg-neutral-veryDarkBlue"></div>
      <div className="h-[4px] w-12 bg-neutral-veryDarkBlue"></div>
    </div>
  );
};

export default Burger;
