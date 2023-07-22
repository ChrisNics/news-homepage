import ContentBox from './ContentBox';

const contents = [
  {
    title: 'Hydrogen VS Electric Cars',
    desc: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    desc: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means?',
  },
];

const New = () => {
  return (
    <div className="p-5 bg-neutral-veryDarkBlue">
      <h6 className="text-primary-softOrange text-3xl font-extrabold mb-10">
        New
      </h6>
      <div className="flex flex-col gap-y-10">
        {contents.map(({ title, desc }, index) => (
          <ContentBox
            key={title}
            title={title}
            desc={desc}
            isLast={index === contents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default New;
