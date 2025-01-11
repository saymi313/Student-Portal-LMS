import { BellIcon } from '@heroicons/react/24/outline'
import useStore from '../store/useStore'

export default function Header() {
  const { user, notifications } = useStore()
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">FAST Islamabad</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <BellIcon className="h-6 w-6 text-gray-500" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
              <span className="text-xs text-gray-500">({user.rollNumber})</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}