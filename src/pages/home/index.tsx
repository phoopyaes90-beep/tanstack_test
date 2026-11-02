
import { Skeleton } from '@/components/ui/skeleton'
import { Link, useNavigate, useSearch } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import HeroSection from '@/components/layouts/heroSection'
import { ProductTabs } from '@/components/layouts/productTabs'
import { getProductsQuery } from '@/services/products/queries'
import { getCategoriesQuery } from '@/services/categories/queries'

const HomePage = () => {
  // 1. URL search parameters မှ category ကို ဖတ်ယူခြင်း (default 'all')
  const search: any = useSearch({ strict: false })
  const navigate = useNavigate()
  
  const currentCategory = search.category || 'all'

  // 2. Tab ပြောင်းသည့်အခါ URL ကို update လုပ်ပြီး scroll: false ဖြင့် အပေါ်သို့ မခုန်စေရန် လုပ်ဆောင်ခြင်း
  const handleCategoryChange = (newCategory: string) => {
    // လက်ရှိ scroll နေရာကို ခဏမှတ်ထားခြင်း
    const scrollY = window.scrollY

    navigate({
      search: (prev: any) => ({ ...prev, category: newCategory }),
      replace: true,
      scroll: false,
    } as any)

    // Category ပြောင်းပြီးသွားချိန်တွင် scroll နေရာကို မူလနေရာ၌ ပြန်လည်ထိန်းသိမ်းပေးခြင်း
    setTimeout(() => {
      window.scrollTo({
        top: scrollY,
        behavior: 'instant',
      })
    }, 0)
  }

  // 3. API queries များကို ခေါ်ယူခြင်း
  const { data: categories = [] } = getCategoriesQuery()
  const { data: products, isPending } = getProductsQuery(currentCategory)

  return (
    <div className="min-h-screen bg-white font-['Bricolage_Grotesque',Helvetica_Neue,Arial,sans-serif]">
      {/* 1. Hero Section Component */}
      <HeroSection />
      
      {/* 2. Product List Section */}
      <div className="py-8">
        {/* ProductTabs Component သို့ props များ ပေးပို့ခြင်း */}
        <ProductTabs 
          selectedTab={currentCategory} 
          onTabChange={handleCategoryChange} 
          categories={categories} 
        />

        <div className="mx-auto max-w-7xl px-6">
          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {isPending &&
              new Array(12).fill(0).map((_, idx) => (
                <Skeleton key={idx} className="h-80 w-full rounded-[28px]" />
              ))}

            {products?.map((p: any) => (
              <Card 
                key={p.id} 
                className="group relative flex flex-col justify-between rounded-[28px] bg-white border-0 border-transparent shadow-sm hover:shadow-md transition-all p-4"
              >
                {/* Top Image Container with Soft Blue Background */}
                <div className="relative w-full h-52 bg-[#EAF2FF] rounded-[22px] flex items-center justify-center p-4">
                  {p.discountPercentage && (
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-100/80 px-2.5 py-1 text-[11px] font-bold text-orange-600">
                      -{Math.round(p.discountPercentage)}%
                    </span>
                  )}

                  <Link
                    to="/products/$productId"
                    params={{ productId: String(p.id) }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <img 
                      src={p.thumbnail} 
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                      alt={p.title} 
                    />
                  </Link>
                </div>

                {/* Bottom Card Details & Button */}
                <CardContent className="p-0 mt-4 px-2 pb-2 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">
                      {p.brand || "Apple"} · ★ {p.rating || "4.1"}
                    </p>
                    <Link to="/products/$productId" params={{ productId: String(p.id) }}>
                      <h3 className="mt-1 text-sm font-bold text-slate-900 line-clamp-1 hover:underline">
                        {p.title}
                      </h3>
                    </Link>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-base font-bold text-slate-900">
                        ${p.price}
                      </span>
                      {p.discountPercentage && (
                        <span className="text-xs text-slate-400 line-through">
                          ${Math.round(p.price / (1 - p.discountPercentage / 100))}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    size="icon" 
                    className="h-9 w-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm shrink-0 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage