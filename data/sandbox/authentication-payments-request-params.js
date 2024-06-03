export const authenticationPaymentsRequestParams = [
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
                description: "Indicates - Message type indicator. “0100” – Sale (by default)",
                status: "mandate",
                checked: true,
                value: "0100"
              },
              {
                name: "Payment Type",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "\"0\" - Indicates - Card present scenario (POS) \"1\" - Indicates - Card not present scenario (PG)",
                status: "mandate",
                checked: true,
                value: "0"
              },
              {
                name: "Transaction ID",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Unique reference sequence number to be generated by the partner.",
                status: "mandate",
                checked: true,
                value: "123456789123456"
              },
              {
                name: "Primary Acct Nbr (PAN)",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Length+ 16/19-digit card number Right justified – trailing zeros",
                status: "mandate",
                checked: true,
                value: "1234567891234567000"
              },
              {
                name: "Transaction Amount",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Payment amount requested",
                status: "mandate",
                checked: true,
                value: "000000010000"
              },
              {
                name: "Transaction Currency Code",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Indicates the currency code in which transaction amount is sent\n\nRefer currency country code table for proper use of codes",
                status: "mandate",
                checked: true,
                value: "840"
              },
              {
                name: "Transaction Date & Time",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Transaction initiated date and time in format “MMDDhhmmss”",
                status: "mandate",
                checked: true,
                value: "“0321183000”"
              },
              {
                name: "Card Expr Date",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: '"Card expiry date in format “YYMM”\n\nThis field is required / mandate when the Payment Type field is \"1\"',
                status: "conditionally required",
                checked: false,
                value: "“2309”"
              },
              {
                name: "PIN Data",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: 'encrypted and formatted as a block of 16 hexadecimal digits.\nThis field is required / mandate when the Payment Type field is \"0\"',
                status: "conditionally required",
                checked: false,
                value: "1234567891234567000"
              },
              {
                name: "PIN Capture Capability",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "\"0\" - Indicates Unknown.\n\"1\" - Indicates terminal can accept and forward online PINs.\n\"2\" - Indicates terminal cannot accept and forward online PINs.\n\"8\" - Indicates Terminal PIN pad down.\n\nThis field is required / mandate when the Payment Type field is \"0\"",
                status: "conditionally required",
                checked: false,
                value: "1"
              },
              {
                name: "STAN Number",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "System trace audit number generated by POS or PG application",
                status: "mandate",
                checked: true,
                value: "123456"
              },
              {
                name: "Invoice Number",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Invoice Number generated by POS or PG application",
                status: "optional",
                checked: false,
                value: "00000000000000012-\n456"
              },
              {
                name: "Merchant MCC",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "MCC code describes merchant business type",
                status: "mandate",
                checked: true,
                value: "5411"
              },
              {
                name: "Merchant Country Code",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Indicates merchant country as India",
                status: "mandate",
                checked: true,
                value: "356"
              },
              {
                name: "POS Entry Mode",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Refer - POS entry mode table for appropriate use of code \n00, 01, 02, 03, 04, 05, 06,\n07, 08, 09, 10, 79, 80, 81,\n82, 90, 91, or 95",
                status: "mandate",
                checked: true,
                value: "00"
              },
              {
                name: "MID",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Card Acceptor / Merchant ID",
                status: "mandate",
                checked: true,
                value: "123456789123456"
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
                name: "Merchant Type",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "\"1\" - Indicates Regular business sized merchant\n\"2\" - Indicates Small business sized merchant where its annual turnover is less than Rs.20 lacs.\n \nIf this field is not sent, system would take \"1\" by default",
                status: "optional",
                checked: false,
                value: "1"
              },
              {
                name: "Merchant Verified Value",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Merchant verified value is provided by Visa / MasterCard for the merchants registered in their network for specific business use case",
                status: "optional",
                checked: false,
                value: "1234"
              },
              {
                name: "DCC Flag",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "\"01\" – DCC not Offered \"02\" - DCC Offered\n\nIf this field is not sent, system would take \"01\" by default",
                status: "conditionally required",
                checked: false,
                value: "01"
              },
              {
                name: "Forex, Conversion rate",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Forex rate used to convert the local currency to card holder currency\n\nThis field is mandate / applicable only when the DCC flag is \"02\" or Transaction Currency code is other than \"356\"",
                status: "conditionally required",
                checked: false,
                value: "78.524545"
              },
              {
                name: "Txn Amt, System Currency Code",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Currency code in which the billing is accepted\n\nThis field is mandate / applicable only when the DCC flag is \"02\" or Transaction Currency code is other than \"356\"",
                status: "conditionally required",
                checked: false,
                value: "840"
              },
              {
                name: "Cashback Flag",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "This field is required / mandate when the Payment Type field is \"0\n\nIndicates the Cashback or purchase with cash back at POS terminal\n\"0\" - Indicates No Cashback \"1\" - Indicates Full Cashback\n\"2\" - Indicates Purchase with Cashback\n\nIf this field is not sent, system would take \"0\" by default",
                status: "conditionally required",
                checked: false,
                value: "0"
              },
              {
                name: "Cashback Amount",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "This field is required / mandate when the Cashback Flag is other than \"0”\n\nAmount should not exceed Rs.2000",
                status: "conditionally required",
                checked: false,
                value: "000000010000"
              },
              {
                name: "Pre-Auth Indicator",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "Indicates:\n“0” – Pre-auth not applicable “1” – Pre-auth transaction “2” – Pre-auth completion\n \nIf this field is not sent, system would take \"0\" by default",
                status: "conditionally required",
                checked: false,
                value: "“0”"
              },
              {
                name: "3ds AuthN Response",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "This field is required / mandate when the Payment Type field is \"1\n \nIndicates:\n“1” – Successfully Authenticated\n“2” – Authenticated attempted\n“3” – Non-Authenticated",
                status: "conditionally required",
                checked: false,
                value: "“1”"
              },
              {
                name: "AuthN Additional Values",
                type: "text",
                dataType: "string",
                lengthAndType: "Fixed",
                description: "This field is required / mandate when the Payment Type field is \"1\n\n“XID value, CAVV value”",
                status: "conditionally required",
                checked: false,
                value: "1"
              }
        ]
    }
  ]