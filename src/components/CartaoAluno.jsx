function CartaoAluno({ nome, turma, cargo, habilidades, imagem }) {
  return (
    <div className="card">
      
      <img src={imagem} alt={nome} className="avatar" />

      <h2>{nome}</h2>
      <p>{turma} - {cargo}</p>

      <div className="habilidades">
        {habilidades.map((hab, index) => (
          <span key={index}>{hab}</span>
        ))}
      </div>

    </div>
  );
}

export default CartaoAluno;