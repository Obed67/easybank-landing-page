


const WhyCard = ({ image, auteur, titre, description }) => {
    return (
      <div className="mx-3 bg-white rounded-lg ">
        <img src={image} alt={titre} className="mb-10 rounded-t-lg h-52"/>
        <p className="my-3 text-xs text-slate-500 ps-5">{auteur}</p>
        <h3 className="mb-5 text-xl font-bold ps-5">{titre}</h3>
        <p className="mt-2 text-gray-600 ps-5">{description}</p>
      </div>
    );
  };
  
  export default WhyCard;
  