import GeneratePaswword from './GeneratePasswordForm'

function Banner() {
    return (
        <div className='bg-bggray'>
            <div className="wrapper md:grid grid-cols-2 items-center py-4 bg-bggray">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl text-center md:text-left font-extrabold md:text-4xl leading-[40px] xxl:text-[58px] xxl:leading-[60px] text-black">
                        Lorem Ipsum is<br /> simply dummy text<br /> of the printing
                    </h2>
                </div>
                <div>
                    <GeneratePaswword />
                </div>
            </div>
        </div>
    )
}

export default Banner