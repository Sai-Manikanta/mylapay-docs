import { Dialog } from '@headlessui/react'
import { IoIosCloseCircle } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Link from 'next/link'

function RegisterSuccessModel({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          // onClick={() => setIsOpen(true)}
        ></div>
      )}
      <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)} 
        className="bg-bggray fixed top-[50%] left-[50%] z-50 p-4 rounded shadow" 
        style={{ transform: 'translate(-50%,-50%)' }}
      >
        <Dialog.Panel>
          <IoCheckmarkCircleSharp size="4rem" className="mx-auto text-[#22C55E]" />
          <Dialog.Title className="text-xl font-bold text-center mb-2 text-bluedark">Thank you for submitting your information</Dialog.Title>
          {/* <button className='absolute top-4 right-4' onClick={() => setIsOpen(false)}>
            <IoIosCloseCircle size="1.5rem" />
          </button> */}
          <Dialog.Description>
            You will be receiving an email with further instructions to create a username and password. After completing the registration process, you will be able to send test transactions.
          </Dialog.Description>

          <Link href="/login" className='block mt-4 rounded w-full text-center py-2 bg-bluedark text-white'>
            Close
          </Link>
        </Dialog.Panel>
      </Dialog>
    </>

  )
}

export default RegisterSuccessModel