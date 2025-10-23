import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Sparkles } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b border-gray-200 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-vintage-blue text-white rounded-lg p-2">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-vintage-dark text-lg leading-none">VintageHub</div>
                <div className="text-xs text-gray-500">Secondhand Fashion</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-vintage-blue transition-colors font-medium"
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-vintage-blue transition-colors font-medium"
              >
                Blog
              </Link>
              <button className="text-gray-700 hover:text-vintage-blue transition-colors font-medium">
                Sell
              </button>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-vintage-blue/10"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5 text-vintage-dark" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-vintage-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-vintage-dark">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-vintage-dark text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-vintage-blue text-white rounded-lg p-2">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-none">VintageHub</div>
                <div className="text-xs text-white/70">Secondhand Fashion</div>
              </div>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Your trusted marketplace for authentic vintage and secondhand fashion. Buy and sell unique pieces with confidence.
            </p>
            <SocialLinks />
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Shop</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                All Items
              </Link>
              <Link 
                to="/" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                Collections
              </Link>
              <button className="block text-white/70 hover:text-vintage-yellow transition-colors">
                Sell Your Items
              </button>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-white">About</h3>
            <div className="space-y-2">
              <Link 
                to="/blog" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                Blog
              </Link>
              <button className="block text-white/70 hover:text-vintage-yellow transition-colors">
                Our Story
              </button>
              <button className="block text-white/70 hover:text-vintage-yellow transition-colors">
                Sustainability
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; 2024 VintageHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <button className="hover:text-vintage-yellow transition-colors">Privacy</button>
            <button className="hover:text-vintage-yellow transition-colors">Terms</button>
            <button className="hover:text-vintage-yellow transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}