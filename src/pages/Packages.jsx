import { motion } from 'framer-motion'

const packages = [
  {
    number: '01',
    name: 'Essentials Package',
    price: '$2,000 / Month',
    greatFor: 'Small businesses that already have good photography/content but need someone to organize, manage, and grow their social presence.',
    left: {
      Includes: [
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
    },
    right: {
      'Not Included': [
        'Extensive video production',
        'On-site content shoots',
        'Paid advertising',
        'Website development',
        'Extensive event coverage',
        'Multiple rounds of creative revisions',
      ],
    },
  },
  {
    number: '02',
    name: 'Growth',
    price: '$4,000 / Month',
    greatFor: "Businesses that don't just want to look active online but actually want to grow their audience, increase engagement, promote events, and generate measurable results.",
    left: {
      'Social Media': [
        'Management of 2–3 platforms',
        '12–20 feed posts/month',
        '4–8 Reels/short-form videos',
        '8–12 Stories/month',
        'Community engagement',
      ],
      Strategy: [
        'Monthly content strategy',
        'Audience growth strategy',
        'Trend research',
        'Hashtag/keyword strategy',
      ],
      Creative: [
        'Original captions/copywriting',
        'Custom graphics',
        'Short-form video editing',
        'Creative direction',
      ],
    },
    right: {
      Marketing: [
        '1 promotional campaign/month',
        'Launch/promotion strategy',
        'Basic website/marketing consultation',
      ],
      Reporting: [
        'Monthly analytics',
        'Performance insights',
        'Monthly strategy meeting',
      ],
    },
  },
  {
    number: '03',
    name: 'Full-Service Media',
    price: '$6,000 / Month',
    greatFor: "Businesses that don't just want to look active online but actually want to grow their audience, increase engagement, promote events, and generate measurable results.",
    left: {
      'Social Media': [
        'Management of 2–3 platforms',
        '12–20 feed posts/month',
        '4–8 Reels/short-form videos',
        '8–12 Stories/month',
        'Community engagement',
      ],
      Strategy: [
        'Monthly content strategy',
        'Audience growth strategy',
        'Trend research',
        'Hashtag/keyword strategy',
      ],
      Creative: [
        'Original captions/copywriting',
        'Custom graphics',
        'Short-form video editing',
        'Creative direction',
      ],
    },
    right: {
      Marketing: [
        '1 promotional campaign/month',
        'Launch/promotion strategy',
        'Basic website/marketing consultation',
      ],
      Reporting: [
        'Monthly analytics',
        'Performance insights',
        'Monthly strategy meeting',
      ],
    },
  },
]

function PackageCard({ pkg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(92,74,58,0.1)' }}
      className="bg-[#EEE9E3] rounded-3xl p-8 flex flex-col gap-6"
    >
      <div className="flex items-center justify-between">
        <span className="text-5xl font-bold text-[#B8C8CE]">{pkg.number}</span>
        <span className="bg-[#B8C8CE] text-[#5C4A3A] text-sm font-semibold px-4 py-1 rounded-full">
          {pkg.price}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-[#5C4A3A]">{pkg.name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          {Object.entries(pkg.left).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-bold text-[#8BA5B0] text-sm mb-1">{heading}</p>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-[#5C4A3A] text-sm flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8BA5B0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {Object.entries(pkg.right).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-bold text-[#8BA5B0] text-sm mb-1">{heading}</p>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-[#5C4A3A] text-sm flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8BA5B0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-auto pt-4 border-t border-[#B8C8CE]">
            <p className="font-bold text-[#8BA5B0] text-sm mb-1">Great for</p>
            <p className="text-[#5C4A3A] text-sm">{pkg.greatFor}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Packages() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-16 flex flex-col gap-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#5C4A3A]"
      >
        Packages
      </motion.h1>
      {packages.map((pkg, i) => (
        <PackageCard key={pkg.number} pkg={pkg} index={i} />
      ))}
    </section>
  )
}
