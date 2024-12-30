const CardNews = ({ data, index }) => {
  return (
    <>
      <div key={index}>
        <h3>{data.title !== "[Removed]" ? data.title : "Sem título" }</h3>
        <p>Author Name: {data.author ?? "Não identificado"}</p>
        <p>Data de Publicação: {data.publishedAt}</p>
        <p>Ler noticia: {data.url}</p>
      </div>
    </>
  );
};

export default CardNews;
