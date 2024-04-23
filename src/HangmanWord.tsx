type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".4em",
        fontSize: "3rem",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid #000" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
