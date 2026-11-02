import { getProductQuery } from '@/services/products/queries'
import { useParams } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus, ShoppingBag, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const ProductDetail = () => {
  const { productId } = useParams({ from: '/(shop)/products/$productId' })
  const { data: product } = getProductQuery(productId)

  const [previewImg, setPreviewImg] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (product?.images?.length) {
      setPreviewImg(product.images[0])
    }
  }, [product?.images])

  const handleImg = (img: string) => {
    setPreviewImg(img)
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const originalPrice = product?.discountPercentage 
    ? Math.round(product.price / (1 - product.discountPercentage / 100))
    : null
  
  const savedAmount = originalPrice && product ? (originalPrice - product.price).toFixed(2) : null

  const dummyReviews = [
    { name: "Henry Adams", date: "30 Apr 2025", comment: "Excellent quality!" },
    { name: "Elijah Cruz", date: "30 Apr 2025", comment: "Very happy with my purchase!" },
    { name: "William Lopez", date: "30 Apr 2025", comment: "Would buy again!" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* 1. Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
        
        {/* Left: Image Preview & Thumbnails */}
        <div className="flex flex-col gap-4">
          
          <div className="relative w-full h-[600px] bg-[#EAF2FF] rounded-[28px] flex items-center justify-center p-6">
            {product?.discountPercentage && (
              <span className="absolute left-6 top-6 z-10 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                -{Math.round(product.discountPercentage)}%
              </span>
            )}
            <img 
              src={previewImg || product?.thumbnail} 
              className="max-h-full max-w-full object-contain scale-110 transition-transform duration-300" 
              alt={product?.title} 
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {product?.images?.map((img, idx) => (
              <img
                onClick={() => handleImg(img)}
                key={idx}
                src={img}
                alt=""
                className={`size-20 rounded-2xl object-cover border-2 cursor-pointer transition-all ${
                  img === previewImg ? 'border-orange-500 scale-105 shadow-md' : 'border-slate-200 hover:border-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-start">
          <p className="text-sm text-slate-500 font-medium mb-1">
            {product?.brand || "Apple"}
          </p>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
            {product?.title}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(product?.rating || 4) ? 'fill-current' : 'text-slate-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-700">{product?.rating || "3.5"}</span>
            <span className="text-sm text-slate-400 underline cursor-pointer">3 reviews</span>
          </div>

          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-3xl font-bold text-slate-900">
              ${product?.price}
            </span>
            {originalPrice && (
              <span className="text-base text-slate-400 line-through">
                ${originalPrice}
              </span>
            )}
            {savedAmount && (
              <span className="text-sm font-medium text-blue-600">
                You save ${savedAmount}
              </span>
            )}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 border-b border-slate-100 pb-6">
            {product?.description || "Premium high-quality product with excellent features and performance."}
          </p>

          <div className="flex items-center gap-2 mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            <span className="text-xs font-semibold text-slate-700">
              In stock, {product?.stock || 59} left
            </span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-slate-200 rounded-full px-3 py-2 bg-slate-50">
              <button 
                onClick={handleDecrement}
                className="p-1 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 text-sm font-bold text-slate-900">{quantity}</span>
              <button 
                onClick={handleIncrement}
                className="p-1 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button className="flex-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 shadow-sm cursor-pointer flex items-center justify-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Add to cart · ${( (product?.price || 0) * quantity ).toFixed(2)}
            </Button>
          </div>

          <div className="border-t border-slate-100 pt-6 flex flex-col gap-4 text-sm">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-400 font-medium">SKU</span>
              <span className="text-slate-800 font-semibold">{product?.sku || "FRA-GUC-GUC-010"}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-400 font-medium">Dimensions</span>
              <span className="text-slate-800 font-semibold">24.9 x 14.9 x 27.5 cm</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-400 font-medium">Shipping</span>
              <span className="text-slate-800 font-semibold">Ships in 2 weeks</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-400 font-medium">Warranty</span>
              <span className="text-slate-800 font-semibold">{product?.warrantyInformation || "6 months warranty"}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400 font-medium">Returns</span>
              <span className="text-slate-800 font-semibold">{product?.returnPolicy || "No return policy"}</span>
            </div>
          </div>

        </div>

      </div>

     {/* 2. Reviews Section (API မှ reviews များကို အသုံးပြုခြင်း) */}
<div className="border-t border-slate-200 pt-10">
  <h2 className="text-xl font-bold text-slate-900 mb-6">Reviews</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {product?.reviews && product.reviews.length > 0 ? (
      product.reviews.map((rev, index) => (
        <Card key={index} className="rounded-2xl border border-slate-200 shadow-sm p-5 bg-white">
          <CardContent className="p-0 flex flex-col gap-3">
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3.5 w-3.5 ${i < Math.floor(rev.rating) ? 'fill-current' : 'text-slate-300'}`} 
                />
              ))}
            </div>
            <p className="text-base font-bold text-slate-900">{rev.comment}</p>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>{rev.reviewerName}</span>
              <span>{new Date(rev.date).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      ))
    ) : (
      <p className="text-sm text-slate-400">Reviews များကို မတွေ့ရှိရသေးပါ။</p>
    )}
  </div>
</div>

    </div>
  )
}

export default ProductDetail