import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h3 className="hello">Hi, my name is</h3>
        <h1 className="name">Felix Argast.</h1>
        <h2 className="home-subheading">I'm a Frontend Developer</h2>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur magni recusandae iure excepturi quos! Modi tenetur earum
            amet, quisquam quidem cum sequi fugit explicabo nam velit, et
            aliquam minus placeat!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            molestiae facere, doloremque illum architecto dignissimos aliquid
            alias mollitia nisi.
          </p>
        </div>
      </div>
      <img src="" alt="" className="image-bubble" />
      <img src="" alt="" className="me" />
    </div>
  );
};

export default Home;
