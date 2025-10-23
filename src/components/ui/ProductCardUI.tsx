import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { Sparkles } from "lucide-react"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border-2 border-gray-100 hover:border-vintage-blue/30 transition-all duration-300 vintage-card-hover overflow-hidden group">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-gray-100 overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <Badge className="bg-red-500 text-white hover:bg-red-600 shadow-lg">
                      -{logic.discountPercentage}% OFF
                    </Badge>
                  )}
                  {logic.product.featured && (
                    <Badge className="bg-vintage-yellow text-vintage-dark hover:bg-vintage-yellow/90 shadow-lg flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </Badge>
                  )}
                  {!logic.inStock && (
                    <Badge variant="secondary" className="shadow-lg">
                      Sold Out
                    </Badge>
                  )}
                </div>

                {/* Vintage Badge */}
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-vintage-blue text-vintage-blue">
                    Vintage
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-vintage-dark font-semibold text-base mb-1 line-clamp-2 group-hover:text-vintage-blue transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </div>
            </Link>

            {logic.hasVariants && logic.options && (
              <div className="px-4 pb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-xs font-medium text-vintage-dark mb-1">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-6 w-6 rounded-full border-2 transition-all ${
                                isSelected ? 'border-vintage-blue ring-2 ring-vintage-blue/30' : 'border-gray-300'
                              } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                              style={{ backgroundColor: swatch }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border-2 rounded px-2 py-1 text-xs font-medium transition-all ${
                              isSelected 
                                ? 'border-vintage-blue bg-vintage-blue text-white' 
                                : logic.selected[opt.name] && !isSelected
                                  ? 'border-gray-300 bg-white text-gray-700 opacity-40'
                                  : 'border-gray-300 bg-white text-gray-700 hover:border-vintage-blue'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-vintage-dark font-bold text-lg">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-gray-400 text-sm line-through">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className={`font-semibold ${
                  logic.inStock 
                    ? 'border-vintage-blue text-vintage-blue hover:bg-vintage-blue hover:text-white' 
                    : 'opacity-50'
                }`}
              >
                {logic.inStock ? 'Add to Cart' : 'Sold Out'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}