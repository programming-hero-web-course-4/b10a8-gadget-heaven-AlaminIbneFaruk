import Heading from "./Heading";

const Banner = () => {
  return (
    <div className="flex justify-center bg-purple-600 py-6 pb-20">
      <div className="text-center text-white">
        <div className="max-w-4xl">
          <Heading title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories." subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"/>
          <button className="btn btn-outline rounded-full btn-primary bg-white">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;