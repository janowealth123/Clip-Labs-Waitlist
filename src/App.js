// src/App.js
import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle, Play, DollarSign, Users, Sparkles, Clock } from 'lucide-react';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your webhook URL after setting up ConvertKit
      const response = await fetch('YOUR_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          email
        })
      });

      if (response.ok) {
        setEmail('');
        setFirstName('');
        alert('Thanks for joining the waitlist!');
      } else {
        alert('Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#6B4BCC] relative overflow-hidden">
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e0aeff, 0 0 50px #e0aeff; }
            100% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e0aeff, 0 0 40px #e0aeff; }
          }
          .glow-button {
            animation: glow 2s ease-in-out infinite alternate;
          }
        `}
      </style>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 to-transparent" />
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-8">
          <div className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            ClipLabs
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
              <Users className="w-4 h-4 text-purple-200 mr-2" />
              <span className="text-purple-100 font-medium">1,243 Clippers</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center py-16 max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span className="text-purple-200">Launching Soon</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200 leading-tight">
              Get Paid to Create<br />Viral Clips
            </h1>
            
            <p className="text-xl text-purple-200">
              Join the premier marketplace connecting video editors with top streamers and brands.
            </p>

            {/* Glowing Button */}
            <button
              onClick={scrollToForm}
              className="glow-button relative inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-medium 
              transition-all transform hover:scale-105 hover:translate-y-[-2px]
              border border-white/50 backdrop-blur-sm"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Partnerships */}
            <div className="pt-8">
              <p className="text-purple-200 mb-4 font-medium">Partnered with</p>
              <div className="flex justify-center items-center gap-12">
                <div className="text-white font-semibold text-lg hover:text-purple-200 transition-colors cursor-pointer">Whop</div>
                <div className="text-white font-semibold text-lg hover:text-purple-200 transition-colors cursor-pointer">Twitch</div>
                <div className="text-white font-semibold text-lg hover:text-purple-200 transition-colors cursor-pointer">Kick</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {[
            { icon: DollarSign, label: 'Earn Per Clip', value: '$200-2000' },
            { icon: Users, label: 'Clippers Joined', value: '1,243' },
            { icon: Clock, label: 'Time to First Clip', value: '24hr' }
          ].map(({ icon: Icon, label, value }, index) => (
            <div key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center
              border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer"
            >
              <Icon className="w-8 h-8 text-purple-200 mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{value}</div>
              <div className="text-purple-200">{label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="py-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Why Join ClipLabs?
            </h2>
            <div className="space-y-6">
              {[
                'Direct payments from top creators',
                'Set your own rates ($200-2000 per clip)',
                'Choose your own schedule',
                'Work with trending creators'
              ].map((feature, index) => (
                <div key={index} 
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10
                  hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                  </div>
                  <span className="text-lg text-purple-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div ref={formRef} 
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10
            hover:bg-white/10 transition-all"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2">
                Join the Waitlist
              </h3>
              <p className="text-purple-200">Be first in line when we launch.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200 
                focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200 
                focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="glow-button w-full bg-white text-purple-600 font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 
                transition-all transform hover:scale-105 border border-white/50"
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-sm text-purple-200 text-center">
                🔒 Free access. No credit card required.
              </p>
            </form>
          </div>
        </div>

        {/* Platform Section */}
        <div className="py-12 text-center">
          <p className="text-purple-200 mb-6 font-medium">
            Get clips from your favorite platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Twitch', 'Kick', 'YouTube', 'TikTok'].map((platform) => (
              <div key={platform} 
                className="text-white font-semibold text-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
