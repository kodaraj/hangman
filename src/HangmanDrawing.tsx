const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid #000",
      position: "absolute",
      right: -30,
      top: "48px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      backgroundColor: "#000",
      position: "absolute",
      right: 0,
      top: "115px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "#000",
      position: "absolute",
      right: "35px",
      top: "110px",
      transform: "rotate(120deg)",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "#000",
      position: "absolute",
      right: "-35px",
      top: "110px",
      transform: "rotate(60deg)",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "#000",
      position: "absolute",
      right: "25px",
      top: "200px",
      transform: "rotate(40deg)",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "#000",
      position: "absolute",
      right: "-25px",
      top: "200px",
      transform: "rotate(-40deg)",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          width: "10px",
          height: "50px",
          backgroundColor: "#000",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          width: "200px",
          height: "10px",
          backgroundColor: "#000",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          backgroundColor: "#000",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "250px",
          height: "10px",
          backgroundColor: "#000",
        }}
      />
    </div>
  );
}
