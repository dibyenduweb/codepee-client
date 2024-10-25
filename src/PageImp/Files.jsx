/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFilePdf, FaVideo, FaCode, FaImage } from 'react-icons/fa';

const Files = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="grid grid-cols-2 gap-4">
                    <a
                        href="https://drive.google.com/drive/folders/13GlYLwKPI8rnNNm0G_upJasGExxAcF70?usp=drive_link"
                        className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow hover:bg-gray-300 transition duration-200"
                    >
                        <FaFilePdf className="text-red-600 text-4xl mb-2" />
                        <h2 className="text-lg font-semibold">PDF Files</h2>
                    </a>
                    <a
                        href="#video-files"
                        className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow hover:bg-gray-300 transition duration-200"
                    >
                        <FaVideo className="text-green-600 text-4xl mb-2" />
                        <h2 className="text-lg font-semibold">Videos</h2>
                    </a>
                    <a
                        href="https://drive.google.com/drive/folders/13GlYLwKPI8rnNNm0G_upJasGExxAcF70"
                        className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow hover:bg-gray-300 transition duration-200"
                    >
                        <FaCode className="text-blue-600 text-4xl mb-2" />
                        <h2 className="text-lg font-semibold">Coding Files</h2>
                    </a>
                    <a
                        href="#image-files"
                        className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow hover:bg-gray-300 transition duration-200"
                    >
                        <FaImage className="text-yellow-600 text-4xl mb-2" />
                        <h2 className="text-lg font-semibold">Images</h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Files;
