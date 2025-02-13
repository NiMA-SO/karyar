import React from "react";

const NavBar = () => {
  const navList = [
    { title: "درباره من", link: "#" },
    { title: "مهارت‌ها", link: "#" },
    { title: "تحصیلات", link: "#" },
    { title: "تجربیات شغلی", link: "#" },
    { title: "گواهینامه‌ها", link: "#" },
  ];

  return (
    <nav className="sticky top-0 z-[9999] w-full bg-white dark:bg-zinc-900/95 shadow-md border-b border-gray-300 dark:border-neutral-800">
      <div className="container mx-auto flex flex-wrap gap-4 justify-between items-center px-4 py-3">
        {/* عنوان رزومه */}
        <h1 className="text-lg md:text-2xl font-semibold">رزومه نیما سهرابی</h1>

        {/* منوی ناوبری */}
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navList.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block py-2 px-3 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm md:text-base font-medium"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* اطلاعات تماس */}
        <p className="hidden md:block text-sm">
          ایمیل: <span className="font-semibold">nima85sohrabi@gmail.com</span>{" "}
          | تلفن: <span className="font-semibold">09335041284</span>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
