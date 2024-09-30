
import Menu from "./Menu";

import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className="bg-[#333333] text-white py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Menu */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-4 md:mb-0">
            <Menu />
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 items-center">
    <SocialIcon className="w-3 h-3" url="https://telegram.com/mkm_developer" />
    <SocialIcon className="w-3 h-3" url="https://instagram.com" />
    <SocialIcon className="w-3 h-3" url="https://youtube.com" />
    <SocialIcon className="w-3 h-3" network="github" url="https://github.com/muqaddaskamolova" />
    
</div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;