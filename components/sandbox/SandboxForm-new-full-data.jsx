import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import JSONInput from "react-json-editor-ajrm/index";
import locale from "react-json-editor-ajrm/locale/en";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Popover } from '@headlessui/react'
import 'react-toastify/dist/ReactToastify.css';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const validationSchema = Yup.object().shape({
    OrganizationID: Yup.string().required('Organization ID is required').length(10, 'Organization ID must be exactly 10 characters'),
    browserIP: Yup.boolean().oneOf([true], 'browserIP is conditionally required').required('browserIP is conditionally required')
});

const data = {
    authentication: {
        apiUrl: 'https://sandbox.mylapay.com/v1/mylapay_secure',
        configuration: {
            OrganizationID: '3576812',
            SecretKey: '91989736'
        },
        Header: {
            host: 'sandbox.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '6237486819'
        }
    },
    authorization: {
        apiUrl: 'https://sandbox.mylapay.com/v1/mylapay_switch',
        configuration: {
            OrganizationID: '2571448',
            SecretKey: '8626561781'
        },
        Header: {
            host: 'sandbox.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
    refund: {
        apiUrl: 'https://sandbox.mylapay.com/v1/mylapay_switch/capture',
        configuration: {
            OrganizationID: '2571448',
            SecretKey: '8626561781'
        },
        Header: {
            host: 'sandbox.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
    capture: {
        apiUrl: 'https://sandbox.mylapay.com/v1/mylapay_switch/capture',
        configuration: {
            OrganizationID: '2571448',
            SecretKey: '8626561781'
        },
        Header: {
            host: 'sandbox.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
    reversal: {
        apiUrl: 'https://sandbox.mylapay.com/v1/mylapay_switch/refund',
        configuration: {
            OrganizationID: '2571448',
            SecretKey: '8626561781'
        },
        Header: {
            host: 'sandbox.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
    void: {
        apiUrl: 'https://sandbox.mylapay.com/v1/mylapay_switch/void',
        configuration: {
            OrganizationID: '2571448',
            SecretKey: '8626561781'
        },
        Header: {
            host: 'sandbox.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
    reversal: {
        apiUrl: 'https://sandbox.mylapay.com/v1/mylapay_switch/reversal',
        configuration: {
            OrganizationID: '2571448',
            SecretKey: '8626561781'
        },
        Header: {
            host: 'sandbox.mylapay.com',
            contentType: 'application/json',
            vcMerchantId: '2963752899'
        }
    },
};

const SandboxForm = () => {
    const router = useRouter();
    const { query } = router;
    const [intialFormData, setIntialFormData] = useState(null);
    const [organizationIDValidationStatus, setOrganizationIDValidationStatus] = useState("pending") // pending/success/failed
    const [parametersData, setParametersData] = useState([
        {
            id: 1,
            fieldCategory: false,
            fields: [
                {
                    name: "Partner ID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed ans-6",
                    description: "Partner ID assigned",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "deviceChannel",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the type of channel interface being used to\ninitiate the transaction.\nValues Accepted:\n01 = App-based (APP)\n02 = Browser (BRW)\n03 = 3DS Requestor Initiated (3RI)",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "messageCategory",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Identifies the category of the message for a specific\nuse case.\nValues Accepted:\n01 = PA\n02 = NPA",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "merchantTransID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "an - 36",
                    description: "Unique Transaction Identifier for merchant / PG",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSCompInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed a-1",
                    description: "Indicates whether the 3DS Method successfully\ncompleted. Required If DeviceChannel 02 - BRW.\nValues Accepted:\nY = Successfully completed\nN = Did not run or did not successfully complete\nU = Unavailable – 3DS Method URL was not present in\nthe PRes message data for the card range associated\nwith the Cardholder Account Number",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSRequestorAuthenticationInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the type of Authentication request. Required\nIf DeviceChannel 01-APP ; 02-BRW\nValues Accepted:\n01 = Payment transaction\n02 = Recurring transaction\n03 = Instalment transaction\n04 = Add card\n05 = Maintain card\n06 = Cardholder verification as part of EMV token\nID&V\n07 = Billing Agreement\n08 = Split shipment\n09 = Delayed shipment\n10 = Split payment",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSRequestorAuthenticationInfo",
                    type: "text",
                    dataType: "Array of objects",
                    lengthAndType: "Size 1–3 elements",
                    description: "Information about how the 3DS Requestor\nauthenticated the Cardholder before or during the\ntransaction.\nValues Accepted: Sub Elements:\n1. threeDSReqAuthData\n2. threeDSReqAuthMethod\n3. threeDSReqAuthTimestamp\nNote: Data will be formatted into a JSON Array of\nobjects prior to being placed into the 3DS Requestor\nAuthentication Information field of the message.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSRequestorID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable\nans - 35",
                    description: "DS-defined 3DS Requestor identifier.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSRequestorName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans - 40",
                    description: "DS-defined 3DS Requestor name.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSRequestorURL",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans -2048 Max",
                    description: "The Fully Qualified URL of the 3DS Requestor Website\nor customer care site.\nValues Accepted: Fully Qualified URL",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeRIInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the type of 3RI request. Required If\nDeviceChannel 03 - 3RI.\nValue Accepted:\n01 = Recurring transaction\n02 = Instalment transaction\n03 = Add card\n04 = Maintain card information\n05 = Account verification\n06 = Split shipment\n07 = Top-up\n08 = Mail Order\n09 = Telephone Order\n10 = Trust List status check11 = Other payment\n12 = Billing Agreement\n13 = Device Binding status check\n14 = Card Security Code status check\n15 = Delayed shipment\n16 = Split payment\n17 = FIDO credential deletion\n18 = FIDO credential registration\n19 = Decoupled Authentication Fallback",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acceptLanguage",
                    type: "text",
                    dataType: "Array of String",
                    lengthAndType: "Variable Size: n - 1 to 99 String: 100 Max",
                    description: "This field is Required If DeviceChannel 02 - BRW.\nValue Accepted:\nValue representing the Browser language preference present in the HTTP header",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acquirerBIN",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "variable n-11",
                    description: "Acquiring institution identification code as assigned by\nthe DS receiving the message.\nThis field is required, If Message Category, 01-PA = Required ; 02-NPA = Optional.\nValue Accepted:\nThis value correlates to the Acquirer BIN as defined by each Payment System.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acquirerCountryCode",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "The code of the country where the acquiring institution is located.\nValues accepted:\nNumeric three-digit country code, other than exceptions table listed below.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acquirerCountryCodeSource",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "This data element is populated by the system setting \nthe Acquirer Country Code.\nThe DS may edit the value provided by the 3DS Server.\nValues accepted:\n01 = 3DS Server\n02 = DS",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acquirerMerchantID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable \nans- 35",
                    description: "Acquirer-assigned Merchant identifier. The same value \nmust be used in the authorisation request.\nThis field is required, If Message Category, 01-PA = \nRequired 02-NPA = Optional \nValue Accepted:\nIndividual Directory Servers may impose specific \nformat and character requirements on the contents of \nthis field.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "browserAcceptHeader",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable \nans - 2048",
                    description: "Exact content of the HTTP accepts headers as sent to \nthe 3DS Requestor from the Cardholder Browser. This \nfield is required, If DeviceChannel is 02 - BRW",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "browserJavascriptEnabled",
                    type: "text",
                    dataType: "Boolean",
                    lengthAndType: true,
                    description: "This field is required, If DeviceChannel is 02 - BRW. \nBoolean that represents the ability of the Cardholder \nBrowser to execute JavaScript.\nValues Accepted:\ntrue\nfalse",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "browserUserAgent",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable \nans- 2048",
                    description: "This field is required, If DeviceChannel 02 - BRW. Exact content of the HTTP user-agent header",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo",
                    type: "text",
                    dataType: "Object",
                    lengthAndType: "Variable",
                    description: "Additional information about the Cardholder’s \naccount provided by the 3DS Requestor.\nValues: Sub Elements: \n1.Cardholder Account Age Indicator\n2.Cardholder Account Change\n3.Cardholder Account Change Indicator\n4.Cardholder Account Date\n5.Cardholder Account Requestor ID\n6.Cardholder Account Password Change\n7.Cardholder Account Password Change Indicator\n8.Cardholder Account Purchase Count\n9.Number of Provisioning Attempts Per Day\n10.Number of Transactions Per Day\n11.Number of Transactions Per Year\n12.Payment Account Age\n13.Payment Account Age Indicator\n14.Shipping Address Usage\n15.Shipping Address Usage Indicator\n16.Shipping Name Indicator\n17.Suspicious Account Activity",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.chAccAgeInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Values accepted:\n01 = No account (guest check-out)\n02 = Created during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.chAccChange",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.chAccChangeInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Values accepted:\n01 = Changed during this transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.chAccDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.chAccReqID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an-64",
                    description: "The 3DS Requestor assigned account identifier of the \ntransacting Cardholder. \nThis identifier is coded as the SHA-256 + Base64url of the account identifier for the 3DS Requestor and is provided as a String",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.chAccPwChange",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.chAccPwChangeInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.\nValues accepted:\n01 = No change\n02 = Changed during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.nbPurchaseAccount",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-4",
                    description: "Number of purchases with this cardholder account during the previous six months. If the Cardholder Account Purchase Count reaches the value 999, it remains set at 999. Values accepted: 0–999",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.provisionAttemptsDay",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-3",
                    description: "Number of Add Card attempts in the last 24 hours",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.txnActivityDay",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-3",
                    description: "Number of transactions (successful and abandoned) for this \ncardholder account with the 3DS Requestor across all \npayment accounts in the previous 24 hours.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.txnActivityYear",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. If the maximum value is reached, the Number of Transactions Per Year remains set at 999. Values accepted: 0–99",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.paymentAccAge",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Date converted into UTC that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.paymentAccInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the length of time that the payment account was \nenrolled in the cardholder’s account \nwith the 3DS Requestor.\nValues accepted:\n01 = No account (guest check-out)\n02 = During this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.shipAddressUsage",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Date converted into UTC when the shipping address used for the is transaction was first used with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.shipAddressUsageInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.\nValues accepted:\n01 = This transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.shipNameIndicator",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. Values accepted: 01 = Account Name identical to shipping Name 02 = Account Name different than shipping Name",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctInfo.suspiciousAccActivity",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates whether the 3DS Requestor has experienced \nsuspicious activity (including previous \nfraud) on the cardholder account.\nValues accepted:\n01 = No suspicious activity has been observed\n02 = Suspicious activity has been observed",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctNumber",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n- 13 to 19",
                    description: "Account number that will be used in the authorisation \nrequest for payment transactions. May be \nrepresented by PAN, Payment Token.\r",
                    status: "mandate",
                    checked: true,
                    value: ""
                },

                {
                    name: "mcc",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-4",
                    description: "This value correlates to the Merchant Category Code as defined by each Payment System or DS. The same value must be used in the authorisation request. This field is based on the Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "merchantCountryCode",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "This value correlates to the Merchant Country Code as defined by each Payment System or DS. The same value must be used in the authorisation request. Numeric three-digit country code, other than exceptions table listed below. This field is based on the Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "merchantName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a-40",
                    description: "Merchant name assigned by the Acquirer or Payment System. The same value must be used in the authorisation request. This field is based Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "messageType",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed a-4",
                    description: "Identifies the type of message that is passed.\nValues Accepted:\nAreq \nARes\nCReq\nCRes\nOReq\nORes\nPreq\nPRes\nRReq\nRRes\nErro",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "messageVersion",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n - 5 to 8",
                    description: "The Message Version Number is set by the 3DS Server \nwhich originates the protocol with the Areq message. \nThe Message Version Number does not change during \na 3DS transaction.\nValues Accepted: Major.minor. patch",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "notificationURL",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans- 256",
                    description: "Required If, the deviceChannel 02 - BRW.\nFully Qualified URL of the system that receives the \nCRes message or Error Message. The CRes message is \nposted by the ACS through the Cardholder Browser at \nthe end of the challenge and receipt of the RRes \nmessage.\nValue: Fully Qualified URL",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "purchaseAmount",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-48",
                    description: "Purchase amount in minor units of currency with all \npunctuation removed. When used in conjunction with \nthe Purchase Currency Exponent field, proper \npunctuation can be \ncalculated. \nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, \n08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, \n08, 09, 11, 15",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "purchaseCurrency",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "Currency in which purchase amount is expressed. For message category 01 PA - Required, for 02-NPA : if 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09 Required for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15 Three-digit country code, other than exceptions table listed below.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "purchaseExponent",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-1",
                    description: "Minor units of currency as specified in the ISO 4217 currency exponent. For message category 01 PA - Required, for 02-NPA : if 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09 Required for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "purchaseDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-14",
                    description: "Date and time of the authentication converted into \nUTC. \nFormat accepted: \nYYYYMMDDHHMMSS\nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, \n08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, \n08, 09, 11, 15",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sdkType",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the type of 3DS SDK. Required If DeviceChannel 01 - APP 01 = Default-SDK 02 = Split-SDK",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sdkEphemPubKey",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-256 Max",
                    description: "Required If DeviceChannel is 01 - APP \nPublic key component of the ephemeral key pair \ngenerated by the 3DS SDK and used to establish \nsession keys between the 3DS SDK and ACS.\nIn AReq, this data element is present as its own object.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "acctType",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the type of account. For example, for a \nmulti-account card product.\n01 = Not applicable\n02 = Credit\n03 = Debit",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "appIp",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans- 45 Max",
                    description: "External IP address (i.e., the device public IP address) \nused by the 3DS Requestor App when it connects to \nthe 3DS Requestor environment.\nRequired, the DeviceChannel 01-APP",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddrCity",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a-50",
                    description: "City portion of the shipping address requested by the \nCardholder.\nRequired (if available) unless market or regional \nmandate restricts sending this information.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddrCountry",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "Required if Cardholder Shipping Address State is present. Country of the shipping address requested by the Cardholder. Three-digit country code, other than exceptions listed in table below",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddrLine1",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-50",
                    description: "First line of the street address or equivalent local portion of the shipping address requested by the Cardholder.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddrLine2",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-50",
                    description: "The second line of the street address or equivalent \nlocal portion of the shipping address requested by the \nCardholder",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddrLine3",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-50",
                    description: "The third line of the street address or equivalent local portion of the shipping address requested by the Cardholder",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddrPostCode",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-6",
                    description: "The ZIP or other postal code of the shipping address requested by the Cardholder",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddrState",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a-3",
                    description: "The state or province of the shipping address associated with the card being used for this purchase. For example, using the ISO entry US-CA (California, United States), the correct value for this field = CA. Note: that the country and hyphen are not included in this value.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "workPhone",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable cc: n : 1–3 subscriber: n : 15",
                    description: "The work phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "taxId",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-45",
                    description: "Cardholder’s tax identification. Conditional based on DS rules",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSMethodId",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed ans-36",
                    description: "Contains the 3DS Server Transaction ID used during \nthe previous execution of the 3DS Method.\nRequired if 3DS Requestor reuses previous 3DS \nMethod execution and the Device channel 02-BRW",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sellerInfo.sellerName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a- 100",
                    description: "Name of the Seller",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sdkAppID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed ans-36",
                    description: "Required, If Device channel - 01 APP Universally unique ID created upon all installations of the 3DS Requestor App on a Consumer Device. This will be newly generated and stored by the 3DS SDK for each installation. Note: In case of SplitSDK/Browser, the SDK App ID value is not reliable, and may change for each transaction.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sdkMaxTimeout",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Required, If Device channel - 01 APP \nValues accepted: Greater than or = 05",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sdkReferenceNumber",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-32",
                    description: "Identifies the vendor and version of the 3DS SDK that is used for a specific transaction. Required, If Device channel - 01 APP",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                // conditionally required data
                {
                    name: "threeDSRequestorDecMaxTime",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-5",
                    description: "Indicates the maximum amount of time that the 3DS \nRequestor will wait for an ACS to provide the results of \na Decoupled Authentication transaction (in minutes)\nNumeric values between 00001 and 10080\nRequired if 3DS Requestor, Decoupled Request \nIndicator = Y or F or B",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "threeDSRequestorSpcSupport",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed a-1",
                    description: "This field is required if supported by the 3DS Requestor and deviceChannel field 02-BRW. Indicate if the 3DS Requestor supports the SPC authentication. Note: If present, the value Y = Supported",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "browserIP",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n - 45",
                    description: "IP address of the Browser as returned by the HTTP \nheaders to the 3DS Requestor.\nRequired, If deviceChannel field 02 - BRW",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "browserJavaEnabled",
                    type: "text",
                    dataType: "Boolean",
                    lengthAndType: "Fixed a-4",
                    description: "Required if Browser JavaScript Enabled = true; \notherwise, Optional and deviceChannel field 02-BRW\nValues Accepted:\ntrue\nfalse\nBoolean that represents the ability of the cardholder \nbrowser to execute Java. Value is returned from the \nnavigator. javaEnabled property",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "browserLanguage",
                    type: "text",
                    dataType: "Boolean",
                    lengthAndType: "Variable a-35 Max",
                    description: "The Value defining the Browser Language. Required, deviceChannel field 02 - BRW and Browser JavaScript Enabled = true; otherwise, Optional",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "browserColorDepth",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n - 1 to 2",
                    description: "Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW This Value representing the bit depth of the colour palette for displaying images, in bits per pixel. Obtained from the Cardholder Browser using the screen.colorDepthproperty Values : 1–99",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "browserScreenHeight",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n - 1 to 6",
                    description: "This field Total height of the Cardholder’s screen in pixels. Value is returned from the screen.height property. Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "browserScreenWidth",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n - 1 to 6",
                    description: "Total width of the Cardholder’s screen in pixels.Value is returned from the screen.width property. Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "browserTZ",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n - 1 to 5",
                    description: "Time zone offset in minutes between UTC and the \nCardholder Browser local time.\nValue is returned from the getTimezoneOffset() \nmethod.\nExample time zone offset values in minutes:\nIf UTC -5 hours:\n300\n+300\nIf UTC +5 hours:\n-300\nRequired if Browser JavaScript Enabled = true; \notherwise, Optional and deviceChannel field 02-BRW",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "deviceId",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans- 64 Max",
                    description: "Required if available. Unique and immutable identifier linked to a device that is consistent across 3DS transactions for the specific user device. Examples: Hardware Device ID Platform-calculated device fingerprint",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "userId",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans- 64 Max",
                    description: "Required if available.\nIdentifier of the transacting user’s Browser Account ID. \nThis identifier is a unique immutable hash of the user’s \naccount identifier for the given Browser, provided as a \nstring.\nNote: Cardholders may have more than one account \non a given Browser",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "cardExpiryDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-4",
                    description: "Expiry Date of the PAN or token supplied to the 3DS Requestor by the Cardholder. Format accepted: YYMM The requirements for the presence of this field are DSspecifi",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "cardSecurityCode",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-3 to 4",
                    description: "Three- or four-digit security code printed on the card. \nAction defined by Payment System rules.Conditional \nbased on DS rules",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "billAddrCity",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans - 50",
                    description: "The city of the Cardholder billing address associated \nwith the card used for this purchase.\nConditionally required for 01-PA: Required unless \nmarket or regional mandate restricts sending this \ninformation.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "billAddrCountry",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "The country of the Cardholder billing address \nassociated with the card used for this purchase.\nRequired if Cardholder Billing Address State is present. \n01-PA Required unless market or regional mandate \nrestricts sending this information.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information.\nThe Numeric three-digit country code, other than \nexceptions listed in table below",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "billAddrLine1",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-50",
                    description: "First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required if Cardholder Billing Address State is present. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "billAddrLine2",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-50",
                    description: "Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "billAddrLine3",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-50",
                    description: "Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "billAddrPostCode",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans- 16",
                    description: "ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "billAddrState",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a -3",
                    description: "The state or province of the Cardholder billing address associated with the card used for this purchase. 01-PA: Required unless market or regional mandate restricts sending this information, or State is not applicable for this country. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information, or State is not applicable for this country.",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "email",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-254",
                    description: "The email address associated with the account that is either entered by the Cardholder or is on file with the 3DS Requestor. Required (if available) unless market or regional mandate restricts sending this information",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "homePhone",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
                    description: "The home phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional \nmandate restricts sending this information",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "mobilePhone",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
                    description: "The mobile phone number provided by the \nCardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional \nmandate restricts sending this information.",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "cardholderName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a- 1 to 45",
                    description: "Name of the Cardholder.\nThis field is Required unless market or regional \nmandate restricts sending this information and Device \nchannel field 02-BRW",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "payTokenSource",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Required if EMV Payment Token Indicator = true.\nThis data element will be populated by the system \nresiding in the 3-D Secure\ndomain where the detokenization occurs.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "payTokenInd",
                    type: "text",
                    dataType: "Boolean",
                    description: "A value of True indicates that the transaction was detokenized prior to being received by the ACS. This data element will be populated by the system residing in the 3-D Secure domain where the detokenization occurs (i.e., the 3DS Server or the DS). Value Accepted: true Required, if there is a detokenization of an Account Number.",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "payeeOrigin",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans - 2048",
                    description: "The origin of the payee that will be provided in the \nSPC Transaction Data.\nFully Qualified URL:\nThis field is Required if 3DS Requestor SPC = Y Support \nand Device channel field 02 - BRW",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "recurringAmount",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-48",
                    description: "Recurring amount in minor units of currency with all punctuation removed. For message category 01 PA - Required, for 02-NPA : 3DS Requestor Authentication Indicator = 02 or 03 ; OR 3RI Indicator = 01 or 02 and Recurring Indicator/ Amount Indicator = 01",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "recurringCurrency",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "Required if the Recurring Amount is present. Currency \nin which the Recurring Amount is expressed. Three digit currency code, other than exceptions listed in \ntable below.",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "recurringExponent",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-1",
                    description: "Required if the Recurring Amount is present.",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "recurringDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Required if Recurring Indicator/ Frequency Indicator = 01. Effective date of the new authorised amount following the first/promotional payment in a recurring or instalment transaction. Date format accepted: YYYYMMDD",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "recurringExpiry",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Required if there is an end date. Date format accepted: YYYYMMDD",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "recurringFrequency",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-4",
                    description: "Required if Recurring Indicator/ Frequency Indicator = \n01.\nIndicates the minimum number of days between \nauthorisations for a recurring or instalment \ntransaction.\nNumeric values between 1 and 9999",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "recurringInd",
                    type: "text",
                    dataType: "Object",
                    description: "Required if: 3DS Requestor Authentication Indicator = \n02 or 03; OR 3RI Indicator = 01 or 02\nIndicates whether the recurring or instalment \npayment has a fixed or variable amount and \nfrequency.\nThe Recurring Indicator object contains: \nthe Amount Indicator\nthe Frequency Indicator\nField Name: amountInd\nValues accepted: \n01 = Fixed Purchase Amount\n02 = Variable Purchase Amount \n03–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use\nField Name: frequencyInd\nValues accepted: \n01 = Fixed Frequency\n02 = Variable or Unknown Frequency\n03–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "sdkEncData",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-64000",
                    description: "Required, If Device channel = 01 - APP and Required \nfrom the 3DS Server to the DS but will not be present \nfrom the DS to the ACS",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "transType",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Identifies the type of transaction being authenticated.\n01 = Goods/ Service Purchase\n03 = Check Acceptance\n10 = Account Funding\n11 = Quasi-Cash Transaction\n28 = Prepaid Activation and Load",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "spcIncompInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Reason that the SPC authentication was not completed. 01 = SPC did not run or did not successfully complete 02 = Cardholder cancelled the SPC authentication 03 = SPC timed out 04–99 = Reserved for EMVCo future use (values invalid until defined by EMVCo) Required if the 3DS Requestor attempts to invoke the SPC API and there is an error and the Device channel 02-BRW",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "messageExtension",
                    type: "text",
                    dataType: "Array of objects",
                    lengthAndType: "Variable n - 1 to 15",
                    description: "Data necessary to support requirements not otherwise \ndefined in the 3-D Secure message are carried in a \nMessage Extension.\nValues Accepted: Sub Elements: \n1.Extension name \n2.Assigned extension group identifier\n3.Criticality indicator\n4.Data",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "sdkTransID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed an-36",
                    description: "Required, If Device channel = 01 - APP Universally unique transaction identifier assigned by the 3DS SDK to identify a single transaction",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "defaultSdkType",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed sdkVariant : n-2 wrappedIn d : n-1",
                    description: "Required if SDK Type = 01 Default-SDK and Device channel = 01 - APP SdkVariant Values accepted: 01 = Native 02–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo) 80–99 = Reserved for DS use WrappedInd Value accepted: Y = Wrapped Only present if value = Y",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "sdkServerSignedContent",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable",
                    description: "Required if SDK Type = 02 Indicates the characteristics \nof a Split-SDK and Device channel - 01 APP \nValues Accepted:\n1.SDK Reference Number\n2.SDK Signature Timestamp\n3.SDK Transaction ID\n4.Split-SDK Server ID",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "splitSdkType",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed sdkVariant : n-2 limited : n1",
                    description: "Required if SDK Type = 02 Indicates the characteristics of a Split-SDK and Device channel - 01 APP sdkVariant Values accepted: 01 = Native Client 02 = Browser 03 = Shell 04–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo) 80–99 = Reserved for DS use limitedInd Value accepted: Only present if value = Y, Y = Limited",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "trustListStatusSource",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Required if the Trust List Status is present.\nThis data element will be populated by the system \nsetting Trust List Status.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "deviceBindingStatusSource",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Required if Device Binding Status is present. This data element will be populated by the system setting Device Binding Status. Values accepted: 01 = 3DS Server 02 = DS 03 = ACS",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                //   Optional 
                {
                    name: "threeDSRequestorChallengeInd",
                    type: "text",
                    dataType: "Array of String",
                    lengthAndType: "Fixed Size : 1-2 elements n - 2",
                    description: "Indicates whether a challenge is requested for this \ntransaction.\n01 = No preference\n02 = No challenge requested\n03 = Challenge requested (3DS Requestor preference)\n04 = Challenge requested (Mandate)\n05 = No challenge requested (transactional risk \nanalysis is already performed)\n06 = No challenge requested (Data share only)\n07 = No challenge requested (strong consumer \nauthentication is already performed)\n08 = No challenge requested (use Trust List exemption \nif no challenge required)\n09 = Challenge requested (Trust List prompt requested \nif challenge required)\n10 = No challenge requested\n(use low value exemption)\n11 = No challenge requested\n(Secure corporate payment exemption)\n12 = Challenge requested (Device Binding prompt \nrequested if challenge required)\n13 = Challenge requested (Issuer requested)\n14 = Challenge requested (Merchant-initiated \ntransactions)\n15–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use\nNote: If the element is not provided, the expected \naction is that the ACS would interpret as 01 = No \npreference.",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "threeDSRequestorDecReqInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed a-1",
                    description: "Indicates whether the 3DS Requestor requests the ACS \nto use Decoupled Authentication and agrees to use \nDecoupled Authentication if the ACS confirms its use.\nY = Decoupled Authentication is supported and \npreferred if challenge is necessary\nN = Do not use Decoupled Authentication\nF = Decoupled Authentication is supported and is to be \nused only as a fallback challenge \nmethod if a challenge is necessary.\nB = Decoupled Authentication is supported and can be \nused as a primary or fallback challenge method if a challenge is necessary.",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "addrMatch",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed a-1",
                    description: "Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. Required If, DeviceChannel is 01- APP ; 02- BRW. Y = Shipping Address matches Billing Address N = Shipping Address does not match Billing Address",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "acctID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an-64",
                    description: "Additional information about the account optionally provided by the 3DS Requestor.",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "merchantDSPassword",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "",
                    description: "Merchant 1.0 Directory sever registered password",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "challengeWindowSize",
                    type: "text",
                    dataType: "String",
                    description: "Optional but required for deviceChannel 02 - BRW Challenge window size. Values accepted: 01 = 250 x 400 02 = 390 x 400 03 = 500 x 600 04 = 600 x 400 05 = Full screen",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "trustListStatus",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed a-1",
                    description: "Enables the communication of trust list status between the ACS, the DS and the 3DS Requestor. Y = 3DS Requestor is Trust Listed by Cardholder N = 3DS Requestor is not Trust Listed by Cardholder E = Not eligible as determined by issuer P = Pending confirmation by Cardholder R = Cardholder rejected U = Trust List status unknown, unavailable, or does not apply Note: Valid values in the AReq message are Y or N",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "deviceBindingStatus",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Enables the communication of Device Binding Status \nbetween the ACS, the DS and the 3DS Requestor. For \nbound devices (value = 11–14), Device Binding Status \nalso conveys the type of binding that was performed.\nValues accepted: \n01 = Device is not bound by Cardholder\n02 = Not eligible as determined by Issuer\n03 = Pending confirmation by Cardholder\n04 = Cardholder rejected\n05 = Device Binding Status unknown, unavailable, or \ndoes not apply\n06–10 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n11 = Device is bound by Cardholder (device is bound \nusing hardware / SIM internal \nto the Consumer Device. For instance, keys stored in a \nsecure element on the device)\n12 = Device is bound by Cardholder (device is bound \nusing hardware external to the \nConsumer Device. For example, an external FIDO \nAuthenticator\n13 = Device is bound by Cardholder (Device is bound \nusing data that includes \ndynamically generated data and could include a \nunique device ID)\n14 = Device is bound by Cardholder (Device is bound \nusing static device data that has been obtained from \nthe Consumer Device\n15 = Device is bound by Cardholder (Other method)",
                    status: "optional",
                    checked: false,
                    value: ""
                },
            ]
        },
        {
            id: 4,
            fieldCategory: true,
            fieldCategoryName: 'AcctInfo',
            fields: [
                {
                    name: "acctInfo",
                    type: "text",
                    dataType: "Object",
                    lengthAndType: "Variable",
                    description: "Additional information about the Cardholder’s \naccount provided by the 3DS Requestor.\nValues: Sub Elements: \n1.Cardholder Account Age Indicator\n2.Cardholder Account Change\n3.Cardholder Account Change Indicator\n4.Cardholder Account Date\n5.Cardholder Account Requestor ID\n6.Cardholder Account Password Change\n7.Cardholder Account Password Change Indicator\n8.Cardholder Account Purchase Count\n9.Number of Provisioning Attempts Per Day\n10.Number of Transactions Per Day\n11.Number of Transactions Per Year\n12.Payment Account Age\n13.Payment Account Age Indicator\n14.Shipping Address Usage\n15.Shipping Address Usage Indicator\n16.Shipping Name Indicator\n17.Suspicious Account Activity",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "chAccAgeInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Values accepted:\n01 = No account (guest check-out)\n02 = Created during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "chAccChange",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "chAccChangeInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Values accepted:\n01 = Changed during this transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "chAccDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "chAccReqID",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an-64",
                    description: "The 3DS Requestor assigned account identifier of the \ntransacting Cardholder. \nThis identifier is coded as the SHA-256 + Base64url of the account identifier for the 3DS Requestor and is provided as a String",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "chAccPwChange",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "chAccPwChangeInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.\nValues accepted:\n01 = No change\n02 = Changed during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "nbPurchaseAccount",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-4",
                    description: "Number of purchases with this cardholder account during the previous six months. If the Cardholder Account Purchase Count reaches the value 999, it remains set at 999. Values accepted: 0–999",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "provisionAttemptsDay",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-3",
                    description: "Number of Add Card attempts in the last 24 hours",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "txnActivityDay",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-3",
                    description: "Number of transactions (successful and abandoned) for this \ncardholder account with the 3DS Requestor across all \npayment accounts in the previous 24 hours.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "txnActivityYear",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. If the maximum value is reached, the Number of Transactions Per Year remains set at 999. Values accepted: 0–99",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "paymentAccAge",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Date converted into UTC that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "paymentAccInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the length of time that the payment account was \nenrolled in the cardholder’s account \nwith the 3DS Requestor.\nValues accepted:\n01 = No account (guest check-out)\n02 = During this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddressUsage",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Date converted into UTC when the shipping address used for the is transaction was first used with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipAddressUsageInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.\nValues accepted:\n01 = This transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipNameIndicator",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. Values accepted: 01 = Account Name identical to shipping Name 02 = Account Name different than shipping Name",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "suspiciousAccActivity",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates whether the 3DS Requestor has experienced \nsuspicious activity (including previous \nfraud) on the cardholder account.\nValues accepted:\n01 = No suspicious activity has been observed\n02 = Suspicious activity has been observed",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
            ]
        },
        {
            id: 5,
            fieldCategory: true,
            fieldCategoryName: 'deviceRenderOptions',
            fields: [
                {
                    name: "sdkAuthenticationType",
                    type: "text",
                    dataType: "Array of String",
                    lengthAndType: "Fixed Size: 1 - 99 elements n-2",
                    description: "Authentication methods preferred by the 3DS SDK in order of preference. Size: 1–99 elements Values accepted: 01 = Static Passcode 02 = SMS OTP 03 = Key fob or EMV card reader OTP 04 = App OTP 05 = OTP Other 06 = KBA 07 = OOB Biometrics 08 = OOB Login 09 = OOB Other 10 = Other 11 = Push Confirmation",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sdkInterface",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Lists all of the SDK Interface types that the device supports for displaying specific challenge user interfaces within the 3DS SDK. Values accepted: 01 = Native 02 = HTML 03 = Both",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sdkUiType",
                    type: "text",
                    dataType: "Array of String",
                    lengthAndType: "Variable Size: 1–7 elements n-2",
                    description: "Lists all UI types that the device supports for displaying specific challenge user interfaces within the 3DS SDK. Valid values for each Interface: Native UI = 01–04, 07 HTML UI = 01–07 Values accepted: 01 = Text 02 = Single Select 03 = Multi Select 04 = OOB 05 = HTML Other (valid only for HTML UI) 06 = HTML OOB (valid only for HTML UI) 07 = Information",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
            ]
        },
        {
            id: 6,
            fieldCategory: true,
            fieldCategoryName: 'Merchant Risk Indicator',
            fields: [
                {
                    name: "deliveryEmailAddress",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans-254",
                    description: "For Electronic delivery, the email address to which the merchandise was delivered",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "deliveryTimeframe",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the merchandise delivery timeframe. \nValues accepted:\n01 = Electronic Delivery\n02 = Same day shipping\n03 = Overnight shipping\n04 = Two-day or more shipping",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "giftCardAmount",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n-15",
                    description: "For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, USD 123.45 is 123). Example: gift card amount is USD 123.45: Values accepted: 123 0123 00123",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "giftCardCount",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "giftCardCurr",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-3",
                    description: "The Numeric three-digit country code, other than exceptions listed in table below",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "preOrderDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "For a pre-ordered purchase, the expected date that the merchandise will be available. Format accepted: Date format = YYYYMMDD",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "preOrderPurchaseInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates whether Cardholder is placing an order for merchandise with a future availability or release date. Values accepted: 01 = Merchandise available 02 = Future availability",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "reorderItemsInd",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates whether the cardholder is reordering previously purchased merchandise. Values accepted: 01 = First time ordered 02 = Reordered",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "shipIndicator",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates shipping method chosen for the transaction. Values accepted: 01 = Ship to cardholder’s billing address 02 = Ship to another verified address on file with merchant 03 = Ship to address that is different than the cardholder’s billing address 04 = “Ship to Store” / Pick-up at local store (Store address shall be populated in shipping address fields) 05 = Digital goods (includes online services, electronic gift cards and redemption codes) 06 = Travel and Event tickets, not shipped 07 = Other (for example, Gaming, digital services not shipped, emedia subscriptions, etc.) 08 = Pick-up and go delivery 09 = Locker delivery (or other automated pick-up)",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "transChar",
                    type: "text",
                    dataType: "Array of String",
                    lengthAndType: "Variable \nSize: \n1–2 \nelements\nn-2",
                    description: "Indicates to the ACS specific transactions identified by the Merchant. Value accepted: 01 = Cryptocurrency transaction 02 = NFT transaction",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
            ]
        },
        {
            id: 7,
            fieldCategory: true,
            fieldCategoryName: 'Message Extension',
            fields: [
                {
                    name: "criticalityIndicator",
                    type: "text",
                    dataType: "Boolean",
                    description: "A Boolean value indicating whether the recipient must \nunderstand the contents of the extension to interpret the \nentire message.\nValues accepted:\ntrue\nfalse",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "data",
                    type: "text",
                    dataType: "Object",
                    lengthAndType: "Variable ans - 8059",
                    description: "The data carried in the extension",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "id",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an - 64",
                    description: "A unique identifier for the extension.\nNote: Payment System Registered Application Provider \nIdentifier (RID) is required as prefix of the ID.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "name",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an - 64",
                    description: "The name of the extension data set as defined by the extension owner",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
            ]
        },
        {
            id: 8,
            fieldCategory: true,
            fieldCategoryName: 'Broad Info',
            fields: [
                {
                    name: "category",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the category/type of information.\nValues accepted:\n01 = General\n02 = Certificate expiry\n03 = Fraud alert\n04 = Operational alert\n05 = Transactional data\n06 = Other",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "severity",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the importance/severity level of the broadcasted information. Values accepted: 01 = Critical = Immediate action to be taken by recipient 02 = Major = Major impact; Upcoming action to be taken by recipient 03 = Minor = Minor impact; Upcoming action to be taken by recipient 04 = Informational = Informational only with no immediate action by recipient",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "recipients",
                    type: "text",
                    dataType: "Array of String",
                    lengthAndType: "Variable a- 3",
                    description: "Indicates the intended recipient(s) of the broadcasted \ninformation.\nValues accepted:\n01 = 3DS SDK\n02 = 3DS Server\n03 = DS\n04 = ACS",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "source",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Indicates the source of the broadcasted information.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "description",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans- 4000",
                    description: "Information to be broadcasted to recipients",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "expDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "The date after which the relevance of the broadcasted information. Format accepted: YYYYMMDD",
                    status: "optional",
                    checked: false,
                    value: ""
                }
            ]
        },
        {
            id: 9,
            fieldCategory: true,
            fieldCategoryName: 'ThreeDS Requestor Authentication Info',
            fields: [
                {
                    name: "threeDSReqAuthData",
                    type: "text",
                    dataType: "String or Object",
                    lengthAndType: "Variable 50000 characters n-2",
                    description: "Data that documents and supports a specific authentication process.\nif the 3DS Requestor Authentication Method is:\n03 - then this element can carry information about the\nprovider of the federated ID and related information.\n06 - then this element can carry the FIDO Assertion and/or Attestation Data.\n07 - then this element can carry FIDO Assertion and/or\nAttestation. Data with the FIDO Assurance Data signed by a trusted third party.\n08 - then this element can carry the SRC Assurance Data.\nFor 3DS Requestor Authentication Method = 06 or 07",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "three DSReqAuthMethod",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Mechanism used by the Cardholder to authenticate to the 3DS Requestor.\nValues accepted:\n01 = No 3DS Requestor authentication occurred (i.e.,\ncardholder “logged in” as guest)\n02 = Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials\n03 = Login to the cardholder account at the 3DS Requestor system using federated ID\n04 = Login to the cardholder account at the 3DS Requestor system using issuer credentials\n05 = Login to the cardholder account at the 3DS Requestor system using third-party authentication\n06 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator\n07 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator (FIDO Assertion or Attestation data signed)\n08 = SRC Assurance Data\n09 = SPC Authentication\nNote: For 09 = SPC Authentication, the Assertion Data is provided as a JSON object returned by the SPC API.",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "threeDSReqAuthTimestamp",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-12",
                    description: "Date and time of the cardholder authentication converted\ninto UTC.\nFormat accepted:\nDate format = YYYYMMDDHHMM",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
            ]
        },
        {
            id: 10,
            fieldCategory: true,
            fieldCategoryName: 'Seller Info',
            fields: [
                {
                    name: "sellerName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a- 100",
                    description: "Name of the Seller",
                    status: "mandate",
                    checked: true,
                    value: ""
                },
                {
                    name: "sellerId",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an-50",
                    description: "Required if Seller ID in Multi Transaction object is present. Merchant-assigned Seller identifier",
                    status: "conditionally required",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerBusinessName",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable a- 100",
                    description: "Business name of the Seller",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAccDate",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-8",
                    description: "Date converted into UTC that the Seller started using the Merchant’s services. Format accepted: Date format = YYYYMMDD",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAddrLine1",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an- 50",
                    description: "First line of the business or contact street address of the Seller",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAddrLine2",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an- 50",
                    description: "Second line of the business or contact street address of the Seller",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAddrLine3",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an- 50",
                    description: "Third line of the business or contact street address of the Seller.",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAddrCity",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an- 50",
                    description: "Business or contact city of the Seller",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAddrState",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an- 3",
                    description: "Value accepted: For example, the entry US-CA (California, United States), the correct value for this field = CA. Note that the country and hyphen are not included in this value",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAddrPostCode",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an- 16",
                    description: "Business or contact ZIP or other postal code of the Seller.",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerAddrCountry",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed an- 3",
                    description: "Business or contact country of the Seller. The numeric three-digit country code, other than exceptions listed in Table below",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerEmail",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable ans- 254",
                    description: "Business or contact email address of the Seller",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "sellerPhone",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable Numeric cc: 1-3 subscriber:1 5",
                    description: "Business or contact phone number of the Seller. Values accepted: Country Code and Subscriber sections of the number represented by the following named fields: cc subscriber",
                    status: "optional",
                    checked: false,
                    value: ""
                },
            ]
        },
        {
            id: 11,
            fieldCategory: true,
            fieldCategoryName: 'Pay Token Info',
            fields: [
                {
                    name: "token",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable n -13 to 19",
                    description: "Payment token used to initiate the EMV 3DS transaction",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "tokenAdditionalData",
                    type: "text",
                    dataType: "Object",
                    lengthAndType: "Variable an-500",
                    description: "Additional information about the Payment Token from the Token Service Provider",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "tokenAssuranceMethod",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "An updatable value that allows the Token Service Provider to communicate the ID&V performed. It is determined or updated by the ID&V Method(s) and ID&V Actor",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "tokenRequestorId",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-11",
                    description: "An 11-digit numeric value that identifies each unique combination of Token Requestor and Token Domain(s) for a given Token Service Provider",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "tokenCryptogram",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Variable an-4000",
                    description: "A cryptogram, containing a transaction unique value, \ntypically generated using the Payment Token, Payment \nToken related data and transaction data. Cryptogram \nderivation methods may vary by scenario and may be \nPayment System-specific.",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "tokenCryptogramValidityIndicator",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed n-2",
                    description: "Identifies if the Token Cryptogram has been verified and the outcome of that verification.\nValues accepted: \n01 = Verified\n02 = Failed\n03 = Not Performed \n04–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n80–99 = Reserved for DS use \nNote: If the element is not provided, the expected action is for the ACS to interpret as 03",
                    status: "optional",
                    checked: false,
                    value: ""
                },
                {
                    name: "tokenStatusIndicator",
                    type: "text",
                    dataType: "String",
                    lengthAndType: "Fixed an-40",
                    description: "Identifies the current status of the Payment Token.",
                    status: "optional",
                    checked: false,
                    value: ""
                },
            ]
        }
    ]);

    const [selectedSandboxTestCodes, setSelectedSandboxTestCodes] = useState({});
    const [responseData, setResponseData] = useState(null);


    useEffect(() => {
        if (data[query?.api]) {
            setIntialFormData(data[query?.api])

            // CHANGES
            setOrganizationIDValidationStatus("pending");
            setResponseData(null);
            setSelectedSandboxTestCodes({})
            setParametersData([
                {
                    id: 1,
                    fieldCategory: false,
                    fields: [
                        {
                            name: "Partner ID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed ans-6",
                            description: "Partner ID assigned",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "deviceChannel",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the type of channel interface being used to\ninitiate the transaction.\nValues Accepted:\n01 = App-based (APP)\n02 = Browser (BRW)\n03 = 3DS Requestor Initiated (3RI)",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "messageCategory",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Identifies the category of the message for a specific\nuse case.\nValues Accepted:\n01 = PA\n02 = NPA",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "merchantTransID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "an - 36",
                            description: "Unique Transaction Identifier for merchant / PG",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeDSCompInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed a-1",
                            description: "Indicates whether the 3DS Method successfully\ncompleted. Required If DeviceChannel 02 - BRW.\nValues Accepted:\nY = Successfully completed\nN = Did not run or did not successfully complete\nU = Unavailable – 3DS Method URL was not present in\nthe PRes message data for the card range associated\nwith the Cardholder Account Number",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeDSRequestorAuthenticationInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the type of Authentication request. Required\nIf DeviceChannel 01-APP ; 02-BRW\nValues Accepted:\n01 = Payment transaction\n02 = Recurring transaction\n03 = Instalment transaction\n04 = Add card\n05 = Maintain card\n06 = Cardholder verification as part of EMV token\nID&V\n07 = Billing Agreement\n08 = Split shipment\n09 = Delayed shipment\n10 = Split payment",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeDSRequestorAuthenticationInfo",
                            type: "text",
                            dataType: "Array of objects",
                            lengthAndType: "Size 1–3 elements",
                            description: "Information about how the 3DS Requestor\nauthenticated the Cardholder before or during the\ntransaction.\nValues Accepted: Sub Elements:\n1. threeDSReqAuthData\n2. threeDSReqAuthMethod\n3. threeDSReqAuthTimestamp\nNote: Data will be formatted into a JSON Array of\nobjects prior to being placed into the 3DS Requestor\nAuthentication Information field of the message.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },

                        {
                            name: "threeDSRequestorID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable\nans - 35",
                            description: "DS-defined 3DS Requestor identifier.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeDSRequestorName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans - 40",
                            description: "DS-defined 3DS Requestor name.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeDSRequestorURL",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans -2048 Max",
                            description: "The Fully Qualified URL of the 3DS Requestor Website\nor customer care site.\nValues Accepted: Fully Qualified URL",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeRIInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the type of 3RI request. Required If\nDeviceChannel 03 - 3RI.\nValue Accepted:\n01 = Recurring transaction\n02 = Instalment transaction\n03 = Add card\n04 = Maintain card information\n05 = Account verification\n06 = Split shipment\n07 = Top-up\n08 = Mail Order\n09 = Telephone Order\n10 = Trust List status check11 = Other payment\n12 = Billing Agreement\n13 = Device Binding status check\n14 = Card Security Code status check\n15 = Delayed shipment\n16 = Split payment\n17 = FIDO credential deletion\n18 = FIDO credential registration\n19 = Decoupled Authentication Fallback",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "acceptLanguage",
                            type: "text",
                            dataType: "Array of String",
                            lengthAndType: "Variable Size: n - 1 to 99 String: 100 Max",
                            description: "This field is Required If DeviceChannel 02 - BRW.\nValue Accepted:\nValue representing the Browser language preference present in the HTTP header",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "acquirerBIN",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "variable n-11",
                            description: "Acquiring institution identification code as assigned by\nthe DS receiving the message.\nThis field is required, If Message Category, 01-PA = Required ; 02-NPA = Optional.\nValue Accepted:\nThis value correlates to the Acquirer BIN as defined by each Payment System.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "acquirerCountryCode",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "The code of the country where the acquiring institution is located.\nValues accepted:\nNumeric three-digit country code, other than exceptions table listed below.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "acquirerCountryCodeSource",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "This data element is populated by the system setting \nthe Acquirer Country Code.\nThe DS may edit the value provided by the 3DS Server.\nValues accepted:\n01 = 3DS Server\n02 = DS",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "acquirerMerchantID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable \nans- 35",
                            description: "Acquirer-assigned Merchant identifier. The same value \nmust be used in the authorisation request.\nThis field is required, If Message Category, 01-PA = \nRequired 02-NPA = Optional \nValue Accepted:\nIndividual Directory Servers may impose specific \nformat and character requirements on the contents of \nthis field.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "browserAcceptHeader",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable \nans - 2048",
                            description: "Exact content of the HTTP accepts headers as sent to \nthe 3DS Requestor from the Cardholder Browser. This \nfield is required, If DeviceChannel is 02 - BRW",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "browserJavascriptEnabled",
                            type: "text",
                            dataType: "Boolean",
                            lengthAndType: true,
                            description: "This field is required, If DeviceChannel is 02 - BRW. \nBoolean that represents the ability of the Cardholder \nBrowser to execute JavaScript.\nValues Accepted:\ntrue\nfalse",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "browserUserAgent",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable \nans- 2048",
                            description: "This field is required, If DeviceChannel 02 - BRW. Exact content of the HTTP user-agent header",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "acctNumber",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n- 13 to 19",
                            description: "Account number that will be used in the authorisation \nrequest for payment transactions. May be \nrepresented by PAN, Payment Token.\r",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "mcc",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-4",
                            description: "This value correlates to the Merchant Category Code as defined by each Payment System or DS. The same value must be used in the authorisation request. This field is based on the Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "merchantCountryCode",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "This value correlates to the Merchant Country Code as defined by each Payment System or DS. The same value must be used in the authorisation request. Numeric three-digit country code, other than exceptions table listed below. This field is based on the Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "merchantName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a-40",
                            description: "Merchant name assigned by the Acquirer or Payment System. The same value must be used in the authorisation request. This field is based Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "merchantRiskIndicator",
                            type: "text",
                            dataType: "Object",
                            lengthAndType: "Variable",
                            description: "Merchant’s assessment of the level of fraud risk for the specific authentication for both the Cardholder and the authentication being conducted. Values Accepted: Sub Elements: 1. Delivery Email Address 2.Delivery Timeframe 3.Gift Card Amount 4.Gift Card Count 5.Gift Card Currency 6.Pre-Order Date 7.Pre-Order Purchase Indicator 8.Reorder Items Indicator 9.Shipping Indicator 10.Transaction Characteristics Note: Data will be formatted into a JSON object prior to being placed into the Merchant Risk Indicator field of the message",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "deliveryEmailAddress",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-254",
                            description: "For Electronic delivery, the email address to which the merchandise was delivered",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "messageType",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed a-4",
                            description: "Identifies the type of message that is passed.\nValues Accepted:\nAreq \nARes\nCReq\nCRes\nOReq\nORes\nPreq\nPRes\nRReq\nRRes\nErro",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "messageVersion",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n - 5 to 8",
                            description: "The Message Version Number is set by the 3DS Server \nwhich originates the protocol with the Areq message. \nThe Message Version Number does not change during \na 3DS transaction.\nValues Accepted: Major.minor. patch",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "notificationURL",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans- 256",
                            description: "Required If, the deviceChannel 02 - BRW.\nFully Qualified URL of the system that receives the \nCRes message or Error Message. The CRes message is \nposted by the ACS through the Cardholder Browser at \nthe end of the challenge and receipt of the RRes \nmessage.\nValue: Fully Qualified URL",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "purchaseAmount",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-48",
                            description: "Purchase amount in minor units of currency with all \npunctuation removed. When used in conjunction with \nthe Purchase Currency Exponent field, proper \npunctuation can be \ncalculated. \nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, \n08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, \n08, 09, 11, 15",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "purchaseCurrency",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "Currency in which purchase amount is expressed. For message category 01 PA - Required, for 02-NPA : if 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09 Required for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15 Three-digit country code, other than exceptions table listed below.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "purchaseExponent",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-1",
                            description: "Minor units of currency as specified in the ISO 4217 currency exponent. For message category 01 PA - Required, for 02-NPA : if 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09 Required for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "purchaseDate",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-14",
                            description: "Date and time of the authentication converted into \nUTC. \nFormat accepted: \nYYYYMMDDHHMMSS\nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, \n08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, \n08, 09, 11, 15",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sdkType",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the type of 3DS SDK. Required If DeviceChannel 01 - APP 01 = Default-SDK 02 = Split-SDK",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sdkEphemPubKey",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-256 Max",
                            description: "Required If DeviceChannel is 01 - APP \nPublic key component of the ephemeral key pair \ngenerated by the 3DS SDK and used to establish \nsession keys between the 3DS SDK and ACS.\nIn AReq, this data element is present as its own object.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "acctType",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the type of account. For example, for a \nmulti-account card product.\n01 = Not applicable\n02 = Credit\n03 = Debit",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "appIp",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans- 45 Max",
                            description: "External IP address (i.e., the device public IP address) \nused by the 3DS Requestor App when it connects to \nthe 3DS Requestor environment.\nRequired, the DeviceChannel 01-APP",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddrCity",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a-50",
                            description: "City portion of the shipping address requested by the \nCardholder.\nRequired (if available) unless market or regional \nmandate restricts sending this information.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddrCountry",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "Required if Cardholder Shipping Address State is present. Country of the shipping address requested by the Cardholder. Three-digit country code, other than exceptions listed in table below",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddrLine1",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-50",
                            description: "First line of the street address or equivalent local portion of the shipping address requested by the Cardholder.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddrLine2",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-50",
                            description: "The second line of the street address or equivalent \nlocal portion of the shipping address requested by the \nCardholder",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddrLine3",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-50",
                            description: "The third line of the street address or equivalent local portion of the shipping address requested by the Cardholder",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddrPostCode",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-6",
                            description: "The ZIP or other postal code of the shipping address requested by the Cardholder",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddrState",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a-3",
                            description: "The state or province of the shipping address associated with the card being used for this purchase. For example, using the ISO entry US-CA (California, United States), the correct value for this field = CA. Note: that the country and hyphen are not included in this value.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "workPhone",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable cc: n : 1–3 subscriber: n : 15",
                            description: "The work phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "taxId",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-45",
                            description: "Cardholder’s tax identification. Conditional based on DS rules",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeDSMethodId",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed ans-36",
                            description: "Contains the 3DS Server Transaction ID used during \nthe previous execution of the 3DS Method.\nRequired if 3DS Requestor reuses previous 3DS \nMethod execution and the Device channel 02-BRW",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sellerInfo.sellerName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a- 100",
                            description: "Name of the Seller",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sdkAppID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed ans-36",
                            description: "Required, If Device channel - 01 APP Universally unique ID created upon all installations of the 3DS Requestor App on a Consumer Device. This will be newly generated and stored by the 3DS SDK for each installation. Note: In case of SplitSDK/Browser, the SDK App ID value is not reliable, and may change for each transaction.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sdkMaxTimeout",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Required, If Device channel - 01 APP \nValues accepted: Greater than or = 05",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sdkReferenceNumber",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-32",
                            description: "Identifies the vendor and version of the 3DS SDK that is used for a specific transaction. Required, If Device channel - 01 APP",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        // conditionally required data
                        {
                            name: "threeDSRequestorDecMaxTime",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-5",
                            description: "Indicates the maximum amount of time that the 3DS \nRequestor will wait for an ACS to provide the results of \na Decoupled Authentication transaction (in minutes)\nNumeric values between 00001 and 10080\nRequired if 3DS Requestor, Decoupled Request \nIndicator = Y or F or B",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "threeDSRequestorSpcSupport",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed a-1",
                            description: "This field is required if supported by the 3DS Requestor and deviceChannel field 02-BRW. Indicate if the 3DS Requestor supports the SPC authentication. Note: If present, the value Y = Supported",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "browserIP",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n - 45",
                            description: "IP address of the Browser as returned by the HTTP \nheaders to the 3DS Requestor.\nRequired, If deviceChannel field 02 - BRW",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "browserJavaEnabled",
                            type: "text",
                            dataType: "Boolean",
                            lengthAndType: "Fixed a-4",
                            description: "Required if Browser JavaScript Enabled = true; \notherwise, Optional and deviceChannel field 02-BRW\nValues Accepted:\ntrue\nfalse\nBoolean that represents the ability of the cardholder \nbrowser to execute Java. Value is returned from the \nnavigator. javaEnabled property",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "browserLanguage",
                            type: "text",
                            dataType: "Boolean",
                            lengthAndType: "Variable a-35 Max",
                            description: "The Value defining the Browser Language. Required, deviceChannel field 02 - BRW and Browser JavaScript Enabled = true; otherwise, Optional",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "browserColorDepth",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n - 1 to 2",
                            description: "Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW This Value representing the bit depth of the colour palette for displaying images, in bits per pixel. Obtained from the Cardholder Browser using the screen.colorDepthproperty Values : 1–99",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "browserScreenHeight",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n - 1 to 6",
                            description: "This field Total height of the Cardholder’s screen in pixels. Value is returned from the screen.height property. Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "browserScreenWidth",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n - 1 to 6",
                            description: "Total width of the Cardholder’s screen in pixels.Value is returned from the screen.width property. Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "browserTZ",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n - 1 to 5",
                            description: "Time zone offset in minutes between UTC and the \nCardholder Browser local time.\nValue is returned from the getTimezoneOffset() \nmethod.\nExample time zone offset values in minutes:\nIf UTC -5 hours:\n300\n+300\nIf UTC +5 hours:\n-300\nRequired if Browser JavaScript Enabled = true; \notherwise, Optional and deviceChannel field 02-BRW",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "deviceId",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans- 64 Max",
                            description: "Required if available. Unique and immutable identifier linked to a device that is consistent across 3DS transactions for the specific user device. Examples: Hardware Device ID Platform-calculated device fingerprint",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "userId",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans- 64 Max",
                            description: "Required if available.\nIdentifier of the transacting user’s Browser Account ID. \nThis identifier is a unique immutable hash of the user’s \naccount identifier for the given Browser, provided as a \nstring.\nNote: Cardholders may have more than one account \non a given Browser",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "cardExpiryDate",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-4",
                            description: "Expiry Date of the PAN or token supplied to the 3DS Requestor by the Cardholder. Format accepted: YYMM The requirements for the presence of this field are DSspecifi",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "cardSecurityCode",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-3 to 4",
                            description: "Three- or four-digit security code printed on the card. \nAction defined by Payment System rules.Conditional \nbased on DS rules",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "billAddrCity",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans - 50",
                            description: "The city of the Cardholder billing address associated \nwith the card used for this purchase.\nConditionally required for 01-PA: Required unless \nmarket or regional mandate restricts sending this \ninformation.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "billAddrCountry",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "The country of the Cardholder billing address \nassociated with the card used for this purchase.\nRequired if Cardholder Billing Address State is present. \n01-PA Required unless market or regional mandate \nrestricts sending this information.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information.\nThe Numeric three-digit country code, other than \nexceptions listed in table below",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "billAddrLine1",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-50",
                            description: "First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required if Cardholder Billing Address State is present. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "billAddrLine2",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-50",
                            description: "Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "billAddrLine3",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-50",
                            description: "Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "billAddrPostCode",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans- 16",
                            description: "ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "billAddrState",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a -3",
                            description: "The state or province of the Cardholder billing address associated with the card used for this purchase. 01-PA: Required unless market or regional mandate restricts sending this information, or State is not applicable for this country. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information, or State is not applicable for this country.",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "email",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-254",
                            description: "The email address associated with the account that is either entered by the Cardholder or is on file with the 3DS Requestor. Required (if available) unless market or regional mandate restricts sending this information",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "homePhone",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
                            description: "The home phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional \nmandate restricts sending this information",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "mobilePhone",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
                            description: "The mobile phone number provided by the \nCardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional \nmandate restricts sending this information.",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "cardholderName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a- 1 to 45",
                            description: "Name of the Cardholder.\nThis field is Required unless market or regional \nmandate restricts sending this information and Device \nchannel field 02-BRW",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "payTokenSource",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Required if EMV Payment Token Indicator = true.\nThis data element will be populated by the system \nresiding in the 3-D Secure\ndomain where the detokenization occurs.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "payTokenInd",
                            type: "text",
                            dataType: "Boolean",
                            description: "A value of True indicates that the transaction was detokenized prior to being received by the ACS. This data element will be populated by the system residing in the 3-D Secure domain where the detokenization occurs (i.e., the 3DS Server or the DS). Value Accepted: true Required, if there is a detokenization of an Account Number.",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "payeeOrigin",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans - 2048",
                            description: "The origin of the payee that will be provided in the \nSPC Transaction Data.\nFully Qualified URL:\nThis field is Required if 3DS Requestor SPC = Y Support \nand Device channel field 02 - BRW",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "recurringAmount",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-48",
                            description: "Recurring amount in minor units of currency with all punctuation removed. For message category 01 PA - Required, for 02-NPA : 3DS Requestor Authentication Indicator = 02 or 03 ; OR 3RI Indicator = 01 or 02 and Recurring Indicator/ Amount Indicator = 01",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "recurringCurrency",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "Required if the Recurring Amount is present. Currency \nin which the Recurring Amount is expressed. Three digit currency code, other than exceptions listed in \ntable below.",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "recurringExponent",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-1",
                            description: "Required if the Recurring Amount is present.",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "recurringDate",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Required if Recurring Indicator/ Frequency Indicator = 01. Effective date of the new authorised amount following the first/promotional payment in a recurring or instalment transaction. Date format accepted: YYYYMMDD",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "recurringExpiry",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Required if there is an end date. Date format accepted: YYYYMMDD",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "recurringFrequency",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-4",
                            description: "Required if Recurring Indicator/ Frequency Indicator = \n01.\nIndicates the minimum number of days between \nauthorisations for a recurring or instalment \ntransaction.\nNumeric values between 1 and 9999",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "recurringInd",
                            type: "text",
                            dataType: "Object",
                            description: "Required if: 3DS Requestor Authentication Indicator = \n02 or 03; OR 3RI Indicator = 01 or 02\nIndicates whether the recurring or instalment \npayment has a fixed or variable amount and \nfrequency.\nThe Recurring Indicator object contains: \nthe Amount Indicator\nthe Frequency Indicator\nField Name: amountInd\nValues accepted: \n01 = Fixed Purchase Amount\n02 = Variable Purchase Amount \n03–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use\nField Name: frequencyInd\nValues accepted: \n01 = Fixed Frequency\n02 = Variable or Unknown Frequency\n03–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sdkEncData",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-64000",
                            description: "Required, If Device channel = 01 - APP and Required \nfrom the 3DS Server to the DS but will not be present \nfrom the DS to the ACS",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "transType",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Identifies the type of transaction being authenticated.\n01 = Goods/ Service Purchase\n03 = Check Acceptance\n10 = Account Funding\n11 = Quasi-Cash Transaction\n28 = Prepaid Activation and Load",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "spcIncompInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Reason that the SPC authentication was not completed. 01 = SPC did not run or did not successfully complete 02 = Cardholder cancelled the SPC authentication 03 = SPC timed out 04–99 = Reserved for EMVCo future use (values invalid until defined by EMVCo) Required if the 3DS Requestor attempts to invoke the SPC API and there is an error and the Device channel 02-BRW",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "messageExtension",
                            type: "text",
                            dataType: "Array of objects",
                            lengthAndType: "Variable n - 1 to 15",
                            description: "Data necessary to support requirements not otherwise \ndefined in the 3-D Secure message are carried in a \nMessage Extension.\nValues Accepted: Sub Elements: \n1.Extension name \n2.Assigned extension group identifier\n3.Criticality indicator\n4.Data",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sdkTransID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed an-36",
                            description: "Required, If Device channel = 01 - APP Universally unique transaction identifier assigned by the 3DS SDK to identify a single transaction",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "defaultSdkType",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed sdkVariant : n-2 wrappedIn d : n-1",
                            description: "Required if SDK Type = 01 Default-SDK and Device channel = 01 - APP SdkVariant Values accepted: 01 = Native 02–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo) 80–99 = Reserved for DS use WrappedInd Value accepted: Y = Wrapped Only present if value = Y",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sdkServerSignedContent",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable",
                            description: "Required if SDK Type = 02 Indicates the characteristics \nof a Split-SDK and Device channel - 01 APP \nValues Accepted:\n1.SDK Reference Number\n2.SDK Signature Timestamp\n3.SDK Transaction ID\n4.Split-SDK Server ID",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "splitSdkType",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed sdkVariant : n-2 limited : n1",
                            description: "Required if SDK Type = 02 Indicates the characteristics of a Split-SDK and Device channel - 01 APP sdkVariant Values accepted: 01 = Native Client 02 = Browser 03 = Shell 04–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo) 80–99 = Reserved for DS use limitedInd Value accepted: Only present if value = Y, Y = Limited",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "trustListStatusSource",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Required if the Trust List Status is present.\nThis data element will be populated by the system \nsetting Trust List Status.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "deviceBindingStatusSource",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Required if Device Binding Status is present. This data element will be populated by the system setting Device Binding Status. Values accepted: 01 = 3DS Server 02 = DS 03 = ACS",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        },
                        //   Optional 
                        {
                            name: "threeDSRequestorChallengeInd",
                            type: "text",
                            dataType: "Array of String",
                            lengthAndType: "Fixed Size : 1-2 elements n - 2",
                            description: "Indicates whether a challenge is requested for this \ntransaction.\n01 = No preference\n02 = No challenge requested\n03 = Challenge requested (3DS Requestor preference)\n04 = Challenge requested (Mandate)\n05 = No challenge requested (transactional risk \nanalysis is already performed)\n06 = No challenge requested (Data share only)\n07 = No challenge requested (strong consumer \nauthentication is already performed)\n08 = No challenge requested (use Trust List exemption \nif no challenge required)\n09 = Challenge requested (Trust List prompt requested \nif challenge required)\n10 = No challenge requested\n(use low value exemption)\n11 = No challenge requested\n(Secure corporate payment exemption)\n12 = Challenge requested (Device Binding prompt \nrequested if challenge required)\n13 = Challenge requested (Issuer requested)\n14 = Challenge requested (Merchant-initiated \ntransactions)\n15–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use\nNote: If the element is not provided, the expected \naction is that the ACS would interpret as 01 = No \npreference.",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "threeDSRequestorDecReqInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed a-1",
                            description: "Indicates whether the 3DS Requestor requests the ACS \nto use Decoupled Authentication and agrees to use \nDecoupled Authentication if the ACS confirms its use.\nY = Decoupled Authentication is supported and \npreferred if challenge is necessary\nN = Do not use Decoupled Authentication\nF = Decoupled Authentication is supported and is to be \nused only as a fallback challenge \nmethod if a challenge is necessary.\nB = Decoupled Authentication is supported and can be \nused as a primary or fallback challenge method if a challenge is necessary.",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "addrMatch",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed a-1",
                            description: "Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. Required If, DeviceChannel is 01- APP ; 02- BRW. Y = Shipping Address matches Billing Address N = Shipping Address does not match Billing Address",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "acctID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an-64",
                            description: "Additional information about the account optionally provided by the 3DS Requestor.",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "merchantDSPassword",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "",
                            description: "Merchant 1.0 Directory sever registered password",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "challengeWindowSize",
                            type: "text",
                            dataType: "String",
                            description: "Optional but required for deviceChannel 02 - BRW Challenge window size. Values accepted: 01 = 250 x 400 02 = 390 x 400 03 = 500 x 600 04 = 600 x 400 05 = Full screen",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "trustListStatus",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed a-1",
                            description: "Enables the communication of trust list status between the ACS, the DS and the 3DS Requestor. Y = 3DS Requestor is Trust Listed by Cardholder N = 3DS Requestor is not Trust Listed by Cardholder E = Not eligible as determined by issuer P = Pending confirmation by Cardholder R = Cardholder rejected U = Trust List status unknown, unavailable, or does not apply Note: Valid values in the AReq message are Y or N",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "deviceBindingStatus",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Enables the communication of Device Binding Status \nbetween the ACS, the DS and the 3DS Requestor. For \nbound devices (value = 11–14), Device Binding Status \nalso conveys the type of binding that was performed.\nValues accepted: \n01 = Device is not bound by Cardholder\n02 = Not eligible as determined by Issuer\n03 = Pending confirmation by Cardholder\n04 = Cardholder rejected\n05 = Device Binding Status unknown, unavailable, or \ndoes not apply\n06–10 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n11 = Device is bound by Cardholder (device is bound \nusing hardware / SIM internal \nto the Consumer Device. For instance, keys stored in a \nsecure element on the device)\n12 = Device is bound by Cardholder (device is bound \nusing hardware external to the \nConsumer Device. For example, an external FIDO \nAuthenticator\n13 = Device is bound by Cardholder (Device is bound \nusing data that includes \ndynamically generated data and could include a \nunique device ID)\n14 = Device is bound by Cardholder (Device is bound \nusing static device data that has been obtained from \nthe Consumer Device\n15 = Device is bound by Cardholder (Other method)",
                            status: "optional",
                            checked: false,
                            value: ""
                        }
                    ]
                },
                {
                    id: 4,
                    fieldCategory: true,
                    fieldCategoryName: 'AcctInfo',
                    fields: [
                        {
                            name: "acctInfo",
                            type: "text",
                            dataType: "Object",
                            lengthAndType: "Variable",
                            description: "Additional information about the Cardholder’s \naccount provided by the 3DS Requestor.\nValues: Sub Elements: \n1.Cardholder Account Age Indicator\n2.Cardholder Account Change\n3.Cardholder Account Change Indicator\n4.Cardholder Account Date\n5.Cardholder Account Requestor ID\n6.Cardholder Account Password Change\n7.Cardholder Account Password Change Indicator\n8.Cardholder Account Purchase Count\n9.Number of Provisioning Attempts Per Day\n10.Number of Transactions Per Day\n11.Number of Transactions Per Year\n12.Payment Account Age\n13.Payment Account Age Indicator\n14.Shipping Address Usage\n15.Shipping Address Usage Indicator\n16.Shipping Name Indicator\n17.Suspicious Account Activity",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "chAccAgeInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Values accepted:\n01 = No account (guest check-out)\n02 = Created during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "chAccChange",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Format accepted: Date format = YYYYMMDD",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "chAccChangeInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Values accepted:\n01 = Changed during this transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "chAccDate",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Format accepted: Date format = YYYYMMDD",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "chAccReqID",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an-64",
                            description: "The 3DS Requestor assigned account identifier of the \ntransacting Cardholder. \nThis identifier is coded as the SHA-256 + Base64url of the account identifier for the 3DS Requestor and is provided as a String",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "chAccPwChange",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Format accepted: Date format = YYYYMMDD",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "chAccPwChangeInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.\nValues accepted:\n01 = No change\n02 = Changed during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "nbPurchaseAccount",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-4",
                            description: "Number of purchases with this cardholder account during the previous six months. If the Cardholder Account Purchase Count reaches the value 999, it remains set at 999. Values accepted: 0–999",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "provisionAttemptsDay",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-3",
                            description: "Number of Add Card attempts in the last 24 hours",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "txnActivityDay",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-3",
                            description: "Number of transactions (successful and abandoned) for this \ncardholder account with the 3DS Requestor across all \npayment accounts in the previous 24 hours.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "txnActivityYear",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. If the maximum value is reached, the Number of Transactions Per Year remains set at 999. Values accepted: 0–99",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "paymentAccAge",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Date converted into UTC that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "paymentAccInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the length of time that the payment account was \nenrolled in the cardholder’s account \nwith the 3DS Requestor.\nValues accepted:\n01 = No account (guest check-out)\n02 = During this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddressUsage",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Date converted into UTC when the shipping address used for the is transaction was first used with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipAddressUsageInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.\nValues accepted:\n01 = This transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipNameIndicator",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. Values accepted: 01 = Account Name identical to shipping Name 02 = Account Name different than shipping Name",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "suspiciousAccActivity",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates whether the 3DS Requestor has experienced \nsuspicious activity (including previous \nfraud) on the cardholder account.\nValues accepted:\n01 = No suspicious activity has been observed\n02 = Suspicious activity has been observed",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                    ]
                },
                {
                    id: 5,
                    fieldCategory: true,
                    fieldCategoryName: 'deviceRenderOptions',
                    fields: [
                        {
                            name: "sdkAuthenticationType",
                            type: "text",
                            dataType: "Array of String",
                            lengthAndType: "Fixed Size: 1 - 99 elements n-2",
                            description: "Authentication methods preferred by the 3DS SDK in order of preference. Size: 1–99 elements Values accepted: 01 = Static Passcode 02 = SMS OTP 03 = Key fob or EMV card reader OTP 04 = App OTP 05 = OTP Other 06 = KBA 07 = OOB Biometrics 08 = OOB Login 09 = OOB Other 10 = Other 11 = Push Confirmation",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sdkInterface",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Lists all of the SDK Interface types that the device supports for displaying specific challenge user interfaces within the 3DS SDK. Values accepted: 01 = Native 02 = HTML 03 = Both",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sdkUiType",
                            type: "text",
                            dataType: "Array of String",
                            lengthAndType: "Variable Size: 1–7 elements n-2",
                            description: "Lists all UI types that the device supports for displaying specific challenge user interfaces within the 3DS SDK. Valid values for each Interface: Native UI = 01–04, 07 HTML UI = 01–07 Values accepted: 01 = Text 02 = Single Select 03 = Multi Select 04 = OOB 05 = HTML Other (valid only for HTML UI) 06 = HTML OOB (valid only for HTML UI) 07 = Information",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                    ]
                },
                {
                    id: 6,
                    fieldCategory: true,
                    fieldCategoryName: 'Merchant Risk Indicator',
                    fields: [
                        {
                            name: "deliveryEmailAddress",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans-254",
                            description: "For Electronic delivery, the email address to which the merchandise was delivered",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "deliveryTimeframe",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the merchandise delivery timeframe. \nValues accepted:\n01 = Electronic Delivery\n02 = Same day shipping\n03 = Overnight shipping\n04 = Two-day or more shipping",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "giftCardAmount",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n-15",
                            description: "For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, USD 123.45 is 123). Example: gift card amount is USD 123.45: Values accepted: 123 0123 00123",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "giftCardCount",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "giftCardCurr",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-3",
                            description: "The Numeric three-digit country code, other than exceptions listed in table below",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "preOrderDate",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "For a pre-ordered purchase, the expected date that the merchandise will be available. Format accepted: Date format = YYYYMMDD",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "preOrderPurchaseInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates whether Cardholder is placing an order for merchandise with a future availability or release date. Values accepted: 01 = Merchandise available 02 = Future availability",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "reorderItemsInd",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates whether the cardholder is reordering previously purchased merchandise. Values accepted: 01 = First time ordered 02 = Reordered",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "shipIndicator",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates shipping method chosen for the transaction. Values accepted: 01 = Ship to cardholder’s billing address 02 = Ship to another verified address on file with merchant 03 = Ship to address that is different than the cardholder’s billing address 04 = “Ship to Store” / Pick-up at local store (Store address shall be populated in shipping address fields) 05 = Digital goods (includes online services, electronic gift cards and redemption codes) 06 = Travel and Event tickets, not shipped 07 = Other (for example, Gaming, digital services not shipped, emedia subscriptions, etc.) 08 = Pick-up and go delivery 09 = Locker delivery (or other automated pick-up)",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "transChar",
                            type: "text",
                            dataType: "Array of String",
                            lengthAndType: "Variable \nSize: \n1–2 \nelements\nn-2",
                            description: "Indicates to the ACS specific transactions identified by the Merchant. Value accepted: 01 = Cryptocurrency transaction 02 = NFT transaction",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                    ]
                },
                {
                    id: 7,
                    fieldCategory: true,
                    fieldCategoryName: 'Message Extension',
                    fields: [
                        {
                            name: "criticalityIndicator",
                            type: "text",
                            dataType: "Boolean",
                            description: "A Boolean value indicating whether the recipient must \nunderstand the contents of the extension to interpret the \nentire message.\nValues accepted:\ntrue\nfalse",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "data",
                            type: "text",
                            dataType: "Object",
                            lengthAndType: "Variable ans - 8059",
                            description: "The data carried in the extension",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "id",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an - 64",
                            description: "A unique identifier for the extension.\nNote: Payment System Registered Application Provider \nIdentifier (RID) is required as prefix of the ID.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "name",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an - 64",
                            description: "The name of the extension data set as defined by the extension owner",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                    ]
                },
                {
                    id: 8,
                    fieldCategory: true,
                    fieldCategoryName: 'Broad Info',
                    fields: [
                        {
                            name: "category",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the category/type of information.\nValues accepted:\n01 = General\n02 = Certificate expiry\n03 = Fraud alert\n04 = Operational alert\n05 = Transactional data\n06 = Other",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "severity",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the importance/severity level of the broadcasted information. Values accepted: 01 = Critical = Immediate action to be taken by recipient 02 = Major = Major impact; Upcoming action to be taken by recipient 03 = Minor = Minor impact; Upcoming action to be taken by recipient 04 = Informational = Informational only with no immediate action by recipient",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "recipients",
                            type: "text",
                            dataType: "Array of String",
                            lengthAndType: "Variable a- 3",
                            description: "Indicates the intended recipient(s) of the broadcasted \ninformation.\nValues accepted:\n01 = 3DS SDK\n02 = 3DS Server\n03 = DS\n04 = ACS",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "source",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Indicates the source of the broadcasted information.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "description",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans- 4000",
                            description: "Information to be broadcasted to recipients",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "expDate",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "The date after which the relevance of the broadcasted information. Format accepted: YYYYMMDD",
                            status: "optional",
                            checked: false,
                            value: ""
                        }
                    ]
                },
                {
                    id: 9,
                    fieldCategory: true,
                    fieldCategoryName: 'ThreeDS Requestor Authentication Info',
                    fields: [
                        {
                            name: "threeDSReqAuthData",
                            type: "text",
                            dataType: "String or Object",
                            lengthAndType: "Variable 50000 characters n-2",
                            description: "Data that documents and supports a specific authentication process.\nif the 3DS Requestor Authentication Method is:\n03 - then this element can carry information about the\nprovider of the federated ID and related information.\n06 - then this element can carry the FIDO Assertion and/or Attestation Data.\n07 - then this element can carry FIDO Assertion and/or\nAttestation. Data with the FIDO Assurance Data signed by a trusted third party.\n08 - then this element can carry the SRC Assurance Data.\nFor 3DS Requestor Authentication Method = 06 or 07",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "three DSReqAuthMethod",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Mechanism used by the Cardholder to authenticate to the 3DS Requestor.\nValues accepted:\n01 = No 3DS Requestor authentication occurred (i.e.,\ncardholder “logged in” as guest)\n02 = Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials\n03 = Login to the cardholder account at the 3DS Requestor system using federated ID\n04 = Login to the cardholder account at the 3DS Requestor system using issuer credentials\n05 = Login to the cardholder account at the 3DS Requestor system using third-party authentication\n06 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator\n07 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator (FIDO Assertion or Attestation data signed)\n08 = SRC Assurance Data\n09 = SPC Authentication\nNote: For 09 = SPC Authentication, the Assertion Data is provided as a JSON object returned by the SPC API.",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "threeDSReqAuthTimestamp",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-12",
                            description: "Date and time of the cardholder authentication converted\ninto UTC.\nFormat accepted:\nDate format = YYYYMMDDHHMM",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                    ]
                },
                {
                    id: 10,
                    fieldCategory: true,
                    fieldCategoryName: 'Seller Info',
                    fields: [
                        {
                            name: "sellerName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a- 100",
                            description: "Name of the Seller",
                            status: "mandate",
                            checked: true,
                            value: ""
                        },
                        {
                            name: "sellerId",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an-50",
                            description: "Required if Seller ID in Multi Transaction object is present. Merchant-assigned Seller identifier",
                            status: "conditionally required",
                            checked: false,
                            value: ""
                        }, {
                            name: "sellerBusinessName",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable a- 100",
                            description: "Business name of the Seller",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAccDate",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-8",
                            description: "Date converted into UTC that the Seller started using the Merchant’s services. Format accepted: Date format = YYYYMMDD",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAddrLine1",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an- 50",
                            description: "First line of the business or contact street address of the Seller",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAddrLine2",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an- 50",
                            description: "Second line of the business or contact street address of the Seller",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAddrLine3",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an- 50",
                            description: "Third line of the business or contact street address of the Seller.",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAddrCity",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an- 50",
                            description: "Business or contact city of the Seller",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAddrState",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an- 3",
                            description: "Value accepted: For example, the entry US-CA (California, United States), the correct value for this field = CA. Note that the country and hyphen are not included in this value",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAddrPostCode",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an- 16",
                            description: "Business or contact ZIP or other postal code of the Seller.",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerAddrCountry",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed an- 3",
                            description: "Business or contact country of the Seller. The numeric three-digit country code, other than exceptions listed in Table below",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerEmail",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable ans- 254",
                            description: "Business or contact email address of the Seller",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "sellerPhone",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable Numeric cc: 1-3 subscriber:1 5",
                            description: "Business or contact phone number of the Seller. Values accepted: Country Code and Subscriber sections of the number represented by the following named fields: cc subscriber",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                    ]
                },
                {
                    id: 11,
                    fieldCategory: true,
                    fieldCategoryName: 'Pay Token Info',
                    fields: [
                        {
                            name: "token",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable n -13 to 19",
                            description: "Payment token used to initiate the EMV 3DS transaction",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "tokenAdditionalData",
                            type: "text",
                            dataType: "Object",
                            lengthAndType: "Variable an-500",
                            description: "Additional information about the Payment Token from the Token Service Provider",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "tokenAssuranceMethod",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "An updatable value that allows the Token Service Provider to communicate the ID&V performed. It is determined or updated by the ID&V Method(s) and ID&V Actor",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "tokenRequestorId",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-11",
                            description: "An 11-digit numeric value that identifies each unique combination of Token Requestor and Token Domain(s) for a given Token Service Provider",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "tokenCryptogram",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Variable an-4000",
                            description: "A cryptogram, containing a transaction unique value, \ntypically generated using the Payment Token, Payment \nToken related data and transaction data. Cryptogram \nderivation methods may vary by scenario and may be \nPayment System-specific.",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "tokenCryptogramValidityIndicator",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed n-2",
                            description: "Identifies if the Token Cryptogram has been verified and the outcome of that verification.\nValues accepted: \n01 = Verified\n02 = Failed\n03 = Not Performed \n04–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n80–99 = Reserved for DS use \nNote: If the element is not provided, the expected action is for the ACS to interpret as 03",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                        {
                            name: "tokenStatusIndicator",
                            type: "text",
                            dataType: "String",
                            lengthAndType: "Fixed an-40",
                            description: "Identifies the current status of the Payment Token.",
                            status: "optional",
                            checked: false,
                            value: ""
                        },
                    ]
                }
            ])
        }
    }, [data[query?.api]])


    useEffect(() => {
        const selectedData = parametersData.reduce(function (total, currentValue) {
            if (!currentValue.fieldCategory) {
                currentValue.fields.forEach(item => {
                    if (item.checked) {
                        total[item.name] = item.value;
                    }
                });
            } else {

                total = {
                    ...total,
                    [currentValue.fieldCategoryName]: currentValue.fields.reduce(function (totalObj, currentValue) {
                        if (currentValue.checked) {
                            totalObj[currentValue.name] = currentValue.value
                        }

                        return totalObj
                    }, {})
                }
            }

            return total;

        }, {})


        setSelectedSandboxTestCodes(selectedData);
    }, [parametersData])


    const validateOrganisationId = (value) => {
        if (value.length === 10) {
            setOrganizationIDValidationStatus("success");
        } else if (value.length < 10) {
            setOrganizationIDValidationStatus("pending");
        } else {
            setOrganizationIDValidationStatus("failed");
        }
    }

    const handleReset = () => {
        setParametersData([
            {
                id: 1,
                fieldCategory: false,
                fields: [
                    {
                        name: "Partner ID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed ans-6",
                        description: "Partner ID assigned",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "deviceChannel",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the type of channel interface being used to\ninitiate the transaction.\nValues Accepted:\n01 = App-based (APP)\n02 = Browser (BRW)\n03 = 3DS Requestor Initiated (3RI)",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "messageCategory",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Identifies the category of the message for a specific\nuse case.\nValues Accepted:\n01 = PA\n02 = NPA",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "merchantTransID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "an - 36",
                        description: "Unique Transaction Identifier for merchant / PG",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeDSCompInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed a-1",
                        description: "Indicates whether the 3DS Method successfully\ncompleted. Required If DeviceChannel 02 - BRW.\nValues Accepted:\nY = Successfully completed\nN = Did not run or did not successfully complete\nU = Unavailable – 3DS Method URL was not present in\nthe PRes message data for the card range associated\nwith the Cardholder Account Number",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeDSRequestorAuthenticationInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the type of Authentication request. Required\nIf DeviceChannel 01-APP ; 02-BRW\nValues Accepted:\n01 = Payment transaction\n02 = Recurring transaction\n03 = Instalment transaction\n04 = Add card\n05 = Maintain card\n06 = Cardholder verification as part of EMV token\nID&V\n07 = Billing Agreement\n08 = Split shipment\n09 = Delayed shipment\n10 = Split payment",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeDSRequestorID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable\nans - 35",
                        description: "DS-defined 3DS Requestor identifier.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeDSRequestorName",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans - 40",
                        description: "DS-defined 3DS Requestor name.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeDSRequestorURL",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans -2048 Max",
                        description: "The Fully Qualified URL of the 3DS Requestor Website\nor customer care site.\nValues Accepted: Fully Qualified URL",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeRIInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the type of 3RI request. Required If\nDeviceChannel 03 - 3RI.\nValue Accepted:\n01 = Recurring transaction\n02 = Instalment transaction\n03 = Add card\n04 = Maintain card information\n05 = Account verification\n06 = Split shipment\n07 = Top-up\n08 = Mail Order\n09 = Telephone Order\n10 = Trust List status check11 = Other payment\n12 = Billing Agreement\n13 = Device Binding status check\n14 = Card Security Code status check\n15 = Delayed shipment\n16 = Split payment\n17 = FIDO credential deletion\n18 = FIDO credential registration\n19 = Decoupled Authentication Fallback",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acceptLanguage",
                        type: "text",
                        dataType: "Array of String",
                        lengthAndType: "Variable Size: n - 1 to 99 String: 100 Max",
                        description: "This field is Required If DeviceChannel 02 - BRW.\nValue Accepted:\nValue representing the Browser language preference present in the HTTP header",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acquirerBIN",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "variable n-11",
                        description: "Acquiring institution identification code as assigned by\nthe DS receiving the message.\nThis field is required, If Message Category, 01-PA = Required ; 02-NPA = Optional.\nValue Accepted:\nThis value correlates to the Acquirer BIN as defined by each Payment System.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acquirerCountryCode",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "The code of the country where the acquiring institution is located.\nValues accepted:\nNumeric three-digit country code, other than exceptions table listed below.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acquirerCountryCodeSource",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "This data element is populated by the system setting \nthe Acquirer Country Code.\nThe DS may edit the value provided by the 3DS Server.\nValues accepted:\n01 = 3DS Server\n02 = DS",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acquirerMerchantID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable \nans- 35",
                        description: "Acquirer-assigned Merchant identifier. The same value \nmust be used in the authorisation request.\nThis field is required, If Message Category, 01-PA = \nRequired 02-NPA = Optional \nValue Accepted:\nIndividual Directory Servers may impose specific \nformat and character requirements on the contents of \nthis field.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "browserAcceptHeader",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable \nans - 2048",
                        description: "Exact content of the HTTP accepts headers as sent to \nthe 3DS Requestor from the Cardholder Browser. This \nfield is required, If DeviceChannel is 02 - BRW",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "browserJavascriptEnabled",
                        type: "text",
                        dataType: "Boolean",
                        lengthAndType: true,
                        description: "This field is required, If DeviceChannel is 02 - BRW. \nBoolean that represents the ability of the Cardholder \nBrowser to execute JavaScript.\nValues Accepted:\ntrue\nfalse",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "browserUserAgent",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable \nans- 2048",
                        description: "This field is required, If DeviceChannel 02 - BRW. Exact content of the HTTP user-agent header",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo",
                        type: "text",
                        dataType: "Object",
                        lengthAndType: "Variable",
                        description: "Additional information about the Cardholder’s \naccount provided by the 3DS Requestor.\nValues: Sub Elements: \n1.Cardholder Account Age Indicator\n2.Cardholder Account Change\n3.Cardholder Account Change Indicator\n4.Cardholder Account Date\n5.Cardholder Account Requestor ID\n6.Cardholder Account Password Change\n7.Cardholder Account Password Change Indicator\n8.Cardholder Account Purchase Count\n9.Number of Provisioning Attempts Per Day\n10.Number of Transactions Per Day\n11.Number of Transactions Per Year\n12.Payment Account Age\n13.Payment Account Age Indicator\n14.Shipping Address Usage\n15.Shipping Address Usage Indicator\n16.Shipping Name Indicator\n17.Suspicious Account Activity",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.chAccAgeInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Values accepted:\n01 = No account (guest check-out)\n02 = Created during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.chAccChange",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.chAccChangeInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Values accepted:\n01 = Changed during this transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.chAccDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.chAccReqID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an-64",
                        description: "The 3DS Requestor assigned account identifier of the \ntransacting Cardholder. \nThis identifier is coded as the SHA-256 + Base64url of the account identifier for the 3DS Requestor and is provided as a String",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.chAccPwChange",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.chAccPwChangeInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.\nValues accepted:\n01 = No change\n02 = Changed during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.nbPurchaseAccount",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-4",
                        description: "Number of purchases with this cardholder account during the previous six months. If the Cardholder Account Purchase Count reaches the value 999, it remains set at 999. Values accepted: 0–999",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.provisionAttemptsDay",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-3",
                        description: "Number of Add Card attempts in the last 24 hours",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.txnActivityDay",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-3",
                        description: "Number of transactions (successful and abandoned) for this \ncardholder account with the 3DS Requestor across all \npayment accounts in the previous 24 hours.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.txnActivityYear",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. If the maximum value is reached, the Number of Transactions Per Year remains set at 999. Values accepted: 0–99",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.paymentAccAge",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Date converted into UTC that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.paymentAccInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the length of time that the payment account was \nenrolled in the cardholder’s account \nwith the 3DS Requestor.\nValues accepted:\n01 = No account (guest check-out)\n02 = During this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.shipAddressUsage",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Date converted into UTC when the shipping address used for the is transaction was first used with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.shipAddressUsageInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.\nValues accepted:\n01 = This transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.shipNameIndicator",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. Values accepted: 01 = Account Name identical to shipping Name 02 = Account Name different than shipping Name",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctInfo.suspiciousAccActivity",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates whether the 3DS Requestor has experienced \nsuspicious activity (including previous \nfraud) on the cardholder account.\nValues accepted:\n01 = No suspicious activity has been observed\n02 = Suspicious activity has been observed",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctNumber",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n- 13 to 19",
                        description: "Account number that will be used in the authorisation \nrequest for payment transactions. May be \nrepresented by PAN, Payment Token.\r",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "deviceRenderOptions",
                        type: "text",
                        dataType: "Object",
                        lengthAndType: "Variable",
                        description: "Required If DeviceChannel is 01 - APP Identifies the SDK Interface and SDK UI Type that the device supports for displaying specific challenge user interfaces within the 3DS SDK. Values Accepted: SubElements: 1. SDK Authentication Type 2.SDK Interface 3.SDK UI Type",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "mcc",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-4",
                        description: "This value correlates to the Merchant Category Code as defined by each Payment System or DS. The same value must be used in the authorisation request. This field is based on the Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "merchantCountryCode",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "This value correlates to the Merchant Country Code as defined by each Payment System or DS. The same value must be used in the authorisation request. Numeric three-digit country code, other than exceptions table listed below. This field is based on the Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "merchantName",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a-40",
                        description: "Merchant name assigned by the Acquirer or Payment System. The same value must be used in the authorisation request. This field is based Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "merchantRiskIndicator",
                        type: "text",
                        dataType: "Object",
                        lengthAndType: "Variable",
                        description: "Merchant’s assessment of the level of fraud risk for the specific authentication for both the Cardholder and the authentication being conducted. Values Accepted: Sub Elements: 1. Delivery Email Address 2.Delivery Timeframe 3.Gift Card Amount 4.Gift Card Count 5.Gift Card Currency 6.Pre-Order Date 7.Pre-Order Purchase Indicator 8.Reorder Items Indicator 9.Shipping Indicator 10.Transaction Characteristics Note: Data will be formatted into a JSON object prior to being placed into the Merchant Risk Indicator field of the message",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "deliveryEmailAddress",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-254",
                        description: "For Electronic delivery, the email address to which the merchandise was delivered",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "messageType",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed a-4",
                        description: "Identifies the type of message that is passed.\nValues Accepted:\nAreq \nARes\nCReq\nCRes\nOReq\nORes\nPreq\nPRes\nRReq\nRRes\nErro",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "messageVersion",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n - 5 to 8",
                        description: "The Message Version Number is set by the 3DS Server \nwhich originates the protocol with the Areq message. \nThe Message Version Number does not change during \na 3DS transaction.\nValues Accepted: Major.minor. patch",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "notificationURL",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans- 256",
                        description: "Required If, the deviceChannel 02 - BRW.\nFully Qualified URL of the system that receives the \nCRes message or Error Message. The CRes message is \nposted by the ACS through the Cardholder Browser at \nthe end of the challenge and receipt of the RRes \nmessage.\nValue: Fully Qualified URL",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "purchaseAmount",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-48",
                        description: "Purchase amount in minor units of currency with all \npunctuation removed. When used in conjunction with \nthe Purchase Currency Exponent field, proper \npunctuation can be \ncalculated. \nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, \n08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, \n08, 09, 11, 15",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "purchaseCurrency",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "Currency in which purchase amount is expressed. For message category 01 PA - Required, for 02-NPA : if 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09 Required for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15 Three-digit country code, other than exceptions table listed below.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "purchaseExponent",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-1",
                        description: "Minor units of currency as specified in the ISO 4217 currency exponent. For message category 01 PA - Required, for 02-NPA : if 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09 Required for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "purchaseDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-14",
                        description: "Date and time of the authentication converted into \nUTC. \nFormat accepted: \nYYYYMMDDHHMMSS\nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, \n08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, \n08, 09, 11, 15",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sdkType",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the type of 3DS SDK. Required If DeviceChannel 01 - APP 01 = Default-SDK 02 = Split-SDK",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sdkEphemPubKey",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-256 Max",
                        description: "Required If DeviceChannel is 01 - APP \nPublic key component of the ephemeral key pair \ngenerated by the 3DS SDK and used to establish \nsession keys between the 3DS SDK and ACS.\nIn AReq, this data element is present as its own object.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "acctType",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the type of account. For example, for a \nmulti-account card product.\n01 = Not applicable\n02 = Credit\n03 = Debit",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "appIp",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans- 45 Max",
                        description: "External IP address (i.e., the device public IP address) \nused by the 3DS Requestor App when it connects to \nthe 3DS Requestor environment.\nRequired, the DeviceChannel 01-APP",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddrCity",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a-50",
                        description: "City portion of the shipping address requested by the \nCardholder.\nRequired (if available) unless market or regional \nmandate restricts sending this information.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddrCountry",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "Required if Cardholder Shipping Address State is present. Country of the shipping address requested by the Cardholder. Three-digit country code, other than exceptions listed in table below",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddrLine1",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-50",
                        description: "First line of the street address or equivalent local portion of the shipping address requested by the Cardholder.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddrLine2",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-50",
                        description: "The second line of the street address or equivalent \nlocal portion of the shipping address requested by the \nCardholder",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddrLine3",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-50",
                        description: "The third line of the street address or equivalent local portion of the shipping address requested by the Cardholder",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddrPostCode",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-6",
                        description: "The ZIP or other postal code of the shipping address requested by the Cardholder",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddrState",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a-3",
                        description: "The state or province of the shipping address associated with the card being used for this purchase. For example, using the ISO entry US-CA (California, United States), the correct value for this field = CA. Note: that the country and hyphen are not included in this value.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "workPhone",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable cc: n : 1–3 subscriber: n : 15",
                        description: "The work phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "taxId",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-45",
                        description: "Cardholder’s tax identification. Conditional based on DS rules",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeDSMethodId",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed ans-36",
                        description: "Contains the 3DS Server Transaction ID used during \nthe previous execution of the 3DS Method.\nRequired if 3DS Requestor reuses previous 3DS \nMethod execution and the Device channel 02-BRW",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sdkAppID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed ans-36",
                        description: "Required, If Device channel - 01 APP Universally unique ID created upon all installations of the 3DS Requestor App on a Consumer Device. This will be newly generated and stored by the 3DS SDK for each installation. Note: In case of SplitSDK/Browser, the SDK App ID value is not reliable, and may change for each transaction.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sdkMaxTimeout",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Required, If Device channel - 01 APP \nValues accepted: Greater than or = 05",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sdkReferenceNumber",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-32",
                        description: "Identifies the vendor and version of the 3DS SDK that is used for a specific transaction. Required, If Device channel - 01 APP",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    // conditionally required data
                    {
                        name: "threeDSRequestorDecMaxTime",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-5",
                        description: "Indicates the maximum amount of time that the 3DS \nRequestor will wait for an ACS to provide the results of \na Decoupled Authentication transaction (in minutes)\nNumeric values between 00001 and 10080\nRequired if 3DS Requestor, Decoupled Request \nIndicator = Y or F or B",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "threeDSRequestorSpcSupport",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed a-1",
                        description: "This field is required if supported by the 3DS Requestor and deviceChannel field 02-BRW. Indicate if the 3DS Requestor supports the SPC authentication. Note: If present, the value Y = Supported",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "browserIP",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n - 45",
                        description: "IP address of the Browser as returned by the HTTP \nheaders to the 3DS Requestor.\nRequired, If deviceChannel field 02 - BRW",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "browserJavaEnabled",
                        type: "text",
                        dataType: "Boolean",
                        lengthAndType: "Fixed a-4",
                        description: "Required if Browser JavaScript Enabled = true; \notherwise, Optional and deviceChannel field 02-BRW\nValues Accepted:\ntrue\nfalse\nBoolean that represents the ability of the cardholder \nbrowser to execute Java. Value is returned from the \nnavigator. javaEnabled property",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "browserLanguage",
                        type: "text",
                        dataType: "Boolean",
                        lengthAndType: "Variable a-35 Max",
                        description: "The Value defining the Browser Language. Required, deviceChannel field 02 - BRW and Browser JavaScript Enabled = true; otherwise, Optional",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "browserColorDepth",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n - 1 to 2",
                        description: "Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW This Value representing the bit depth of the colour palette for displaying images, in bits per pixel. Obtained from the Cardholder Browser using the screen.colorDepthproperty Values : 1–99",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "browserScreenHeight",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n - 1 to 6",
                        description: "This field Total height of the Cardholder’s screen in pixels. Value is returned from the screen.height property. Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "browserScreenWidth",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n - 1 to 6",
                        description: "Total width of the Cardholder’s screen in pixels.Value is returned from the screen.width property. Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "browserTZ",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n - 1 to 5",
                        description: "Time zone offset in minutes between UTC and the \nCardholder Browser local time.\nValue is returned from the getTimezoneOffset() \nmethod.\nExample time zone offset values in minutes:\nIf UTC -5 hours:\n300\n+300\nIf UTC +5 hours:\n-300\nRequired if Browser JavaScript Enabled = true; \notherwise, Optional and deviceChannel field 02-BRW",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "deviceId",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans- 64 Max",
                        description: "Required if available. Unique and immutable identifier linked to a device that is consistent across 3DS transactions for the specific user device. Examples: Hardware Device ID Platform-calculated device fingerprint",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "userId",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans- 64 Max",
                        description: "Required if available.\nIdentifier of the transacting user’s Browser Account ID. \nThis identifier is a unique immutable hash of the user’s \naccount identifier for the given Browser, provided as a \nstring.\nNote: Cardholders may have more than one account \non a given Browser",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "cardExpiryDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-4",
                        description: "Expiry Date of the PAN or token supplied to the 3DS Requestor by the Cardholder. Format accepted: YYMM The requirements for the presence of this field are DSspecifi",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "cardSecurityCode",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-3 to 4",
                        description: "Three- or four-digit security code printed on the card. \nAction defined by Payment System rules.Conditional \nbased on DS rules",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "billAddrCity",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans - 50",
                        description: "The city of the Cardholder billing address associated \nwith the card used for this purchase.\nConditionally required for 01-PA: Required unless \nmarket or regional mandate restricts sending this \ninformation.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "billAddrCountry",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "The country of the Cardholder billing address \nassociated with the card used for this purchase.\nRequired if Cardholder Billing Address State is present. \n01-PA Required unless market or regional mandate \nrestricts sending this information.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information.\nThe Numeric three-digit country code, other than \nexceptions listed in table below",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "billAddrLine1",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-50",
                        description: "First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required if Cardholder Billing Address State is present. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "billAddrLine2",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-50",
                        description: "Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "billAddrLine3",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-50",
                        description: "Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "billAddrPostCode",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans- 16",
                        description: "ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "billAddrState",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a -3",
                        description: "The state or province of the Cardholder billing address associated with the card used for this purchase. 01-PA: Required unless market or regional mandate restricts sending this information, or State is not applicable for this country. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information, or State is not applicable for this country.",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "email",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-254",
                        description: "The email address associated with the account that is either entered by the Cardholder or is on file with the 3DS Requestor. Required (if available) unless market or regional mandate restricts sending this information",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "homePhone",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
                        description: "The home phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional \nmandate restricts sending this information",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "mobilePhone",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
                        description: "The mobile phone number provided by the \nCardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional \nmandate restricts sending this information.",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "cardholderName",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a- 1 to 45",
                        description: "Name of the Cardholder.\nThis field is Required unless market or regional \nmandate restricts sending this information and Device \nchannel field 02-BRW",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "payTokenSource",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Required if EMV Payment Token Indicator = true.\nThis data element will be populated by the system \nresiding in the 3-D Secure\ndomain where the detokenization occurs.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "payTokenInd",
                        type: "text",
                        dataType: "Boolean",
                        description: "A value of True indicates that the transaction was detokenized prior to being received by the ACS. This data element will be populated by the system residing in the 3-D Secure domain where the detokenization occurs (i.e., the 3DS Server or the DS). Value Accepted: true Required, if there is a detokenization of an Account Number.",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "payeeOrigin",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans - 2048",
                        description: "The origin of the payee that will be provided in the \nSPC Transaction Data.\nFully Qualified URL:\nThis field is Required if 3DS Requestor SPC = Y Support \nand Device channel field 02 - BRW",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "recurringAmount",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-48",
                        description: "Recurring amount in minor units of currency with all punctuation removed. For message category 01 PA - Required, for 02-NPA : 3DS Requestor Authentication Indicator = 02 or 03 ; OR 3RI Indicator = 01 or 02 and Recurring Indicator/ Amount Indicator = 01",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "recurringCurrency",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "Required if the Recurring Amount is present. Currency \nin which the Recurring Amount is expressed. Three digit currency code, other than exceptions listed in \ntable below.",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "recurringExponent",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-1",
                        description: "Required if the Recurring Amount is present.",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "recurringDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Required if Recurring Indicator/ Frequency Indicator = 01. Effective date of the new authorised amount following the first/promotional payment in a recurring or instalment transaction. Date format accepted: YYYYMMDD",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "recurringExpiry",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Required if there is an end date. Date format accepted: YYYYMMDD",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "recurringFrequency",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-4",
                        description: "Required if Recurring Indicator/ Frequency Indicator = \n01.\nIndicates the minimum number of days between \nauthorisations for a recurring or instalment \ntransaction.\nNumeric values between 1 and 9999",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "recurringInd",
                        type: "text",
                        dataType: "Object",
                        description: "Required if: 3DS Requestor Authentication Indicator = \n02 or 03; OR 3RI Indicator = 01 or 02\nIndicates whether the recurring or instalment \npayment has a fixed or variable amount and \nfrequency.\nThe Recurring Indicator object contains: \nthe Amount Indicator\nthe Frequency Indicator\nField Name: amountInd\nValues accepted: \n01 = Fixed Purchase Amount\n02 = Variable Purchase Amount \n03–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use\nField Name: frequencyInd\nValues accepted: \n01 = Fixed Frequency\n02 = Variable or Unknown Frequency\n03–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sdkEncData",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-64000",
                        description: "Required, If Device channel = 01 - APP and Required \nfrom the 3DS Server to the DS but will not be present \nfrom the DS to the ACS",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "transType",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Identifies the type of transaction being authenticated.\n01 = Goods/ Service Purchase\n03 = Check Acceptance\n10 = Account Funding\n11 = Quasi-Cash Transaction\n28 = Prepaid Activation and Load",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "spcIncompInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Reason that the SPC authentication was not completed. 01 = SPC did not run or did not successfully complete 02 = Cardholder cancelled the SPC authentication 03 = SPC timed out 04–99 = Reserved for EMVCo future use (values invalid until defined by EMVCo) Required if the 3DS Requestor attempts to invoke the SPC API and there is an error and the Device channel 02-BRW",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "messageExtension",
                        type: "text",
                        dataType: "Array of objects",
                        lengthAndType: "Variable n - 1 to 15",
                        description: "Data necessary to support requirements not otherwise \ndefined in the 3-D Secure message are carried in a \nMessage Extension.\nValues Accepted: Sub Elements: \n1.Extension name \n2.Assigned extension group identifier\n3.Criticality indicator\n4.Data",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sdkTransID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed an-36",
                        description: "Required, If Device channel = 01 - APP Universally unique transaction identifier assigned by the 3DS SDK to identify a single transaction",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "defaultSdkType",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed sdkVariant : n-2 wrappedIn d : n-1",
                        description: "Required if SDK Type = 01 Default-SDK and Device channel = 01 - APP SdkVariant Values accepted: 01 = Native 02–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo) 80–99 = Reserved for DS use WrappedInd Value accepted: Y = Wrapped Only present if value = Y",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sdkServerSignedContent",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable",
                        description: "Required if SDK Type = 02 Indicates the characteristics \nof a Split-SDK and Device channel - 01 APP \nValues Accepted:\n1.SDK Reference Number\n2.SDK Signature Timestamp\n3.SDK Transaction ID\n4.Split-SDK Server ID",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "splitSdkType",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed sdkVariant : n-2 limited : n1",
                        description: "Required if SDK Type = 02 Indicates the characteristics of a Split-SDK and Device channel - 01 APP sdkVariant Values accepted: 01 = Native Client 02 = Browser 03 = Shell 04–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo) 80–99 = Reserved for DS use limitedInd Value accepted: Only present if value = Y, Y = Limited",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "trustListStatusSource",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Required if the Trust List Status is present.\nThis data element will be populated by the system \nsetting Trust List Status.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "deviceBindingStatusSource",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Required if Device Binding Status is present. This data element will be populated by the system setting Device Binding Status. Values accepted: 01 = 3DS Server 02 = DS 03 = ACS",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    },
                    //   Optional 
                    {
                        name: "threeDSRequestorChallengeInd",
                        type: "text",
                        dataType: "Array of String",
                        lengthAndType: "Fixed Size : 1-2 elements n - 2",
                        description: "Indicates whether a challenge is requested for this \ntransaction.\n01 = No preference\n02 = No challenge requested\n03 = Challenge requested (3DS Requestor preference)\n04 = Challenge requested (Mandate)\n05 = No challenge requested (transactional risk \nanalysis is already performed)\n06 = No challenge requested (Data share only)\n07 = No challenge requested (strong consumer \nauthentication is already performed)\n08 = No challenge requested (use Trust List exemption \nif no challenge required)\n09 = Challenge requested (Trust List prompt requested \nif challenge required)\n10 = No challenge requested\n(use low value exemption)\n11 = No challenge requested\n(Secure corporate payment exemption)\n12 = Challenge requested (Device Binding prompt \nrequested if challenge required)\n13 = Challenge requested (Issuer requested)\n14 = Challenge requested (Merchant-initiated \ntransactions)\n15–79 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n80–99 = Reserved for DS use\nNote: If the element is not provided, the expected \naction is that the ACS would interpret as 01 = No \npreference.",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "threeDSRequestorDecReqInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed a-1",
                        description: "Indicates whether the 3DS Requestor requests the ACS \nto use Decoupled Authentication and agrees to use \nDecoupled Authentication if the ACS confirms its use.\nY = Decoupled Authentication is supported and \npreferred if challenge is necessary\nN = Do not use Decoupled Authentication\nF = Decoupled Authentication is supported and is to be \nused only as a fallback challenge \nmethod if a challenge is necessary.\nB = Decoupled Authentication is supported and can be \nused as a primary or fallback challenge method if a challenge is necessary.",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "addrMatch",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed a-1",
                        description: "Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. Required If, DeviceChannel is 01- APP ; 02- BRW. Y = Shipping Address matches Billing Address N = Shipping Address does not match Billing Address",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "acctID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an-64",
                        description: "Additional information about the account optionally provided by the 3DS Requestor.",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "merchantDSPassword",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "",
                        description: "Merchant 1.0 Directory sever registered password",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "challengeWindowSize",
                        type: "text",
                        dataType: "String",
                        description: "Optional but required for deviceChannel 02 - BRW Challenge window size. Values accepted: 01 = 250 x 400 02 = 390 x 400 03 = 500 x 600 04 = 600 x 400 05 = Full screen",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "trustListStatus",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed a-1",
                        description: "Enables the communication of trust list status between the ACS, the DS and the 3DS Requestor. Y = 3DS Requestor is Trust Listed by Cardholder N = 3DS Requestor is not Trust Listed by Cardholder E = Not eligible as determined by issuer P = Pending confirmation by Cardholder R = Cardholder rejected U = Trust List status unknown, unavailable, or does not apply Note: Valid values in the AReq message are Y or N",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "deviceBindingStatus",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Enables the communication of Device Binding Status \nbetween the ACS, the DS and the 3DS Requestor. For \nbound devices (value = 11–14), Device Binding Status \nalso conveys the type of binding that was performed.\nValues accepted: \n01 = Device is not bound by Cardholder\n02 = Not eligible as determined by Issuer\n03 = Pending confirmation by Cardholder\n04 = Cardholder rejected\n05 = Device Binding Status unknown, unavailable, or \ndoes not apply\n06–10 = Reserved for EMVCo future use (values invalid \nuntil defined by EMVCo)\n11 = Device is bound by Cardholder (device is bound \nusing hardware / SIM internal \nto the Consumer Device. For instance, keys stored in a \nsecure element on the device)\n12 = Device is bound by Cardholder (device is bound \nusing hardware external to the \nConsumer Device. For example, an external FIDO \nAuthenticator\n13 = Device is bound by Cardholder (Device is bound \nusing data that includes \ndynamically generated data and could include a \nunique device ID)\n14 = Device is bound by Cardholder (Device is bound \nusing static device data that has been obtained from \nthe Consumer Device\n15 = Device is bound by Cardholder (Other method)",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                ]
            },
            {
                id: 4,
                fieldCategory: true,
                fieldCategoryName: 'AcctInfo',
                fields: [
                    {
                        name: "acctInfo",
                        type: "text",
                        dataType: "Object",
                        lengthAndType: "Variable",
                        description: "Additional information about the Cardholder’s \naccount provided by the 3DS Requestor.\nValues: Sub Elements: \n1.Cardholder Account Age Indicator\n2.Cardholder Account Change\n3.Cardholder Account Change Indicator\n4.Cardholder Account Date\n5.Cardholder Account Requestor ID\n6.Cardholder Account Password Change\n7.Cardholder Account Password Change Indicator\n8.Cardholder Account Purchase Count\n9.Number of Provisioning Attempts Per Day\n10.Number of Transactions Per Day\n11.Number of Transactions Per Year\n12.Payment Account Age\n13.Payment Account Age Indicator\n14.Shipping Address Usage\n15.Shipping Address Usage Indicator\n16.Shipping Name Indicator\n17.Suspicious Account Activity",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "chAccAgeInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Values accepted:\n01 = No account (guest check-out)\n02 = Created during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "chAccChange",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "chAccChangeInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Values accepted:\n01 = Changed during this transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "chAccDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "chAccReqID",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an-64",
                        description: "The 3DS Requestor assigned account identifier of the \ntransacting Cardholder. \nThis identifier is coded as the SHA-256 + Base64url of the account identifier for the 3DS Requestor and is provided as a String",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "chAccPwChange",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "chAccPwChangeInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.\nValues accepted:\n01 = No change\n02 = Changed during this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "nbPurchaseAccount",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-4",
                        description: "Number of purchases with this cardholder account during the previous six months. If the Cardholder Account Purchase Count reaches the value 999, it remains set at 999. Values accepted: 0–999",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "provisionAttemptsDay",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-3",
                        description: "Number of Add Card attempts in the last 24 hours",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "txnActivityDay",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-3",
                        description: "Number of transactions (successful and abandoned) for this \ncardholder account with the 3DS Requestor across all \npayment accounts in the previous 24 hours.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "txnActivityYear",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. If the maximum value is reached, the Number of Transactions Per Year remains set at 999. Values accepted: 0–99",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "paymentAccAge",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Date converted into UTC that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "paymentAccInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the length of time that the payment account was \nenrolled in the cardholder’s account \nwith the 3DS Requestor.\nValues accepted:\n01 = No account (guest check-out)\n02 = During this transaction\n03 = Less than 30 days\n04 = 30−60 days\n05 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddressUsage",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Date converted into UTC when the shipping address used for the is transaction was first used with the 3DS Requestor. Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipAddressUsageInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.\nValues accepted:\n01 = This transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipNameIndicator",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. Values accepted: 01 = Account Name identical to shipping Name 02 = Account Name different than shipping Name",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "suspiciousAccActivity",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates whether the 3DS Requestor has experienced \nsuspicious activity (including previous \nfraud) on the cardholder account.\nValues accepted:\n01 = No suspicious activity has been observed\n02 = Suspicious activity has been observed",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                ]
            },
            {
                id: 5,
                fieldCategory: true,
                fieldCategoryName: 'deviceRenderOptions',
                fields: [
                    {
                        name: "sdkAuthenticationType",
                        type: "text",
                        dataType: "Array of String",
                        lengthAndType: "Fixed Size: 1 - 99 elements n-2",
                        description: "Authentication methods preferred by the 3DS SDK in order of preference. Size: 1–99 elements Values accepted: 01 = Static Passcode 02 = SMS OTP 03 = Key fob or EMV card reader OTP 04 = App OTP 05 = OTP Other 06 = KBA 07 = OOB Biometrics 08 = OOB Login 09 = OOB Other 10 = Other 11 = Push Confirmation",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sdkInterface",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Lists all of the SDK Interface types that the device supports for displaying specific challenge user interfaces within the 3DS SDK. Values accepted: 01 = Native 02 = HTML 03 = Both",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sdkUiType",
                        type: "text",
                        dataType: "Array of String",
                        lengthAndType: "Variable Size: 1–7 elements n-2",
                        description: "Lists all UI types that the device supports for displaying specific challenge user interfaces within the 3DS SDK. Valid values for each Interface: Native UI = 01–04, 07 HTML UI = 01–07 Values accepted: 01 = Text 02 = Single Select 03 = Multi Select 04 = OOB 05 = HTML Other (valid only for HTML UI) 06 = HTML OOB (valid only for HTML UI) 07 = Information",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                ]
            },
            {
                id: 6,
                fieldCategory: true,
                fieldCategoryName: 'Merchant Risk Indicator',
                fields: [
                    {
                        name: "deliveryEmailAddress",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans-254",
                        description: "For Electronic delivery, the email address to which the merchandise was delivered",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "deliveryTimeframe",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the merchandise delivery timeframe. \nValues accepted:\n01 = Electronic Delivery\n02 = Same day shipping\n03 = Overnight shipping\n04 = Two-day or more shipping",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "giftCardAmount",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n-15",
                        description: "For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, USD 123.45 is 123). Example: gift card amount is USD 123.45: Values accepted: 123 0123 00123",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "giftCardCount",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "giftCardCurr",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-3",
                        description: "The Numeric three-digit country code, other than exceptions listed in table below",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "preOrderDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "For a pre-ordered purchase, the expected date that the merchandise will be available. Format accepted: Date format = YYYYMMDD",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "preOrderPurchaseInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates whether Cardholder is placing an order for merchandise with a future availability or release date. Values accepted: 01 = Merchandise available 02 = Future availability",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "reorderItemsInd",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates whether the cardholder is reordering previously purchased merchandise. Values accepted: 01 = First time ordered 02 = Reordered",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "shipIndicator",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates shipping method chosen for the transaction. Values accepted: 01 = Ship to cardholder’s billing address 02 = Ship to another verified address on file with merchant 03 = Ship to address that is different than the cardholder’s billing address 04 = “Ship to Store” / Pick-up at local store (Store address shall be populated in shipping address fields) 05 = Digital goods (includes online services, electronic gift cards and redemption codes) 06 = Travel and Event tickets, not shipped 07 = Other (for example, Gaming, digital services not shipped, emedia subscriptions, etc.) 08 = Pick-up and go delivery 09 = Locker delivery (or other automated pick-up)",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "transChar",
                        type: "text",
                        dataType: "Array of String",
                        lengthAndType: "Variable \nSize: \n1–2 \nelements\nn-2",
                        description: "Indicates to the ACS specific transactions identified by the Merchant. Value accepted: 01 = Cryptocurrency transaction 02 = NFT transaction",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                ]
            },
            {
                id: 7,
                fieldCategory: true,
                fieldCategoryName: 'Message Extension',
                fields: [
                    {
                        name: "criticalityIndicator",
                        type: "text",
                        dataType: "Boolean",
                        description: "A Boolean value indicating whether the recipient must \nunderstand the contents of the extension to interpret the \nentire message.\nValues accepted:\ntrue\nfalse",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "data",
                        type: "text",
                        dataType: "Object",
                        lengthAndType: "Variable ans - 8059",
                        description: "The data carried in the extension",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "id",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an - 64",
                        description: "A unique identifier for the extension.\nNote: Payment System Registered Application Provider \nIdentifier (RID) is required as prefix of the ID.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "name",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an - 64",
                        description: "The name of the extension data set as defined by the extension owner",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                ]
            },
            {
                id: 8,
                fieldCategory: true,
                fieldCategoryName: 'Broad Info',
                fields: [
                    {
                        name: "category",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the category/type of information.\nValues accepted:\n01 = General\n02 = Certificate expiry\n03 = Fraud alert\n04 = Operational alert\n05 = Transactional data\n06 = Other",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "severity",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the importance/severity level of the broadcasted information. Values accepted: 01 = Critical = Immediate action to be taken by recipient 02 = Major = Major impact; Upcoming action to be taken by recipient 03 = Minor = Minor impact; Upcoming action to be taken by recipient 04 = Informational = Informational only with no immediate action by recipient",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "recipients",
                        type: "text",
                        dataType: "Array of String",
                        lengthAndType: "Variable a- 3",
                        description: "Indicates the intended recipient(s) of the broadcasted \ninformation.\nValues accepted:\n01 = 3DS SDK\n02 = 3DS Server\n03 = DS\n04 = ACS",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "source",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Indicates the source of the broadcasted information.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "description",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans- 4000",
                        description: "Information to be broadcasted to recipients",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "expDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "The date after which the relevance of the broadcasted information. Format accepted: YYYYMMDD",
                        status: "optional",
                        checked: false,
                        value: ""
                    }
                ]
            },
            {
                id: 9,
                fieldCategory: true,
                fieldCategoryName: 'ThreeDS Requestor Authentication Info',
                fields: [
                    {
                        name: "threeDSReqAuthData",
                        type: "text",
                        dataType: "String or Object",
                        lengthAndType: "Variable 50000 characters n-2",
                        description: "Data that documents and supports a specific authentication process.\nif the 3DS Requestor Authentication Method is:\n03 - then this element can carry information about the\nprovider of the federated ID and related information.\n06 - then this element can carry the FIDO Assertion and/or Attestation Data.\n07 - then this element can carry FIDO Assertion and/or\nAttestation. Data with the FIDO Assurance Data signed by a trusted third party.\n08 - then this element can carry the SRC Assurance Data.\nFor 3DS Requestor Authentication Method = 06 or 07",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "three DSReqAuthMethod",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Mechanism used by the Cardholder to authenticate to the 3DS Requestor.\nValues accepted:\n01 = No 3DS Requestor authentication occurred (i.e.,\ncardholder “logged in” as guest)\n02 = Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials\n03 = Login to the cardholder account at the 3DS Requestor system using federated ID\n04 = Login to the cardholder account at the 3DS Requestor system using issuer credentials\n05 = Login to the cardholder account at the 3DS Requestor system using third-party authentication\n06 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator\n07 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator (FIDO Assertion or Attestation data signed)\n08 = SRC Assurance Data\n09 = SPC Authentication\nNote: For 09 = SPC Authentication, the Assertion Data is provided as a JSON object returned by the SPC API.",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "threeDSReqAuthTimestamp",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-12",
                        description: "Date and time of the cardholder authentication converted\ninto UTC.\nFormat accepted:\nDate format = YYYYMMDDHHMM",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                ]
            },
            {
                id: 10,
                fieldCategory: true,
                fieldCategoryName: 'Seller Info',
                fields: [
                    {
                        name: "sellerName",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a- 100",
                        description: "Name of the Seller",
                        status: "mandate",
                        checked: true,
                        value: ""
                    },
                    {
                        name: "sellerId",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an-50",
                        description: "Required if Seller ID in Multi Transaction object is present. Merchant-assigned Seller identifier",
                        status: "conditionally required",
                        checked: false,
                        value: ""
                    }, {
                        name: "sellerBusinessName",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable a- 100",
                        description: "Business name of the Seller",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAccDate",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-8",
                        description: "Date converted into UTC that the Seller started using the Merchant’s services. Format accepted: Date format = YYYYMMDD",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAddrLine1",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an- 50",
                        description: "First line of the business or contact street address of the Seller",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAddrLine2",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an- 50",
                        description: "Second line of the business or contact street address of the Seller",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAddrLine3",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an- 50",
                        description: "Third line of the business or contact street address of the Seller.",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAddrCity",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an- 50",
                        description: "Business or contact city of the Seller",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAddrState",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an- 3",
                        description: "Value accepted: For example, the entry US-CA (California, United States), the correct value for this field = CA. Note that the country and hyphen are not included in this value",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAddrPostCode",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an- 16",
                        description: "Business or contact ZIP or other postal code of the Seller.",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerAddrCountry",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed an- 3",
                        description: "Business or contact country of the Seller. The numeric three-digit country code, other than exceptions listed in Table below",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerEmail",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable ans- 254",
                        description: "Business or contact email address of the Seller",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "sellerPhone",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable Numeric cc: 1-3 subscriber:1 5",
                        description: "Business or contact phone number of the Seller. Values accepted: Country Code and Subscriber sections of the number represented by the following named fields: cc subscriber",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                ]
            },
            {
                id: 11,
                fieldCategory: true,
                fieldCategoryName: 'Pay Token Info',
                fields: [
                    {
                        name: "token",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable n -13 to 19",
                        description: "Payment token used to initiate the EMV 3DS transaction",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "tokenAdditionalData",
                        type: "text",
                        dataType: "Object",
                        lengthAndType: "Variable an-500",
                        description: "Additional information about the Payment Token from the Token Service Provider",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "tokenAssuranceMethod",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "An updatable value that allows the Token Service Provider to communicate the ID&V performed. It is determined or updated by the ID&V Method(s) and ID&V Actor",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "tokenRequestorId",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-11",
                        description: "An 11-digit numeric value that identifies each unique combination of Token Requestor and Token Domain(s) for a given Token Service Provider",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "tokenCryptogram",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Variable an-4000",
                        description: "A cryptogram, containing a transaction unique value, \ntypically generated using the Payment Token, Payment \nToken related data and transaction data. Cryptogram \nderivation methods may vary by scenario and may be \nPayment System-specific.",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "tokenCryptogramValidityIndicator",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed n-2",
                        description: "Identifies if the Token Cryptogram has been verified and the outcome of that verification.\nValues accepted: \n01 = Verified\n02 = Failed\n03 = Not Performed \n04–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n80–99 = Reserved for DS use \nNote: If the element is not provided, the expected action is for the ACS to interpret as 03",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                    {
                        name: "tokenStatusIndicator",
                        type: "text",
                        dataType: "String",
                        lengthAndType: "Fixed an-40",
                        description: "Identifies the current status of the Payment Token.",
                        status: "optional",
                        checked: false,
                        value: ""
                    },
                ]
            }
        ])
    }

    return (
        <div className="relative z-10 bg-white rounded border-gray/20 sm:m-0">
            {intialFormData && (
                <Formik
                    key={intialFormData?.apiUrl}
                    initialValues={{
                        apiURLs: intialFormData?.apiUrl,
                        laptop: false,
                        browserIP: false,
                        OrganizationID: '',
                        SecretKey: intialFormData?.configuration?.SecretKey,
                        host: intialFormData?.Header?.host,
                        ContentType: intialFormData?.Header?.contentType,
                        vcMerchantId: intialFormData?.Header?.vcMerchantId,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setFieldError }) => {
                        // Handle form submission here
                        console.log({ ...values, ...selectedSandboxTestCodes });

                        // Set response data if request successfull
                        setResponseData({
                            statusCode: 200,
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                            response: {
                                status: "success",
                                data: {
                                    id: 12345,
                                    name: "John Doe",
                                    email: "john.doe@example.com"
                                }
                            },
                            header: {
                                Status: "200 OK",
                                Date: "Fri, 25 Mar 2024 12:00:00 GMT",
                                Server: "Apache",
                                ['Content-Type']: "application/json",
                                ['Content-Length']: "56",
                                Connection: "close"
                            }
                        })

                    }}
                >
                    {({ setFieldValue, handleChange }) => (
                        <Form className="rounded-3xl bg-white px-4 py-8 lg:px-8">
                            <div className="grid gap-10 md:grid-cols-1 mb-6">
                                <div className="relative">
                                    <Field
                                        type="text"
                                        name="apiURLs"
                                        className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                        placeholder=" "
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                        API URLs
                                    </label>
                                    <ErrorMessage name="apiURLs" component="div" className="text-sm mt-2 text-red" />
                                </div>
                            </div>

                            <div>
                                <h2 className='mb-6'>Configuration</h2>
                                <div className="grid gap-10 md:grid-cols-2 mb-6">
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="OrganizationID"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            validateOnChange={true}
                                            validate={(value) => {
                                                let errorMessage;
                                                if (!value) {
                                                    errorMessage = 'Organization ID is required';
                                                } else if (value.length !== 10) {
                                                    errorMessage = 'Organization ID must be exactly 10 characters';
                                                }
                                                return errorMessage;
                                            }}
                                            onChange={(event) => {
                                                const { name, value } = event.target;

                                                validateOrganisationId(value)

                                                handleChange(event)
                                            }}
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Organization ID
                                        </label>

                                        {organizationIDValidationStatus === "success" && (
                                            <FaCircleCheck className='text-[#22C55E] text-xl absolute top-[9px] right-[10px]' />
                                        )}

                                        {organizationIDValidationStatus === "failed" && (
                                            <FaCircleXmark className='text-[#F43F5E] text-xl absolute top-[9px] right-[10px]' />
                                        )}
                                    </div>
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="SecretKey"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=" "
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Secret Key
                                        </label>
                                        <ErrorMessage name="SecretKey" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className='mb-6'>Header</h2>
                                <div className="grid gap-10 md:grid-cols-2 mb-10">
                                    <div className="relative">
                                        <Field
                                            type="textarea"
                                            name="host"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=""

                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Host
                                        </label>
                                        <ErrorMessage name="host" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="ContentType"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=""
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            Content Type
                                        </label>
                                        <ErrorMessage name="ContentType" component="div" className="text-sm mt-2 text-red" />
                                    </div>

                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="vcMerchantId"
                                            className="w-full rounded-md border border-gray/30 bg-transparent p-2 font-normal text-sm text-para outline-none transition ltr:pr-12 rtl:pl-12"
                                            placeholder=""
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-normal left-3 text-sm text-para">
                                            VC Merchant Id
                                        </label>
                                        <ErrorMessage name="vcMerchantId" component="div" className="text-sm mt-2 text-red" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="grid gap-10 md:grid-cols-2 mb-10">
                                    <div className='bg-bggray p-4 rounded'>
                                        <h2 className='mb-4'>Request Parameter</h2>
                                        <div>
                                            {parametersData?.map((parameter, i) => {

                                                return (
                                                    <div key={i} className='mb-4'>
                                                        {parameter?.fieldCategory && (
                                                            <h3 className='text-bluedark'>
                                                                {parameter?.fieldCategoryName}
                                                            </h3>
                                                        )}

                                                        {parameter?.fields.map((field, index) => {
                                                            return (
                                                                <div key={index} className='flex items-center'>
                                                                    <Field
                                                                        type="checkbox"
                                                                        name={field?.name}
                                                                        className="rounded-md border border-gray/30 bg-transparent p-2 font-normal text-para text-sm outline-none transition ltr:pr-12 rtl:pl-12"
                                                                        checked={field?.checked}
                                                                        id={field?.name}
                                                                        disabled={organizationIDValidationStatus != 'success'}
                                                                        onChange={e => {
                                                                            setParametersData(prevData => {
                                                                                const updatedData = prevData.map(item => {
                                                                                    if (item.id === parameter.id) {
                                                                                        const updatedFields = parameter.fields.map(fi => {
                                                                                            if (fi.name === field?.name) {

                                                                                                setFieldValue(field?.name, e.target.checked);

                                                                                                return {
                                                                                                    ...fi,
                                                                                                    checked: e.target.checked,
                                                                                                }
                                                                                            }

                                                                                            return fi;
                                                                                        })

                                                                                        return {
                                                                                            ...item,
                                                                                            fields: updatedFields
                                                                                        }
                                                                                    }

                                                                                    return item;
                                                                                })

                                                                                return updatedData;
                                                                            })
                                                                        }}
                                                                    />

                                                                    <div className='flex items-center'>
                                                                        <label className="px-2 font-normal left-3 text-sm text-para text-nowrap">
                                                                            {field?.name} {field.status === 'conditionally required' ? '*' : ''}
                                                                        </label>


                                                                        <Popover className="relative">
                                                                            {/* disabled={organizationIDValidationStatus != 'success'} */}
                                                                            <Popover.Button className='disabled:text-para outline-none'>
                                                                                <IoMdInformationCircle />
                                                                            </Popover.Button>

                                                                            {/* name: 'billAddrCountry',
                                                                                type: 'text',
                                                                                status: 'conditionally',
                                                                                dataType: 'String',
                                                                                lengthAndType: 'Fixed ans-6',
                                                                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', 
                                                                            */}

                                                                            <Popover.Panel className="absolute z-10 bg-white shadow rounded block sm:w-96 p-6">
                                                                                {({ close }) => (
                                                                                    <>
                                                                                        <button className='absolute top-4 right-4' onClick={() => close()}>
                                                                                            <IoCloseCircleSharp className='text-xl text-bluedark' />
                                                                                        </button>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Field Name:</span>
                                                                                            {field?.name}
                                                                                        </h2>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Data Type:</span>
                                                                                            <span className='bg-primary inline-block px-4 py-1 text-sm rounded'>
                                                                                                {field?.dataType}
                                                                                            </span>
                                                                                        </h2>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Type:</span>
                                                                                            <span className='capitalize'>{field?.status}</span>
                                                                                        </h2>
                                                                                        <h2 className='mb-2 border-b border-gray pb-2'>
                                                                                            <span className='font-semibold mr-2'>Length and Type:</span>
                                                                                            {field?.lengthAndType}
                                                                                        </h2>
                                                                                        <span className='font-semibold mb-2'>Definition</span>
                                                                                        <p style={{ whiteSpace: 'pre-line' }}>{field.description}</p>
                                                                                    </>
                                                                                )}
                                                                            </Popover.Panel>
                                                                        </Popover>

                                                                        {/* <button type='button' disabled={organizationIDValidationStatus != 'success'} className='disabled:text-para'>
                                                                            <IoMdInformationCircle />
                                                                        </button> */}
                                                                    </div>


                                                                    {field.status === 'conditionally required' && (
                                                                        <ErrorMessage name={field?.name} component="div" className="text-sm text-red" />
                                                                    )}
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className='bg-bggray p-4 rounded relative'>
                                        <h2 className='mb-4'>Sandbox Test Codes</h2>

                                        {organizationIDValidationStatus === 'success' && (
                                            <p className='text-sm mb-5'>
                                                To edit a value, hover your mouse cursor over the target value and click on the displayed edit icon button
                                            </p>
                                        )}

                                        {selectedSandboxTestCodes['Browser Info']?.browserIP === "" && (
                                            <p className='text-[#880808] text-sm mb-4'>Please Enter a value for Browser IP</p>
                                        )}

                                        <div>
                                            {/* <DynamicReactJson
                                                src={selectedSandboxTestCodes}
                                                theme="monokai"
                                                enableClipboard={false}
                                                displayObjectSize={false}
                                                displayDataTypes={false}
                                                displayArrayKey={false}
                                                name={false}
                                                onEdit={organizationIDValidationStatus != 'success' ? false : (edit) => {
                                                    setParametersData(prevData => {
                                                        const newData = prevData.map(item => {
                                                            const newItem = { ...item };
                                                            const fieldIndex = newItem.fields.findIndex(field => field.name === edit.name);
                                                            if (fieldIndex !== -1) {
                                                                newItem.fields[fieldIndex] = {
                                                                    ...newItem.fields[fieldIndex],
                                                                    value: edit.new_value
                                                                };
                                                            }
                                                            return newItem;
                                                        });

                                                        return newData;
                                                    });
                                                }}
                                            /> */}


                                            <JSONInput
                                                placeholder={selectedSandboxTestCodes}
                                                onBlur={(newData) => {
                                                    console.log(newData.jsObject);
                                                    // setParametersData(newData.jsObject);
                                                    // setData(newData.jsObject)
                                                }}
                                                onKeyPressUpdate={false}
                                                theme="light_mitsuketa_tribute"
                                                locale={locale}
                                                height="100%"
                                                width="100%"
                                            />

                                           
                                        </div>

                                        <button
                                                className='py-1 px-4 rounded-sm text-sm bg-bluedark text-white absolute top-3 right-5'
                                                type="button"
                                                onClick={() => {
                                                    const jsonData = JSON.stringify(selectedSandboxTestCodes);

                                                    navigator.clipboard.writeText(jsonData)
                                                        .then(() => {
                                                            toast("Copied");
                                                        })
                                                        .catch((error) => {
                                                            console.error('Failed to copy JSON data: ', error);
                                                        });
                                                }}
                                            >
                                                COPY
                                            </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 ltr:lg:text-right rtl:lg:text-left">
                                <button type="submit" disabled={organizationIDValidationStatus != 'success' || selectedSandboxTestCodes['Browser Info']?.browserIP === ""} className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white mr-6 disabled:bg-bggray disabled:text-black">
                                    Send
                                </button>
                                <button onClick={handleReset} disabled={organizationIDValidationStatus != 'success'} type="button" className="btn bg-bluedark hover:bg-bluelight py-2 px-12 rounded capitalize text-white disabled:bg-bggray disabled:text-black">
                                    Reset
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}

            {/* responseData */}

            {responseData && (
                <div className='px-4 py-8 lg:px-8'>
                    {/* <div className='flex gap-x-4'>
                        <span className='text-bluedark mb-4 block'>Status Codes</span>
                        <span className='text-[#22C55E]'>
                            {responseData.statusCode}
                        </span>
                    </div> */}


                    {/* <div className='bg-bggray p-4 rounded mb-8'>
                                <h2 className='mb-3'>Status Codes</h2>
                                <div className='space-y-2'>
                                    <div className='bg-white p-2 border-l-4 border-[#22C55E] text-sm'>
                                        <p>200 - Success</p>
                                    </div>
                                    <div className='bg-white p-2 border-l-4 border-[#EF4444] text-sm'>
                                        <p>400 - Success</p>
                                    </div>
                                    <div className='bg-white p-2 border-l-4 border-[#EF4444] text-sm'>
                                        <p>500 - Success</p>
                                    </div>
                                    <div className='bg-white p-2 border-l-4 border-[#EF4444] text-sm'>
                                        <p>401 - Success</p>
                                    </div>
                                </div>
                            </div> */}


                    <div className='bg-bggray p-4 rounded mb-8'>
                        <h2 className='mb-3'>Status Codes</h2>
                        <div className='flex space-x-4 text-sm'>
                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#22C55E] text-white">200</span><p className='bg-white py-2 px-4'>Success</p>
                            </div>

                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#EF4444] text-white">400</span><p className='bg-white py-2 px-4'>Invalid</p>
                            </div>

                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#EF4444] text-white">500</span><p className='bg-white py-2 px-4'>Unexpected System Error</p>
                            </div>

                            <div className='flex rounded-sm overflow-hidden shadow'>
                                <span className="py-2 px-4 bg-[#EF4444] text-white">401</span><p className='bg-white py-2 px-4'>Unauthorized request</p>
                            </div>
                        </div>
                    </div>


                    {/* <div className="mx-auto mt-8 p-4 bg-[#E2E8F0] border-l-4 border-primary">
                        <div>
                            <h2 className="text-xl font-bold text-bluedark sm:text-lg mb-2">
                                Used by
                            </h2>

                            <p className=" text-para mx-auto">
                                Payment Acquiring Banks, Merchants, and Payment Aggregators.
                            </p>
                        </div>
                    </div> */}

                    {/* <div className='mb-4'>
                        <span className='text-bluedark mb-1 block'>Description</span>
                        <span className='text-sm'>
                            {responseData.description}
                        </span>
                    </div> */}

                    <div className="grid gap-10 md:grid-cols-2 mb-6 ">
                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Response</h2>

                            <div className='relative'>
                                <DynamicReactJson
                                    src={responseData.response}
                                    theme="monokai"
                                    enableClipboard={false}
                                    displayObjectSize={false}
                                    displayDataTypes={false}
                                    displayArrayKey={false}
                                    name={false}
                                />

                                <button
                                    className='py-1 px-4 rounded-sm text-sm bg-white text-bluedark absolute top-5 right-5'
                                    type="button"
                                    onClick={() => {
                                        const jsonData = JSON.stringify(responseData.response);

                                        navigator.clipboard.writeText(jsonData)
                                            .then(() => {
                                                toast("Copied")
                                                // alert('COPIED')
                                                // console.log('JSON data copied to clipboard');
                                            })
                                            .catch((error) => {
                                                console.error('Failed to copy JSON data: ', error);
                                            });
                                    }}
                                >
                                    COPY
                                </button>
                            </div>


                        </div>

                        <div className='bg-bggray p-4 rounded'>
                            <h2 className='mb-3'>Description</h2>
                            <p className='text-sm bg-white p-4'>
                                {responseData.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default SandboxForm;
