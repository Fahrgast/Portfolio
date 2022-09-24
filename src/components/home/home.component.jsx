import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h3>Hi, my name is</h3>
      <h1>
        Felix <span className="break"></span> Argast.
      </h1>
      <h2>I'm a Frontend Webdeveloper</h2>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          magni recusandae iure excepturi quos! Modi tenetur earum amet,
          quisquam quidem cum sequi fugit explicabo nam velit, et aliquam minus
          placeat!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          molestiae facere, doloremque illum architecto dignissimos aliquid
          alias mollitia nisi.
        </p>
      </div>
    </div>
  );
};

export default Home;
