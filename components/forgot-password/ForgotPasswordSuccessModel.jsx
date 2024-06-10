import { Dialog } from '@headlessui/react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function ResetPasswordSuccessModel({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="bg-bggray fixed top-[50%] left-[50%] z-50 p-4 rounded shadow"
        style={{ transform: 'translate(-50%,-50%)' }}
      >
        <Dialog.Panel>
          <IoCheckmarkCircleSharp size="4rem" className="mx-auto text-[#22C55E]" />
          <Dialog.Title className="text-xl font-bold text-center mb-2 text-bluedark">
            Password reset link sent to your email
          </Dialog.Title>
          <Dialog.Description>
            A password reset link has been sent to your email address. Please check your inbox and follow the instructions to reset your password. If you don't see the email, be sure to check your spam or junk folder.
            <br />
          </Dialog.Description>

          <button onClick={() => setIsOpen(false)} className='block mt-4 rounded w-full text-center py-2 bg-bluedark text-white'>
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </>

  )
}

export default ResetPasswordSuccessModel