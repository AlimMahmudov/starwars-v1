import Image from "next/image";
import scss from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.logo}>
          <Image
            src="https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefront-2-mono-logo.png"
            alt="Battlefront 2 Logo"
            
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
