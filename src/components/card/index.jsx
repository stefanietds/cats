const Card = ({ dados }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl w-full h-auto">
        <img src={dados.url} alt="Imagem" className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default Card;
