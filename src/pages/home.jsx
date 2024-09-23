import React, { useEffect, useState } from 'react';
import Header from "../components/elements/header"
import WhyCard from '../components/card/whyCard';
import ArticleCard from '../components/card/articleCard';
import data from "../../data.json";


export default function Home() {
  const [why, setWhy] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setWhy(data.why);
    setArticles(data.articles);
  }, []);
  
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center w-full p-4 m-10 text-left lg:w-1/2">
      
        <div className='mb-9'>
          <h1 className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">Why choose Easybank ?</h1>
          <p className="my-5 text-slate-400">
            We leverage open Banking to turn your bank account into financial hub. Control your finances like never before.
          </p>
        </div>

        
        <div className="flex flex-col w-full md:flex-row md:w-[1100px]">
          {why.map(why => (
            <WhyCard
              key={why.id} 
              image={why.image} 
              nom={why.nom} 
              description={why.description} 
            />
          ))}
        </div>

      </div>

      <div className="flex flex-col justify-center w-full p-4 m-10 text-left lg:w-1/2">
      
        <div className='mb-9'>
          <h1 className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">Lastest Articles</h1>
        </div>

        
        <div className="flex flex-col w-full md:flex-row md:w-[1100px]">
          {articles.map(articles => (
            <ArticleCard
              key={articles.id} 
              image={articles.image}
              auteur={articles.auteur}
              titre={articles.titre} 
              description={articles.description} 
            />
          ))}
        </div>
      </div>

    </>
  )
}
