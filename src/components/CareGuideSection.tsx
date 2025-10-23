import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Droplet, Wind, Heart } from 'lucide-react'

export const CareGuideSection = () => {
  const careTips = [
    {
      icon: Droplet,
      title: 'Wash with Care',
      description: 'Cold water and gentle cycles preserve vintage fabrics. Turn items inside out to protect prints and colors.',
      color: 'text-vintage-blue'
    },
    {
      icon: Wind,
      title: 'Air Dry Always',
      description: 'Skip the dryer to maintain shape and prevent shrinkage. Hang or lay flat for best results.',
      color: 'text-vintage-yellow'
    },
    {
      icon: Sparkles,
      title: 'Store Properly',
      description: 'Use padded hangers for jackets and fold knits. Keep away from direct sunlight to prevent fading.',
      color: 'text-vintage-blue'
    },
    {
      icon: Heart,
      title: 'Love Longer',
      description: 'Repair small issues early. A stitch in time saves your favorite vintage piece for years to come.',
      color: 'text-vintage-yellow'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-vintage-blue/5 via-white to-vintage-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vintage-dark mb-4">
            Vintage Care Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keep your vintage treasures looking their best with these sustainable care tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careTips.map((tip, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 hover:border-vintage-blue/30 transition-all duration-300 vintage-card-hover"
            >
              <CardContent className="p-6">
                <div className={`${tip.color} mb-4`}>
                  <tip.icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold text-vintage-dark mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-vintage-yellow/20 rounded-full px-6 py-3">
            <p className="text-sm font-medium text-vintage-dark">
              💚 Sustainable fashion starts with proper care
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}