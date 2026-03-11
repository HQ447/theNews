import React from 'react'
import { useNavigate } from 'react-router-dom';
import newsData from "../../assets/news.json"
function Pakistan() {
    const news = newsData.filter((item) => item.category === "Pakistan");
    const navigate = useNavigate()
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-6">
                {news.map((item) => (
                    <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden p-6">
                        <img className='h-50 w-full' src={item.image} alt={item.heading} />
                        <div className="p-4 text-right font-urdu">
                            <h2 className="text-xl mb-2">{item.heading}</h2>
                            <p className="text-gray-600 mb-2 line-clamp-3">{item.description}</p>
                            <span className="text-sm text-gray-400">{item.date}</span>
                        </div>
                        <button onClick={() => navigate(`/news/${item.id}`)} className='font-urdu px-2 py-1 bg-amber-500 text-white hover:bg-amber-600 hover:scale-95 transition-all cursor-pointer'>مزید پڑھیں</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pakistan