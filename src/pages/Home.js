import "../index.css";
export function Home() {
    let height = '200px'
  return (
    <h3>
      <p> &emsp; Coming soon:</p>
      <div className="left">
        1. Taekwondo game in Angular
        <p>
          <img
            src="/TKD_Game.png"
            alt="TKDImage"
            height={height}
            className="responsive"
          ></img>
        </p>
      </div>
      <div className="main">
        2. Vector Drawing in Vue
        <p>
          <img
            src="/Vector_Drawing.png"
            alt="VDImage"
            height={height}
            className="responsive"
          ></img>
        </p>
      </div>
      <div className="right">
        3. Polar Graphing in React Native
        <p>
          <img
            src="/Polar_Graphing.png"
            alt="Polar Graphing Image"
            height={height}
            className="responsive"
          ></img>
        </p>
      </div>
    </h3>
  );
}
