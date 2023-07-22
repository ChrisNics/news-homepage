// eslint-disable-next-line react/prop-types
const ContentBox = ({ title, desc, isLast }) => {
  return (
    <div
      className={`flex flex-col gap-y-3 ${
        !isLast && 'border-b border-neutral-grayishBlue pb-10'
      }`}>
      <h3 className="text-neutral-offWhite font-extrabold text-xl ">{title}</h3>
      <p className="text-neutral-grayishBlue">{desc}</p>
    </div>
  );
};

export default ContentBox;
