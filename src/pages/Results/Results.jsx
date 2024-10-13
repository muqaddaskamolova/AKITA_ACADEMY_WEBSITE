
import Marquee from "react-fast-marquee";
import Form from "../../assets/images/forma2.png";
import { useTranslation } from "react-i18next";

function Results() {
  const { t } = useTranslation();
  
  return (
    <div id="Results" className="p-4 sm:p-8 md:p-12 lg:p-16">
      <h4 className="text-center text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-5">
        {t("O’quvchilarimizning natijalari AKITA 6 gacha")} 
      </h4>
      
      <Marquee className="mb-10" gradient={false}>
        {[...Array(10)].map((_, index) => (
          <img 
            key={index} 
            src={Form} 
            alt="forma" 
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-2" 
          />
        ))}
      </Marquee>

      {/* Carousel top start */}
      <Marquee direction="right" gradient={false}>
        {[...Array(10)].map((_, index) => (
          <img 
            key={index} 
            src={Form} 
            alt="forma" 
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-2" 
          />
        ))}
      </Marquee>
      {/* Carousel bottom start */}
    </div>
  );
}

export default Results;
