
"use client"

import Image from "next/image"



interface User {
  serial_no: number,
  name: string
  email: string
  time: string,
  amount: number,
  avatar?: string,
}

const users: User[] = [
  {
    "serial_no": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "time": "2025-09-04T09:15:00",
    "amount": 120.50,
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "serial_no": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "time": "2025-09-04T10:30:00",
    "amount": 75.00,
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "serial_no": 3,
    "name": "Carol Williams",
    "email": "carol.williams@example.com",
    "time": "2025-09-04T11:45:00",
    "amount": 200.00,
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "serial_no": 4,
    "name": "David Brown",
    "email": "david.brown@example.com",
    "time": "2025-09-04T12:00:00",
    "amount": 50.75,
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "serial_no": 5,
    "name": "Eva Davis",
    "email": "eva.davis@example.com",
    "time": "2025-09-04T13:15:00",
    "amount": 180.25,
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "serial_no": 6,
    "name": "Frank Miller",
    "email": "frank.miller@example.com",
    "time": "2025-09-04T14:30:00",
    "amount": 95.50,
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg"
  },

]



const DonationsPage = () => {


  return (
    <div className="text-[#fff] mb-6 pt-4">


      <div className="bg-[#004E8F] text-white rounded-lg p-6 flex justify-center items-center text-center mb-4">
        <div>
          <h5>Total donation in this month</h5>
          <h2 className="text-3xl font-bold">$600.00</h2>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium text-black ">
        <div className="col-span-1">Sl. No</div>
        <div className="col-span-3">Name</div>
        <div className="col-span-3">Email</div>
        <div className="col-span-3">Time</div>
        <div className="col-span-1 flex justify-center">Amount</div>
      </div>

      {/* User List */}
      <div className="space-y-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 items-center px-4 py-4  rounded-lg bg-white  text-black"
          >
            <div className="col-span-1">
              {user.serial_no}
            </div>

            {/* User Info */}
            <div className="col-span-3 flex items-center gap-3">
              <Image src={user.avatar!} alt="user photo" width={50} height={50} className="object-cover rounded-full" />
              <div>
                <h1 className="font-medium text-xl">{user.name}</h1>
              </div>
            </div>


            <div className="col-span-3">
              {user.email}
            </div>

            <div className="col-span-3">
              {user.time}
            </div>

            <div className="col-span-1 flex justify-center">
              {user.amount}
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}

export default DonationsPage