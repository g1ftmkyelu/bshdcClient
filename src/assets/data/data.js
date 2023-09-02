import { FaHeart, FaLeaf, FaHandshakeAngle, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6';









export const WebContactDetails = {

  postalAddress: "Post Office Box 2345, Blantyre",
  location: "Henry Henderson Institute",
  phone: "+265 992 4168",
  email: "info@bshdc.com",

}




export const WebsiteNavigationLinks = [
  { Caption: 'Home', url: '/' },
  { Caption: 'History', url: '/history' },
  { Caption: 'Contact Us', url: '/contact' },
  { Caption: 'About', url: '/about' },
  { Caption: 'Team', url: '/team'},
  { Caption:'Partners', url: '/partners'}
]





export const SociaMediaLinks = [

  { Caption: 'Facebook', url: 'https://www.facebook.com', Icon: FaFacebook },

  { Caption: 'Twitter', url: 'https://twitter.com', Icon: FaTwitter },
  
  { Caption: 'LinkedIn', url: 'https://www.linkedin.com', Icon: FaLinkedin },

]





export const TeamMembersData = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Doe',
    role: 'Chairman',
    phoneNumber: '+12377762552',
    email: 'john@example.com',
    description: "John is the Head of Outreach. He excels in building strong partnerships with local communities,agencies, and businesses to further the organization."
  },
  {
    image: 'https://randomuser.me/api/portraits/women/34.jpg',
    name: 'Jane Smith',
    role: 'CEO',
    phoneNumber: '+1234567890',
    email: 'jane@example.com',
    description: "Jane is the visionary leader of the organization. With a background in technology and innovation, she guides the team towards achieving the company's strategic goals."
  },
  {
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Michael Johnson',
    role: 'CTO',
    phoneNumber: '+9876543210',
    email: 'michael@example.com',
    description: "Michael oversees the technical direction of the company. His expertise in software development and architecture drives the innovation and quality of the products."
  },
  {
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
    name: 'Emily Williams',
    role: 'Marketing Director',
    phoneNumber: '+5551234567',
    email: 'emily@example.com',
    description: "Emily leads the marketing efforts with creativity and passion. Her strategic thinking and consumer insights contribute to our brand's growth and customer engagement."
  },
  {
    image: 'https://randomuser.me/api/portraits/women/57.jpg',
    name: 'Emily Williams',
    role: 'Marketing Director',
    phoneNumber: '+5551234567',
    email: 'emily@example.com',
    description: "Emily leads the marketing efforts with creativity and passion. Her strategic thinking and consumer insights contribute to our brand's growth and customer engagement."
  }
];












export const CoreValuesData = [
  {
    Icon: FaHeart,
    Title: "Accountability and Transparency",
    SubTitle: 'We uphold these values in all the resources and responsibilities entrusted to us.',
    Description: 'Professionalism - We observe high-quality standards in all our work with the people we serve.'
  },
  {
    Icon: FaLeaf,
    Title: "Integrity",
    SubTitle: 'We remain honest and uphold strong moral principles.',
    Description: "Inclusiveness - We provide equal access to opportunities and resources for people who might otherwise be excluded or marginalized."
  },
  {
    Icon: FaHandshakeAngle,
    Title: "Responsiveness and Resourcefulness",
    SubTitle: 'We intensify problem-solving and respond to events quickly and positively.',
    Description: "Innovation and Creativity - We utilize technology and social media to achieve organizational goals."
  }
]















export const PartnersData = [
  {
    name: "ABC Foundation",
    image: "https://dummyimage.com/50x50/ccc/000&text=ABCF",
    description: "Working towards education and healthcare for underprivileged children.",
    website: "https://www.abcfoundation.org",
  },
  {
    name: "Community Health Alliance",
    image: "https://dummyimage.com/50x50/ccc/000&text=CHA",
    description: "Improving healthcare access in rural areas through community-driven initiatives.",
    website: "https://www.communityhealthalliance.org",
  },
  {
    name: "Green Earth Initiative",
    image: "https://dummyimage.com/50x50/ccc/000&text=GEI",
    description: "Promoting environmental sustainability and eco-friendly practices.",
    website: "https://www.greenearthinitiative.org",
  },
  {
    name: "Empower Women Now",
    image: "https://dummyimage.com/50x50/ccc/000&text=EWN",
    description: "Supporting women's empowerment and gender equality through education and employment.",
    website: "https://www.empowerwomennow.org",
  },
  {
    name: "Youth Sports League",
    image: "https://dummyimage.com/50x50/ccc/000&text=YSL",
    description: "Engaging youth in sports and recreational activities to promote a healthy lifestyle.",
    website: "https://www.youthsportsleague.com",
  },
  {
    name: "Hope for All",
    image: "https://dummyimage.com/50x50/ccc/000&text=HFA",
    description: "Providing essential resources and relief to homeless individuals and families.",
    website: "https://www.hopeforall.org",
  },
];
















export const ContactFormData = {
  Title: "Contact Us",
  Fields: [
    { name: 'name', label: 'Name', placeholder: 'Enter your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'phone', label: 'Phone', type: 'phone', placeholder: 'Enter your phone number' },
    { name: 'message', label: 'Message', type: 'text', placeholder: 'Enter your message' },
  ],
  ButtonText: "Send"
}












export const HomePageHeroSectionData = {
  Caption: "Improving Lives, Transforming Communities",
  HeroImage: "https://bshdc.000webhostapp.com/site/public/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg",
  ButtonCaption: "Donate Now!",
  ButtonUrl: '/donate/'
}














export const TimelineItemsData = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://picsum.photos/300/200"
      },
      type: "IMAGE"
    },
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: [
      "The Dunkirk evacuation, code-named Operation Dynamo, was the evacuation of Allied soldiers during World War II from the beaches and harbor of Dunkirk, France.",
      "The evacuation took place between May 26 and June 4, 1940, as the German forces closed in on the British and French troops.",
    ],

  },
  {
    title: "July 1940",
    cardTitle: "The Battle of Britain",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://picsum.photos/300/200"
      },
      type: "IMAGE"
    },
    cardSubtitle: "The Royal Air Force (RAF) defended Britain against German air attacks.",
    cardDetailedText: [
      "The Battle of Britain was a pivotal air campaign fought in the skies over the United Kingdom.",
      "The RAF's successful defense thwarted the German Luftwaffe's attempt to gain air superiority over Britain and prevented a German invasion.",
    ],

  },
  {
    title: "June 1944",
    cardTitle: "D-Day",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://picsum.photos/300/200"
      },
      type: "IMAGE"
    },
    cardSubtitle: "Allied forces launched a massive amphibious invasion of Normandy, France.",
    cardDetailedText: [
      "Operation Overlord, commonly known as D-Day, was the largest seaborne invasion in history.",
      "The goal was to liberate Western Europe from Nazi occupation.",
    ],

  },
  {

    title: "August 1945",
    cardTitle: "Atomic Bombings",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://picsum.photos/300/200"
      },
      type: "IMAGE"
    },
    cardSubtitle: "Atomic bombs were dropped on Hiroshima and Nagasaki, Japan.",
    cardDetailedText: [
      "The bombings marked the end of World War II and hastened Japan's surrender.",
      "The bombings had a profound impact on global politics and ushered in the nuclear age.",
    ],

  },
  {
    title: "October 1947",
    cardTitle: "Cold War",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://picsum.photos/300/200"
      },
      type: "IMAGE"
    },
    cardSubtitle: "The Cold War tensions intensified between the United States and the Soviet Union.",
    cardDetailedText: [
      "The Cold War was a period of geopolitical tension between the Western Bloc (led by the United States and its NATO allies) and the Eastern Bloc (led by the Soviet Union).",
      "It lasted for several decades and had far-reaching global implications.",
    ],

  },
  {
    title: "July 1969",
    cardTitle: "Apollo 11 Moon Landing",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://picsum.photos/300/200"
      },
      type: "IMAGE"
    },
    cardSubtitle: "Neil Armstrong became the first person to walk on the moon.",
    cardDetailedText: [
      "The Apollo 11 mission successfully landed astronauts Neil Armstrong and Edwin 'Buzz' Aldrin on the moon.",
      "Armstrong's iconic words 'That's one small step for [a] man, one giant leap for mankind' were broadcast to millions of people on Earth.",
    ],

  },
  {
    title: "November 1989",
    cardTitle: "Fall of the Berlin Wall",
    media: {
      name: "dunkirk beach",
      source: {
        url: "https://picsum.photos/300/200"
      },
      type: "IMAGE"
    },
    cardSubtitle: "The Berlin Wall was torn down, symbolizing the end of the Cold War.",
    cardDetailedText: [
      "The fall of the Berlin Wall marked a significant turning point in world history and led to the reunification of East and West Germany.",
      "It was a powerful symbol of the collapse of communist regimes in Eastern Europe.",
    ],

  },
];


