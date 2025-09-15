import React, { useState, useCallback } from 'react';
import { UploadIcon } from './Icons';

interface ImageUploaderProps {
  onFileSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelect }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
       const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onFileSelect]);

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  
  const handleDragEnter = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
       <label
        htmlFor="file-upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer transition-colors duration-200 ${isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
      >
        {preview ? (
          <img src={preview} alt="Image preview" className="object-contain h-full w-full rounded-lg" />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <UploadIcon className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-500" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Drag and drop</span> an image here, or{' '}
              <span className="text-blue-600 font-semibold">click to select a file</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
        <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default ImageUploader;