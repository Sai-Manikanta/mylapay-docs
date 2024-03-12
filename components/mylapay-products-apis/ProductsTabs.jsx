import { Tab } from '@headlessui/react'

function ProductsTabs() {

    return (
        <div className='p-4 bg-bggray'>
            <div className='bg-[#fff] '>
                <div className="wrapper xxl:mx-[-30px]">
                    <div className="py-20 px-4 sm:px-0">

                        <div className="mb-10 text-center md:mb-14">
                            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                Mylapay Product APIs
                            </h2>

                            <p className="text-center mb-10 text-lg text-para max-w-4xl mx-auto px-2">
                                Find the solution that best suits your needs. Browse through Mylapay Products and choose the one or multiple products that right for your business.
                            </p>
                        </div>


                        <Tab.Group>
                            <Tab.List className="border-b-2 border-primary">
                                <Tab className="outline-none">
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected tab. */
                                        <div class="px-0 py-0">
                                            <div class={`mr-1 w-fit text-[12px] py-3 px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                                <span class="relative z-10 select-none">
                                                    Authentication
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </Tab>
                                <Tab className="outline-none">
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected tab. */
                                        <div class="px-0 py-0">
                                            <div class={`mr-1 w-fit text-[12px] py-3 px-4 md:px-8 font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                                <span class="relative z-10 select-none">
                                                    Authorization
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </Tab>
                                <Tab className="outline-none">
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected tab. */
                                        <div class="px-0 py-0">
                                            <div class={`mr-1 w-fit text-[12px] py-3 px-4 md:px-8  font-bold ${selected ? 'text-white' : 'text-bluedark'} rounded-t-md ${selected ? 'bg-bluelight' : '#fff'} hover:before:bg-bluedark relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full uppercase`}>
                                                <span class="relative z-10 select-none">
                                                    Intellengine
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="py-4">
                                <Tab.Panel>Authentication Content</Tab.Panel>
                                <Tab.Panel>Authorization Content</Tab.Panel>
                                <Tab.Panel>Intellengine Content</Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <section className="bg-[#F4F4F4] p-4">
            <div className="wrapper bg-white py-10">
                <div className="wrapper">
                    <Tab.Group>
                        <Tab.List>
                            <Tab>Tab 1</Tab>
                            <Tab>Tab 2</Tab>
                            <Tab>Tab 3</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>Content 1</Tab.Panel>
                            <Tab.Panel>Content 2</Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    )
}

export default ProductsTabs