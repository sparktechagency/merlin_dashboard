
"use client";

import Image from "next/image";

interface CardData {
  id: number;
  name: string;
  location: string;
  image: string;
  avatar: string;
}

const cards: CardData[] = [
  {
    id: 1,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico ",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 5,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 6,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 7,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 8,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 9,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 10,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 11,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 12,
    name: "Md. Abid Hasan",
    location: "Tequila, Mexico",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const handleBackRegionalClick = () => {
  history.back();
} 


export default function RequestedPhotoPage() {
  return (
    <div className="py-4">
      <div className="p-4">
        <svg 
         onClick={handleBackRegionalClick}
         className="cursor-pointer"
        width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 9.15707H4.47022L9.72518 14.3639L8.07396 16L0 8L8.07396 0L9.72518 1.6361L4.47022 6.84293H18V9.15707Z" fill="black" />
        </svg>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {cards.map((card) => (
          <div key={card.id}>
            <div
              className="bg-white rounded-xl  transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between px-4 py-2  bg-[#cbc7c7]">
                <button className="p-1 rounded-full hover:bg-green-100">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.39417 14L0.75 7.36383L2.41104 5.70478L7.39417 10.6819L18.089 0L19.75 1.65904L7.39417 14Z" fill="#01AA20" />
                  </svg>

                </button>

                <div className="h-8 w-px bg-gray-50 mx-2"></div>

                <button className="p-1 rounded-full hover:bg-red-100">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.75 1H11.25L10.25 0H5.25L4.25 1H0.75V3H14.75M1.75 16C1.75 16.5304 1.96071 17.0391 2.33579 17.4142C2.71086 17.7893 3.21957 18 3.75 18H11.75C12.2804 18 12.7891 17.7893 13.1642 17.4142C13.5393 17.0391 13.75 16.5304 13.75 16V4H1.75V16Z" fill="#FF5353" />
                  </svg>

                </button>
              </div>

            </div>



            {/* User Info */}
            <div className="flex  gap-3 px-4 py-3">
              <Image
                src={card.avatar}
                alt={card.name}
                width={36}
                height={36}
                className="w-[40px] h-[40px] rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900 text-[20px]">{card.name}</p>
                <p className="text-gray-500 text-[16px] flex  gap-1">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.262 19.7281C7.262 19.7281 0 13.7354 0 7.83872C0 5.75976 0.842855 3.76595 2.34315 2.29591C3.84344 0.825863 5.87827 0 8 0C10.1217 0 12.1566 0.825863 13.6569 2.29591C15.1571 3.76595 16 5.75976 16 7.83872C16 13.7354 8.738 19.7281 8.738 19.7281C8.334 20.0926 7.669 20.0887 7.262 19.7281ZM8 11.2682C8.45963 11.2682 8.91475 11.1795 9.33939 11.0071C9.76403 10.8348 10.1499 10.5821 10.4749 10.2637C10.7999 9.94524 11.0577 9.56719 11.2336 9.15111C11.4095 8.73503 11.5 8.28908 11.5 7.83872C11.5 7.38836 11.4095 6.94241 11.2336 6.52633C11.0577 6.11025 10.7999 5.73219 10.4749 5.41374C10.1499 5.09529 9.76403 4.84267 9.33939 4.67033C8.91475 4.49798 8.45963 4.40928 8 4.40928C7.07174 4.40928 6.1815 4.77059 5.52513 5.41374C4.86875 6.05688 4.5 6.92917 4.5 7.83872C4.5 8.74826 4.86875 9.62055 5.52513 10.2637C6.1815 10.9068 7.07174 11.2682 8 11.2682Z" fill="#555555" />
                  </svg>
                  {card.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

