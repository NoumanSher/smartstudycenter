import Link from "next/link";

export default function ReadyToStartSection() {
  return (
    <section className="w-full bg-[#FCEAF3] px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-4xl font-medium tracking-tight text-black sm:text-5xl md:text-6xl">
          Ready to get started?
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl">
          Book a free consultation to find the right program for you.
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            mt-12
            flex min-h-[64px]
            w-full max-w-[460px]
            items-center justify-center
            rounded-xl
            bg-[#C71585]
            px-8 py-3
            text-lg font-semibold
            text-white
            shadow-[0_8px_20px_rgba(199,21,133,0.20)]
            transition-all duration-200
            hover:bg-[#B01376]
            hover:shadow-[0_10px_25px_rgba(199,21,133,0.30)]
            active:scale-[0.98]
            lg:text-xl
          "
        >
          Schedule your classes
        </Link>
      </div>
    </section>
  );
}