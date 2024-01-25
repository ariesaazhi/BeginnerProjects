export const Book = (props) => {
  return (
    <div className="book-button">
      <h1>{props.bookNmae}</h1>
      <button
        onClick={() => props.completeBook(props.id)}
        className="custom-button"
        style={{ backgroundColor: props.completed ? "green" : "cadetblue" }}
      >
        {" "}
        Complete{" "}
      </button>

      <button
        onClick={() => props.deleteBook(props.id)}
        className="custom-button"
        style={{ backgroundColor: "red", fontStyle: "normal" }}
      >
        X{" "}
      </button>
    </div>
  );
};
