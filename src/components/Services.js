import React from 'react';
import img from '../images/hand-shake.jpg'; 
import img2 from '../images/app.svg';
import img3 from '../images/mobile2.webp';
import img4 from '../images/navigation.jpg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12">
        <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">PayGo Çözümleri</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900'></div>
                </div>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                Perakendeciler için PayGo, tek bir mobil uygulamada birçok avantajı ve özelliği birleştiren çok amaçlı bir çözüm sunar:
                </h2>
            </div>
    
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Kart 1 */}
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group flex flex-col justify-between">
                        {/* Resim Div'i */}
                        <div>
                            <img alt="card img" className="rounded-t w-full h-auto" src={img} />
                        </div>
                        {/* Başlık ve Metin Div'i */}
                        <div className="mt-4 text-center">
                            <h2 className="font-semibold text-2xl">Müşteri Sadakat Programları</h2>
                            <p className="text-md font-medium mt-2">
                                Sık alışveriş yapan müşterilere ödüller sunarak sadakatlerini kazanın ve onları mağazanıza geri çekin.
                            </p>
                        </div>
                    </div>
    
                    {/* Kart 2 */}
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group flex flex-col justify-between">
                        {/* Resim Div'i */}
                        <div>
                            <img alt="card img" className="rounded-t w-full h-auto" src={img2} />
                        </div>
                        {/* Başlık ve Metin Div'i */}
                        <div className="mt-4 text-center">
                            <h2 className="font-semibold text-2xl">Kişiselleştirilmiş Öneriler</h2>
                            <p className="text-md font-medium mt-2">
                                Veri analizleri sayesinde müşterilere özel ürün önerileri sunarak satışları artırın ve müşteri memnuniyetini yükseltin.
                            </p>
                        </div>
                    </div>
    
                    {/* Kart 3 */}
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group flex flex-col justify-between">
                        {/* Resim Div'i */}
                        <div>
                            <img alt="card img" className="rounded-t w-full h-auto" src={img3} />
                        </div>
                        {/* Başlık ve Metin Div'i */}
                        <div className="mt-4 text-center">
                            <h2 className="font-semibold text-2xl">Mobil Ödeme</h2>
                            <p className="text-md font-medium mt-2">
                                Sıfır kuyrukla hızlı ve güvenli ödeme imkanı sağlayarak müşterilere vakit kazandırın ve mağaza verimliliğini artırın.
                            </p>
                        </div>
                    </div>
    
                    {/* Kart 4 */}
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group flex flex-col justify-between">
                        {/* Resim Div'i */}
                        <div>
                            <img alt="card img" className="rounded-t w-full h-auto" src={img4} />
                        </div>
                        {/* Başlık ve Metin Div'i */}
                        <div className="mt-4 text-center">
                            <h2 className="font-semibold text-2xl">Mağaza İçi Navigasyon</h2>
                            <p className="text-md font-medium mt-2">
                                Müşterilerin mağaza içinde aradıkları ürünleri kolayca bulmasını sağlayarak alışveriş deneyimini geliştirin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    )
}

export default Services;