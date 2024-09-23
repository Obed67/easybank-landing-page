import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTwitter } from 'react-icons/fa'; // Assurez-vous d'installer react-icons

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Contactez-nous</h1>
      <p className="mt-4 text-lg text-gray-600">
        Suivez-nous sur nos réseaux sociaux !
      </p>
      <div className="flex mt-6 space-x-6">
        <a
          href="https://facebook.com/Obed.AGBOHOUN67"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 transition-transform hover:scale-110"
        >
          <FaFacebookF size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/sonagnon-obed-agbohoun-a1b500262/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 transition-transform hover:scale-110"
        >
          <FaLinkedinIn size={32} />
        </a>
        <a
          href="https://wa.me/22967150180"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 transition-transform hover:scale-110"
        >
          <FaWhatsapp size={32} />
        </a>
        <a
          href="https://x.com/s_sonagnon?s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 transition-transform hover:scale-110"
        >
          <FaTwitter size={32} />
        </a>
      </div>
    </div>
  );
}
