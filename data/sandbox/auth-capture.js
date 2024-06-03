export const authCaptureRequestParams = [
    {
        id: 1,
        fieldCategoryName: false,
        fields: [
            {
                name: "MTI ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-4",
                description: 100,
                status: "mandate",
                checked: true,
                value: "0100"
            },
            {
                name: "Partner ID ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed an-6",
                description: "Partner ID assigned",
                status: "mandate",
                checked: true,
                value: "Myla10"
            },
            {
                name: "Unique Transaction ID",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Mylapay Transaction Unique ID generate in Authorization response ",
                status: "mandate",
                checked: true,
                value: ""
            },
            {
                name: "Transaction Date ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-10",
                description: "Transaction initiated date and time in format \"MMDDhhmmss",
                status: "mandate",
                checked: true,
                value: "0321183000"
            },
            {
                name: "Transaction Amount ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-12",
                description: "Payment amount requested",
                status: "mandate",
                checked: true,
                value: "000000010000"
            },
            {
                name: "Transaction Currency Code ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-3",
                description: "Indicates the currency code in which transaction amount is sent",
                status: "mandate",
                checked: true,
                value: "840"
            },
            {
                name: "Created Date ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-10",
                description: "Transaction Created date and time in format \"MMDDhhmmss",
                status: "mandate",
                checked: true,
                value: "0321230000"
            },
            {
                name: "Capture Date ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-10",
                description: "Transaction Capture date and time in format \"MMDDhhmmss",
                status: "mandate",
                checked: true,
                value: "“0322240000”"
            },
            {
                name: "Capture Amount ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-12",
                description: "Captured amount requested",
                status: "mandate",
                checked: true,
                value: "000000010000"
            },
            {
                name: "Capture Currency Code ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-3",
                description: "Indicates the currency code in which transaction amount is Captured",
                status: "mandate",
                checked: true,
                value: "840"
            },
            {
                name: "Card Network ",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-2",
                description: "01\" - Indicates - Visa \"02\" - Indicates - MasterCard \"03\" - Indicates – Rupay",
                status: "mandate",
                checked: true,
                value: "01"
            },
            {
                name: "ARN",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-24",
                description: "ARN assigned  ",
                status: "mandate",
                checked: true,
                value: "123456789123123444566789"
            },
            {
                name: "RRN",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed n-12",
                description: "Retrieval reference number",
                status: "mandate",
                checked: true,
                value: "123456789123"
            }
        ]
    }
]