import ContentBox from './ContentBox';

const contents = [
  {
    title: 'Reviving Retro PCs',
    desc: 'What happens when old PCs are given modern upgrades?',
    img: 'image-retro-pcs.jpg',
    alt: 'computer',
  },
  {
    title: 'Top 10 Laptops of 2022',
    desc: 'Our best picks for various needs and budgets',
    img: 'image-top-laptops.jpg',
    alt: 'laptop',
  },
  {
    title: 'The Growth of Gaming',
    desc: 'How the pandemic has sparked fresh opportunities.',
    img: 'image-gaming-growth.jpg',
    alt: 'gaming-growth',
  },
];

const Reviving = () => {
  return (
    <div className="flex flex-col gap-y-10 lg:col-span-3 lg:flex-row lg:gap-x-10">
      {contents.map(({ title, desc, img, alt }, index) => (
        <ContentBox
          key={index}
          title={title}
          desc={desc}
          img={img}
          alt={alt}
          index={index}
        />
      ))}
    </div>
  );
};

export default Reviving;
