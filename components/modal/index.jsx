const Modal = ({ setOpen }) => {
  const closeModal = () => setOpen(false);
  return (
    <div className="w-full h-full fixed flex justify-center items-center bg-slate-50 inset-0 bg-opacity-75">
      <div className="h-96 w-96 bg-slate-500 flex flex-col justify-center items-center rounded-lg">
        <p className="font-medium cursor-pointer text-center text-lg">The choosen date is out of free of charge plan</p>
        <button className="mt-20 border-blue-900 border-2 px-20 py-2 rounded-lg font-medium" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
