const Modal = ({ setIsOpen }) => {
    //TODO: Implementar modal com informações do livro
  return (
    <>
      <div className="bg-black z-10 h-screen w-screen fixed top-0 left-0 bg-opacity-20">
        <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 bg-blue-200">
          <div onClick={() => setIsOpen(false)}>X</div>
          <div className="w-auto h-auto bg-white z-10">
            <p>oi</p>
          </div>
        </div>
      </div>
    </>
  );
};


export default Modal;
