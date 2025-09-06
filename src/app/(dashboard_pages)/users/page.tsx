
"use client"

import { useState } from "react"
import { Search, ArrowUpRight, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import CustomModal from "@/components/modal/CustomModal"
import DeleteUserModal from "@/components/modal/userModal/DeleteUserModal"



export default function UserPage() {
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, setFilterValue] = useState("F")
  const [isDeleteModal, setIsDeleteModal] = useState(false)




  // Mock user data
  const users = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    name: "John Doe",
    initials: "E",
    status: i % 3 === 0 ? "F" : i % 3 === 1 ? "E" : "D",
  }))

  const filterOptions = [
    { value: "F", label: "F" },
    { value: "R", label: "R" },
    { value: "E", label: "E" },
    { value: "D", label: "D" },
    { value: "O", label: "O" },
    { value: "M", label: "M" },
  ]

  function UserCard({ user }: { user: { id: number; name: string; initials: string; status: string } }) {
    return (
      <div
        onClick={() => setIsDeleteModal(!isDeleteModal)}
        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer ">
        <div className="flex flex-col items-center space-y-3">
          <svg width="71" height="93" viewBox="0 0 71 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.8623 56.4554C63.8851 49.1128 53.3395 44.807 46.9354 40.2626C46.286 39.8011 45.5 39.8849 45.1799 39.2991C44.6408 38.3151 44.7324 36.1214 44.8592 34.9672C45.0382 33.3562 46.0789 31.7336 45.8177 29.9949C49.4091 29.7744 49.7011 23.8683 48.7826 20.8137C48.7795 20.5527 48.7294 20.2831 48.8498 19.9988C48.84 19.8324 48.5678 19.9313 48.5865 19.7354C48.6845 19.5005 48.833 19.3145 48.9014 19.0501C48.9188 18.8404 48.6595 18.907 48.6396 18.7345C48.8156 18.3485 49.1806 18.1533 49.3734 17.7854C49.2518 17.5426 49.531 17.1361 49.2179 16.7833C49.3902 16.581 49.4592 16.0826 49.4271 15.8352C49.563 15.7265 49.9275 15.8468 50.0035 15.6767C49.9073 15.2675 49.5096 14.9015 49.4271 14.4652C49.3398 14.0102 49.4809 13.4928 49.4271 13.0421C49.1858 11.0685 48.1735 9.52691 47.2779 8.14159C47.2757 8.01662 47.3674 7.985 47.328 7.82504C46.7604 7.28712 46.2151 6.66016 45.8086 5.98008C45.2444 5.0375 44.2027 4.45537 43.1339 4.02982C42.1121 3.62423 41.0576 3.29939 39.8834 3.45045C39.5884 3.48822 39.3037 3.65555 38.9921 3.66108C38.3857 3.6709 38.1044 3.34176 37.6819 3.23922C37.0618 3.09092 36.1519 3.08171 35.4267 3.13483C35.1512 3.15448 34.9382 3.29939 34.693 3.34545C33.8037 3.51186 32.9998 3.627 32.1234 3.97793C32.248 3.68103 32.5006 3.51186 32.4905 3.08201C31.5686 3.01907 31.0222 4.06329 30.3938 4.29448C30.5893 3.46703 30.7146 2.767 31.0747 2.18702C31.4465 1.58984 32.1359 1.265 32.3342 0.55269C32.234 0.564358 32.2181 0.493434 32.1237 0.500496C30.7039 1.51247 29.8092 3.05684 29.449 5.13759C28.0136 5.75564 25.0787 5.25979 24.4165 6.82411C24.3444 7.05347 24.6199 6.93557 24.5735 7.13974C24.2283 7.54717 23.6785 7.75043 23.5767 8.4044C23.5532 8.58709 23.8633 8.43419 23.8923 8.56283C22.8607 9.35252 22.0891 10.4041 21.6902 11.83C21.7476 12.0215 21.948 11.822 22.0036 11.9353C21.9984 12.2491 21.6291 12.4471 21.8991 12.7259C21.5842 13.1468 21.0973 13.3961 21.0606 14.0958C21.1116 14.238 21.3908 14.1517 21.4803 14.2552C21.3328 14.651 21.1153 14.9776 21.0606 15.4667C21.2747 15.5506 21.393 15.7302 21.3218 16.0992C21.448 16.1315 21.7021 16.0335 21.7421 16.1514C21.579 16.5662 21.8371 16.8386 21.7953 17.1527C21.7186 17.7068 21.0212 17.8677 21.0606 18.4182C21.0835 18.5702 21.4574 18.3716 21.4803 18.5235C21.3801 18.9399 21.6269 19.0083 21.7421 19.2088C21.7042 19.3743 21.5289 19.5883 21.6361 19.736C21.7058 19.9132 22.0769 19.7854 22.0564 20.0516C21.6862 20.7065 22.3286 20.8917 22.1087 21.6329C22.4166 21.9638 22.5632 22.3344 22.7208 22.7833C22.375 26.0179 23.3794 30.4849 25.8653 30.798C25.6218 34.8386 28.5235 35.721 27.9406 40.1026C25.8323 39.7284 20.0761 44.0821 17.8868 44.9313C13.9579 46.456 9.78403 47.9276 6.54059 50.7305C2.50997 54.2116 2.09453 58.3556 2.08384 63.3658C2.07315 68.4564 4.25326 77.4189 2.08384 81.9753C3.04209 85.2261 1.71667 89.0361 0.5 92.5H12.7993C13.1396 91.1392 13.5006 89.7717 13.8944 88.3928C14.4641 88.271 14.604 89.9483 14.5004 92.5H57.3729C57.4312 91.9271 57.514 91.3597 57.6295 90.8C58.0608 90.7045 58.4866 91.3603 58.8953 92.5H70.5C69.9563 90.5169 69.4028 88.4675 68.9055 86.2808C66.7061 76.6188 72.9062 65.7625 67.8623 56.4554Z" fill="#004E8F" />
            <path d="M28.76 74.5V56.5H41.24V59.11H31.52V64.06H40.31V66.64H31.52V71.89H41.27V74.5H28.76Z" fill="white" />
          </svg>

          <div className="flex items-center gap-2 text-center">
            <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
            <ArrowUpRight className="h-4 w-4 " />
          </div>
        </div>
      </div>
    )
  }





  return (
    <div className=" py-6">
      <div className="">
        {/* Header with search and filter */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search user"
              className="pl-10 h-[50px] bg-white border-gray-200 rounded-full"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-4 w-[150px] h-[50px] rounded-full bg-white border-gray-200">
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.875 6.4H21.125V9.6H4.875V6.4ZM0 0H26V3.2H0V0ZM9.75 12.8H16.25V16H9.75V12.8Z" fill="black" />
                </svg>

                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {filterOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setFilterValue(option.value)}
                  className="flex items-center justify-between"
                >
                  {option.label}
                  {filterValue === option.value && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* User grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>








      {/* modal component(DELETE_USER) */}
      <CustomModal
        open={isDeleteModal}
        setIsOpen={setIsDeleteModal}
        className={"p-0 max-h-[0vh]"}
         bgColor={"bg-[#004E8F]"}
        maxWidth={"md:!max-w-[30vw]"}
      >
        <DeleteUserModal
          open={isDeleteModal}
          setIsOpen={setIsDeleteModal}
        />
      </CustomModal>
    </div>
  )
}
