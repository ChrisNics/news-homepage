const BrightFuture = () => {
  return (
    <div className="flex flex-col gap-y-7 lg:flex-row lg:flex-wrap lg:col-span-2">
      <img
        src="image-web-3-mobile.jpg"
        alt="BrightFuture"
        className="lg:hidden"
      />
      <img
        src="image-web-3-desktop.jpg"
        alt="BrightFuture"
        className="hidden lg:block"
      />
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-extrabold break-normal lg:max-w-xs">
          The Bright Future of Web 3.0?
        </h1>
      </div>

      <p className="text-neutral-darkGrayishBlue leading-7 lg:hidden">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="lg:hidden uppercase bg-primary-softRed  py-3 w-60 text-neutral-offWhite tracking-[5px] lg:w-52 hover:bg-neutral-veryDarkBlue hover:text-neutral-offWhite transition duration-200">
        Read more
      </button>

      {/* Display on desktop */}
      <div className="hidden w-1/2 lg:flex flex-col gap-y-5">
        <p className="text-neutral-darkGrayishBlue leading-7">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="uppercase bg-primary-softRed  py-3 w-60 text-neutral-offWhite tracking-[5px] lg:w-52 hover:bg-neutral-veryDarkBlue hover:text-neutral-offWhite transition duration-200">
          Read more
        </button>
      </div>
    </div>
  );
};

export default BrightFuture;
