import React from 'react'

function Latest() {
    const news = [
        {
            "id": 1,
            "heading": "پاکستان میں ٹیکنالوجی کے شعبے میں تیزی سے ترقی",
            "description": "پاکستان میں حالیہ برسوں کے دوران ٹیکنالوجی کے شعبے میں نمایاں ترقی دیکھنے میں آئی ہے۔ مختلف آئی ٹی کمپنیوں اور اسٹارٹ اپس نے عالمی سطح پر اپنی پہچان بنائی ہے۔",
            "date": "2026-03-10",
            "image": "https://images.unsplash.com/photo-1518770660439-4636190af475"
        },
        {
            "id": 2,
            "heading": "لاہور میں شدید بارش سے موسم خوشگوار",
            "description": "لاہور میں گزشتہ رات ہونے والی بارش کے بعد موسم خوشگوار ہو گیا ہے۔ شہریوں نے پارکوں اور سڑکوں پر نکل کر ٹھنڈے موسم سے لطف اٹھایا۔",
            "date": "2026-03-09",
            "image": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
        },
        {
            "id": 3,
            "heading": "پاکستانی کرکٹ ٹیم کی شاندار فتح",
            "description": "پاکستانی کرکٹ ٹیم نے ایک سنسنی خیز مقابلے کے بعد مخالف ٹیم کو شکست دے کر سیریز اپنے نام کر لی۔ کپتان کی شاندار بیٹنگ نے میچ کا رخ بدل دیا۔",
            "date": "2026-03-08",
            "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
        },
        {
            "id": 4,
            "heading": "حکومت کا نئی تعلیمی اصلاحات کا اعلان",
            "description": "وفاقی حکومت نے تعلیمی نظام کو بہتر بنانے کے لیے نئی اصلاحات کا اعلان کیا ہے جس کے تحت اسکولوں اور جامعات میں جدید نصاب متعارف کرایا جائے گا۔",
            "date": "2026-03-07",
            "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
        },
        {
            "id": 5,
            "heading": "عالمی منڈی میں تیل کی قیمتوں میں کمی",
            "description": "عالمی منڈی میں خام تیل کی قیمتوں میں کمی کے بعد پاکستان میں بھی پیٹرولیم مصنوعات کی قیمتوں میں کمی متوقع ہے۔",
            "date": "2026-03-11",
            "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
        }
    ]
    return (
        <div><div className="grid md:grid-cols-3 gap-6">
            {news.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.heading} />
                    <div className="p-4 text-right font-urdu">
                        <h2 className="text-xl mb-2">{item.heading}</h2>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                </div>
            ))}
        </div></div>
    )
}

export default Latest