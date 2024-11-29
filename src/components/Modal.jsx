import { FcApproval } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
const Modal = ({TotalPrice}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-5xl">
        <FcApproval />
      </div>
      <h3 className="font-bold text-lg py-5">Payment Successfully!!</h3>
      <p className="py-1">Thanks for purchasing</p>
      <p className="py-1">Total: {TotalPrice}</p>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-wide rounded-full">Close</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;