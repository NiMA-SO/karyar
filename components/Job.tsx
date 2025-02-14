"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Job = () => {
  const [show, setShow] = useState<Number>(0);
  const jobData = [
    {
      id: 1,
      title: "توسعه فول استک سایت کارت ویزیت (ایده خودم)",
      description:
        "      در این پروژه، ایده خودم را برای توسعه یک سایت کارت ویزیت به صورت فول استک 🚀 پیاده‌سازی کردم. تمرکزم روی طراحی مدرن 🎨، عملکرد سریع ⚡ و تجربه کاربری بهینه بود. این تجربه، درک عمیق‌تری از ارتباط بین فرانت‌اند و بک‌اند 🖥️ به من داد.",
    },
    {
      id: 2,
      title: "توسعه دهنده بک اند (کارآموز)در شرکت یا کارخانه نوآوری در فضیلت شیراز",
      description:
        "به عنوان کارآموز بک‌اند در شرکت یا کارخانه نوآوری در فضیلت 🚀، با مفاهیم کلیدی توسعه سرور و مدیریت داده‌ها آشنا شدم. تجربه کار در یک محیط حرفه‌ای، مهارت‌های من را در بهینه‌سازی عملکرد، امنیت و یکپارچه‌سازی سیستم‌ها 💻 تقویت کرد. این دوره فرصت ارزشمندی برای یادگیری عملی و کار تیمی 🤝 بود.",
    },
    {
      id:3,
      title : "توسعه دهنده فرانت اند (کارآموز)در شرکت یا کارخانه نوآوری در فضیلت شیراز",
      description: 'به عنوان کارآموز فرانت‌اند در شرکت یا کارخانه نوآوری در فضیلت 🚀، تجربه عمیق‌تری در توسعه رابط کاربری و بهینه‌سازی تجربه کاربری کسب کردم. در این دوره، مهارت‌هایم در پیاده‌سازی کامپوننت‌های تعاملی، بهینه‌سازی عملکرد و طراحی واکنش‌گرا 💻 بهبود یافت. همچنین، کار در یک محیط حرفه‌ای، توانایی همکاری تیمی و حل چالش‌های فنی را در من تقویت کرد 🤝.'
    }
  ];

  return (
    <>
    {jobData.map((item)=>(
        <div
        className="w-full dark:bg-zinc-800/60 cursor-pointer duration-1000 grid grid-cols-12 rounded-xl overflow-hidden my-2"
        onClick={() => {
          show == item.id ? setShow(0) : setShow(item.id);
        }}
      >
        <span className="col-span-9 text-xl font-semibold py-4 px-6 select-none">
          {" "}
          {item.title}
        </span>
        <div
          className="col-span-3 flex items-center py-4 px-6 select-none"
          dir="ltr"
        >
          <IoIosArrowDown className={`${show == item.id && 'rotate-180'}`} />
        </div>
        {show == item.id && (
          <div className="col-span-12 duration-1000 bg-white border-b dark:bg-zinc-800/90 dark:border-gray-700 border-gray-200 py-3  px-6">
            {item.description}
          </div>
        )}
      </div>
    ))}
    </>
  );
};

export default Job;
