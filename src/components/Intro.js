import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const benefits = [
    "Kuyruksuz Alışveriş",
    "Temassız Ödeme",
    "Dijital Fişler",
    "İndirimlerden anında haberdar olma",
    "Hızlı ve Rahat Ödeme",
    "Kullanıcı Dostu Arayüz",
    "Bonus veya indirim kartı taşımaya son ve anında indirimlerden yararlanma",
    "Ayrıntılı ürün bilgileri",
  ];
  
  const Intro = () => {
    return (
<>
  <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
      {/* Görsel Kısmı */}
      <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
        <img alt="PayGo görseli" className="rounded-t float-right" src={img} />
      </div>

      {/* Metin Kısmı */}
      <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
        <h3 className="text-3xl text-blue-900 font-bold">Neden PayGo?</h3>

        {/* Avantajları Listeleme */}
        <div className="mt-4">
          {benefits.map((benefit, index) => (
            <p key={index} className="my-3 text-xl text-gray-600 font-semibold">{index + 1}. {benefit}</p>
          ))}
        </div>

        {/* Buton */}
        <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
          Daha fazlasını öğren
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
    
    {/* Yeni eklenen açıklama metni */}
    <div className="mt-4 px-8 text-center lg:text-left">
      <p className="my-3 text-xl text-gray-600 font-semibold">
        Tek bir uygulama içinde ürün seçebilir, tarayabilir, ödeme yapabilir ve dijital makbuz alabilirsiniz – tüm bunlar kasada vakit kaybetmeden yapılır. 
      </p>
      <p className="my-3 text-xl text-gray-600 font-semibold">
        Yaygın ödeme yöntemleri arasında kredi kartı, banka kartı, PayPal ve Apple Pay veya Google Pay gibi mobil ödeme seçenekleri bulunuyor.
      </p>
    </div>
  </div>
</>

    );
  };
  
  export default Intro;