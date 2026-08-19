import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import PricePill from '../components/ui/PricePill'

const packages = [
  {
    number: '1',
    name: 'Essentials Package',
    price: '$2,000 / Month',
    includes: [
      'Management of 2 social platforms',
      '8–12 feed posts per month',
      '2–4 Reels/short-form videos',
      'Basic Stories',
      'Monthly content calendar',
      'Caption writing',
      'Scheduling and publishing',
      'Basic hashtag/keyword research',
      'Basic graphic design',
      'Light community engagement',
      'Basic content strategy',
      'Monthly analytics report',
      'One monthly strategy/check-in meeting',
    ],
    notIncluded: [
      'Extensive video production',
      'On-site content shoots',
      'Paid advertising',
      'Website development',
      'Extensive event coverage',
      'Multiple rounds of creative revisions',
    ],
    greatFor: 'Small businesses that already have good photography/content but need someone to organize, manage, and grow their social presence.',
  },
  {
    number: '2',
    name: 'Growth',
    price: '$4,000 / Month',
    includes: [
      'Management of 2–3 platforms',
      '12–20 feed posts/month',
      '4–8 Reels/short-form videos',
      '8–12 Stories/month',
      'Community engagement',
      'Monthly content strategy',
      'Audience growth strategy',
      'Trend research',
      'Hashtag/keyword strategy',
      'Original captions/copywriting',
      'Custom graphics',
      'Short-form video editing',
      'Creative direction',
    ],
    marketing: [
      '1 promotional campaign/month',
      'Launch/promotion strategy',
      'Basic website/marketing consultation',
    ],
    reporting: [
      'Monthly analytics',
      'Performance insights',
      'Monthly strategy meeting',
    ],
    greatFor: "Businesses that don't just want to look active online but actually want to grow their audience, increase engagement, promote events, and generate measurable results.",
  },
  {
    number: '3',
    name: 'Full-Service Media',
    price: '$6,000 / Month',
    includes: [
      'Management of 2–3 platforms',
      '12–20 feed posts/month',
      '4–8 Reels/short-form videos',
      '8–12 Stories/month',
      'Community engagement',
      'Monthly content strategy',
      'Audience growth strategy',
      'Trend research',
      'Hashtag/keyword strategy',
      'Original captions/copywriting',
      'Custom graphics',
      'Short-form video editing',
      'Creative direction',
    ],
    marketing: [
      '1 promotional campaign/month',
      'Launch/promotion strategy',
      'Basic website/marketing consultation',
    ],
    reporting: [
      'Monthly analytics',
      'Performance insights',
      'Monthly strategy meeting',
    ],
    greatFor: "Businesses that don't just want to look active online but actually want to grow their audience, increase engagement, promote events, and generate measurable results.",
  },
]

export default function Packages() {
  return (
    <section className="px-8 py-12 flex flex-col gap-16">
      {packages.map((pkg) => (
        <div key={pkg.number}>
          <SectionTitle>{pkg.number}. {pkg.name}</SectionTitle>
          <Card className="rounded-tl-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-bold text-[#4a1a2c] text-center mb-2">Includes</h3>
                  {pkg.notIncluded ? (
                    <ul className="list-disc list-inside text-[#4a1a2c] text-sm space-y-1">
                      {pkg.includes.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : (
                    <>
                      <p className="font-bold text-[#4a1a2c] text-sm">Social Media</p>
                      <ul className="list-disc list-inside text-[#4a1a2c] text-sm space-y-1 mb-3">
                        {pkg.includes.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
                      </ul>
                      <p className="font-bold text-[#4a1a2c] text-sm">Strategy</p>
                      <ul className="list-disc list-inside text-[#4a1a2c] text-sm space-y-1 mb-3">
                        {pkg.includes.slice(5, 9).map((item) => <li key={item}>{item}</li>)}
                      </ul>
                      <p className="font-bold text-[#4a1a2c] text-sm">Creative</p>
                      <ul className="list-disc list-inside text-[#4a1a2c] text-sm space-y-1">
                        {pkg.includes.slice(9).map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {pkg.notIncluded && (
                  <div>
                    <h3 className="font-bold text-[#4a1a2c] text-center mb-2">Not included</h3>
                    <ul className="list-disc list-inside text-[#4a1a2c] text-sm space-y-1">
                      {pkg.notIncluded.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                )}
                {pkg.marketing && (
                  <>
                    <div>
                      <p className="font-bold text-[#4a1a2c] text-sm">Marketing</p>
                      <ul className="list-disc list-inside text-[#4a1a2c] text-sm space-y-1">
                        {pkg.marketing.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-[#4a1a2c] text-sm">Reporting</p>
                      <ul className="list-disc list-inside text-[#4a1a2c] text-sm space-y-1">
                        {pkg.reporting.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </>
                )}
                <div>
                  <h3 className="font-bold text-[#4a1a2c] text-center mb-1">Great for</h3>
                  <p className="text-[#4a1a2c] text-sm text-center">{pkg.greatFor}</p>
                </div>
              </div>
            </div>
            <PricePill>{pkg.price}</PricePill>
          </Card>
        </div>
      ))}
    </section>
  )
}
