export const data3DSS = [
    {
      id: 1,
      fieldCategoryName: false,
      fields: [
        {
          name: "Partner ID",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed ans-6",
          description: "Partner ID assigned",
          status: "mandate",
          checked: true,
          value: "Myla10"
        },
        {
          name: "deviceChannel",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the type of channel interface being used to\ninitiate the transaction.\nValues Accepted:\n01 = App-based (APP)\n02 = Browser (BRW)\n03 = 3DS Requestor Initiated (3RI)",
          status: "mandate",
          checked: true,
          value: "02"
        },
        {
          name: "messageCategory",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Identifies the category of the message for a specific\nuse case.\nValues Accepted:\n01 = PA\n02 = NPA",
          status: "mandate",
          checked: true,
          value: "01"
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
          value: "Y"
        },
        {
          name: "threeDSRequestorAuthenticationInd",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the type of Authentication request. Required\nIf DeviceChannel 01-APP ; 02-BRW\nValues Accepted:\n01 = Payment transaction\n02 = Recurring transaction\n03 = Instalment transaction\n04 = Add card\n05 = Maintain card\n06 = Cardholder verification as part of EMV token\nID&V\n07 = Billing Agreement\n08 = Split shipment\n09 = Delayed shipment\n10 = Split payment",
          status: "mandate",
          checked: true,
          value: "01"
        }
      ]
    },
    {
      id: 2,
      fieldCategoryName: "threeDSRequestorAuthenticationInfo",
      fields: [
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
          name: "threeDSReqAuthData",
          type: "text",
          dataType: "String or Object",
          lengthAndType: "Variable 50000 characters n-2",
          description: "Data that documents and supports a specific authentication process.\nif the 3DS Requestor Authentication Method is:\n03 - then this element can carry information about the\nprovider of the federated ID and related information.\n06 - then this element can carry the FIDO Assertion and/or Attestation Data.\n07 - then this element can carry FIDO Assertion and/or\nAttestation. Data with the FIDO Assurance Data signed by a trusted third party.\n08 - then this element can carry the SRC Assurance Data.\nFor 3DS Requestor Authentication Method = 06 or 07",
          status: "mandate",
          checked: true,
          value: "03"
        },
        {
          name: "three DSReqAuthMethod",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Mechanism used by the Cardholder to authenticate to the 3DS Requestor.\nValues accepted:\n01 = No 3DS Requestor authentication occurred (i.e.,\ncardholder “logged in” as guest)\n02 = Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials\n03 = Login to the cardholder account at the 3DS Requestor system using federated ID\n04 = Login to the cardholder account at the 3DS Requestor system using issuer credentials\n05 = Login to the cardholder account at the 3DS Requestor system using third-party authentication\n06 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator\n07 = Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator (FIDO Assertion or Attestation data signed)\n08 = SRC Assurance Data\n09 = SPC Authentication\nNote: For 09 = SPC Authentication, the Assertion Data is provided as a JSON object returned by the SPC API.",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "threeDSReqAuthTimestamp",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-12",
          description: "Date and time of the cardholder authentication converted\ninto UTC.\nFormat accepted:\nDate format = YYYYMMDDHHMM",
          status: "mandate",
          checked: true,
          value: 202312111256
        }
      ]
    },
    {
      id: 3,
      fieldCategory: true,
      fieldCategoryName: "threeDSRequestorInfo",
      fields: [
        {
          name: "threeDSRequestorID",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable\nans - 35",
          description: "DS-defined 3DS Requestor identifier.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
          status: "mandate",
          checked: true,
          value: "3DS_DS_3DSS_FTPT_MYLAPAY12714_31000"
        },
        {
          name: "threeDSRequestorName",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans - 40",
          description: "DS-defined 3DS Requestor name.\nValues Accepted:\nAny individual DS may impose specific formatting,\ncharacter and/or other requirements on the contents\nof this field.",
          status: "mandate",
          checked: true,
          value: "68d1a935-4415-4045-b713-87701c57a12c5672"
        },
        {
          name: "threeDSRequestorURL",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans -2048 Max",
          description: "The Fully Qualified URL of the 3DS Requestor Website\nor customer care site.\nValues Accepted: Fully Qualified URL",
          status: "mandate",
          checked: true,
          value: "https://server.domainname.com"
        },
        {
          name: "threeRIInd",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the type of 3RI request. Required If\nDeviceChannel 03 - 3RI.\nValue Accepted:\n01 = Recurring transaction\n02 = Instalment transaction\n03 = Add card\n04 = Maintain card information\n05 = Account verification\n06 = Split shipment\n07 = Top-up\n08 = Mail Order\n09 = Telephone Order\n10 = Trust List status check\n11 = Other payment\n12 = Billing Agreement\n13 = Device Binding status check\n14 = Card Security Code status check\n15 = Delayed shipment\n16 = Split payment\n17 = FIDO credential deletion\n18 = FIDO credential registration\n19 = Decoupled Authentication Fallback",
          status: "mandate",
          checked: true,
          value: "01"
        }
      ]
    },
    {
      id: 4,
      fieldCategoryName: false,
      fields: [
        {
          name: "acceptLanguage",
          type: "text",
          dataType: "Array of String",
          lengthAndType: "Variable Size: n - 1 to 99 String: 100 Max",
          description: "This field is Required If DeviceChannel 02 - BRW.\nValue Accepted:\nValue representing the Browser language preference present in the HTTP header",
          status: "mandate",
          checked: true,
          value: [
            "fr",
            "en-US"
          ]
        }
      ]
    },
    {
      id: 5,
      fieldCategory: true,
      fieldCategoryName: "acquirerinfo",
      fields: [
        {
          name: "acquirerBIN",
          type: "text",
          dataType: "String",
          lengthAndType: "variable n-11",
          description: "Acquiring institution identification code as assigned by\nthe DS receiving the message.\nThis field is required, If Message Category, 01-PA = Required ; 02-NPA = Optional.\nValue Accepted:\nThis value correlates to the Acquirer BIN as defined by each Payment System.",
          status: "mandate",
          checked: true,
          value: "000000099"
        },
        {
          name: "acquirerCountryCode",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "The code of the country where the acquiring institution is located.\nValues accepted:\nNumeric three-digit country code, other than exceptions table listed below.",
          status: "mandate",
          checked: true,
          value: "840"
        },
        {
          name: "acquirerCountryCodeSource",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "This data element is populated by the system setting \nthe Acquirer Country Code.\nThe DS may edit the value provided by the 3DS Server.\nValues accepted:\n01 = 3DS Server\n02 = DS",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "acquirerMerchantID",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable \nans- 35",
          description: "Acquirer-assigned Merchant identifier. The same value \nmust be used in the authorisation request.\nThis field is required, If Message Category, 01-PA = \nRequired 02-NPA = Optional \nValue Accepted:\nIndividual Directory Servers may impose specific \nformat and character requirements on the contents of \nthis field.",
          status: "mandate",
          checked: true,
          value: "9876546210005"
        }
      ]
    },
    {
      id: 6,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "browserAcceptHeader",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable \nans - 2048",
          description: "Exact content of the HTTP accepts headers as sent to \nthe 3DS Requestor from the Cardholder Browser. This \nfield is required, If DeviceChannel is 02 - BRW",
          status: "mandate",
          checked: true,
          value: "text/html, application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        {
          name: "browserJavascriptEnabled",
          type: "text",
          dataType: "Boolean",
          lengthAndType: true,
          description: "This field is required, If DeviceChannel is 02 - BRW. \nBoolean that represents the ability of the Cardholder \nBrowser to execute JavaScript.\nValues Accepted:\ntrue\nfalse",
          status: "mandate",
          checked: true,
          value: "true"
        },
        {
          name: "browserUserAgent",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable \nans- 2048",
          description: "This field is required, If DeviceChannel 02 - BRW. Exact content of the HTTP user-agent header",
          status: "mandate",
          checked: true,
          value: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
        }
      ]
    },
    {
      id: 7,
      fieldCategory: true,
      fieldCategoryName: "acctInfo",
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
          value: "01"
        },
        {
          name: "chAccChange",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-8",
          description: "Format accepted: Date format = YYYYMMDD",
          status: "mandate",
          checked: true,
          value: "“20170101”"
        },
        {
          name: "chAccChangeInd",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Values accepted:\n01 = Changed during this transaction\n02 = Less than 30 days\n03 = 30−60 days\n04 = More than 60 days",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "chAccDate",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-8",
          description: "Format accepted: Date format = YYYYMMDD",
          status: "mandate",
          checked: true,
          value: "“20170101”"
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
          value: "01"
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
          value: "202002"
        },
        {
          name: "txnActivityDay",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-3",
          description: "Number of transactions (successful and abandoned) for this \ncardholder account with the 3DS Requestor across all \npayment accounts in the previous 24 hours.",
          status: "mandate",
          checked: true,
          value: "202002"
        },
        {
          name: "txnActivityYear",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. If the maximum value is reached, the Number of Transactions Per Year remains set at 999. Values accepted: 0–99",
          status: "mandate",
          checked: true,
          value: "202002"
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
          value: "01"
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
          value: "01"
        },
        {
          name: "suspiciousAccActivity",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates whether the 3DS Requestor has experienced \nsuspicious activity (including previous \nfraud) on the cardholder account.\nValues accepted:\n01 = No suspicious activity has been observed\n02 = Suspicious activity has been observed",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "acctNumber",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n- 13 to 19",
          description: "Account number that will be used in the authorisation \nrequest for payment transactions. May be \nrepresented by PAN, Payment Token.",
          status: "mandate",
          checked: true,
          value: "7654310438720050"
        }
      ]
    },
    {
      id: 8,
      fieldCategory: true,
      fieldCategoryName: "deviceRenderOptions",
      fields: [
        {
          name: "deviceRenderOptions",
          type: "text",
          dataType: "Object",
          lengthAndType: "Variable",
          description: "Required If DeviceChannel is 01 - APP \nIdentifies the SDK Interface and SDK UI Type that the device supports for displaying specific challenge user interfaces within the 3DS SDK.\n\nValues Accepted: SubElements: \n1. SDK Authentication Type\n2.SDK Interface\n3.SDK UI Type",
          status: "mandate",
          checked: true,
          value: ""
        },
        {
          name: "sdkAuthenticationType",
          type: "text",
          dataType: "Array of String",
          lengthAndType: "Fixed Size: 1 - 99 elements n-2",
          description: "Authentication methods preferred by the 3DS SDK in order of preference. \nSize: 1–99 elements\nValues accepted:\n01 = Static Passcode\n02 = SMS OTP\n03 = Key fob or EMV card reader OTP \n04 = App OTP \n05 = OTP Other \n06 = KBA\n07 = OOB Biometrics\n08 = OOB Login\n09 = OOB Other\n10 = Other\n11 = Push Confirmation",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "sdkInterface",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Lists all of the SDK Interface types that the device supports for displaying specific challenge user interfaces within the 3DS SDK.\n\nValues accepted:\n01 = Native\n02 = HTML\n03 = Both",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "sdkUiType",
          type: "text",
          dataType: "Array of String",
          lengthAndType: "Variable Size: 1–7 elements n-2",
          description: "Lists all UI types that the device supports for displaying specific challenge user interfaces \nwithin the 3DS SDK. \n\nValid values for each Interface:\nNative UI = 01–04, 07\nHTML UI = 01–07\n\nValues accepted:\n01 = Text\n02 = Single Select\n03 = Multi Select\n04 = OOB\n05 = HTML Other (valid only for HTML UI)\n06 = HTML OOB (valid only for HTML UI)\n07 = Information",
          status: "mandate",
          checked: true,
          value: "01"
        }
      ]
    },
    {
      id: 9,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "mcc",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-4",
          description: "This value correlates to the Merchant Category Code as defined by each Payment System or DS. The same value must be used in the authorisation request.\n\nThis field is based on the Message Category 01-PA = Required and  02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor",
          status: "mandate",
          checked: true,
          value: "5841"
        },
        {
          name: "merchantCountryCode",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "This value correlates to the Merchant Country Code as defined by each Payment System or DS. The same value must be used in the authorisation request.\n\nNumeric three-digit country code, other than exceptions table listed below.\n\nThis field is based on the Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor",
          status: "mandate",
          checked: true,
          value: "840"
        },
        {
          name: "merchantName",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a-40",
          description: "Merchant name assigned by the Acquirer or Payment System. The same value must be used in the authorisation request. \n\nThis field is based Message Category 01-PA = Required and 02-NPA = Optional but strongly recommended to include for if the Merchant is also the 3DS Requestor.",
          status: "mandate",
          checked: true,
          value: "Ticket Service"
        }
      ]
    },
    {
      id: 10,
      fieldCategory: true,
      fieldCategoryName: "merchantRiskIndicator",
      fields: [
        {
          name: "merchantRiskIndicator",
          type: "text",
          dataType: "Object",
          lengthAndType: "Variable",
          description: "Merchant’s assessment of the level of fraud risk for the specific authentication for both the Cardholder and the authentication being conducted.\n\nValues Accepted: Sub Elements:\n1. Delivery Email Address\n2.Delivery Timeframe\n3.Gift Card Amount\n4.Gift Card Count\n5.Gift Card Currency\n6.Pre-Order Date\n7.Pre-Order Purchase Indicator\n8.Reorder Items Indicator\n9.Shipping Indicator\n10.Transaction Characteristics \n\nNote: Data will be formatted into a JSON object prior to being placed into the Merchant Risk Indicator field of the message",
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
          value: "test@example.com"
        },
        {
          name: "deliveryTimeframe",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the merchandise delivery timeframe. \nValues accepted:\n01 = Electronic Delivery\n02 = Same day shipping\n03 = Overnight shipping\n04 = Two-day or more shipping",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "giftCardAmount",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-15",
          description: "For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, USD 123.45 is 123).\nExample: gift card amount is USD 123.45: \nValues accepted:\n123\n0123\n00123",
          status: "mandate",
          checked: true,
          value: "123"
        },
        {
          name: "giftCardCount",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "giftCardCurr",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "The Numeric three-digit country code, other than exceptions listed in table below",
          status: "mandate",
          checked: true,
          value: "840"
        },
        {
          name: "preOrderDate",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-8",
          description: "For a pre-ordered purchase, the expected date that the merchandise will be available. Format accepted: Date format = YYYYMMDD",
          status: "mandate",
          checked: true,
          value: "20300101"
        },
        {
          name: "preOrderPurchaseInd",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates whether Cardholder is placing an order for merchandise with a future availability or release date.\n\nValues accepted:\n01 = Merchandise available\n02 = Future availability",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "reorderItemsInd",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates whether the cardholder is reordering previously purchased merchandise.\n\nValues accepted:\n01 = First time ordered\n02 = Reordered",
          status: "mandate",
          checked: true,
          value: "02"
        },
        {
          name: "shipIndicator",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates shipping method chosen for the transaction.\nValues accepted:\n01 = Ship to cardholder’s billing address\n02 = Ship to another verified address on file with merchant\n03 = Ship to address that is different than the cardholder’s billing address\n04 = “Ship to Store” / Pick-up at local store (Store address shall be populated in shipping address fields)\n05 = Digital goods (includes online services, electronic gift cards and redemption codes)\n06 = Travel and Event tickets, not shipped \n07 = Other (for example, Gaming, digital services not shipped, emedia subscriptions, etc.)\n08 = Pick-up and go delivery\n09 = Locker delivery (or other automated pick-up)",
          status: "mandate",
          checked: true,
          value: "03"
        },
        {
          name: "transChar",
          type: "text",
          dataType: "Array of String",
          lengthAndType: "Variable \nSize: \n1–2 \nelements\nn-2",
          description: "Indicates to the ACS specific transactions identified by the Merchant.\n\nValue accepted: \n01 = Cryptocurrency transaction\n02 = NFT transaction",
          status: "mandate",
          checked: true,
          value: "01"
        }
      ]
    },
    {
      id: 11,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "messageType",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed a-4",
          description: "Identifies the type of message that is passed.\n\nValues Accepted:\nAreq \nARes\nCReq\nCRes\nOReq\nORes\nPreq\nPRes\nRReq\nRRes\nErro",
          status: "mandate",
          checked: true,
          value: "Areq"
        },
        {
          name: "messageVersion",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n - 5 to 8",
          description: "The Message Version Number is set by the 3DS Server which originates the protocol with the Areq message. The Message Version Number does not change during a 3DS transaction.\n\nValues Accepted: Major.minor. Patch",
          status: "mandate",
          checked: true,
          value: "99.99.99"
        },
        {
          name: "notificationURL",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans- 256",
          description: "Required If, the deviceChannel 02 - BRW.\nFully Qualified URL of the system that receives the CRes message or Error Message. The CRes message is posted by the ACS through the Cardholder Browser at the end of the challenge and receipt of the RRes message.\n\nValue: Fully Qualified URL",
          status: "mandate",
          checked: true,
          value: "https://www.example.com/notificationURL"
        },
        {
          name: "purchaseAmount",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-48",
          description: "Purchase amount in minor units of currency with all punctuation removed. When used in conjunction with the Purchase Currency Exponent field, proper punctuation can be \ncalculated. \n\nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15",
          status: "mandate",
          checked: true,
          value: "12345"
        },
        {
          name: "purchaseCurrency",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "Currency in which  purchase amount is expressed.\nFor message category 01 PA - Required, for 02-NPA :\nif 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15\n\nThree-digit country code, other than exceptions table listed below.",
          status: "mandate",
          checked: true,
          value: "840"
        },
        {
          name: "purchaseExponent",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-1",
          description: "Minor units of currency as specified in the ISO 4217 currency exponent.\n\nFor message category 01 PA - Required, for 02-NPA :\nif 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15",
          status: "mandate",
          checked: true,
          value: "USD = 2JPY = 0"
        },
        {
          name: "purchaseDate",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-14",
          description: "Date and time of the authentication converted into UTC. \n\nFormat accepted: \nYYYYMMDDHHMMSS\n\nFor message category 01 PA - Required, for 02-NPA:\nif 3DS Requestor Authentication Indicator = 02, 03, 07, 08, 09\nRequired for 02-NPA if 3RI Indicator = 01, 02, 06, 07, 08, 09, 11, 15",
          status: "mandate",
          checked: true,
          value: "20231211125620"
        },
        {
          name: "sdkType",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the type of 3DS SDK. Required If DeviceChannel 01 - APP\n\n01 = Default-SDK\n02 = Split-SDK",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "sdkEphemPubKey",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-256 Max",
          description: "Required If DeviceChannel is 01 - APP \nPublic key component of the ephemeral key pair generated by the 3DS SDK and used to establish session keys between the 3DS SDK and ACS.\n\nIn AReq, this data element is present as its own object",
          status: "mandate",
          checked: true,
          value: ""
        },
        {
          name: "threeDSRequestorDecMaxTime",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-5",
          description: "Indicates the maximum amount of time that the 3DS Requestor will wait for an ACS to provide the results of a Decoupled Authentication transaction (in minutes)\n\nNumeric values between 00001 and 10080\nRequired if 3DS Requestor, Decoupled Request Indicator = Y or F or B.",
          status: "conditionally required",
          checked: false,
          value: "00003"
        },
        {
          name: "threeDSRequestorSpcSupport",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed a-1",
          description: "This field is required if supported by the 3DS Requestor and deviceChannel field 02-BRW.\n\nIndicate if the 3DS Requestor supports the SPC authentication. Note: If present, the value Y = Supported",
          status: "conditionally required",
          checked: false,
          value: "Y"
        },
        {
          name: "acctType",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the type of account. For example, for a \nmulti-account card product.\n01 = Not applicable\n02 = Credit\n03 = Debit",
          status: "mandate",
          checked: true,
          value: "02"
        },
        {
          name: "appIp",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans- 45 Max",
          description: "External IP address (i.e., the device public IP address) used by the 3DS Requestor App when it connects to the 3DS Requestor environment.\nRequired, the DeviceChannel 01-APP",
          status: "mandate",
          checked: true,
          value: "10.250.10.3"
        }
      ]
    },
    {
      id: 13,
      fieldCategory: true,
      fieldCategoryName: "browser info",
      fields: [
        {
          name: "browserIP",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n - 45",
          description: "IP address of the Browser as returned by the HTTP headers to the 3DS Requestor. Required, If deviceChannel field 02 - BRW ",
          status: "conditionally required",
          checked: false,
          value: "1.14.346.765"
        },
        {
          name: "browserJavaEnabled",
          type: "text",
          dataType: "Boolean",
          lengthAndType: "Fixed a-4",
          description: "Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW\nValues Accepted:\ntrue\nfalse\n\nBoolean that represents the ability of the cardholder browser to execute Java. Value is returned from the navigator. javaEnabled property.",
          status: "conditionally required",
          checked: false,
          value: "true"
        },
        {
          name: "browserLanguage",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a-35 Max",
          description: "The Value defining the Browser Language.\nRequired, deviceChannel field 02 - BRW and  Browser JavaScript Enabled = true; otherwise, Optional",
          status: "conditionally required",
          checked: false,
          value: "en"
        },
        {
          name: "browserColorDepth",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n - 1 to 2",
          description: "Required if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW\n\nThis Value representing the bit depth of the colour palette for displaying images, in bits per pixel. Obtained from the Cardholder Browser using the screen.colorDepthproperty \n\nValues : 1–99",
          status: "conditionally required",
          checked: false,
          value: "32"
        },
        {
          name: "browserScreenHeight",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n - 1 to 6",
          description: "This field Total height of the Cardholder’s screen in pixels. Value is returned from the screen.height property.\n\nRequired if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
          status: "conditionally required",
          checked: false,
          value: "1923"
        },
        {
          name: "browserScreenWidth",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n - 1 to 6",
          description: "Total width of the Cardholder’s screen in pixels.Value is returned from the screen.width property.\n\nRequired if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
          status: "conditionally required",
          checked: false,
          value: "1024"
        },
        {
          name: "browserTZ",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n - 1 to 5",
          description: "Time zone offset in minutes between UTC and the Cardholder Browser local time.\nValue is returned from the getTimezoneOffset() method.\n\nExample time zone offset values in minutes:\nIf UTC -5 hours:\n300\n+300\nIf UTC +5 hours:\n-300\n\nRequired if Browser JavaScript Enabled = true; otherwise, Optional and deviceChannel field 02-BRW",
          status: "conditionally required",
          checked: false,
          value: "0"
        },
        {
          name: "deviceId",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans- 64 Max",
          description: "Required if available.\nUnique and immutable identifier linked to a device that is consistent across 3DS transactions for the specific user device.\n\nExamples: Hardware Device ID Platform-calculated device fingerprint",
          status: "conditionally required",
          checked: false,
          value: "MFZWI3D-BONSGYC-YLTMRWG-C43ENR5-QXGZDMM-FZWI3DP-BONSGYY-LTMRWADL"
        }
      ]
    },
    {
      id: 14,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "userId",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans- 64 Max",
          description: "Required if available.\n\nIdentifier of the transacting user’s Browser Account ID. This identifier is a unique immutable hash of the user’s account identifier for the given Browser, provided as a string.\n\nNote: Cardholders may have more than one account on a given Browser",
          status: "conditionally required",
          checked: false,
          value: "734OD6S-3BPOCKK-8MMDAG7-R5C3HGU-GDPTG1E-1ISH0A0-20K3LHJ-V8767822"
        },
        {
          name: "cardExpiryDate",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-4",
          description: "Expiry Date of the PAN or token supplied to the 3DS Requestor by the Cardholder. Format accepted: YYMM The requirements for the presence of this field are DSspecifi",
          status: "conditionally required",
          checked: false,
          value: "2512"
        },
        {
          name: "cardSecurityCode",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-3 to 4",
          description: "Three- or four-digit security code printed on the card. \nAction defined by Payment System rules.Conditional \nbased on DS rules",
          status: "conditionally required",
          checked: false,
          value: "453"
        }
      ]
    },
    {
      id: 15,
      fieldCategory: true,
      fieldCategoryName: "billing address info",
      fields: [
        {
          name: "billAddrCity",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans - 50",
          description: "The city of the Cardholder billing address associated \nwith the card used for this purchase.\nConditionally required for 01-PA: Required unless \nmarket or regional mandate restricts sending this \ninformation.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information",
          status: "conditionally required",
          checked: false,
          value: "City Name"
        },
        {
          name: "billAddrCountry",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "The country of the Cardholder billing address \nassociated with the card used for this purchase.\nRequired if Cardholder Billing Address State is present. \n01-PA Required unless market or regional mandate \nrestricts sending this information.\n02-NPA: Required (if available) unless market or \nregional mandate restricts sending this information.\nThe Numeric three-digit country code, other than \nexceptions listed in table below",
          status: "conditionally required",
          checked: false,
          value: "840"
        },
        {
          name: "billAddrLine1",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-50",
          description: "First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required if Cardholder Billing Address State is present. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
          status: "conditionally required",
          checked: false,
          value: "Address Line 1"
        },
        {
          name: "billAddrLine2",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-50",
          description: "Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
          status: "conditionally required",
          checked: false,
          value: "Address Line 2"
        },
        {
          name: "billAddrLine3",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-50",
          description: "Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. Required (if available) unless market or regional mandate restricts sending this information",
          status: "conditionally required",
          checked: false,
          value: "Address Line 3"
        },
        {
          name: "billAddrPostCode",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans- 16",
          description: "ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase. 01-PA Required unless market or regional mandate restricts sending this information. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information",
          status: "conditionally required",
          checked: false,
          value: "Postal Code"
        },
        {
          name: "billAddrState",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a -3",
          description: "The state or province of the Cardholder billing address associated with the card used for this purchase. 01-PA: Required unless market or regional mandate restricts sending this information, or State is not applicable for this country. 02-NPA: Required (if available) unless market or regional mandate restricts sending this information, or State is not applicable for this country.",
          status: "conditionally required",
          checked: false,
          value: "CA"
        }
      ]
    },
    {
      id: 16,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "email",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-254",
          description: "The email address associated with the account that is either entered by the Cardholder or is on file with the 3DS Requestor.\nRequired (if available) unless market or regional mandate restricts sending this information.",
          status: "conditionally required",
          checked: false,
          value: "example@example.com"
        },
        {
          name: "homePhone",
          type: "text",
          dataType: "String",
          lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
          description: "The home phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number represented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional mandate restricts sending this information.",
          status: "conditionally required",
          checked: false,
          value: {
            cc: "1",
            subscriber: "1234567899"
          }
        },
        {
          name: "mobilePhone",
          type: "text",
          dataType: "String",
          lengthAndType: "cc: Variable n - 1 to 3 subscriber: Variable n15",
          description: "The mobile phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number represented by the following named fields:\ncc\nsubscriber\nRequired (if available) unless market or regional mandate restricts sending this information",
          status: "conditionally required",
          checked: false,
          value: {
            cc: "1",
            subscriber: "1234567899"
          }
        },
        {
          name: "cardholderName",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a- 1 to 45",
          description: "Name of the Cardholder.\nThis field is Required unless market or regional mandate restricts sending this information and Device channel field 02-BRW",
          status: "conditionally required",
          checked: false,
          value: "Frictionless One"
        }
      ]
    },
    {
      id: 17,
      fieldCategory: true,
      fieldCategoryName: "shipping address info",
      fields: [
        {
          name: "shipAddrCity",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a-50",
          description: "City portion of the shipping address requested by the \nCardholder.\nRequired (if available) unless market or regional \nmandate restricts sending this information.",
          status: "mandate",
          checked: true,
          value: "City Name"
        },
        {
          name: "shipAddrCountry",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "Required if Cardholder Shipping Address State is present. Country of the shipping address requested by the Cardholder. Three-digit country code, other than exceptions listed in table below",
          status: "mandate",
          checked: true,
          value: "840"
        },
        {
          name: "shipAddrLine1",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-50",
          description: "First line of the street address or equivalent local portion of the shipping address requested by the Cardholder.",
          status: "mandate",
          checked: true,
          value: "Address Line 1"
        },
        {
          name: "shipAddrLine2",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-50",
          description: "The second line of the street address or equivalent \nlocal portion of the shipping address requested by the \nCardholder",
          status: "mandate",
          checked: true,
          value: "Address Line 2"
        },
        {
          name: "shipAddrLine3",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-50",
          description: "The third line of the street address or equivalent local portion of the shipping address requested by the Cardholder",
          status: "mandate",
          checked: true,
          value: "Address Line 3"
        },
        {
          name: "shipAddrPostCode",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-6",
          description: "The ZIP or other postal code of the shipping address requested by the Cardholder",
          status: "mandate",
          checked: true,
          value: "Postal Code"
        },
        {
          name: "shipAddrState",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a-3",
          description: "The state or province of the shipping address associated with the card being used for this purchase. For example, using the ISO entry US-CA (California, United States), the correct value for this field = CA. Note: that the country and hyphen are not included in this value.",
          status: "mandate",
          checked: true,
          value: "“CA”"
        },
        {
          name: "workPhone",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable cc: n : 1–3 subscriber: n : 15",
          description: "The work phone number provided by the Cardholder.\nCountry Code and Subscriber sections of the number \nrepresented by the following named fields:\ncc\nsubscriber",
          status: "mandate",
          checked: true,
          value: {
            cc: "1",
            subscriber: "1234567899"
          }
        }
      ]
    },
    {
      id: 18,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "payTokenSource",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Required if EMV Payment Token Indicator = true.\nThis data element will be populated by the system residing in the 3-D Secure\ndomain where the detokenization occurs.\n\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
          status: "conditionally required",
          checked: false,
          value: "01"
        },
        {
          name: "payTokenInd",
          type: "text",
          dataType: "Boolean",
          description: "A value of True indicates that the transaction was detokenized prior to being received by the ACS. This data element will be populated by the system residing in the 3-D Secure domain where the detokenization occurs (i.e., the 3DS Server or the DS).\n\nValue Accepted: true \nRequired, if there is a detokenization of an Account Number",
          status: "conditionally required",
          checked: false,
          value: "True"
        },
        {
          name: "payeeOrigin",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans - 2048",
          description: "The origin of the payee that will be provided in the SPC Transaction Data.\n\nFully Qualified URL:\nThis field is Required if 3DS Requestor SPC = Y Support and Device channel field 02 - BRW",
          status: "conditionally required",
          checked: false,
          value: "https://example.com/payeeOrigin_URL"
        }
      ]
    },
    {
      id: 19,
      fieldCategory: true,
      fieldCategoryName: "Recurring Amount Info",
      fields: [
        {
          name: "recurringAmount",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-48",
          description: "Recurring amount in minor units of currency with all  punctuation removed.\n\nFor message category 01 PA - Required, for 02-NPA :\n3DS Requestor  Authentication Indicator = 02 or 03 ;  OR 3RI Indicator = 01 or 02  and \nRecurring  Indicator/ Amount Indicator = 01",
          status: "conditionally required",
          checked: false,
          value: 12345
        },
        {
          name: "recurringCurrency",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-3",
          description: "Required if the Recurring Amount is present. Currency in which the Recurring Amount is expressed. Three-digit currency code,  other than exceptions listed in table below",
          status: "conditionally required",
          checked: false,
          value: "840"
        },
        {
          name: "recurringExponent",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-1",
          description: "Required if the Recurring Amount is present",
          status: "conditionally required",
          checked: false,
          value: "USD = 2"
        },
        {
          name: "recurringDate",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-8",
          description: "Required if Recurring Indicator/ Frequency Indicator = 01.\n\nEffective date of the new authorised amount following the first/promotional payment in a recurring or instalment transaction.\nDate format accepted:\nYYYYMMDD",
          status: "conditionally required",
          checked: false,
          value: "20231211"
        },
        {
          name: "recurringExpiry",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-8",
          description: "Required if there is an end date.\nDate format accepted:\nYYYYMMDD",
          status: "conditionally required",
          checked: false,
          value: "20231211"
        },
        {
          name: "recurringFrequency",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n-4",
          description: "Required if Recurring Indicator/ Frequency Indicator = 01.\nIndicates the minimum number of days between authorisations for a recurring or instalment transaction.\n\nNumeric values between 1 and 9999",
          status: "conditionally required",
          checked: false,
          value: "31"
        },
        {
          name: "recurringInd",
          type: "text",
          dataType: "Object",
          description: "Required if: 3DS  Requestor Authentication Indicator = 02 or 03;  OR  3RI Indicator = 01 or 02\n\nIndicates whether the recurring or instalment payment has a fixed or variable amount and  frequency.\nThe Recurring Indicator object contains: \nthe Amount Indicator\nthe Frequency Indicator\n\nField Name: amountInd\nValues accepted: \n01 = Fixed Purchase Amount\n02 = Variable Purchase  Amount \n03–79 = Reserved for EMVCo future use (values invalid until  defined by EMVCo)\n80–99 = Reserved for DS use\n\nField Name: frequencyInd\nValues accepted: \n01 = Fixed Frequency\n02 = Variable or Unknown Frequency\n03–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n80–99 = Reserved for DS use",
          status: "conditionally required",
          checked: false,
          value: {
            amountInd: "01",
            frequencyInd: "02"
          }
        }
      ]
    },
    {
      id: 20,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "sdkEncData",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans-64000",
          description: "Required, If Device channel = 01 - APP and Required from the 3DS Server to the DS but will  not be  present from  the DS to the ACS.",
          status: "conditionally required",
          checked: false,
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
          name: "transType",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Identifies the type of transaction being authenticated.\n01 = Goods/ Service Purchase\n03 = Check Acceptance\n10 = Account Funding\n11 = Quasi-Cash Transaction\n28 = Prepaid Activation and Load",
          status: "conditionally required",
          checked: false,
          value: "01"
        },
        {
          name: "threeDSMethodId",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed ans-36",
          description: "Contains the 3DS Server Transaction ID used during \nthe previous execution of the 3DS Method.\nRequired if 3DS Requestor reuses previous 3DS \nMethod execution and the Device channel 02-BRW",
          status: "mandate",
          checked: true,
          value: "f010de25-cef1-42be-bb2e-810ba0c5fff1"
        },
        {
          name: "spcIncompInd",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Reason that the SPC authentication was not completed.\n\n01 = SPC did not run or did not successfully complete\n02 = Cardholder cancelled the SPC authentication\n03 = SPC timed out\n04–99 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n\nRequired if the 3DS Requestor attempts to invoke the SPC API and there is an error and the Device channel 02-BRW",
          status: "conditionally required",
          checked: false,
          value: "01"
        }
      ]
    },
    {
      id: 21,
      fieldCategory: true,
      fieldCategoryName: "message Extension Info",
      fields: [
        {
          name: 'messageExtension',
          type: 'text',
          dataType: 'Array of objects',
          lengthAndType: 'Variable n - 1 to 15',
          description: 'Data necessary to support requirements not otherwise defined in the 3-D Secure message are carried in a Message Extension.\n\nValues Accepted: Sub Elements: \n1.Extension name \n2.Assigned extension group identifier\n3.Criticality indicator\n4.Data',
          status: 'conditionally required',
          checked: false,
          value: '1'
        },
        {
          name: 'criticalityIndicator',
          type: 'text',
          dataType: 'Boolean',
          description: 'A Boolean value indicating whether the recipient must \nunderstand the contents of the extension to interpret the \nentire message.\nValues accepted:\ntrue\nfalse',
          status: 'mandate',
          checked: true,
          value: 'true'
        },
        {
          name: 'data',
          type: 'text',
          dataType: 'Object',
          lengthAndType: 'Variable ans - 8059',
          description: 'The data carried in the extension',
          status: 'mandate',
          checked: true,
          value: { valueOne: "value" }
        },
        {
          name: 'id',
          type: 'text',
          dataType: 'String',
          lengthAndType: 'Variable an - 64',
          description: 'A unique identifier for the extension.\nNote: Payment System Registered Application Provider \nIdentifier (RID) is required as prefix of the ID.',
          status: 'mandate',
          checked: true,
          value: "A000000802-ID3"
        },
        {
          name: 'name',
          type: 'text',
          dataType: 'String',
          lengthAndType: 'Variable an - 64',
          description: 'The name of the extension data set as defined by the extension owner',
          status: 'mandate',
          checked: true,
          value: "testExtensionNonCriticalField"
        }
      ]
    },
    {
      id: 22,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "sdkTransID",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed an-36",
          description: "Required, If Device channel = 01 - APP \nUniversally unique transaction identifier assigned by the 3DS SDK to identify a single transaction",
          status: "conditionally required",
          checked: false,
          value: ""
        },
        {
          name: "defaultSdkType",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed sdkVariant : n-2 wrappedIn d : n-1",
          description: "Required if SDK Type = 01 Default-SDK and Device channel = 01 - APP\n\nSdkVariant Values accepted:\n01 = Native\n02–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n80–99 = Reserved for DS use\n\nWrappedInd Value accepted:\nY = Wrapped Only present if value = Y",
          status: "conditionally required",
          checked: false,
          value: {
            sdkVariant: "01",
            wrappedInd: "Y"
          }
        },
        {
          name: "sdkServerSignedCo ntent",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable",
          description: "Required if SDK Type = 02 Indicates the characteristics of a Split-SDK and Device channel - 01 APP \n\nValues Accepted:\n1.SDK Reference Number\n2.SDK Signature Timestamp\n3.SDK Transaction ID\n4.Split-SDK Server ID",
          status: "conditionally required",
          checked: false,
          value: ""
        },
        {
          name: "splitSdkType",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed sdkVariant : n-2 limited : n1",
          description: "Required if SDK Type = 02 Indicates the characteristics of a Split-SDK and Device channel - 01 APP \n\nsdkVariant Values accepted:\n01 = Native Client\n02 = Browser\n03 = Shell\n04–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n80–99 = Reserved for DS use\n\nlimitedInd Value accepted: Only present if value = Y,  Y = Limited",
          status: "conditionally required",
          checked: false,
          value: {
            sdkVariant: "01",
            limitedInd: "Y"
          }
        },
        {
          name: "threeDSRequestorChallengeInd",
          type: "text",
          dataType: "Array of String",
          lengthAndType: "Fixed Size : 1-2 elements n - 2",
          description: "Indicates whether a challenge is requested for this transaction.\n01 = No preference\n02 = No challenge requested\n03 = Challenge requested (3DS Requestor preference)\n04 = Challenge requested (Mandate)\n05 = No challenge requested (transactional risk analysis is already performed)\n06 = No challenge requested (Data share only)\n07 = No challenge requested (strong consumer authentication is already performed)\n08 = No challenge requested (use Trust List exemption if no challenge required)\n09 = Challenge requested (Trust List prompt requested if challenge required)\n10 = No challenge requested\n(use low value exemption)\n11 = No challenge requested\n(Secure corporate payment exemption)\n12 = Challenge requested (Device Binding prompt requested if challenge required)\n13 = Challenge requested (Issuer requested)\n14 = Challenge requested (Merchant-initiated transactions)\n15–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n80–99 = Reserved for DS use\n\nNote: If the element is not provided, the expected action is that the ACS would interpret as 01 = No preference.",
          status: "optional",
          checked: false,
          value: "01"
        },
        {
          name: "threeDSRequestorDecReqInd",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed a-1",
          description: "Indicates whether the 3DS Requestor requests the ACS to use Decoupled Authentication and agrees to use Decoupled Authentication if the ACS confirms its use.\n\nY = Decoupled Authentication is supported and preferred if challenge is necessary\nN = Do not use Decoupled Authentication\nF = Decoupled Authentication is supported and is to be used only as a fallback challenge \nmethod if a challenge is necessary.\nB = Decoupled Authentication is supported and can be used as a primary or fallback \nchallenge method if a challenge is necessary.",
          status: "optional",
          checked: false,
          value: "N"
        },
        {
          name: "addrMatch",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed a-1",
          description: "Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. Required If, DeviceChannel is 01- APP ; 02- BRW.\nY = Shipping Address matches Billing Address\nN = Shipping Address does not match Billing Address",
          status: "optional",
          checked: false,
          value: "Y"
        },
        {
          name: "acctID",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an-64",
          description: "Additional information about the account optionally provided by the 3DS Requestor",
          status: "optional",
          checked: false,
          value: "TestAccountId 001"
        },
        {
          name: "merchantDSPassword",
          type: "text",
          dataType: "String",
          description: "Merchant 1.0 Directory sever registered password",
          status: "optional",
          checked: false,
          value: ""
        },
        {
          name: "challengeWindowSize",
          type: "text",
          dataType: "String",
          description: "Optional but required for deviceChannel 02 - BRW Challenge window size.\nValues accepted: \n01 = 250 x 400\n02 = 390 x 400\n03 = 500 x 600\n04 = 600 x 400\n05 = Full screen",
          status: "optional",
          checked: false,
          value: "05 = Full screen"
        },
        {
          name: "trustListStatus",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed a-1",
          description: "Enables the communication of trust list status between the ACS, the DS and the 3DS Requestor.\nY = 3DS Requestor is Trust Listed by Cardholder\nN = 3DS Requestor is not Trust Listed by Cardholder\nE = Not eligible as determined by issuer \nP = Pending confirmation by Cardholder \nR = Cardholder rejected \nU = Trust List status unknown, unavailable, or does not apply \nNote: Valid values in the AReq message are Y or N",
          status: "optional",
          checked: false,
          value: "Y"
        },
        {
          name: "trustListStatusSource",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Required if the Trust List Status is present.\nThis data element will be populated by the system setting Trust List Status.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
          status: "conditionally required",
          checked: false,
          value: "01"
        }
      ]
    },
    {
      id: 23,
      fieldCategory: true,
      fieldCategoryName: "payTokenInfo",
      fields: [
        {
          name: "payTokenInfo",
          type: "text",
          dataType: "Object",
          lengthAndType: "Variable",
          description: "Information about detokenized Payment Token.\n\nValues Accepted: SubElements:\n1.Payment Token\n2.Token Additional Data\n3.Token Assurance Method\n4.Token Cryptogram\n5.Token Requestor ID\n6.Token Cryptogram Validity Indicator\n7.Token Status Indicator \n\nData will be formatted into a JSON object prior to being placed into the EMV Payment Token field of the message",
          status: "optional",
          checked: false,
          value: ""
        },
        {
          name: "token",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable n -13 to 19",
          description: "Payment token used to initiate the EMV 3DS transaction",
          status: "optional",
          checked: false,
          value: "7654321000001"
        },
        {
          name: "tokenAdditionalData",
          type: "text",
          dataType: "Object",
          lengthAndType: "Variable an-500",
          description: "Additional information about the Payment Token from the Token Service Provider",
          status: "optional",
          checked: false,
          value: {
            test: "value"
          }
        },
        {
          name: "tokenAssuranceMethod",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "An updatable value that allows the Token Service Provider to communicate the ID&V performed. It is determined or updated by the ID&V Method(s) and ID&V Actor.",
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
          description: "A cryptogram, containing a transaction unique value, typically generated using the Payment Token, Payment Token related data and transaction data. Cryptogram derivation methods may vary by scenario and may be Payment System-specific.",
          status: "optional",
          checked: false,
          value: "Valid token cryptogram"
        },
        {
          name: "tokenCryptogramValidityIndicator",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Identifies if the Token Cryptogram has been verified and the outcome of that verification.\nValues accepted: \n01 = Verified\n02 = Failed\n03 = Not Performed \n04–79 = Reserved for EMVCo future use (values invalid until  defined by EMVCo)\n80–99 = Reserved for DS use \nNote: If the element is not provided, the expected action is for the ACS to interpret as 03",
          status: "optional",
          checked: false,
          value: "01"
        },
        {
          name: "tokenStatusIndicator",
          type: "text",
          lengthAndType: "Fixed an-40",
          description: "Identifies the current status of the Payment Token",
          status: "optional",
          checked: false,
          value: "Token Status Indicator test value-------"
        }
      ]
    },
    {
      id: 24,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "deviceBindingStatusSource",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Required if Device Binding Status is present.\nThis data element will be populated by the system setting Device Binding Status.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
          status: "conditionally required",
          checked: false,
          value: "01"
        },
        {
          name: "deviceBindingStatus",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Enables the  communication of Device  Binding Status between the ACS, the DS and the 3DS Requestor. For bound devices (value  = 11–14), Device Binding  Status also conveys the type of binding that was performed.\n\nValues accepted: \n01 = Device is not bound by Cardholder\n02 = Not eligible as determined by Issuer\n03 = Pending confirmation by Cardholder\n04 = Cardholder rejected\n05 = Device Binding Status unknown, unavailable, or does not apply\n06–10 = Reserved for EMVCo future use (values invalid until defined by EMVCo)\n11 = Device is bound by Cardholder (device is bound using hardware / SIM internal \nto the Consumer Device. For instance, keys stored in a secure element on the device)\n12 = Device is bound by Cardholder (device is bound using hardware external to the \nConsumer Device. For example, an external FIDO Authenticator\n13 = Device is bound by Cardholder (Device is bound using data that includes \ndynamically generated data and could include a unique device ID)\n14 = Device is bound by Cardholder (Device is bound using static device data that has been obtained from the Consumer Device\n15 = Device is bound by Cardholder (Other method)",
          status: "optional",
          checked: false,
          value: "01"
        }
      ]
    },
    {
      id: 25,
      fieldCategory: true,
      fieldCategoryName: "sellerInfo",
      fields: [
        {
          name: "sellerInfo",
          type: "text",
          dataType: "Array of Objects",
          lengthAndType: "Variable 1–50 elements",
          description: "Additional transaction information for transactions where Merchants submit transaction details on behalf of another entity, i.e., individual sellers in a marketplace or drivers in a ridesharing platform.\n\nValues Accepted: SubElements: \n1.Seller Name\n2.Seller ID\n3.Seller Business Name\n4.Seller Account Date\n5.Seller Address Line 1\n6.Seller Address Line 2\n7.Seller Address Line 3\n8.Seller Address City\n9.Seller Address State\n10.Seller Address Postal Code\n11.Seller Address Country\n12.Seller Email Address\n13.Seller Phone Number",
          status: "optional",
          checked: false,
          value: ""
        },
        {
          name: "sellerName",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a- 100",
          description: "Name of the Seller",
          status: "mandate",
          checked: true,
          value: "Seller 1"
        },
        {
          name: "sellerId",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an-50",
          description: "Required if Seller ID in Multi Transaction object is present.\nMerchant-assigned Seller identifier",
          status: "conditionally required",
          checked: false,
          value: "Seller Id 1"
        },
        {
          name: "sellerBusinessName",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable a- 100",
          description: "Business name of the Seller",
          status: "optional",
          checked: false,
          value: "Seller Business 1"
        },
        {
          name: "sellerAccDate",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-8",
          description: "Date converted into UTC that the Seller started using the Merchant’s services.\nFormat accepted: Date format = YYYYMMDD",
          status: "optional",
          checked: false,
          value: "20210928"
        },
        {
          name: "sellerAddrLine1",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an- 50",
          description: "First line of the business or contact street address of the Seller",
          status: "optional",
          checked: false,
          value: "Seller1 avenue 101"
        },
        {
          name: "sellerAddrLine2",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an- 50",
          description: "Second line of the business or contact street address of the Seller",
          status: "optional",
          checked: false,
          value: "Seller1 Addr L2"
        },
        {
          name: "sellerAddrLine3",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an- 50",
          description: "Third line of the business or contact street address of the Seller",
          status: "optional",
          checked: false,
          value: "Seller1 Addr L3"
        },
        {
          name: "sellerAddrCity",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an- 50",
          description: "Business or contact city of the Seller",
          status: "optional",
          checked: false,
          value: "Seller1 city"
        },
        {
          name: "sellerAddrState",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an- 3",
          description: "Value accepted:\nFor example, the entry US-CA (California, United States), the correct value for this field = CA. Note that the country and hyphen are not included in this value",
          status: "optional",
          checked: false,
          value: "AZ"
        },
        {
          name: "sellerAddrPostCode",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable an- 16",
          description: "Business or contact ZIP or other postal code of the Seller",
          status: "optional",
          checked: false,
          value: "43121"
        },
        {
          name: "sellerAddrCountry",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed an- 3",
          description: "Business or contact country of the Seller.\nThe numeric three-digit country code, other than exceptions listed in Table below.",
          status: "optional",
          checked: false,
          value: "840"
        },
        {
          name: "sellerEmail",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans- 254",
          description: "Business or contact email address of the Seller.",
          status: "optional",
          checked: false,
          value: "seller1@seller1.com"
        },
        {
          name: "sellerPhone",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable Numeric cc: 1-3 subscriber:1 5",
          description: "Business or contact phone number of the Seller.\n\nValues accepted:\nCountry Code and Subscriber sections of the number represented by the following named fields:\ncc\nsubscriber",
          status: "optional",
          checked: false,
          value: {
            cc: 1,
            subscriber: 1234567899
          }
        }
      ]
    },
    {
      id: 26,
      fieldCategory: false,
      fieldCategoryName: "",
      fields: [
        {
          name: "sdkAppID",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed ans-36",
          description: "Required, If Device channel - 01 APP \nUniversally unique ID created upon all installations of the 3DS Requestor App on a Consumer Device. This will be newly generated and stored by the 3DS SDK for each installation.\nNote: In case of SplitSDK/Browser, the SDK App ID value is not reliable, and may change for each transaction",
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
        }
      ]
    },
    {
      id: 27,
      fieldCategory: true,
      fieldCategoryName: "broadInfo",
      fields: [
        {
          name: "broadInfo",
          type: "text",
          dataType: "Object",
          lengthAndType: "Variable ans-4096",
          description: "Structured information sent between the 3DS Server, the DS, and the ACS.\n\nSubFields: Refer the SubElements Table:\n1.Category\n2.Description\n3.Expiry Date\n4.Severity\n5.Recipient(s)",
          status: "optional",
          checked: false,
          value: ""
        },
        {
          name: "category",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the category/type of information.\nValues accepted:\n01 = General\n02 = Certificate expiry\n03 = Fraud alert\n04 = Operational alert\n05 = Transactional data\n06 = Other",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "description",
          type: "text",
          dataType: "String",
          lengthAndType: "Variable ans- 4000",
          status: "optional",
          checked: false,
          value: ""
        },
        {
          name: "expDate",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-8",
          description: "The date after which the relevance of the broadcasted information. \nFormat accepted: YYYYMMDD",
          status: "optional",
          checked: false,
          value: "20210928"
        },
        {
          name: "severity",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the importance/severity level of the broadcasted information.\nValues accepted:\n01 = Critical = Immediate action to be taken by recipient\n02 = Major = Major impact; Upcoming action to be taken by recipient\n03 =  Minor = Minor impact; Upcoming action to be taken by recipient\n04 = Informational = Informational only with no immediate action by recipient",
          status: "mandate",
          checked: true,
          value: "01"
        },
        {
          name: "recipients",
          type: "text",
          dataType: "Array of String",
          lengthAndType: "Variable a- 3",
          description: "Indicates the intended recipient(s) of the broadcasted information.\nValues accepted:\n01 = 3DS SDK\n02 = 3DS Server\n03 = DS\n04 = ACS",
          status: "mandate",
          checked: true,
          value: "02"
        },
        {
          name: "source",
          type: "text",
          dataType: "String",
          lengthAndType: "Fixed n-2",
          description: "Indicates the source of the broadcasted information.\nValues accepted:\n01 = 3DS Server\n02 = DS\n03 = ACS",
          status: "mandate",
          checked: true,
          value: "01"
        }
      ]
    }
  ]