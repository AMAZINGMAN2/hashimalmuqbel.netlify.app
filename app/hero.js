import React from 'react';

const Hero = () => {
  return (
    <section className="text-white pt-10 pb-16 px-4">
      <div className="container mx-auto text-center lg:text-left">
        <h2 className="text-lg font-bold text-purple-400 mx-auto mb-[2vh] justify-center flex tracking-wide uppercase">Hello,</h2>
        <h1 className="text-3xl justify-center lg:text-4xl flex font-black mt-2">
          I&apos;m Hashim Almuqbel.
        </h1>
        <p className="mt-4 text-lg font-thin text-center lg:text-xl max-w-2xl font-sans mx-auto lg:mx-0">
        My passion for programming, mathematics & science drives me to explore, and create a variety of projects, often involving complex algorithms and innovative techniques. I find great satisfaction in optimizing machine learning models and building professional, visually appealing websites like this one!
        </p>
      </div>
    </section>
  );
};
export default Hero;
