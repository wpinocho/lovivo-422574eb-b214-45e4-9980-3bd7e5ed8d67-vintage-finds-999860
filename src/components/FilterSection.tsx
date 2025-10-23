import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SlidersHorizontal, X } from 'lucide-react'

export const FilterSection = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const brands = ['Levi\'s', 'Nike', 'Tommy Hilfiger', 'Carhartt', 'Vintage Band Tees']
  const conditions = ['Excellent', 'Very Good', 'Good', 'Fair']

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev =>
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    )
  }

  const clearFilters = () => {
    setSelectedBrands([])
    setSelectedConditions([])
  }

  const hasActiveFilters = selectedBrands.length > 0 || selectedConditions.length > 0

  return (
    <div className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1">
                {selectedBrands.length + selectedConditions.length}
              </Badge>
            )}
          </Button>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear all
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className={`space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          {/* Brand Filters */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-vintage-dark">Brand</h3>
              {selectedBrands.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedBrands([])}
                  className="h-auto p-0 text-xs text-vintage-blue hover:text-vintage-blue/80"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <Badge
                  key={brand}
                  variant={selectedBrands.includes(brand) ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all ${
                    selectedBrands.includes(brand)
                      ? 'bg-vintage-blue text-white hover:bg-vintage-blue/90'
                      : 'hover:border-vintage-blue'
                  }`}
                  onClick={() => toggleBrand(brand)}
                >
                  {brand}
                  {selectedBrands.includes(brand) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Condition Filters */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-vintage-dark">Condition</h3>
              {selectedConditions.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedConditions([])}
                  className="h-auto p-0 text-xs text-vintage-blue hover:text-vintage-blue/80"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {conditions.map((condition) => (
                <Badge
                  key={condition}
                  variant={selectedConditions.includes(condition) ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all ${
                    selectedConditions.includes(condition)
                      ? 'bg-vintage-yellow text-vintage-dark hover:bg-vintage-yellow/90'
                      : 'hover:border-vintage-yellow'
                  }`}
                  onClick={() => toggleCondition(condition)}
                >
                  {condition}
                  {selectedConditions.includes(condition) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Clear All (Desktop) */}
          {hasActiveFilters && (
            <div className="hidden lg:block pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-vintage-blue hover:text-vintage-blue/80"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}