"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardContent, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FromInput } from "@/components/reuseable/from-input";
import Form from "@/components/reuseable/from";
import { authSchema } from "@/components/schema";
import { useState } from "react";
import CustomModal from "../CustomModal";
import UserDataModal from "./UserDataModal";



const ExtractUserModal = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);



  const from = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: string) => {
    console.log(values);
  };



  return (
    <div className="rounded-2xl overflow-hidden  ">
      <h1 className="text-center text-[24px] py-3 text-white">Extracting data</h1>
      <div className="flex flex-col items-center justify-center  bg-white p-8">

        <div className="flex flex-col items-center text-center max-w-[500px] w-full ">

          <div>
            <h2 className="text-[22px] font-semibold ">Security verification</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed text-start">
              Please input your admin credentials for extracting <br /> data
            </p>
          </div>

          <CardContent className="w-full pt-8">
            <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
              <FromInput
                className="border h-12 rounded-full focus:outline-none focus:ring-0 focus:border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-gray-300"
                name="email"
                placeholder="Your email"
              />
              <FromInput
                className="border h-12 rounded-full focus:outline-none focus:ring-0 focus:border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-gray-300"
                eye={true}
                name="password"
                placeholder="Password"
                type="password"
              />



              <div className="w-full flex items-center justify-center gap-4 ">
                <Button
                  onClick={() => setUserModalOpen(!userModalOpen)}
                  className="w-full bg-[#004E8F] hover:bg-[#004E8F] hover:opacity-90  flex justify-center items-center rounded-full text-center py-6 text-[16px] cursor-pointer">
                  Extract
                </Button>
              </div>
            </Form>
          </CardContent>
        </div>
      </div>


      {/* modal component(DELETE_USER) */}
      <CustomModal
        open={userModalOpen}
        setIsOpen={setUserModalOpen}
        className={"p-0 max-h-[0vh]"}
        bgColor={"bg-[#004E8F]"}
        maxWidth={"md:!max-w-[30vw]"}
      >
        <UserDataModal
          open={userModalOpen}
          setIsOpen={setUserModalOpen}  
        />
      </CustomModal>
    </div>
  )
}

export default ExtractUserModal
