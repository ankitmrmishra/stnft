import { Button } from "../../components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rotate-45 transform rounded-sm bg-gradient-to-br from-orange-400 to-orange-600"></div>
            <span className="text-xl font-semibold text-gray-900">
              StoryMint
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Gallery
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              About
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </Button>
            <Button className="bg-gray-900 px-6 font-medium text-white hover:bg-gray-800">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
