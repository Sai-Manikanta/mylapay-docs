export const authReversalRequestParams = [
    {
        id: 1,
        fieldCategoryName: false,
        fields: [
            {
                name: "Partner ID",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Partner ID assigned",
                status: "mandate",
                checked: true,
                value: "Myla10"
            },
            {
                name: "MTI",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Indicates - Message type indicator as Reversal",
                status: "mandate",
                checked: true,
                value: "0400"
            },
            {
                name: "TID",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Card Acceptor / Merchant Terminal ID",
                status: "mandate",
                checked: true,
                value: "12345678"
            },
            {
                name: "Transaction ID",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Unique reference sequence number of original auth transaction",
                status: "mandate",
                checked: true,
                value: "123456789123456"
            },
            {
                name: "Payment ID",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Unique reference sequence number generated by Mylapay in Original Auth txn",
                status: "mandate",
                checked: true,
                value: "1xyz5678abc3456"
            },
            {
                name: "RRN",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Retrieval reference number in Original Auth txn",
                status: "mandate",
                checked: true,
                value: "123456789123"
            },
            {
                name: "Transaction Amount",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Payment amount requested in Auth ",
                status: "mandate",
                checked: true,
                value: "000000525055"
            },
            {
                name: "Reversal Type",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "1\" - Indicates Partial payment reversal \"2\" - Indicates Full payment reversal Reversal amount request",
                status: "mandate",
                checked: true,
                value: "1"
            },
            {
                name: "Reversal Amount",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "This field should not cross the overall auth amount limit",
                status: "mandate",
                checked: true,
                value: "000000525055"
            },
            {
                name: "Transaction Date & Time",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Reversal transaction-initiated date and time in format “MMDDhhmmss”",
                status: "mandate",
                checked: true,
                value: "0321193000"
            },
            {
                name: "STAN Number",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "System trace audit number generated in original auth",
                status: "mandate",
                checked: true,
                value: "123456"
            }
        ]
    }
]