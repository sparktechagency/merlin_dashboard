
import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react";

interface DeleteRegionalProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}


export default function DeletePhoto({ open, setIsOpen }: DeleteRegionalProps) {

  return (
    <div className="rounded-2xl overflow-hidden ">
      <h1 className="text-center text-[24px] py-3 text-white">Delete photo ?</h1>


      <div className="flex flex-col items-center justify-center  bg-white p-8">
        <div className="flex flex-col items-center text-center max-w-md w-full space-y-10">
          <svg
            width="38" height="48"
            viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.4332 2.63334H28.2165L25.5831 0H12.4164L9.7831 2.63334H0.566406V7.90002H37.4332M3.19975 42.1334C3.19975 43.5302 3.75463 44.8698 4.74232 45.8575C5.73001 46.8452 7.06961 47.4001 8.46642 47.4001H29.5331C30.93 47.4001 32.2696 46.8452 33.2572 45.8575C34.2449 44.8698 34.7998 43.5302 34.7998 42.1334V10.5334H3.19975V42.1334Z" fill="#EF4444" />
          </svg>


          <h2 className="text-[22px] font-semibold text-[#EF4444]">You are going to delete this photo</h2>
          <p className="text-[16px] text-gray-700 leading-relaxed">
            After deleting, this photo will removed from your <br /> app and user&apos;s won&apos;t be able to find it.
          </p>

          <div className="flex items-center justify-center gap-4 ">
            <Button
              onClick={() => setIsOpen(!open)}
              className="w-full border border-gray-200 bg-transparent text-black hover:bg-transparent  flex justify-center items-center rounded-full text-center py-6 text-[16px] cursor-pointer">
              Cancel
            </Button>
            
            <Button
              onClick={() => setIsOpen(!open)}
              className="w-full bg-[#EF4444] hover:bg-[#EF4444] hover:opacity-90  flex justify-center items-center rounded-full text-center py-6 text-[16px] cursor-pointer">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}





