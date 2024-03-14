// import { lazy } from "react"
import { Tab } from '@headlessui/react'
import dynamic from 'next/dynamic'
// import ReactJson from 'react-json-view'
// const LazyReactJson = lazy(() => import("react-json-view"))
const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });
import { GoGraph } from "react-icons/go"
import { IoMdSwitch } from "react-icons/io"
import { RiSecurePaymentLine } from "react-icons/ri";

const requestJSON = {
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}

const responseJSON = {
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
}

function ProductsTabs() {
    return (
        <div className='p-4 bg-bggray'>
            <div className='bg-[#fff] '>
                <div className="wrapper xxl:mx-[-30px]">
                    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-0">

                        <div className="mb-10 text-center md:mb-14">
                            <h2 className="text-xl font-bold text-bluedark sm:text-3xl md:text-4xl text-center mb-8 px-2">
                                Mylapay Product APIs
                            </h2>

                            <p className="text-center mb-10 text-lg text-para max-w-4xl mx-auto px-2">
                                Find the solution that best suits your needs. Browse through Mylapay Products and choose the one or multiple products that right for your business.
                            </p>
                        </div>


                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsTabs