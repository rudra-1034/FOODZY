import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqImg from '../assets/Faq.png'; 

export default function Faq() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Top Banner */}
      <div className="bg-red-500 text-white py-2 px-4 font-medium">
        Faq
      </div>

     

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="rounded overflow-hidden">
          <img
            src={FaqImg}
            alt="FAQ"
            className="w-full rounded"
          />
        </div>

        <div className="space-y-4">
          {[
            "What Facilities Does Your Hotel Have?",
            "How Do I Book A Room For My Vacation?",
            "How We are best among others?",
            "Is There Any Fitness Center In Your Hotel?",
            "What Type Of Room Service Do You Offer?",
            "What Facilities Does Your Hotel Have?",
            "How Do I Book A Room For My Vacation?"
          ].map((question, index) => (
            <div key={index} className="border rounded p-3 hover:bg-gray-50 transition cursor-pointer">
              <div className="font-medium">{question}</div>
              {index === 0 && (
                <div className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptates rem doloremque architecto.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
