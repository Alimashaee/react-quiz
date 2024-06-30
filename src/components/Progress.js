function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Progress <strong>{index}</strong>/<strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong>/<strong>{totalPoints}</strong> Points
      </p>
    </header>
  );
}

export default Progress;
