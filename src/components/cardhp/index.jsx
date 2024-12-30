const CardHP = ({ data }) => {
  //TODO: MELHORAR ESTILIZAÇÃO, TROCAR BUTTON
  return (
    <>
    <div className="relative w-full h-full">
      <h1 className="text-center font-bold absolute top-2 left-1/2 transform -translate-x-1/2">{data.title}</h1>
      <div className="flex mt-16 w-full">
        <img
          src={data.cover}
          alt="Imagem"
          className="w-full h-40 object-contain"
        />
      </div>
    </div>
    </>
  );
};

export default CardHP;
