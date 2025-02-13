import Education from "@/components/Education";
import Stack from "@/components/ui/Stack";
import About from "@/components/ui/Stack";

export default function Home() {
  const about = {
    idLink: "about",
    title: "دریاره من",
    paragraph:
      "نیما سهرابی – توسعه‌دهنده فرانت‌اندمن نیما سهرابی، یک توسعه‌دهنده فرانت‌اند با تخصص در React، TypeScript، Next.js، Tailwind CSS و سایر تکنولوژی‌های مرتبط هستم. از سال 1401 فعالیت خود را در حوزه برنامه‌نویسی آغاز کرده‌ام و تاکنون پروژه‌های متعددی را در زمینه طراحی و توسعه وب پیاده‌سازی کرده‌ام.مهارت من در ایجاد رابط‌های کاربری مدرن، ریسپانسیو و بهینه‌شده از نظر سئو باعث شده است که بتوانم تجربه کاربری بهتری برای کاربران فراهم کنم. همچنین، تجربه کار با APIهایی مانند TMDB و RAWG و پیاده‌سازی قابلیت‌هایی مانند احراز هویت، دریافت داده‌های پویا و بهینه‌سازی عملکرد وب‌سایت را دارم.در حال حاضر، علاوه بر توسعه وب، در حال گسترش دانش خود در زمینه وردپرس، React Native و تست‌نویسی با Jest هستم. هدف من، ارائه راهکارهای نوآورانه و ارتقای سطح فنی در پروژه‌هایی است که روی آن‌ها کار می‌کنم.",
  };
  const skills = [
    {
      category: "توسعه فرانت‌اند",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      category: "استایل‌دهی",
      skills: ["Tailwind", "Chakra UI", "Bootstrap", "Sass", "..."],
    },
    { category: "ابزارها", skills: ["Git", "GitHub", "npm", "Yarn", "Vercel"] },
    { category: "بهینه‌سازی", skills: ["SEO", "Jest", "Lighthouse", "Regex"] },
    {
      category: "مدیریت داده و API",
      skills: ["TMDB API", "RAWG API", "RESTful APIs"],
    },
    {
      category: "وردپرس",
      skills: ["توسعه قالب اختصاصی", "پشتیبانی از Elementor"],
    },
  ];
  return (
    <main className="mx-2">
      <Stack
        idLink={about.idLink}
        title={about.title}
        paragraph={about.paragraph}
      />
      <Stack idLink="skills" title="مهارت ها">
        {skills.map((item, index) => (
          <Stack title={item.category}>
            <ul className="flex flex-col justify-between w-[200px]">
              {item.skills.map((skill) => (
                <li key={index} className="flex  my-1">
                  {skill}
                </li>
              ))}
            </ul>
          </Stack>
        ))}
      </Stack>
      <Stack idLink="education" title="تحصیلات">
        <Education />
      </Stack>
      {/* <Stack >

      </Stack> */}

    </main>
  );
}
