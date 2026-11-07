import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 font-['Bricolage_Grotesque',Helvetica_Neue,Arial,sans-serif] ">
      <div className="relative overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between bg-[#EAF2FF] rounded-[28px]">
        
    
        <div className="max-w-xl z-10">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 mb-4">
            Up to 17% off this week
          </span>
          <h1 className="m-0 text-[76px] leading-[0.98] tracking-[-0.045em] font-extrabold text-[#172033]">
            Tech and <br /> fashion, clearly <br /> priced.
          </h1>
          <p className="m-0 text-[19px] max-w-[38ch] text-[rgb(62,74,94)] mt-7">
            Phones, laptops, audio, watches and bags from Apple, Samsung, Longines, Puma and more. Free delivery over $100.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button className="rounded-full bg-blue-600 px-6 py-6 text-white shadow-md">
              Shop the sale
            </Button>
            <Button variant="outline" className="bg-white rounded-full px-6 py-6 border-slate-100 text-slate-900">
                 Browse everything
            </Button>
          </div>
        </div>

       
        <div className="mt-8 md:mt-0 relative w-full md:w-1/2 flex justify-center items-center">
        
          <div className="h-64 w-64 rounded-full bg-blue-100/50 blur-3xl absolute z-0"></div>

        
          <img 
            src="/download.svg" 
            alt="Tech and Fashion Gadgets" 
            className="relative z-10 max-w-full h-auto object-contain"
          />

          
          <div className="absolute bottom-4 right-4 rounded-2xl bg-white p-4 shadow-xl flex items-center gap-4 z-20 cursor-pointer hover:shadow-2xl transition-all duration-300">
            <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center text-xl">
                🎧
            </div>
            <div>
                <p className="text-xs text-slate-500 font-medium">AirPods Max Silver</p>
                    <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-bold text-slate-900">$474.81</span>
                    <span className="text-xs text-slate-400 line-through">$549.99</span>
            </div>
            </div>
            </div>
        </div>

      </div>
    </section>
  )
}