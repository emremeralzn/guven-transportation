import { useState, useEffect } from 'react';
import { X, Bell, Phone } from 'lucide-react';

interface NotificationBannerProps {
  message: string;
  phone: string;
  onClose: () => void;
}

export default function NotificationBanner({ message, phone, onClose }: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 saniye sonra göster

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 animate-pulse" />
              <span className="font-medium">{message}</span>
            </div>
            <a
              href={`tel:${phone}`}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Hemen Ara</span>
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Bildirimi kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
