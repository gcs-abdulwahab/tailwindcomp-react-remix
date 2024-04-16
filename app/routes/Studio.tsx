
const Studio = () => {
  return (
    <div className="relative mx-auto flex w-[800px] flex-col bg-yellow-400 mt-2">
  <div id="topheader" className="flex h-20 items-center justify-center text-2xl">
    <h1 className="text-center uppercase">Studio Shodwe | Newsletter vol.17</h1>
  </div>
  <div id="imgbg" className="relative h-72 bg-purple-400">
    <img src="https://fakeimg.pl/50x100" className="absolute h-full w-full object-cover" alt="" />
  </div>

  <div id="hero" className="relative -top-20 mx-10 flex h-72 flex-col items-center space-y-4 bg-stone-100 px-6 py-8">
    <h1 className="text-5xl bg-gradient-to-tr from-orange-600 to-yellow-500 font-bold text-transparent bg-clip-text">Studio Shodwe Testimonials</h1>
    <p>"It was my first time consulting for interior design and Studio Shodwe gave me my dream office beautifully done. I'm very satisfied and recommend their services!"</p>
    <div className="flex flex-row items-center gap-5">
      <img src="https://fakeimg.pl/50" className="rounded-full" alt="" />
      <span className="font-bold">Author </span> |
      <span> Designation</span>
    </div>
  </div>
  <div id="blog" className="flex gap-8 bg-stone-100 px-10 py-14">
    <img src="https://fakeimg.pl/250" className="basis-1/3  rounded-t-2xl  " alt="" />

    <div id="blogdetail" className="flex basis-2/3 flex-col gap-2 p-2">
      <h1 className="text-4xl font-bold">Aaron Loeb: How to design a fun home</h1>
      <p>We have a special interview with an interior designer specializing in modern design, Aaron Loeb. He will share insightful tips on how to design your fun home. Gain more knowledge and check our blog to read more.</p>
      <button>Read More</button>
    </div>
  </div>

  <footer className="flex h-20 items-center justify-evenly gap-5">
    <div id="phone" className="flex items-center p-1  gap-2">
      <span className="inline-block size-8  "></span>
      <span className="">+ 92 123 456 789</span>
    </div>

    <div id="mail" className="flex items-center p-1 gap-2">
      <span className="inline-block size-8 "></span>
      <span>hello@reallygreatsite.com</span>
      </div>
    <div id="location" className="flex items-center p-1 gap-2 ">
      <span className="inline-block size-8 "></span>
      <address>123 Anywhere St., Any City</address>
      </div>
  </footer>
</div>

  )
}

export default Studio