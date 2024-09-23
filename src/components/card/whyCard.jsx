


const WhyCard = ({ image, nom, description }) => {
    return (
      <div className="flexp-4 mx-3">
        <img src={image} alt={nom} className="my-10"/>
        <h3 className="mb-5 text-xl font-bold">{nom}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default WhyCard;
  