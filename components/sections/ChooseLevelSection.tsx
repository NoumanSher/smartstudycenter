import Link from "next/link";

const levels = [
  {
    level: "6-8",
    title: "Juniors",
    slug: "juniors",
    description: (
      <>
        8th Grade Foundation,
        <br />
        Prep for High School
      </>
    ),
  },

  {
    level: "9-10",
    title: "Matric",
    slug: "matric",
    description: (
      <>
        Computer Science, Bio Science &
        <br />
        Matric Arts,
      </>
    ),
  },
  {
    level: "11-12",
    title: "Intermediate",
    slug: "intermediate",
    description: (
      <>
        F.Sc. (Pre-Medical & Pre- Engineering), I.C.S.,
        <br /> G.Sc. & F.A.
      </>
    ),
  },
  {
    level: "A-Levels",
    title: "A-Level Programmes",
    slug: "a-level",
    description: (
      <>
        Medical, Engineering, Computer Science & Al,
        <br />
        Business, Humanities
      </>
    ),
  },
  {
    level: "O-Levels",
    title: "Cambridge Curriculum",
    slug: "o-level",
    description: (
      <>
        Science, Computer Science,
        <br />
        Business, Humanities
      </>
    ),
  },
  {
    level: "Entry Tests",
    title: "University Preparation",
    slug: "entry-test",
    description: (
      <>
        MDCAT, ECAT &
        <br />
        University Entry Tests
      </>
    ),
  },
];

export default function ChooseLevelSection() {
  return (
    <section className="w-full bg-[#FAF7F9] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-4xl text-center md:text-5xl font-bold text-gray-900 mb-10">
          Choose Your <span className="text-[#C71585]">Level</span>?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {levels.map((item) => (
            <div
              key={item.level}
              className="
                flex min-h-[425px]
                flex-col items-center
                rounded-2xl
                border border-gray-200
                bg-white
                px-6 py-10
                text-center
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:px-8
              "
            >
              {/* Level */}
              <h3 className="text-4xl font-normal tracking-tight text-black sm:text-5xl">
                {item.level}
              </h3>

              {/* Category */}
              <h4 className="mt-8 text-2xl font-semibold text-black">
                {item.title}
              </h4>

              {/* Description */}
              <p className="mt-7 min-h-[72px] text-lg leading-8 text-gray-700 sm:text-xl">
                {item.description}
              </p>

              {/* Explore */}
              <Link
                href={`/courses/${item.slug}`}
                className="
                  mt-auto
                  flex
                  bg-gradient-to-r from-[#C71585] to-[#FF1493] rounded-full    hover:scale-95 
                  w-full
                  max-w-[290px]
                  items-center
                  justify-center
              
                  px-4
                  py-3
                  lg:text-xl
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#b01376]
                  hover:shadow-lg
                  active:scale-[0.98]
                "
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
