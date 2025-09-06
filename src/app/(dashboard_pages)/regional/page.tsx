
"use client"

import { useState } from "react"
import { Search, } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useRouter } from "next/navigation"
import CustomModal from "@/components/modal/CustomModal"
import DeleteRegional from "@/components/modal/regionalModal/DeleteRegional"
import DetailsRegional from "@/components/modal/regionalModal/DetailsRegional"

interface RegionalProps {
  serial_no: number,
  name: string
  email: string
  country: string,
  content: string,
  avatar?: string,
}


const RegionalPage = () => {
  const [searchValue, setSearchValue] = useState("")
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const router = useRouter();


  const regionals: RegionalProps[] = [
    {
      serial_no: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      country: "USA",
      content: "Lorem ipsum dolor sit amet."
    },
    {
      serial_no: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      country: "Canada",
      content: "Consectetur adipiscing elit."
    },
    {
      serial_no: 3,
      name: "Carol Williams",
      email: "carol.williams@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      country: "UK",
      content: "Sed do eiusmod tempor."
    },
    {
      serial_no: 4,
      name: "David Brown",
      email: "david.brown@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      country: "Australia",
      content: "Incididunt ut labore et dolore."
    },
    {
      serial_no: 5,
      name: "Eva Davis",
      email: "eva.davis@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      country: "Germany",
      content: "Magna aliqua ut enim ad minim."
    },
    {
      serial_no: 6,
      name: "Frank Miller",
      email: "frank.miller@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      country: "France",
      content: "Veniam quis nostrud exercitation."
    },
    {
      serial_no: 7,
      name: "Frank Miller",
      email: "frank.miller@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      country: "France",
      content: "Veniam quis nostrud exercitation."
    },
  ];


  const handleRequestedPhotoClick = () => {
    router.push('/requestedPhoto');
  }

  const handleViewDetails = (id: number) => {
    console.log(id)
    setDetailsModalOpen(!detailsModalOpen);
  }
  const handleDelete = (id: number) => {
    console.log(id)
    setDeleteModalOpen(!deleteModalOpen);
  }



  return (
    <div>
      <div className="pt-6">
        {/* Header with search and filter */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search regional"
              className="pl-10 h-[50px] bg-white border-gray-200 rounded-full"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <div
            onClick={handleRequestedPhotoClick}
            className="bg-[#004E8F] cursor-pointer text-white h-[50px] rounded-full flex items-center gap-2 px-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z" fill="white" />
            </svg>
            Requested photos (10)
          </div>
        </div>
      </div>



      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-4 pb-3 text-sm font-medium text-black ">
        <div className="col-span-1">Sl. No</div>
        <div className="col-span-3">Name</div>
        <div className="col-span-3">Email</div>
        <div className="col-span-3">content</div>
        <div className="col-span-1">country</div>
        <div className="col-span-1 text-center">Actions</div>
      </div>




      {/* regional List */}
      <div className="space-y-2">
        {regionals.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 items-center px-4 py-4  rounded-lg bg-white  text-black"
          >
            <div className="col-span-1">
              {item.serial_no}
            </div>

            {/* regional Info */}
            <div className="col-span-3 flex items-center gap-3">
              <Image src={item.avatar!} alt="item photo" width={50} height={50} className="object-cover rounded-full" />
              <div>
                <h1 className="font-medium text-xl">{item.name}</h1>
              </div>
            </div>


            <div className="col-span-3">
              {item.email}
            </div>

            <div className="col-span-3">
              {item.content}
            </div>

            <div className="col-span-1">
              {item.country}
            </div>

            <div className="col-span-1 flex justify-end gap-2">
              <svg
                onClick={() => handleViewDetails(item.serial_no)}
                className="cursor-pointer"
                width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
              </svg>


              <svg
                onClick={() => handleDelete(item.serial_no)}
                className="cursor-pointer"
                width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
              </svg>
            </div>
          </div>
        ))}
      </div>



      {/* modal component(DELETE_REGIONAL_TABLE_ONE_MODEL) */}
      <CustomModal
        open={detailsModalOpen}
        setIsOpen={setDetailsModalOpen}
        className={"p-0 max-h-[0vh]"}
        bgColor={"bg-[#004E8F]"}
        maxWidth={"md:!max-w-[40vw]"}
      >
        <DetailsRegional
          open={detailsModalOpen}
          setIsOpen={setDetailsModalOpen}
        />
      </CustomModal>


      {/* modal component(DELETE_REGIONAL_TABLE_ONE_MODEL) */}
      <CustomModal
        open={deleteModalOpen}
        setIsOpen={setDeleteModalOpen}
        className={"p-0 max-h-[0vh]"}
        bgColor={"bg-[#EF4444]"}
        maxWidth={"md:!max-w-[30vw]"}
      >
        <DeleteRegional
          open={deleteModalOpen}
          setIsOpen={setDeleteModalOpen}
        />
      </CustomModal>


    </div>
  )
}

export default RegionalPage
