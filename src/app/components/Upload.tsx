'use client'
import React from "react";
import {icons} from './icons'
const UploadComponent: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <icons.Cloud/>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <p className="font-normal mt-5 ml-4">upload your newsletter from here and click add new.<a className="text-blue-600 hover:underline ml-1"
			href="https://www.canva.com/templates/?query=simple-email-newsletter" target="_blank"> create a simple newsletter using Canva</a>.
	</p>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
};

export default UploadComponent;
