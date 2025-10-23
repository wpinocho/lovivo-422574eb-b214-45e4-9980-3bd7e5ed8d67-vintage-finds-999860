import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import { CollectionCard } from '@/components/CollectionCard'
import { FilterSection } from '@/components/FilterSection'
import { CareGuideSection } from '@/components/CareGuideSection'
import { FloatingCart } from '@/components/FloatingCart'
import { NewsletterSection } from '@/components/NewsletterSection'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { ArrowRight, Sparkles, Recycle, TrendingUp } from 'lucide-react'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vintage-blue via-vintage-blue/90 to-vintage-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd2LTF6bTE0IDBoN3YxaC03di0xem0xNCAwaDd2MWgtN3YtMXptMTQgMGg3djFoLTd2LTF6bTE0IDBoN3YxaC03di0xem0xNCAwaDd2MWgtN3YtMXptMTQgMGg3djFoLTd2LTF6bTE0IDBoN3YxaC03di0xeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM2IC0xMzQpIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-vintage-yellow/20 backdrop-blur-sm rounded-full px-4 py-2 text-vintage-yellow font-medium text-sm">
                <Sparkles className="h-4 w-4" />
                Sustainable Fashion Marketplace
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Buy & Sell
                <span className="block text-vintage-yellow mt-2">Vintage Finds</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Discover unique secondhand fashion pieces with character. Every item tells a story, every purchase makes a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-vintage-yellow text-vintage-dark hover:bg-vintage-yellow/90 font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Explore Finds
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-semibold text-lg px-8 py-6 rounded-full"
                >
                  Sell Your Items
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Recycle className="h-5 w-5 text-vintage-yellow" />
                  <span className="text-sm text-white/80">Sustainable</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-vintage-yellow" />
                  <span className="text-sm text-white/80">Curated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-vintage-yellow" />
                  <span className="text-sm text-white/80">Authentic</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-vintage-yellow/20 rounded-3xl blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop" 
                      alt="Vintage fashion" 
                      className="rounded-2xl shadow-2xl w-full object-cover h-64"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop" 
                      alt="Vintage denim" 
                      className="rounded-2xl shadow-2xl w-full object-cover h-48"
                    />
                  </div>
                  <div className="space-y-4 pt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=300&h=300&fit=crop" 
                      alt="Y2K fashion" 
                      className="rounded-2xl shadow-2xl w-full object-cover h-48"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop" 
                      alt="Vintage sneakers" 
                      className="rounded-2xl shadow-2xl w-full object-cover h-64"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <FilterSection />

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-vintage-dark mb-4">
                Curated Collections
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked vintage pieces organized by era, style, and vibe
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="animate-fade-in">
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-vintage-dark mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Featured Vintage Pieces'
                }
              </h2>
              <p className="text-gray-600">
                {selectedCollectionId 
                  ? 'Explore this curated selection' 
                  : 'One-of-a-kind finds you won\'t see anywhere else'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-vintage-blue text-vintage-blue hover:bg-vintage-blue hover:text-white"
              >
                See All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-fade-in">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No products available in this collection yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Care Guide Section */}
      <CareGuideSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vintage-dark via-vintage-blue to-vintage-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Next
            <span className="block text-vintage-yellow mt-2">Vintage Treasure?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of fashion lovers buying and selling unique pieces. Start your sustainable style journey today.
          </p>
          <Button 
            size="lg"
            className="bg-vintage-yellow text-vintage-dark hover:bg-vintage-yellow/90 font-semibold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Explore Finds
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}