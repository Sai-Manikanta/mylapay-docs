import { useState } from 'react'
import Link from 'next/link'
import { Dialog, Popover } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='bg-white sticky top-0 shadow-sm z-50'>
            <header className="wrapper">
                <nav className="flex items-center justify-between py-6 px-4 sm:px-0" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <img className="h-8 w-auto" src="https://mylapay.com/assets/img/mylapaylogo.png" alt="" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden">
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white"><path d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z" fill="currentColor"></path><path d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z" fill="currentColor"></path><path d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                    </div>


                    <Popover.Group className="hidden lg:flex lg:items-center">
                        <Link href="/product-apis" className="text-sm font-semibold leading-6 text-gray-900">
                            Product APIs
                        </Link>
                        <Link href="#" className="ml-8 text-sm font-semibold leading-6 text-gray-900">
                            Developer Guides
                        </Link>
                        <Link href="#" className="ml-8 mr-4 text-sm font-semibold leading-6 text-gray-900">
                            Back to Mylapay
                        </Link>

                        <div className='flex gap-x-3'>
                            <Link class="px-0 py-0 h_btn" href="#">
                                <div class="mr-1 w-fit my-3 mx-4 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3  font-bold text-white rounded-md bg-bluelight hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                    <span class="relative z-10">
                                        Get in touch
                                    </span>
                                </div>
                            </Link>

                            <Link href="/login" class="w-fit my-3 mx-4 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3 font-bold text-white rounded-md bg-bluedark hover:before:bg-bluelight relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                <span class="relative z-10">Login</span>
                            </Link>
                        </div>
                    </Popover.Group>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#1C2331] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-end">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                                    >
                                        Product APIs
                                    </Link>
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                                    >
                                        Developer Guides
                                    </Link>
                                    <Link class="px-0 py-0 h_btn" href="#">
                                        <div class="mr-1 w-fit my-6 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3  font-bold text-white rounded-md bg-bluelight hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                            <span class="relative z-10">
                                                Get in touch
                                            </span>
                                        </div>
                                    </Link>

                                    <Link href="/login" class="w-fit my-6 lg:my-0 lg:mx-0 lg:mr-0 text-[12px] py-2 px-3 font-bold text-white rounded-md bg-bluedark hover:before:bg-bluelight relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase">
                                        <span class="relative z-10">Login</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
