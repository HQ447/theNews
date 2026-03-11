import React from "react";
import newsData from "../../assets/news.json";
import { useParams } from "react-router-dom";

function DetailedPage() {
    // useParams returns an object: { id: "1" }
    const { id } = useParams(); // destructure id from params

    // Find the news item by matching id
    const news = newsData.find((item) => item.id === parseInt(id));

    if (!news) {
        return <div className="text-center p-10 font-urdu">خبری مضمون نہیں ملا</div>;
    }

    return (
        <div className="  font-urdu text-right">
            <h1 className="text-4xl font-bold mb-4">{news.heading}</h1>
            <span className="text-gray-500 mb-4 block">{news.date} | {news.author}</span>
            <img
                src={news.image}
                alt={news.heading}
                className="w-full h-120 rounded-lg mb-6 "
            />
            <p className="text-2xl leading-relaxed whitespace-pre-line">
                {news.description}
            </p>
        </div>
    );
}

export default DetailedPage;