
import LogoBlanc from '../../assets/images/logo-blanc.png'
import FacebookIcon from '../../assets/images/icon-facebook.svg'
import YouTubeIcon from '../../assets/images/icon-youtube.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';
import PinterestIcon from '../../assets/images/icon-pinterest.svg';
import InstagramIcon from '../../assets/images/icon-instagram.svg';
import Button from '../elements/button';

export default function Footer() {
  return (
    <footer className="p-6 bg-customBlue">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <a href="/"><img src={LogoBlanc} alt="Logo" className="h-10 mb-4 text-white" /></a>
          <div className="flex space-x-4 mt-9">
            <a href="#"><img src={FacebookIcon} alt="Facebook" className="h-6" /></a>
            <a href="#"><img src={YouTubeIcon} alt="YouTube" className="h-6" /></a>
            <a href="#"><img src={TwitterIcon} alt="Twitter" className="h-6" /></a>
            <a href="#"><img src={PinterestIcon} alt="Pinterest" className="h-6" /></a>
            <a href="#"><img src={InstagramIcon} alt="Instagram" className="h-6" /></a>
          </div>
        </div>

        <div className="flex space-x-20">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white hover:text-gray-400">About</a>
            <a href="#" className="text-white hover:text-gray-400">Contact</a>
            <a href="#" className="text-white hover:text-gray-400">Blog</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white hover:text-gray-400">Careers</a>
            <a href="#" className="text-white hover:text-gray-400">Support</a>
            <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="hidden md:block">
            <Button>Request Invite</Button>
          </div>
          <p className="text-gray-500 mt-9">Easybank &copy; 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
