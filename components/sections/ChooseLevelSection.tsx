import Link from "next/link";

const levels = [
  {
    level: "9-10",
    title: "Matric",
    description: (
      <>
        Science, Math, English,
        <br />
        Urdu, Islamic Studies
      </>
    ),
  },
  {
    level: "11-12",
    title: "Intermediate",
    description: (
      <>
        F.Sc, G.Sc, I.C.S, Pre-
        <br />
        Engineering
      </>
    ),
  },
  {
    level: "A-Levels",
    title: "Juniors",
    description: (
      <>
        8th Grade Foundation,
        <br />
        Prep for High School
      </>
    ),
  },
];

export default function ChooseLevelSection() {
  return (
    <section className="w-full bg-[#FAF7F9] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-4xl font-medium tracking-tight text-black sm:text-5xl">
          Choose your level
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
                href="/contact"
                className="
                  mt-auto
                  flex
                  min-h-[64px]
                  w-full
                  max-w-[290px]
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#C71585]
                  px-6
                  py-4
                  text-xl
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