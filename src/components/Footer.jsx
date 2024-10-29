import Menu from "./Menu";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="bg-[#333333] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Menu */}
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <Menu />
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 space-y-2 mt-4 md:mt-0">
            <SocialIcon className="w-8 h-8" url="https://telegram.com/mkm_developer" />
            <SocialIcon className="w-8 h-8" url="https://instagram.com" />
            <SocialIcon className="w-8 h-8" url="https://youtube.com" />
            <SocialIcon className="w-8 h-8" network="github" url="https://github.com/muqaddaskamolova" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
