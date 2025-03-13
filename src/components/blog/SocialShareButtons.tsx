
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const SocialShareButtons: React.FC = () => {
  return (
    <div className="mt-12 pt-6 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-medium text-gray-700">Share this article:</span>
        <div className="flex items-center gap-3">
          <button aria-label="Share on Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
            <Facebook size={18} />
          </button>
          <button aria-label="Share on Twitter" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-sky-500 hover:text-white transition-colors">
            <Twitter size={18} />
          </button>
          <button aria-label="Share on LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-700 hover:text-white transition-colors">
            <Linkedin size={18} />
          </button>
          <button aria-label="Share via Email" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
            <Mail size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialShareButtons;
