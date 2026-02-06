import { useState, useRef, useCallback } from 'react';

interface PhotoUploaderProps {
  id: string;
  label: string;
  shape?: 'circle' | 'square' | 'rectangle';
  onPhotoUpload: (photo: string) => void;
  currentPhoto?: string;
  className?: string;
}

export default function PhotoUploader({ 
  id, 
  label, 
  shape = 'square', 
  onPhotoUpload, 
  currentPhoto,
  className = ''
}: PhotoUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentPhoto || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onPhotoUpload(result);
        // Save to localStorage
        localStorage.setItem(`birthday-photo-${id}`, result);
      };
      reader.readAsDataURL(file);
    }
  }, [id, onPhotoUpload]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    onPhotoUpload('');
    localStorage.removeItem(`birthday-photo-${id}`);
  };

  const shapeClasses = {
    circle: 'rounded-full aspect-square',
    square: 'rounded-2xl aspect-square',
    rectangle: 'rounded-2xl aspect-video'
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer transition-all duration-300 
        ${shapeClasses[shape]} ${className}
        ${isDragging ? 'scale-105 border-rose-400' : 'border-rose-200'}
        ${preview ? '' : 'border-2 border-dashed bg-gradient-to-br from-rose-50 to-pink-50'}
        hover:shadow-xl hover:scale-[1.02]`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
      />

      {preview ? (
        <>
          <img
            src={preview}
            alt={label}
            className={`w-full h-full object-cover ${shapeClasses[shape]}`}
          />
          {/* Remove button */}
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 
                     flex items-center justify-center shadow-lg hover:bg-red-600 
                     transition-colors z-10"
          >
            ✕
          </button>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 
                        transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">Click to change</p>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <div className={`text-4xl mb-3 ${isDragging ? 'animate-bounce' : 'animate-pulse'}`}>
            {isDragging ? '💕' : '📷'}
          </div>
          <p className="text-rose-400 font-medium text-sm mb-1">{label}</p>
          <p className="text-rose-300 text-xs">
            {isDragging ? 'Drop here!' : 'Drag & Drop or Click'}
          </p>
        </div>
      )}

      {/* Dragging overlay */}
      {isDragging && (
        <div className="absolute inset-0 bg-rose-100/80 flex items-center justify-center">
          <div className="text-center">
            <p className="text-5xl animate-bounce">💖</p>
            <p className="text-rose-500 font-medium mt-2">Drop your photo!</p>
          </div>
        </div>
      )}
    </div>
  );
}
