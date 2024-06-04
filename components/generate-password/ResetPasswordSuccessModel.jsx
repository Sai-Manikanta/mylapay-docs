import { Dialog } from '@headlessui/react'
// import { IoIosCloseCircle } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Link from 'next/link'

function ResetPasswordSuccessModel({ isOpen, setIsOpen }) {
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
          <Dialog.Title className="text-xl font-bold text-center mb-2 text-bluedark">
            Your password is successfully set
          </Dialog.Title>
          {/* <button className='absolute top-4 right-4' onClick={() => setIsOpen(false)}>
            <IoIosCloseCircle size="1.5rem" />
          </button> */}
          <Dialog.Description>
          Please complete your 2-factor Authentication using Google / Microsoft Authenticator Apps.<br />
          </Dialog.Description>

          <Link href="/login" className='block mt-4 rounded w-full text-center py-2 bg-bluedark text-white'>
          Set 2FA
          </Link>
        </Dialog.Panel>
      </Dialog>
    </>

  )
}

export default ResetPasswordSuccessModel