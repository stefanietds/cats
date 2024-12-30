const Modal = ({ setIsOpen, data }) => {
  return (
    <>
      <div className="bg-black z-10 h-screen w-screen fixed top-0 left-0 bg-opacity-20">
        <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 bg-blue-200 p-4">
          <div onClick={() => setIsOpen(false)}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div key={data.index} className="w-auto h-auto z-10">
            <h2>{data.title}</h2>
            <br/>
            <p>Data de Lançamento: {data.releaseDate}</p>
            <br />
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
