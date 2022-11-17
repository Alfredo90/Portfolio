import pic from "../../assets/Alfredo.jpg";
import SocialData from "../SocialData.js/SocialData";

const LandingPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-dark to-light ">
      <div className="flex flex-col justify-evenly items-center gap-10">
        <img
          className="h-60 w-60 border-2 rounded-full object-cover hover:animate-wiggle"
          src={pic}
          alt="profile"
        />
        <h1 className="text-6xl font-salt font-bold text-white ">
          Alfredo Munoz
        </h1>
        <hr className="w-9/12 m-auto border-dotted border-t-8" />
        <p className="text-white font-josefin text-xl ">
          Html/Css | Tailwind | JavaScript | React | NodeJS | Express | Sql{" "}
        </p>
        <div className="flex justify-center items-center gap-4">
          {SocialData.map((data) => (
            <a
              className="flex justify-center items-center backdrop-contrast-150 bg-white/30 border-1 rounded w-20 h-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 drop-shadow-lg  "
              key={data.id}
              target="_blank"
              rel="noreferrer"
              href={data.linkPath}
            >
              <img
                className="w-10 h-10 "
                src={data.imgIcon}
                alt={data.imgIcon}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
