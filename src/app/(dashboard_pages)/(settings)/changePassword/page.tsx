


"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

type FormValues = {
  name: string
  email: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function ChangePasswordPage() {
  const [activeTab, setActiveTab] = useState("editProfile")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const { register, handleSubmit } = useForm<FormValues>()

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('click')
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImageFile(file)
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  // Submit handler
  const onSubmit = (data: FormValues) => {
    if (activeTab === "editProfile") {
      console.log("Edit Profile Data:", {
        name: data.name,
        email: data.email,
        imageFile,
      })
    }

    if (activeTab === "changePassword") {
      console.log("Password Change Data:", {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      })
    }
  }

  return (
    <div className="h-[70vh] flex justify-center pt-20">
      <div className="w-full max-w-6xl rounded-xl ">
        <CardHeader className="bg-white flex flex-col items-center p-6 pb-4">
          <div
            className="relative mb-4">
            <Image
              src={selectedImage || "https://randomuser.me/api/portraits/women/2.jpg"}
              alt="User Avatar"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover"
            />



            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              id="file-upload"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="file-upload"
              className="absolute bottom-0 right-0 h-8 w-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 cursor-pointer"
            >
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.90918 0.905518C8.08669 0.905547 8.25728 0.975326 8.38281 1.10083C8.50833 1.22634 8.57904 1.39697 8.5791 1.57446C8.5791 1.75196 8.50827 1.92254 8.38281 2.0481C8.25727 2.17364 8.08672 2.24436 7.90918 2.24438H2.31348V13.4358H13.5049V7.84009C13.5049 7.66251 13.5756 7.49202 13.7012 7.36646C13.8267 7.24099 13.9973 7.17017 14.1748 7.17017C14.3521 7.17029 14.522 7.24112 14.6475 7.36646C14.773 7.49202 14.8438 7.66251 14.8438 7.84009V14.1057C14.8436 14.2831 14.7729 14.4529 14.6475 14.5784C14.522 14.7038 14.3522 14.7745 14.1748 14.7747H1.64355C1.46606 14.7746 1.29544 14.7039 1.16992 14.5784C1.0447 14.4529 0.974729 14.283 0.974609 14.1057V1.57446C0.974672 1.39697 1.04441 1.22634 1.16992 1.10083C1.29544 0.975317 1.46606 0.90558 1.64355 0.905518H7.90918Z" fill="#B7A481" stroke="#B7A481" strokeWidth="0.2" />
                <path d="M13.4707 0.474854C13.8745 0.474854 14.2635 0.610682 14.5791 0.855713V0.832275L14.75 1.00317C14.9179 1.17107 15.0507 1.37073 15.1416 1.59009C15.2325 1.80957 15.2793 2.04489 15.2793 2.28247C15.2793 2.52001 15.2325 2.75541 15.1416 2.97485C15.0507 3.1942 14.9179 3.3939 14.75 3.56177L8.84277 9.46704C8.74038 9.56981 8.60746 9.63779 8.46387 9.65845L6.58496 9.927C6.48211 9.94177 6.37692 9.93242 6.27832 9.89966C6.17962 9.8668 6.08919 9.81111 6.01562 9.73755C5.94224 9.6641 5.88733 9.57433 5.85449 9.47583C5.82165 9.37718 5.8124 9.27211 5.82715 9.16919L6.0957 7.28931C6.11604 7.14599 6.18197 7.01291 6.28418 6.9104L12.1924 1.00415C12.5315 0.66516 12.9912 0.474883 13.4707 0.474854ZM13.4736 1.80591C13.4113 1.80646 13.3493 1.8194 13.292 1.84399C13.2348 1.8686 13.1829 1.90469 13.1396 1.94946L13.1387 1.95044L7.3877 7.69849L7.27734 8.47388L8.05273 8.36255L13.8027 2.6145L13.8037 2.61353C13.8485 2.57022 13.8846 2.51845 13.9092 2.46118C13.9338 2.40389 13.9467 2.34189 13.9473 2.27954C13.9478 2.21731 13.9357 2.1555 13.9121 2.0979C13.8885 2.04027 13.8536 1.98764 13.8096 1.9436C13.7655 1.89962 13.7129 1.86463 13.6553 1.84106C13.5977 1.81755 13.5359 1.80537 13.4736 1.80591Z" fill="#B7A481" stroke="#B7A481" strokeWidth="0.2" />
              </svg>


            </label>
          </div>


          <h2 className="text-xl font-semibold text-gray-800">Shara Martinez</h2>
          <p className="text-sm text-gray-500">example@gmail.com</p>
        </CardHeader>


        <CardContent className="p-0 pt-0 max-w-6xl ">
          <div className="flex justify-center my-4">
            <Button
              variant="ghost"
              className={`rounded-none px-6 py-3 text-base font-medium ${activeTab === "editProfile"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab("editProfile")}
            >
              Edit profile
            </Button>
            <Button
              variant="ghost"
              className={`rounded-none px-6 py-3 text-base font-medium ${activeTab === "changePassword"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab("changePassword")}
            >
              Change Password
            </Button>
          </div>

          {/* Form Start */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            {activeTab === "editProfile" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="rounded-lg p-5 bg-[#FFFFFF] placeholder:text-gray-300"
                    placeholder="Jhon Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="rounded-lg p-5 bg-[#FFFFFF] placeholder:text-gray-300"
                    placeholder="example@gmail.com"
                  />
                </div>
              </>
            )}

            {activeTab === "changePassword" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-gray-700">
                    Current password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    {...register("currentPassword")}
                    placeholder="********"
                    className="rounded-lg p-5 bg-[#FFFFFF] placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-gray-700">
                    New password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    {...register("newPassword")}
                    placeholder="********"
                    className="rounded-lg p-5 bg-[#FFFFFF] placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-700">
                    Confirm new password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="********"
                    className="rounded-lg p-5 bg-[#FFFFFF] placeholder:text-gray-300"
                  />
                </div>
              </>
            )}

            <div className="flex justify-center items-center ">
              <Button
                type="submit"
                className="cursor-pointer w-[200px] mt-8 py-6 rounded-lg text-white text-lg font-semibold bg-[#0063E5] hover:bg-[#0063E5] hover:opacity-90 transition-colors"
              >
                Save
              </Button>
            </div>
          </form>
          {/* Form End */}
        </CardContent>
      </div>
    </div>
  )
}
