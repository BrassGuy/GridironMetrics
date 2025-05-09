import Link from 'next/link'
import { HomeIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
  return (
    <nav className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">GridironMetrics</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-800">
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </Link>
              
              <Link href="/stats" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-800">
                <ChartBarIcon className="h-5 w-5 mr-1" />
                Stats
              </Link>
              
              <Link href="/players" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-800">
                <UserGroupIcon className="h-5 w-5 mr-1" />
                Players
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 