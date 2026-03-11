import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white font-urdu mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid md:grid-cols-3 gap-8 text-right">

                    {/* Website Info */}
                    <div>
                        <h2 className="text-2xl mb-4">اردو نیوز</h2>
                        <p className="leading-loose text-gray-300">
                            اردو نیوز ایک معتبر پلیٹ فارم ہے جہاں آپ کو پاکستان اور دنیا
                            بھر کی تازہ ترین خبریں، سیاست، کھیل اور ٹیکنالوجی سے متعلق
                            معلومات فراہم کی جاتی ہیں۔
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl mb-4">اہم روابط</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li className="hover:text-white cursor-pointer">ہوم</li>
                            <li className="hover:text-white cursor-pointer">پاکستان</li>
                            <li className="hover:text-white cursor-pointer">دنیا</li>
                            <li className="hover:text-white cursor-pointer">کھیل</li>
                            <li className="hover:text-white cursor-pointer">ٹیکنالوجی</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-xl mb-4">رابطہ کریں</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>ای میل: info@urdunews.com</li>
                            <li>فون: +92 300 1234567</li>
                            <li>پتہ: لاہور، پاکستان</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
                    © {new Date().getFullYear()} اردو نیوز — جملہ حقوق محفوظ ہیں
                </div>

            </div>
        </footer>
    );
}

export default Footer;