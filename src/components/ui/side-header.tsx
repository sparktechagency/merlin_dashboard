"use client"

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { pageTitles } from "@/utils/pageTitles";


const SiteHeader = () => {
  const pathname = usePathname();
  const {title} = pageTitles[pathname] || "";
  const router = useRouter()

console.log('site_header page',title)

  const handleProfile = () => {
    router.push('/changePassword')
  }


  return (
    <div className="bg-white  py-8 px-4 rounded flex justify-between">
      <div>
        <h1 className="text-4xl font-semibold">{title}</h1>
      </div>

      <div className="flex items-center space-x-2">
        <Image
          src="/userImage.png"
          alt='photo'
          width={32}
          height={32}
          onClick={handleProfile}
          className="w-[38px] h-[38px] rounded-full object-cover cursor-pointer"

        />
        <h1 
        onClick={handleProfile}
        className="text-[24px] font-medium cursor-pointer">Mark Rohds</h1>
      </div>
    </div>
  )
}

export default SiteHeader
