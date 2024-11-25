
const Footer = () => {
  return (
    <>
      <footer className="bg-white mt-60">
        <div className="flex flex-col items-center justify-center gap-3 m-8">
          <h1 className="text-3xl font-bold">Gadget Haven</h1>
            <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="footer bg-base-100 px-3 justify-center gap-40">
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Tracking</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Carrers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;