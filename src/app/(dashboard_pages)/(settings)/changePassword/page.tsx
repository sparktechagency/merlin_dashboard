
// "use client"

// import { useState } from "react"
// import { Pencil } from "lucide-react"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { CardContent, CardHeader } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export default function ChangePasswordPage() {
//   const [activeTab, setActiveTab] = useState("editProfile")



//   return (
//     <div className="h-[70vh] flex justify-center  pt-20">
//       <div className="w-full max-w-6xl rounded-xl ">
//         <CardHeader className="flex flex-col items-center p-6 pb-4">
//           <div className="relative mb-4">
//             <Avatar className="h-24 w-24">
//               <AvatarImage src="https://randomuser.me/api/portraits/women/2.jpg" alt="User Avatar" />
//               <AvatarFallback>SM</AvatarFallback>
//             </Avatar>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50 cursor-pointer"
//             >
//               <Pencil className="h-4 w-4 text-primary" />
//               <span className="sr-only">Edit avatar</span>
//             </Button>
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Shara Martinez</h2>
//           <p className="text-sm text-gray-500">example@gmail.com</p>
//         </CardHeader>
//         <CardContent className="p-6 pt-0">





//           <div className="flex justify-center  mb-6">
//             <Button
//               variant="ghost"
//               className={`rounded-none px-6 py-3 text-base font-medium ${activeTab === "editProfile"
//                 ? "border-b-2 border-primary text-priborder-primary"
//                 : "text-gray-600 hover:text-gray-800"
//                 }`}
//               onClick={() => setActiveTab("editProfile")}
//             >
//               Edit profile
//             </Button>



//             <Button
//               variant="ghost"
//               className={`rounded-none px-6 py-3 text-base font-medium ${activeTab === "changePassword"
//                 ? "border-b-2 border-primary text-priborder-primary"
//                 : "text-gray-600 hover:text-gray-800"
//                 }`}
//               onClick={() => setActiveTab("changePassword")}
//             >
//               Change Password
//             </Button>
//           </div>




//           {activeTab === "editProfile" && (
//             <div className="space-y-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-gray-700">
//                   Name
//                 </Label>
//                 <Input
//                   id="name"
//                   className="rounded-lg p-5 bg-[#FFFFFF] "
//                   placeholder="Jhon Doe"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-gray-700">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   className="rounded-lg p-5 bg-[#FFFFFF] "
//                   placeholder="example@gmail.com"
//                 />
//               </div>
//             </div>
//           )}

//           {activeTab === "changePassword" && (
//             <div className="space-y-6">
//               <div className="space-y-2">
//                 <Label htmlFor="current-password" className="text-gray-700">
//                   Current password
//                 </Label>
//                 <Input
//                   id="current-password"
//                   type="password"
//                   placeholder="********"
//                   className="rounded-lg p-5 bg-[#FFFFFF] "
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="new-password" className="text-gray-700">
//                   New password
//                 </Label>
//                 <Input
//                   id="new-password"
//                   type="password"
//                   placeholder="********"
//                   className="rounded-lg p-5 bg-[#FFFFFF] "
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirm-password" className="text-gray-700">
//                   Confirm new password
//                 </Label>
//                 <Input
//                   id="confirm-password"
//                   type="password"
//                   placeholder="********"
//                   className="rounded-lg p-5 bg-[#FFFFFF] "
//                 />
//               </div>
//             </div>
//           )}
//           <div className="flex justify-center items-center ">
//             <Button className="cursor-pointer w-[200px] mt-8 py-6 rounded-lg text-white text-lg font-semibold bg-primary hover:bg-primary hover:opacity-90 transition-colors">
//               Save
//             </Button>
//           </div>
//         </CardContent>
//       </div>
//     </div>
//   )
// }





"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Pencil } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormValues = {
  name: string
  email: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function ChangePasswordPage() {
  const [activeTab, setActiveTab] = useState("editProfile")

  const { register, handleSubmit } = useForm<FormValues>()

  // Submit handler
  const onSubmit = (data: FormValues) => {
    if (activeTab === "editProfile") {
      console.log("Edit Profile Data:", {
        name: data.name,
        email: data.email,
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
        <CardHeader className="flex flex-col items-center p-6 pb-4">
          <div className="relative mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://randomuser.me/api/portraits/women/2.jpg" alt="User Avatar" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50 cursor-pointer"
            >
              <Pencil className="h-4 w-4 text-primary" />
              <span className="sr-only">Edit avatar</span>
            </Button>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Shara Martinez</h2>
          <p className="text-sm text-gray-500">example@gmail.com</p>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="flex justify-center mb-6">
            <Button
              variant="ghost"
              className={`rounded-none px-6 py-3 text-base font-medium ${
                activeTab === "editProfile"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("editProfile")}
            >
              Edit profile
            </Button>
            <Button
              variant="ghost"
              className={`rounded-none px-6 py-3 text-base font-medium ${
                activeTab === "changePassword"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("changePassword")}
            >
              Change Password
            </Button>
          </div>

          {/* Form Start */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
