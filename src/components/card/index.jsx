const Card = ({ dados }) => {
  return (
    <>
      <div className="h-65 w-4/5 bg-white shadow-md rounded-md flex flex-col p-2">
        <img src={dados.url} alt="Imagem" className="w-full h-full" />
      </div>
    </>
  );
};

export default Card;
