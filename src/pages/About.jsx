import Card from '../components/ui/Card'
import ProfileCard from '../components/ui/ProfileCard'

export default function About() {
  return (
    <section className="px-8 py-12 flex flex-col gap-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <p className="text-[#4a1a2c] text-center leading-relaxed">
            We're a woman-owned media lab helping brands, businesses, and creative entrepreneurs
            build a stronger presence online. We combine website and marketing consulting with
            strategic content creation and marketing to create digital experiences that are
            thoughtful, engaging, and built to connect. From developing your website and refining
            your brand message to creating content and marketing strategies that get your business
            noticed, we bring strategy and creativity together to help your vision come to life.
          </p>
        </Card>
        <Card className="bg-[#f0dce8]" />
        <Card className="bg-[#f0dce8]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProfileCard
          name="Keira"
          title="CO - CEO"
          bio="Hi, I'm Keira! hapa laba shooba, libba tooba yabba!"
        />
        <ProfileCard
          name="Charlotte"
          title="CO - CEO"
          bio="Hi, I'm Charlotte! hapa laba shooba, libba tooba yabba!"
        />
      </div>
    </section>
  )
}
