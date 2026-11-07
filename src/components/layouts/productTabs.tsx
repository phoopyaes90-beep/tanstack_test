import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface ProductTabsProps {
  selectedTab: string;
  onTabChange: (value: string) => void;
  categories: any[];
}

export const ProductTabs = ({ selectedTab, onTabChange, categories }: ProductTabsProps) => {
  return (
    <div className="mx-auto max-w-7xl px-6 mb-8">
      <Tabs value={selectedTab} onValueChange={onTabChange}>
      
        <ScrollArea className="w-full whitespace-nowrap pb-3">
          <TabsList className="flex h-auto w-max items-center justify-start gap-2 bg-transparent p-0">
            {/* All Products Tab */}
            <TabsTrigger 
              value="all" 
              className="h-10 px-5 rounded-xl text-sm font-medium border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 data-[state=active]:bg-blue-600 data-[state=active]:border-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md cursor-pointer shrink-0"
            >
              All
            </TabsTrigger>

           
            {categories.map((cat: any) => {
              const categorySlug = typeof cat === 'string' ? cat : cat.slug;
              const categoryName = typeof cat === 'string' ? cat : (cat.name || cat.slug);

              return (
                <TabsTrigger 
                  key={categorySlug} 
                  value={categorySlug} 
                  className="h-10 px-5 rounded-xl text-sm font-medium border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 data-[state=active]:bg-blue-600 data-[state=active]:border-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md capitalize cursor-pointer shrink-0"
                >
                  {categoryName}
                </TabsTrigger>
              )
            })}
          </TabsList>
         
          <ScrollBar orientation="horizontal" className="invisible hover:visible" />
        </ScrollArea>
      </Tabs>
    </div>
  )
}