

const BannerImage = () => {
  return (
    <div className="my-60 block">
      <div className="max-w-[calc(42rem+24px)] lg:w-full hidden lg:block lg:absolute lg:top-[20rem] z-[0] left-[24%] bg-opacity-20 lg:min-h-[80vh] rounded p-20 bg-white border-2 border-slate-200">
      </div>
      <div className="max-w-2xl lg:w-full lg:absolute lg:top-[21rem] lg:left-[25%] ">
        <img src="https://i.ibb.co.com/r4Pwt2G/banner.jpg" alt="Banner" className="object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default BannerImage;