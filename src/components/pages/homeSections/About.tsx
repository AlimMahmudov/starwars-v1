import Image from "next/image"; // Import the Image component
import scss from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.aboutImage}>
            {/* Use the optimized Image component */}
            <Image
              src="https://images2.alphacoders.com/876/thumb-1920-876963.jpg"
              alt="Star Wars Battlefront II"
              width={600} // Specify the width of the image
              height={400} // Specify the height of the image
              layout="responsive" // Makes the image responsive
            />
          </div>
          <div className={scss.aboutText}>
            <h3>В BATTLEFRONT РОЖДАЮТСЯ ГЕРОИ</h3>
            <h1>STAR WARS™ BATTLEFRONT™ II</h1>
            <p>
              Star Wars: Battlefront II — компьютерная игра в жанре шутер от
              первого лица с возможностью переключаться на вид от третьего лица,
              по вселенной «Звёздных войн», четвёртая игра серии Star Wars
              Battlefront, являющаяся продолжением предыдущей части.
            </p>
            {/* <button>смотреть</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
