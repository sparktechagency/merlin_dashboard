"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import CustomModal from '../CustomModal';
import DeletePhoto from './DeletePhoto';


const AllPhotoShowModal = () => {
    const [deletePhotoModalOpen, setDeletePhotoModalOpen] = useState(false);

    const photos = [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40",
            altText: "City View",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
            altText: "Mountain Landscape",
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
            altText: "Beach Sunset",
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40",
            altText: "City View",
        },
        {
            id: 5,
            imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
            altText: "Mountain Landscape",
        },
        {
            id: 6,
            imageUrl: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
            altText: "Beach Sunset",
        },
    ];

    const handleDeletePhoto = (id: number) => {
        console.log("Delete photo with id:", id);
        setDeletePhotoModalOpen(!deletePhotoModalOpen);
    }


    return (
        <div className='rounded-2xl overflow-hidden '>

            <h1 className="text-center text-[24px] py-3 text-white">All photos</h1>

            <div className="bg-[#f6f6f6] p-6 ">
                <div className="grid grid-cols-3 gap-2 py-5">
                    {photos.map((photo, index) => {
                        return (
                            <div key={index} className="relative w-58 h-58 overflow-hidden rounded-lg">
                                <Image
                                    src={photo.imageUrl}
                                    alt="City View"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <button
                                    onClick={() => handleDeletePhoto(photo.id)}
                                    className="cursor-pointer absolute top-2 right-2 bg-white/60 rounded p-2  shadow-md">
                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z" fill="#FF5353" />
                                    </svg>

                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>



            {/* modal component(DELETE_PHOTO_SHOW_MODAL) */}
            <CustomModal
                open={deletePhotoModalOpen}
                setIsOpen={setDeletePhotoModalOpen}
                className={"p-0 max-h-[0vh]"}
                bgColor={"bg-[#EF4444]"}
                maxWidth={"md:!max-w-[30vw]"}>
                <DeletePhoto
                    open={deletePhotoModalOpen}
                    setIsOpen={setDeletePhotoModalOpen}
                />
            </CustomModal>
        </div>
    )
}

export default AllPhotoShowModal
