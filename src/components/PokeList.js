const PokeList = () => {
  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <span aria-hidden="true">&laquo;</span>
          </li>
          <li className="page-item">1</li>
          <li className="page-item">2</li>
          <li className="page-item">3</li>
          <li className="page-item">
            <span aria-hidden="true">&raquo;</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PokeList;
