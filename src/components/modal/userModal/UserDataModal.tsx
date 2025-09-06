import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction, } from "react";



interface UserDataModalProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}


const UserDataModal = ({ open, setIsOpen }: UserDataModalProps) => {

  return (
    <div className="rounded-2xl overflow-hidden  ">
      <h1 className="text-center text-[24px] py-3 text-white">User data</h1>
      <div className="flex flex-col items-center justify-center  bg-white p-8">

        <div className="flex flex-col items-center text-center max-w-[500px] w-full ">
          <div className="w-full space-y-3 pb-4">
            <div className="w-full h-[50px] flex justify-between items-center px-3 border rounded-full">
              Name:
              <p>John Doe</p>
            </div>
            <div className="w-full h-[50px] flex justify-between items-center px-3 border rounded-full">
              Email:
              <p>example@gmail.com</p>
            </div>
            <div className="w-full h-[50px] flex justify-between items-center px-3 border rounded-full">
              Date of birth:
              <p>02-02-2002</p>
            </div>
            <div className="w-full h-[50px] flex justify-between items-center px-3 border rounded-full">
             Address:
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDataModal
