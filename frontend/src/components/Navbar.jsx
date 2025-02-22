
import { Menu } from '@headlessui/react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, Bars3Icon, QuestionMarkCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const [language, setLanguage] = useState('English')

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'mr', label: 'मराठी' }
];


  return ( <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-8 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={logo}
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <div className="flex rounded-md border-2 border-green-600 overflow-hidden w-[600px]">
            <input
              type="text"
              placeholder="Search For Government Schemes"
              className="w-full outline-none bg-white text-gray-600 text-sm px-6 py-3"
              onFocus={() => navigate("/search")}
            />
            <button
              type="button"
              className="flex items-center justify-center bg-green-600 px-6 hover:bg-green-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white text-sm text-gray-700 border rounded-md px-3 py-2"
          >
              {languages.map(({ code, label }) => (
                  <option key={code} value={code}>
                      {label}
                  </option>
              ))}
          </select>

          <a href="/about" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
            <InformationCircleIcon className="h-6 w-6 inline-block mr-2" />
            About Us
          </a>

          <a href="/help" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
            <QuestionMarkCircleIcon className="h-6 w-6 inline-block mr-2" />
            Help
          </a>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex rounded-md border-2 border-green-600 overflow-hidden max-w-full">
                  <input
                    type="text"
                    placeholder="Search For Government Schemes" 
                    className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
                    onFocus={() => navigate("/search")}
                  />
                  <button
                    type="button"
                    className="flex-shrink-0 flex items-center justify-center bg-green-600 px-4"
                    onClick={() => navigate("/search")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 192.904 192.904"
                      width="16px"
                      className="fill-white"
                    >
                      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                    </svg>
                  </button>
                </div>

                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-white text-sm text-gray-700 border rounded-md px-4 py-2 mt-2"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>

                <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <InformationCircleIcon className="h-5 w-5 inline-block mr-2" />
                  About Us
                </a>

                <a href="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <QuestionMarkCircleIcon className="h-5 w-5 inline-block mr-2" />
                  Help
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}