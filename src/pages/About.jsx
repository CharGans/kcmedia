import Card from '../components/ui/Card'
import ProfileCard from '../components/ui/ProfileCard'

export default function About() {
  return (
    <section className="px-8 py-12 flex flex-col gap-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProfileCard
          name="Keira"
          title="CO - CEO"
          bio="Hi, I'm Keira! With 4 years of experience in marketing, content creation, and community engagement, I've helped build accounts totaling over 12 million followers per platform. I know what it takes to grow an audience that actually connects with your brand — and I bring that same strategy and creativity to every client we work with."
        />
        <ProfileCard
          name="Charlotte"
          title="CO - CEO"
          bio="Hi, I'm Charlotte! I'm the analyst behind the strategy. I've helped 10+ startups build their brand and develop marketing strategies that bring in a consistent, loyal customer base. A software developer and Prime Digital Academy graduate (June 2025), I was hired immediately after graduation to build a website, brand, and customer base from scratch — and that's exactly the kind of full-picture thinking I bring to Over Coffee Media."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-[#8BA5B0] font-bold mb-3 text-center">How It Started</h3>
          <p className="text-[#5C4A3A] text-center leading-relaxed">
            We met at a startup — a local coffee shop where we were both hired to help build the brand.
            It didn't take long to realize we worked well together, and more importantly, that small
            businesses deserved a better system for getting the help they need.
          </p>
        </Card>
        <Card className="bg-[#E4EDF0]">
          <h3 className="text-[#8BA5B0] font-bold mb-3 text-center">Over Coffee</h3>
          <p className="text-[#5C4A3A] text-center leading-relaxed">
            After many conversations over coffee at our favorite local spots, we kept coming back
            to the same idea — building your business shouldn't have to feel so overwhelming.
            The name Over Coffee isn't just where we started, it's how we work: thoughtful,
            collaborative, and grounded.
          </p>
        </Card>
        <Card className="bg-[#E4EDF0]">
          <h3 className="text-[#8BA5B0] font-bold mb-3 text-center">Our Mission</h3>
          <p className="text-[#5C4A3A] text-center leading-relaxed">
            We decided to be the change. Over Coffee Media exists to make growing your business
            online accessible, approachable, and actually effective — so you can focus on what
            you do best, and let us handle the rest.
          </p>
        </Card>
      </div>

    </section>
  )
}
