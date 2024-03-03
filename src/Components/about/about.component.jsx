import "./about.styles.css";

const About = () => {
  const sendEmail = () => {
    window.location.assign("mailto:medhanshjain2010@gmail.com");
  };
  return (
    <div className="aboutSection">
      <h1 id="about" className="manrope">
        About Me
      </h1>
      <div id="aboutDesc" className="manrope">
        Hey there! I'm Medhansh Jain, a passionate{" "}
        <span className="underline">front-end</span> web developer delving into
        the dynamic realm of backend technologies. Crafting visually appealing
        and user-friendly interfaces brings me immense satisfaction. Beyond
        coding, I find joy in the thrilling world of sports and the soulful
        notes of music. Currently expanding my skills in backend development, I
        invite you to join me on this exciting journey. Let's not only build
        powerful digital experiences but also share the excitement of tech,
        sports, and melodies.{" "}
        <span id="connect" onClick={sendEmail}>
          Connect
        </span>{" "}
        with me, let's collaborate, and together, let's create something truly
        remarkable!
      </div>
    </div>
  );
};

export default About;
