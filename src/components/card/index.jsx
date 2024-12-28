const Card = ({dados}) => {
    return (
        <>
         <div className="w-60 h-50 bg-white shadow-md rounded-lg flex flex-col p-4">
            <img src={dados.url} alt="Imagem" />
         </div>
        </>
    );
  };
  
  export default Card;