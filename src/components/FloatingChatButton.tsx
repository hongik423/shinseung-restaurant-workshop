'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Bot, X } from 'lucide-react';
import AIChatbot from './AIChatbot';
import ErrorDetector from './ErrorDetector';

interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: Date;
  source?: string;
}

const FloatingChatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [pendingError, setPendingError] = useState<ErrorInfo | null>(null);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setIsMinimized(false);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setIsMinimized(false);
    setPendingError(null);
  };

  const handleMinimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  const handleErrorDetected = (error: ErrorInfo) => {
    setPendingError(error);
    setIsChatOpen(true);
    setIsMinimized(false);
  };

  return (
    <>
      <ErrorDetector onErrorDetected={handleErrorDetected} />
      
      {!isChatOpen && (
        <div className="fixed bottom-4 right-4 z-40">
          <Button
            onClick={handleOpenChat}
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <Bot className="w-6 h-6 text-white" />
          </Button>
          
          {/* 툴팁 */}
          <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            AI 개발 도우미
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      )}
      
      <AIChatbot
        isOpen={isChatOpen}
        onClose={handleCloseChat}
        onMinimize={handleMinimizeChat}
        isMinimized={isMinimized}
        pendingError={pendingError}
      />
    </>
  );
};

export default FloatingChatButton; 