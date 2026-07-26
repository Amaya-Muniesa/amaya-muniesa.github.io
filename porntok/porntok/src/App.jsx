import React, { useState } from 'react';
import {
  Search,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Home,
  Plus,
  Inbox,
  User,
  Mail,
  Smartphone,
  Globe
} from 'lucide-react';

import background1 from './assets/user/user1.png';
import background2 from './assets/user/user2.png';
import background3 from './assets/user/user3.png';
import avatar1 from './assets/profile/profile1.png';
import avatar2 from './assets/profile/profile2.png';
import avatar3 from './assets/profile/profile3.png';

const MOCK_VIDEOS = [
  {
    id: 1,
    username: '@sweetgirl20',
    description: 'Aquí tomando un dulce helado en un día soleado ☀️🍦',
    hashtags: '#sweet #sunny #happy',
    likes: '1.2M',
    comments: '4321',
    saves: '89K',
    shares: '12K',
    // Using vertical images from Unsplash to simulate videos
    videoUrl: background1,
    profilePic: avatar1
  },
  {
    id: 2,
    username: '@blondybeach',
    description: 'Una pequeña sesión de fotos antes de ir a surfear 🏄‍♀️🌊',
    hashtags: '#blondy #beach #relax',
    likes: '854K',
    comments: '2100',
    saves: '45K',
    shares: '8K',
    videoUrl: background2,
    profilePic: avatar2
  },
  {
    id: 3,
    username: '@curlycutie',
    description: 'Feliz de tener un día de descanso y disfrutar de la piscina 🏊‍♀️💦',
    hashtags: '#curly #swimming #relax',
    likes: '2.5M',
    comments: '15K',
    saves: '120K',
    shares: '34K',
    videoUrl: background3,
    profilePic: avatar3
  }
];

const LoginScreen = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">

      {/* Logo & Branding */}
      <div className="flex flex-col items-center mb-12">
        {/* Usamos invert para que el logo negro se vea blanco sobre el fondo negro */}
        <img
          src="/logo.png"
          alt="PornTok Logo"
          className="w-32 h-32 mb-4 object-contain filter invert"
        />
        <h1 className="text-4xl font-bold tracking-tight">PornTok</h1>
        <p className="text-gray-400 mt-2 text-sm text-center">Únete a la comunidad más sexy del mundo</p>
      </div>

      {/* Registration Buttons */}
      <div className="w-full max-w-sm space-y-4">
        <button className="w-full flex items-center justify-center space-x-3 bg-white text-black py-3.5 px-4 rounded-full font-semibold hover:bg-gray-200 transition">
          <Mail size={20} />
          <span>Registrarse con Email</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-3 bg-transparent border border-gray-600 text-white py-3.5 px-4 rounded-full font-semibold hover:bg-gray-900 transition">
          <Smartphone size={20} />
          <span>Registrarse con Teléfono</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-3 bg-transparent border border-gray-600 text-white py-3.5 px-4 rounded-full font-semibold hover:bg-gray-900 transition">
          <Globe size={20} />
          <span>Continuar con Google</span>
        </button>
      </div>

      {/* Guest Login */}
      <div className="mt-12">
        <button
          onClick={onLogin}
          className="text-gray-400 hover:text-white underline font-medium transition"
        >
          Entrar como Invitado
        </button>
      </div>
    </div>
  );
};

const VideoPost = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="relative w-full h-full snap-start bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Simulator */}
      <img
        src={data.videoUrl}
        alt="Video content"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      {/* Right Sidebar Actions */}
      <div className="absolute right-4 bottom-4 flex flex-col items-center space-y-6 z-30">
        {/* Profile Pic */}
        <div className="relative">
          <img
            src={data.profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">
            <Plus size={14} className="font-bold" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setIsLiked(!isLiked)}>
          <Heart size={32} className={`${isLiked ? 'fill-white text-white' : 'text-white'} drop-shadow-md`} />
          <span className="text-white text-xs mt-1 font-semibold drop-shadow-md">{data.likes}</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <MessageCircle size={32} className="text-white fill-white/20 drop-shadow-md" />
          <span className="text-white text-xs mt-1 font-semibold drop-shadow-md">{data.comments}</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => setIsSaved(!isSaved)}>
          <Bookmark size={32} className={`${isSaved ? 'fill-yellow-400 text-yellow-400' : 'text-white'} drop-shadow-md`} />
          <span className="text-white text-xs mt-1 font-semibold drop-shadow-md">{data.saves}</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <Share2 size={32} className="text-white fill-white/20 drop-shadow-md" />
          <span className="text-white text-xs mt-1 font-semibold drop-shadow-md">{data.shares}</span>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="absolute bottom-4 left-4 right-20 z-30">
        <h3 className="text-white font-bold text-lg drop-shadow-md">{data.username}</h3>
        <p className="text-white text-sm mt-1 drop-shadow-md line-clamp-2">
          {data.description}
        </p>
        <p className="text-white font-bold text-sm mt-1 drop-shadow-md">
          {data.hashtags}
        </p>
      </div>
    </div>
  );
};

const FeedScreen = () => {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col relative overflow-hidden">

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-4 pt-8 pb-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex-1" /> {/* Spacer */}

        <div className="flex space-x-6 items-center">
          <button className="text-gray-300 font-semibold text-lg hover:text-white transition">Lives</button>
          <button className="text-gray-300 font-semibold text-lg hover:text-white transition">Siguiendo</button>
          <div className="flex flex-col items-center">
            <button className="text-white font-bold text-lg">Para ti</button>
            <div className="h-1 w-8 bg-white rounded-full mt-1"></div>
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <Search size={24} className="text-white cursor-pointer" />
        </div>
      </div>

      {/* Scrolling Video Feed Container */}
      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
        {MOCK_VIDEOS.map((video) => (
          <VideoPost key={video.id} data={video} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="h-16 bg-black border-t border-gray-800 flex justify-around items-center px-2 z-20">
        <div className="flex flex-col items-center cursor-pointer text-white">
          <Home size={24} className="fill-white" />
          <span className="text-[10px] mt-1 font-medium">Inicio</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition">
          <Search size={24} />
          <span className="text-[10px] mt-1 font-medium">Tendencias</span>
        </div>

        {/* Create Button (Special Styling) */}
        <div className="flex items-center justify-center cursor-pointer px-2">
          <div className="bg-white text-black h-8 w-12 rounded-xl flex items-center justify-center font-bold">
            <Plus size={20} />
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition">
          <Inbox size={24} />
          <span className="text-[10px] mt-1 font-medium">Bandeja</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition">
          <User size={24} />
          <span className="text-[10px] mt-1 font-medium">Perfil</span>
        </div>
      </div>

      {/* CSS global for hiding the scrollbar specifically on this feed */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default function App() {
  // State to manage which screen we are currently viewing
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <div className="w-full h-screen bg-black font-sans selection:bg-gray-700">
      {currentScreen === 'login' ? (
        <LoginScreen onLogin={() => setCurrentScreen('feed')} />
      ) : (
        <FeedScreen />
      )}
    </div>
  );
}