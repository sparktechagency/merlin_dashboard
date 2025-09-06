"use client"

import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react";
import CustomModal from "../CustomModal";
import AllPhotoShowModal from "./AllPhotoShowModal";
import { set } from "react-hook-form";
import DeletePhoto from "./DeletePhoto";

interface DetailsRegionalProps {
    open: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DetailsRegional = ({ open, setIsOpen }: DetailsRegionalProps) => {
    const [allPhotoModalOpen, setAllPhotoModalOpen] = useState(false);
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
    ];

    const handleSeeAllClick = () => {
        // setIsOpen(!open);
        setAllPhotoModalOpen(!allPhotoModalOpen);
    }


    const handleDeletePhoto = (id: number) => {
        console.log("Delete photo with id:", id);
        setDeletePhotoModalOpen(!deletePhotoModalOpen);
    }



    return (
        <div className="rounded-2xl overflow-hidden ">
            <h1 className="text-center text-[24px] py-3 text-white">Delete admin ?</h1>
            {/* image */}
            <div className="bg-[#f6f6f6] p-6 ">
                <div className="border  rounded-lg">
                    <div className="flex flex-col justify-center items-center py-4">
                        <Image
                            src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40"
                            alt="Profile"
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <h1 className="text-2xl font-semibold text-gray-800">Mark Rohdes</h1>
                    </div>

                    <div className="space-y-3 pb-2">
                        <p className=" bg-[#FFFFFF] flex justify-between px-2 py-3 rounded-2xl mx-2">
                            Country: <span className="text-gray-800 font-bold">Country name</span>
                        </p>
                        <p className=" bg-[#FFFFFF] flex justify-between px-2 py-3 rounded-2xl mx-2">
                            Country: <span className="text-gray-800 font-bold">Country name</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full mt-4 ">
                    <p className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z" fill="#004E8F" />
                        </svg>

                        Uploaded photos</p>


                    <button
                        onClick={handleSeeAllClick}
                        className="cursor-pointer flex items-center gap-2 border rounded-2xl px-4 py-1">See all
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.931347 10.285L8.37235 2.84403L2.49082 2.74266L2.45896 0.894553L11.4956 1.0503L11.6514 10.0869L9.80324 10.0551L9.70188 4.17356L2.26088 11.6146L0.931347 10.285Z" fill="black" />
                        </svg>

                    </button>
                </div>


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



            {/* modal component(ALL_PHOTO_SHOW_MODAL_OPEN) */}
            <CustomModal
                open={allPhotoModalOpen}
                setIsOpen={setAllPhotoModalOpen}
                className={"p-0 max-h-[0vh]"}
                bgColor={"bg-[#004E8F]"}
                maxWidth={"md:!max-w-[40vw]"}
            >
                <AllPhotoShowModal
                />
            </CustomModal>



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

export default DetailsRegional
