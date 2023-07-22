const ContentBox = ({ img, alt, index, title, desc }) => {
  return (
    <div className="flex gap-x-10">
      <img src={img} alt={alt} className="w-32" />
      <div className="flex flex-col gap-y-4 justify-stretch">
        <h6 className="text-neutral-grayishBlue text-4xl font-extrabold">
          0{++index}
        </h6>
        <h3 className="text-neutral-veryDarkBlue text-xl font-semibold">
          {title}
        </h3>
        <p className="text-neutral-darkGrayishBlue">{desc}</p>
      </div>
    </div>
  );
};

export default ContentBox;
