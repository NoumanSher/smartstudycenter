import Link from "next/link";

export default function HomeHeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#FCEAF3]
        px-5 sm:px-8 md:px-12 lg:px-16
      "
    >
      {/* Future background image support
          Add backgroundImage / <Image /> here when needed.
      */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[#FDECF4] to-[#FCEAF3]" />

      <div
        className="
          relative z-10
          mx-auto flex
          min-h-[500px]
          w-full max-w-[1400px]
          flex-col items-center justify-center
          text-center
          py-20 sm:py-24 md:py-28 lg:py-32
        "
      >
        {/* Heading */}
        <h1
          className="
            max-w-[1100px]
            text-2xl font-bold leading-[1.15] tracking-tight text-black
            sm:text-3xl
            md:text-6xl
            lg:text-7xl
            xl:text-[64px]
          "
        >
          Studying Pakistani curriculum in
          <br className="hidden sm:block" />
          Saudi Arabia?
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-8
            max-w-[850px]
            text-lg font-medium leading-relaxed
            text-[#C71585]
            sm:text-xl
            md:text-2xl
            lg:text-[28px]
          "
        >
          Live online classes designed for your situation.
        </p>

        {/* CTA */}
        <Link
          href="/courses"
          className="
            mt-10
            inline-flex
            min-h-[64px]
            min-w-[280px]
            items-center
            justify-center
            rounded-xl
            bg-[#C71585]
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-[0_8px_20px_rgba(199,21,133,0.20)]
            transition-all
            duration-200
            hover:bg-[#b01376]
            hover:shadow-[0_10px_25px_rgba(199,21,133,0.30)]
            active:scale-[0.98]
            sm:min-w-[320px]
            sm:text-xl
          "
        >
          Find your program
        </Link>
      </div>
    </section>
  );
}
