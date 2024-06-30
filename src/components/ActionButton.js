function ActionButton({ dispatch, answer, index, numQuestions, status }) {
  if (status === "finished") {
    return (
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    );
  }

  if (index < numQuestions - 1) {
    return (
      <>
        {answer !== null && (
          <button
            className="btn"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        )}
      </>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button className="btn" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
  }
}

export default ActionButton;
