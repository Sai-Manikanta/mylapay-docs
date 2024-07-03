import GeneratePaswword from './GeneratePasswordForm'

function Banner() {
    return (
        <div className='bg-bggray'>
            <div className="wrapper py-4 bg-bggray">
                <h2 className="text-2xl font-bold mb-4 text-bluedark">Create a Secure Password</h2>
                <div className='md:grid grid-cols-2 gap-5 items-center'>
                    <div className="flex flex-col justify-center">
                        <h2 className="font-semibold mb-4 text-bluedark">Enter the password of your choice by following the guidelines</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Password length to have minimum of 8 and maximum of 10 characters</li>
                            <li>At least one alphabet in uppercase</li>
                            <li>At least one alphabet in lowercase</li>
                            <li>At least one special character</li>
                            <li>At least one number</li>
                            <li>
                                Avoid using special characters like $ (dollar),; (semicolon), : (colon), “” (double quotation), ‘’ (single quotation), - (minus), _ (underscore)
                            </li>
                            <li>Avoid using repeated characters, for example; 111, aaa, etc.</li>
                            <li>Use unique and unpredictable password combination</li>
                        </ul>
                    </div>
                    <div>
                        <GeneratePaswword />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner