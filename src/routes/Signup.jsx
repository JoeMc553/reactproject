import React from 'react'
import Navbar from "../components/Navbar"
import studylogos from '../assets/studylogos.png'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    if (password !== password1) {
      setError('passwords do not match')
      return
    }

    try {
      // Here you would typically call your authentication API
      console.log('Logging in with:', { email, password })
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Redirect to dashboard on successful login
      navigate('/reactproject/dashboard')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    
    <div className="flex items-center justify-center bg-white p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <div class="flex">
        <div class="m-auto w-422">
        <img src={studylogos}
      height={200}
      width={200}
      />
          </div>
      </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Create new account</h2>
        <p className="text-gray-600 text-sm mb-6 text-center">Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">phone</label>
            <input
              id="phone"
              type="phone"
              placeholder="(012) 345-6789"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[var(--primaryB-darker)] focus:ring-1 focus:ring-[var(--primaryB-darker)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[var(--primaryB-darker)] focus:ring-1 focus:ring-[var(--primaryB-darker)]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[var(--primaryB-darker)] focus:ring-1 focus:ring-[var(--primaryB-darker)]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password confirmation</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[var(--primaryB-darker)] focus:ring-1 focus:ring-[var(--primaryB-darker)]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-flex justify-center py-2 px-5 border border-transparent rounded-md  shadow-sm text-sm font-medium text-white bg-[var(--primaryB)] hover:bg-[var(--primaryB-darker)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          already have an account?{' '}
          <a href="/reactproject/signup" className="font-medium text-[var(--primaryB)] hover:text-[var(--primaryB-darker)]">
          <Link to = "/reactproject/">login</Link>
          </a>
        </p>
      </div>
    </div>
  )
}