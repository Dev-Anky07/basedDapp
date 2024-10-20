'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react"
import Image from "next/image"
import { BlackCreateWalletButton } from './BlackCreateWalletButton'
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo'

// Progress Bar Component
function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

// Get Started Component
function GetStarted({ onStart }: { onStart: () => void }) {
  const handleConnectWallet = () => {
    console.log('Connecting wallet...')
  }

  return (
    <div className="min-h-screen bg-white text-cyan-600">
      <header className="p-4 flex justify-between items-center">
        <div className="w-40 h-10 bg-gray-200">
          {/* Logo placeholder */}
        </div>
        <div className="flex space-x-4">
          <BlackCreateWalletButton height={40} width={160} />
          <Button onClick={handleConnectWallet} className="bg-blue-600 hover:bg-blue-700 text-white">
            Connect Wallet
          </Button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        <h1 className="text-4xl font-bold mb-8">Redefining Content consumption within Web 3</h1>
        <Button onClick={onStart} className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-6 px-12">
          Get Started
        </Button>
      </main>
    </div>
  )
}

// Language Selection Component
function LanguageSelection({ onNext }: { onNext: (selectedLanguages: string[]) => void }) {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const languages = [
    'English', 'Mandarin', 'Hindi', 'Spanish', 'French',
    'Arabic', 'Bengali', 'Russian', 'Portuguese', 'Indonesian',
    'Urdu', 'German', 'Japanese', 'Swahili', 'Marathi',
    'Telugu', 'Turkish', 'Tamil', 'Yoruba', 'Vietnamese'
  ]

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages(prev => 
      prev.includes(lang) 
        ? prev.filter(l => l !== lang)
        : prev.length < 4 ? [...prev, lang] : prev
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select up to 4 languages</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {languages.map(lang => (
          <Button
            key={lang}
            onClick={() => toggleLanguage(lang)}
            className={`${
              selectedLanguages.includes(lang) 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-cyan-600 border border-cyan-600'
            }`}
          >
            {lang}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>{selectedLanguages.length} selected out of 4</p>
        <Button 
          onClick={() => onNext(selectedLanguages)}
          disabled={selectedLanguages.length === 0}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// Community Selection Component
function CommunitySelection({ onNext }: { onNext: (selectedCommunities: string[]) => void }) {
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([])
  const communities = [
    'Apecoin', 'Mocaverse', 'DAOpunks', 'Space Riders',
    'Bored Apes', 'Mutant Apes', 'Ladies of Bayc', 'Pukecast',
    'Sappy Seals', 'The Plague NFT', 'Creative DestXYZ', 'Ligma'
  ]

  const toggleCommunity = (community: string) => {
    setSelectedCommunities(prev => 
      prev.includes(community) 
        ? prev.filter(c => c !== community)
        : [...prev, community]
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select communities to follow</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {communities.map((community, index) => (
          <Button
            key={community}
            onClick={() => toggleCommunity(community)}
            className={`aspect-square ${
              selectedCommunities.includes(community) 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-cyan-600 border border-cyan-600'
            } ${index >= 4 && index < 8 ? 'translate-x-1/2' : ''}`}
          >
            {community}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>{selectedCommunities.length} communities selected</p>
        <Button 
          onClick={() => onNext(selectedCommunities)}
          disabled={selectedCommunities.length === 0}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// Updated Creator Selection Component
const creators = [
  { name: 'Apecoin', image: 'https://pbs.twimg.com/profile_images/1504200520528973825/ukukPZMP_400x400.jpg' },
  { name: 'Apecomms', image: 'https://pbs.twimg.com/profile_images/1806371821970984963/f0YAo5zQ_400x400.jpg' },
  { name: 'Pukecast', image: 'https://pbs.twimg.com/profile_images/1522941507585863681/sPZPKrEL_400x400.jpg' },
  { name: 'DAOpunks', image: 'https://pbs.twimg.com/profile_images/1670264272985944065/Sqv7sdwH_400x400.jpg' },
  { name: 'Moca Network', image: 'https://pbs.twimg.com/profile_images/1591975912173899778/YkUIx50f_400x400.jpg' },
  { name: 'Bankless DAO', image: 'https://pbs.twimg.com/profile_images/1389400052448247816/qsOU0pih_400x400.jpg' },
  { name: 'Ladies of BAYC', image: 'https://pbs.twimg.com/profile_images/1720359199425937408/FI6q4jkZ_400x400.jpg' },
  { name: 'Creator 8', image: 'https://v0.dev/public.blob.vercel-storage.com/creator8-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 9', image: 'https://v0.dev/public.blob.vercel-storage.com/creator9-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 10', image: 'https://v0.dev/public.blob.vercel-storage.com/creator10-Hy1Hy1-1686924433.jpg' },
]

function CreatorSelection({ onFinish }: { onFinish: (selectedCreators: string[]) => void }) {
  const [selectedCreators, setSelectedCreators] = useState<string[]>([])
  const [startIndex, setStartIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const toggleCreator = (creator: string) => {
    setSelectedCreators(prev => 
      prev.includes(creator) 
        ? prev.filter(c => c !== creator)
        : prev.length < 5 ? [...prev, creator] : prev
    )
  }

  const nextCreators = () => {
    setStartIndex(prev => Math.min(prev + 4, creators.length - 4))
  }

  const prevCreators = () => {
    setStartIndex(prev => Math.max(prev - 4, 0))
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out'
      carouselRef.current.style.transform = `translateX(-${startIndex * 25}%)`
    }
  }, [startIndex])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select up to 5 favorite creators</h2>
      <div className="relative mb-6">
        <Button 
          onClick={prevCreators} 
          disabled={startIndex === 0} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="overflow-hidden">
          <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out">
            {creators.map((creator, index) => (
              <div key={creator.name} className="w-1/4 flex-shrink-0 px-2">
                <Button
                  onClick={() => toggleCreator(creator.name)}
                  className={`w-full h-72 p-0 flex flex-col rounded-lg overflow-hidden ${
                    selectedCreators.includes(creator.name) 
                      ? 'ring-4 ring-cyan-600' 
                      : 'ring-1 ring-gray-200'
                  }`}
                >
                  <div className="w-full h-5/6 relative">
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-full h-1/6 flex items-center justify-center bg-white text-cyan-600">
                    {creator.name}
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Button 
          onClick={nextCreators} 
          disabled={startIndex >= creators.length - 4} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <p>{selectedCreators.length} selected out of 5</p>
        <Button 
          onClick={() => onFinish(selectedCreators)}
          disabled={selectedCreators.length === 0}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Finish
        </Button>
      </div>
    </div>
  )
}

// ExpandableSection Component
function ExpandableSection({ title, content, expandedContent }: { title: string; content: React.ReactNode; expandedContent: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-cyan-600">{title}</h3>
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      {content}
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/2 h-3/4 overflow-auto relative">
            <Button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
            >
              <X className="h-4 w-4" />
            </Button>
            {expandedContent}
          </div>
        </div>
      )}
    </div>
  )
}

// Main Page Component
function MainPage({ selections }: { selections: { languages: string[], communities: string[], creators: string[] } }) {
  const [currentTutorial, setCurrentTutorial] = useState(0)
  const tutorials = [
    { id: 1, title: "Claim your NFT", content: "Level up by interacting with your favourite creators", video: "https://pbs.twimg.com/media/GDP58DwbsAAN7sJ" },
    { id: 2, title: "Discord Data Pipeline Demo", content: "Discover how you can add data from discord to your knowledge base", video: "https://www.youtube.com/watch?v=AiiGjB2AxqA" },
    { id: 2, title: "Discord RaG Demo", content: "Discover how you can query your knowledge base from discord", video: "https://www.youtube.com/watch?v=AiiGjB2AxqA" },
    { id: 3, title: "Twitter Data Pipeline Demo", content: "Discover how you can add content to your knowledge base and query it on twitter.", video: "https://www.youtube.com/watch?v=AiiGjB2AxqA" },
  ]

  const recentActivity = [
    { id: 1, content: "New post in Community A: 'Exciting news!'", user: "User X", platform: "Community Forum" },
    { id: 2, content: "Popular discussion in Community B: 'Future of AI'", user: "User Y", platform: "Discord" },
    { id: 3, content: "Most liked post in Community C: 'Amazing artwork'", user: "User Z", platform: "Instagram" },
  ]

  const upcomingContent = [
    { id: 1, title: "Live Coding Session", creator: "Creator X", platform: "YouTube",   time: "2023-06-20 15:00", link: "https://youtube.com" },
    { id: 2, title: "Q&A Stream", creator: "Creator Y", platform: "Twitch", time: "2023-06-21 20:00", link: "https://twitch.tv" },
    { id: 3, title: "Art Showcase", creator: "Creator Z", platform: "Instagram", time: "2023-06-22 18:30", link: "https://instagram.com" },
  ]

  const upcomingEvents = [
    { id: 1, name: "Community Meetup", community: "Community A", time: "2023-06-25 14:00", description: "Join us for our monthly community gathering!" },
    { id: 2, name: "Online Workshop", community: "Community B", time: "2023-06-27 16:00", description: "Learn new skills in our interactive workshop." },
    { id: 3, name: "AMA Session", community: "Community C", time: "2023-06-30 19:00", description: "Ask your burning questions to our expert panel." },
  ]

  const nextTutorial = () => {
    setCurrentTutorial((prev) => (prev + 1) % tutorials.length)
  }

  const prevTutorial = () => {
    setCurrentTutorial((prev) => (prev - 1 + tutorials.length) % tutorials.length)
  }

  const handleConnectWallet = () => {
    console.log('Connecting wallet...')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="w-40 h-10 bg-gray-200">
          {/* Logo placeholder */}
        </div>
        <div className="flex space-x-4">
          <BlackCreateWalletButton height={40} width={160} />
          <Button onClick={handleConnectWallet} className="bg-blue-600 hover:bg-blue-700 text-white">
            Connect Wallet
          </Button>
        </div>
      </header>
      <div className="p-8">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <ExpandableSection
            title="Recent Activity"
            content={
              <ul className="list-disc list-inside text-cyan-600">
                {recentActivity.map((activity) => (
                  <li key={activity.id}>{activity.content}</li>
                ))}
              </ul>
            }
            expandedContent={
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Recent Activity</h3>
                <ul className="space-y-4">
                  {recentActivity.map((activity) => (
                    <li key={activity.id} className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-cyan-600">{activity.content}</p>
                      <p className="text-cyan-600">{`by ${activity.user} on ${activity.platform}`}</p>
                      <Button onClick={() => window.open('https://example.com', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-2">
                        Link
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <ExpandableSection
            title="Upcoming Content"
            content={
              <ul className="list-disc list-inside text-cyan-600">
                {upcomingContent.map((content) => (
                  <li key={content.id}>{`${content.title} by ${content.creator}`}</li>
                ))}
              </ul>
            }
            expandedContent={
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Upcoming Content</h3>
                <ul className="space-y-4">
                  {upcomingContent.map((content) => (
                    <li key={content.id} className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-cyan-600">{content.title}</h4>
                      <p className="text-cyan-600">{`by ${content.creator} on ${content.platform}`}</p>
                      <p className="text-cyan-600">{content.time}</p>
                      <div className="mt-2 flex justify-between items-center">
                        <a href={content.link} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">View Content</a>
                        <Button onClick={() => window.open('https://x.com', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                          Remind Me
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <ExpandableSection
            title="Upcoming Events"
            content={
              <ul className="list-disc list-inside text-cyan-600">
                {upcomingEvents.map((event) => (
                  <li key={event.id}>{`${event.name} in ${event.community}`}</li>
                ))}
              </ul>
            }
            expandedContent={
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Upcoming Events</h3>
                <ul className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <li key={event.id} className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-cyan-600">{event.name}</h4>
                      <p className="text-cyan-600">{`in ${event.community}`}</p>
                      <p className="text-cyan-600">{event.time}</p>
                      <p className="text-cyan-600 mt-2">{event.description}</p>
                      <Button onClick={() => window.open('https://x.com', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-2">
                        Remind Me
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <div className="bg-white rounded-lg shadow-md p-4 relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-cyan-600">Tutorials</h3>
              <Button
                onClick={() => {}} // Add expand functionality here
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <h4 className="text-md font-semibold mb-2 text-cyan-600">{tutorials[currentTutorial].title}</h4>
              <p className="text-sm mb-2 text-cyan-600">{tutorials[currentTutorial].content}</p>
              {currentTutorial === 0 ? (
                <div className="aspect-square mb-2 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="NFT Preview"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9 mb-2">
                  <iframe src={tutorials[currentTutorial].video} allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
              )}
              {currentTutorial === 0 && (
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2">
                  Claim NFT
                </Button>
              )}
              <Button
                onClick={prevTutorial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
                style={{ left: '-1rem' }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={nextTutorial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
                style={{ right: '-1rem' }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4 text-cyan-600">Content Creators</h3>
            <ul className="space-y-2">
              {selections.creators.map((creator, index) => (
                <li key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <Image src={`/placeholder.svg?height=50&width=50&text=${creator}`} width={50} height={50} alt={creator} className="rounded-full" />
                  <span className="text-cyan-600">{creator}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-sm font-semibold mb-2 text-cyan-600">Explore functionality:</p>
              <Button className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white">RaG Assistant</Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Search Engine</Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-600">Your Selections</h3>
              <h4 className="font-semibold mt-2 text-cyan-600">Languages:</h4>
              <ul className="list-disc list-inside text-cyan-600">
                {selections.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-2 text-cyan-600">Communities:</h4>
              <ul className="list-disc list-inside text-cyan-600">
                {selections.communities.map((community, index) => (
                  <li key={index}>{community}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-2 text-cyan-600">Creators:</h4>
              <ul className="list-disc list-inside text-cyan-600">
                {selections.creators.map((creator, index) => (
                  <li key={index}>{creator}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Onboarding Flow Component
export function Main() {
  const [step, setStep] = useState(0)
  const [selections, setSelections] = useState({
    languages: [] as string[],
    communities: [] as string[],
    creators: [] as string[]
  })

  const handleStart = () => {
    setStep(1)
  }

  const handleLanguageSelection = (langs: string[]) => {
    setSelections(prev => ({ ...prev, languages: langs }))
    setStep(2)
  }

  const handleCommunitySelection = (communities: string[]) => {
    setSelections(prev => ({ ...prev, communities }))
    setStep(3)
  }

  const handleCreatorSelection = (creators: string[]) => {
    setSelections(prev => ({ ...prev, creators }))
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-white text-cyan-600">
      {step > 0 && <ProgressBar currentStep={step} totalSteps={4} />}
      {step === 0 && <GetStarted onStart={handleStart} />}
      {step === 1 && <LanguageSelection onNext={handleLanguageSelection} />}
      {step === 2 && <CommunitySelection onNext={handleCommunitySelection} />}
      {step === 3 && <CreatorSelection onFinish={handleCreatorSelection} />}
      {step === 4 && <MainPage selections={selections} />}
    </div>
  )
}