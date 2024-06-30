function FinishedScreen({ points, totalPoints, highscore }) {
  const percentage = (points / totalPoints) * 100;
  let emoji = "🙏";
  if (percentage === 100) emoji = "🥇";
  if (percentage < 100 && percentage >= 80) emoji = "🥈";
  if (percentage < 80 && percentage >= 55) emoji = "🥉";
  return (
    <>
      <p className="result">
        {emoji}
        You scored <strong>{points}</strong> out of{" "}
        <strong>{totalPoints}</strong>({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
    </>
  );
}

export default FinishedScreen;
