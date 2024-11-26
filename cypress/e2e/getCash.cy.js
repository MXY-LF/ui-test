describe("getCash spec", { defaultCommandTimeout: 300000 }, () => {
    before(() => {

        // 注册 uncaught:exception 事件处理器
        Cypress.on("uncaught:exception", (err, runnable) => {
            // 这里可以记录错误信息
            console.error("Uncaught Exception:", err);

            // 返回 false 以防止测试失败
            return false;
        });
    });
    beforeEach(() => {
        // 在每个测试用例之前清除 localStorage
        cy.window().then((win) => {
            win.localStorage.clear();
        });
    });


    it("取现取现 ------", { timeout: 300000 }, () => {

        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/pre_check/,
            {
                body: {
                    "ret_code": "80000000",
                    "ret_msg": "cillum tempor mollit eiusmod Ut",
                    "biz_no": "anim",
                    "ret_data": {
                        "tncRequired": true,
                        "riskCode": "Y001",
                        "mbrLevelName": "PREMIUM",
                        "point": "50000",
                        "customerExtInfo": {
                            "EMERGENCY_FULL_NAME": "Lorem pariatur",
                            "OPEN_ACCOUNT_PURPOSE": "elit",
                            "CITY": "ex ipsum reprehenderit minim do",
                            "RW": "343",
                            "SUB_DISTRICT": "dolore ut elit exercitation laborum",
                            "COMPANY_POSTAL_CODE": "12790",
                            "POSITION": "minim esse dolor sunt eu",
                            "COMPANY_NAME": "occaecat",
                            "INSTUSTRY_OF_PROFESSION": "nostrud ipsum deserunt incididunt ut",
                            "POSTAL_CODE": "12790",
                            "PROFESSION": "pariatur",
                            "DISTRICT": "velit",
                            "COMPANY_CITY": "labore cillum in",
                            "RT": "321",
                            "CURRENT_ADDRESS": "elit nulla Duis",
                            "SOURCE_OF_FUND": "Excepteur occaecat",
                            "COMPANY_ADDRESS": "qui consectetur occaecat Excepteur in",
                            "COMPANY_PHONE": "21556478",
                            "PROVINCE": "irure et do ad amet",
                            "EMERGENCY_MOBILE_NUMBER": "8786143526"
                        },
                        "appNo": "3244354353333",
                        "customerId": "incididunt elit ullamco anim",
                        "csrfToken": "451BD862887BE1238C2506D3B98AAD2EB2606EE7420D41FAB76FD44011678784",
                        "typeCode": "dolor",
                        "openAcctCaseNo": "432432432435",
                        "mpcStatus": "10",
                        "balanceAmt": 500000,
                        "withoutUaAndMpc": true,
                        "passwordStatus": "1",
                        "email": "homiexie@webank.com",
                        "mpcUid": "quis magna sit aliqua",
                        "mbrLevelId": "3",
                        "whiteList": "Y",
                        "payLaterStatus": "T022",
                        "mpcLevel": "03",
                        "preCreditLimit": 0,
                        "emailStatus": "Y",
                        "phone": "8786143526",
                        "name": "dfds",
                        "accumEnd": "5000",
                        "otpRequired": true
                    }
                },
                statusCode: 200,
            }
        ).as("preCheck");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/account\/query\/personal_center/,
            {
                body: {
                    "ret_code": "80000000",
                    "ret_msg": "eiusmod sed nulla in",
                    "ret_data": {
                        "STMT_DATE": "20220827",
                        "BILL_BAL_AMT": 50000,
                        "BILL_AMT": 150000,
                        "ACCT_STMT_STATUS": "W",
                        "OVERDUE_DAYS": "0",
                        "PMT_DUE_DATE": "20220827",
                        "CREDIT_LIMIT": "50000000",
                        "UN_BILL_AMT": "50000",
                        "BUSINESS_DATE": "20220812",
                        "DEPOSIT_BAL": 0,
                        "OVERDUE_TIMES": 2,
                        "CASH_OTB": "50000000",
                        "AVAILABLE_OTB": "50000000",
                        "LOAN_PLANS": [
                            {
                                "TERMS": [
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    }
                                ],
                                "LOAN_CODE": "9022",
                                "MIN_LOAN_INIT_PRIN": 50000
                            },
                            {
                                "TERMS": [
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    }
                                ],
                                "LOAN_CODE": "9022",
                                "MIN_LOAN_INIT_PRIN": 50000
                            },
                            {
                                "TERMS": [
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    }
                                ],
                                "LOAN_CODE": "9022",
                                "MIN_LOAN_INIT_PRIN": 50000
                            },
                            {
                                "TERMS": [
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    }
                                ],
                                "LOAN_CODE": "9022",
                                "MIN_LOAN_INIT_PRIN": 50000
                            },
                            {
                                "TERMS": [
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    },
                                    {
                                        "TERM": 6,
                                        "INT_RATE": 12,
                                        "PENALTY_RATE": 0.5,
                                        "UPFRONT_ADMIN_FEE_RATE": 0.5,
                                        "MONTH_FEE_RATE": 1
                                    }
                                ],
                                "LOAN_CODE": "9022",
                                "MIN_LOAN_INIT_PRIN": 50000
                            }
                        ],
                        "ONCE_DEPOSIT": "irure sed occaecat Duis pariatur",
                        "CARD_NO": "43424324545767",
                        "STMT_MONTH": "quis",
                        "ADMIN_FEE_RATE": "0.05",
                        "ACCT_USE_STATUS": "W",
                        "CURR_STMT_STATUS": "U",
                        "CREATE_TIME": "20120211",
                        "PENALTY_BAL": -28207046.20485714,
                        "BLOCK_CODE": "Y",
                        "RISK_CODE": "Y001|ZQ01",
                        "CASH_LIMIT_RATE": "commodo mollit laboris nisi"
                    }
                },
                statusCode: 200,
            }
        ).as("personalCenter");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/common\/check\/email_verify_status/,
            {
                body: {
                    "ret_data": {
                        "emailVerified": "01",
                        "emailVerifyRequired": false,
                        "name": "dolor in ea velit",
                        "phoneNo": "eiusmod",
                        "email": "aaaabbb@qq.com"
                    },
                    "ret_msg": "ipsum aliqua tempor laboris in",
                    "ret_code": "0000"
                },
                statusCode: 200,
            }
        ).as("emailVerify");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/account\/query\/coupon/,
            {
                body: {
                    "ret_code": "80460000",
                    "ret_msg": "Successful",
                    "token_status": "OK",
                    "biz_no": "24041814D08048GSL00004gzjYaMNbKN",
                    "process_type": "sync",
                    "ret_data": {
                        "appType": "U",
                        "appAcctNo": "5000201000040650662",
                        "hasEquity": "Y",
                        "equityList": [
                            {
                                "equityType": "INT_R",
                                "equityNo": "RA000004",
                                "actNo": "MT000004205",
                                "equityContent": "月利率10.99% 金额上限10000000",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250728",
                                "equityValue": "0.109900",
                                "status": "0",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "PAY_LATTER",
                                "equityName": "指定利率券",
                                "usePlanTerm": "1,3,6,12",
                                "equityTagName": "CT Corpppppppppppp",
                                "picturePath": "1231",
                                "listNo": "41024033100000000006"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "RA044504",
                                "actNo": "MT000004205",
                                "equityContent": "月利率10.99% 金额上限10000000",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250728",
                                "equityValue": "0.109900",
                                "status": "0",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "PAY_LATTER",
                                "equityName": "指定利率券",
                                "usePlanTerm": "1,3,6,12",
                                "equityTagName": "CT Corpppppppppppp",
                                "picturePath": "1231",
                                "listNo": "41024033100000120006"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "RA024504",
                                "actNo": "MT000004205",
                                "equityContent": "月利率10.99% 金额上限10000000",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250728",
                                "equityValue": "0.109900",
                                "status": "0",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "PAY_LATTER",
                                "equityName": "指定利率券",
                                "usePlanTerm": "1,3,6,12",
                                "equityTagName": "CT Corpppppppppppp",
                                "picturePath": "1231",
                                "listNo": "41024033100000110006"
                            },
                            {
                                "equityType": "INT_R",
                                "equityNo": "RA000654",
                                "actNo": "MT000004205",
                                "equityContent": "月利率10.99% 金额上限10000000",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20200728",
                                "equityValue": "0.109900",
                                "status": "4",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "PAY_LATTER",
                                "equityName": "指定利率券",
                                "usePlanTerm": "1,3,6,12",
                                "equityTagName": "CT Corp",
                                "picturePath": "1231",
                                "listNo": "41024033100000012336"
                            },
                            {
                                "equityType": "INT_R",
                                "equityNo": "RA000999",
                                "actNo": "MT000004999",
                                "equityContent": "月利率0",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250728",
                                "equityValue": "0",
                                "status": "0",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "指定利率券",
                                "usePlanTerm": "1,3,6,12",
                                "picturePath": "1231",
                                "listNo": "41024033100000000006",
                                "equityTagName": "CT Corpppppppppppp"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000008",
                                "actNo": "MT000004205",
                                "equityContent": "Equity Content 1% off  INT1 Eqity Content   INT1 Eqity Content   INT1 Eqity Content",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250730",
                                "equityValue": "99",
                                "status": "0",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "1% off INT_P折扣券_双11% off INT_P折扣券_双11% off INT_P折扣券_双1",
                                "usePlanTerm": "6,1,3,12",
                                "picturePath": "https://img1.baidu.com/it/u=684770079,849342797&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
                                "listNo": "41024033100000000011"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000008",
                                "actNo": "MT000004205",
                                "equityContent": "Equity Content 1% off  INT1 Eqity Content   INT1 Eqity Content   INT1 Eqity Content",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250731",
                                "equityValue": "99",
                                "status": "0",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "1% off INT_P折扣券_双11% off INT_P折扣券_双11% off INT_P折扣券_双1",
                                "usePlanTerm": "6,1,3,12",
                                "picturePath": "https://img1.baidu.com/it/u=684770079,849342797&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
                                "listNo": "41024033100000000012"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "IS000017",
                                "actNo": "MT000004208",
                                "equityContent": "Content Equity Content ABCDEFGContent Equity Content ABCDEFGContent Equity Content ABCDEFGContent Equity Content ABCDEFGHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250731",
                                "equityValue": "1",
                                "status": "0",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "1期免息",
                                "usePlanTerm": "1,3,6,12",
                                "picturePath": "https://tltp.test.webankcdn.net/mes-adm/MES-MOS/VIRTUAL/VIRTUAL_TEMP/20231117150644/8be141c62da545228f4f56d396cb39f8.png",
                                "listNo": "41024033100000000017"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "IS000034",
                                "actNo": "M0000692145",
                                "equityClaimDate": "20231020",
                                "equityExpireDate": "20281229",
                                "equityValue": "18",
                                "status": "0",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "usePlanTerm": "1,6,12",
                                "listNo": "TT023101800006999313"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "IS000006",
                                "actNo": "M0000692145",
                                "equityClaimDate": "20231020",
                                "equityExpireDate": "20281229",
                                "status": "0",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "listNo": "TT023101800006999314"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "IS000007",
                                "actNo": "M0000692145",
                                "equityClaimDate": "20231020",
                                "equityExpireDate": "20281229",
                                "status": "0",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "listNo": "TT023101800006999315"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000004",
                                "actNo": "M0000453309",
                                "equityContent": "321",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20281230",
                                "equityValue": "10",
                                "status": "0",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "321",
                                "usePlanTerm": "6,3",
                                "picturePath": "21",
                                "listNo": "AA023101800006999310"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000004",
                                "actNo": "M0000453309",
                                "equityContent": "321",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20281229",
                                "equityValue": "10",
                                "status": "0",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "321",
                                "usePlanTerm": "6,3",
                                "picturePath": "21",
                                "listNo": "AA023101800006999313"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000006",
                                "actNo": "M0000453309",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20280201",
                                "equityValue": "95",
                                "status": "0",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "usePlanTerm": "1,3,6,12",
                                "listNo": "AA023101800006999314"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000004",
                                "actNo": "M0000453309",
                                "equityContent": "321",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20280129",
                                "equityValue": "10",
                                "status": "0",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "321",
                                "usePlanTerm": "6,3",
                                "picturePath": "21",
                                "listNo": "AA023101800006999316"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "IS000017",
                                "actNo": "MT000004208",
                                "equityContent": "Equity content EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250730",
                                "useDate": "20250702",
                                "equityValue": "1",
                                "status": "1",
                                "loanReceiptNbr": "362507020740226339",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "EQUITY NAME IS000017 INT_T",
                                "usePlanTerm": "1,3,6,12",
                                "picturePath": "https://tltp.test.webankcdn.net/mes-adm/MES-MOS/VIRTUAL/VIRTUAL_TEMP/20231117150644/8be141c62da545228f4f56d396cb39f8.png",
                                "listNo": "41024033100000000004"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "RA000004",
                                "actNo": "MT000004205",
                                "equityContent": "月利率10.99% 金额上限10000000",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250729",
                                "useDate": "20250702",
                                "equityValue": "0",
                                "status": "1",
                                "loanReceiptNbr": "362507020740226341",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "指定利率券",
                                "usePlanTerm": "1,3,6,12",
                                "picturePath": "1231",
                                "listNo": "41024033100000000005"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000008",
                                "actNo": "MT000004205",
                                "equityContent": "Equity Content 1% off  INT1 Eqity Content   INT1 Eqity Content   INT1 Eqity Content",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20250729",
                                "useDate": "20250702",
                                "equityValue": "99",
                                "status": "1",
                                "loanReceiptNbr": "362507020740226427",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "1% off INT_P折扣券_双11% off INT_P折扣券_双11% off INT_P折扣券_双1",
                                "usePlanTerm": "6,1,3,12",
                                "picturePath": "https://img1.baidu.com/it/u=684770079,849342797&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
                                "listNo": "41024033100000000010"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "IS000017",
                                "actNo": "MT000000001",
                                "equityContent": "Equity content EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T EQUITY NAME IS000017 INT_T",
                                "equityClaimDate": "20250701",
                                "equityExpireDate": "20250731",
                                "useDate": "20250702",
                                "equityValue": "1",
                                "status": "1",
                                "loanReceiptNbr": "362507020740226342",
                                "useUpperAmt": 1000000000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "EQUITY NAME IS000017 INT_T",
                                "usePlanTerm": "1,3,6,12",
                                "picturePath": "https://tltp.test.webankcdn.net/mes-adm/MES-MOS/VIRTUAL/VIRTUAL_TEMP/20231117150644/8be141c62da545228f4f56d396cb39f8.png",
                                "listNo": "42024040100000000301"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000004",
                                "actNo": "M0000453309",
                                "equityContent": "321",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20231201",
                                "equityValue": "10",
                                "status": "1",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "321",
                                "usePlanTerm": "6,3",
                                "picturePath": "21",
                                "listNo": "AA023101800006999312"
                            },
                            {
                                "equityType": "INT_TIC_T",
                                "equityNo": "IS000005",
                                "actNo": "M0000692145",
                                "equityClaimDate": "20231020",
                                "equityExpireDate": "20231202",
                                "equityValue": "1",
                                "status": "1",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "usePlanTerm": "-1",
                                "listNo": "TT023101800006999312"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000008",
                                "actNo": "MT000004205",
                                "equityContent": "Equity Content 1% off  INT1 Eqity Content   INT1 Eqity Content   INT1 Eqity Content",
                                "equityClaimDate": "20250702",
                                "equityExpireDate": "20240728",
                                "equityValue": "99",
                                "status": "4",
                                "useUpperAmt": 500000,
                                "useLowerAmt": -1,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "1% off INT_P折扣券_双11% off INT_P折扣券_双11% off INT_P折扣券_双1",
                                "usePlanTerm": "6,1,3,12",
                                "picturePath": "https://img1.baidu.com/it/u=684770079,849342797&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
                                "listNo": "41024033100000002001"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000004",
                                "actNo": "M0000453309",
                                "equityContent": "321",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20240228",
                                "equityValue": "10",
                                "status": "4",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "321",
                                "usePlanTerm": "6,3",
                                "picturePath": "21",
                                "listNo": "AA023101800006999315"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000004",
                                "actNo": "M0000453309",
                                "equityContent": "321",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20231129",
                                "equityValue": "10",
                                "status": "4",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "321",
                                "usePlanTerm": "6,3",
                                "picturePath": "21",
                                "listNo": "AA023101800006999318"
                            },
                            {
                                "equityType": "INT_TIC_P",
                                "equityNo": "ZQ000004",
                                "actNo": "M0000453309",
                                "equityContent": "321",
                                "equityClaimDate": "20230920",
                                "equityExpireDate": "20231128",
                                "equityValue": "10",
                                "status": "4",
                                "useUpperAmt": 10000000,
                                "useLowerAmt": 100,
                                "equityScenario": "CASH_LOAN",
                                "equityName": "321",
                                "usePlanTerm": "6,3",
                                "picturePath": "21",
                                "listNo": "AA023101800006999317"
                            }
                        ]
                    },
                    "system_time": "20240418101448",
                    "hj_biz_no": "24041814D08048GSL00004gzjYaMNbKN"
                },
                statusCode: 200,
            }
        ).as("coupon");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/ddtp_whitelist/,
            {
                body: {
                    "ret_data": {
                        "whitelistFlag": true,
                        "entrance": [
                            "SHOPEE",
                            "BPJS"
                        ]
                    },
                    "ret_msg": "4433",
                    "ret_code": "0000"
                },
                statusCode: 200,
            }
        ).as("ddtpWhitelist");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/try\/loan/,
            {
                "ret_code": "80460000",
                "ret_msg": "Successful",
                "token_status": "OK",
                "biz_no": "24101014D08048GSL0000Js1MlF2wqti",
                "process_type": "sync",
                "ret_data": {
                    "PRODUCT_CD": "801002",
                    "APP_ACCT_NO": "5000201000043170631",
                    "APP_TYPE": "U",
                    "NAME": "DEVY CAGTEF",
                    "CURRENT_DATE": "10/10/2024",
                    "CURRENT_TIME": "10/10/2024 15:04:00",
                    "CONTRACT_BASE": [
                        {
                            "CONTRACT_NAME": "RIPLAY_payLater_取现",
                            "CONTRACT_VERSION": "V1.2",
                            "CONTRACT_DESC": "取现借款合同",
                            "CONTRACT_SHORT_NAME": "取现借款合同",
                            "IS_DYNAMIC": "Y",
                            "CONTRACT_URL": "https://arlenzheng-1259099819.cos.ap-guangzhou.myqcloud.com/cashLoanRiPlay-v1.2.html",
                            "CONTRACT_DATA": "{\"LOAN_LIST\":[{\"MONTH_INST_HANDLE_FEE_RATE\":\"0.0195\",\"MONTH_ORIG_INST_HANDLE_FEE\":9750,\"FUND_AMT\":\"485000.0\",\"SCHEDULE_LIST\":[{\"REMAIN_TOTAL_AMOUNT\":509750.0,\"CURR_TERM\":1,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"509750\",\"PRINCIPAL\":\"500000.0\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20280910\"}],\"FIRST_PMT_DATE\":\"20280910\",\"LOAN_INIT_PRIN\":\"500000.0\",\"UPFRONT_ADMIN_FEE_RATE\":0.03,\"UPFRONT_ADMIN_FEE\":\"15000.0\",\"LOAN_INIT_TERM\":1,\"TOTAL_AMOUNT\":509750.0},{\"MONTH_INST_HANDLE_FEE_RATE\":\"0.0195\",\"MONTH_ORIG_INST_HANDLE_FEE\":9750,\"FUND_AMT\":\"480000.0\",\"SCHEDULE_LIST\":[{\"REMAIN_TOTAL_AMOUNT\":529250.0,\"CURR_TERM\":1,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"176416\",\"PRINCIPAL\":\"166666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20280910\"},{\"REMAIN_TOTAL_AMOUNT\":352834.0,\"CURR_TERM\":2,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"176416\",\"PRINCIPAL\":\"166666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281010\"},{\"REMAIN_TOTAL_AMOUNT\":176418.0,\"CURR_TERM\":3,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"176418\",\"PRINCIPAL\":\"166668.0\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281110\"}],\"FIRST_PMT_DATE\":\"20280910\",\"LOAN_INIT_PRIN\":\"500000.0\",\"UPFRONT_ADMIN_FEE_RATE\":0.04,\"UPFRONT_ADMIN_FEE\":\"20000.0\",\"LOAN_INIT_TERM\":3,\"TOTAL_AMOUNT\":529250.0},{\"MONTH_INST_HANDLE_FEE_RATE\":\"0.0195\",\"MONTH_ORIG_INST_HANDLE_FEE\":9750,\"FUND_AMT\":\"475000.0\",\"SCHEDULE_LIST\":[{\"REMAIN_TOTAL_AMOUNT\":558500.0,\"CURR_TERM\":1,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"93083\",\"PRINCIPAL\":\"83333\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20280910\"},{\"REMAIN_TOTAL_AMOUNT\":465417.0,\"CURR_TERM\":2,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"93083\",\"PRINCIPAL\":\"83333\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281010\"},{\"REMAIN_TOTAL_AMOUNT\":372334.0,\"CURR_TERM\":3,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"93083\",\"PRINCIPAL\":\"83333\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281110\"},{\"REMAIN_TOTAL_AMOUNT\":279251.0,\"CURR_TERM\":4,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"93083\",\"PRINCIPAL\":\"83333\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281210\"},{\"REMAIN_TOTAL_AMOUNT\":186168.0,\"CURR_TERM\":5,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"93083\",\"PRINCIPAL\":\"83333\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290110\"},{\"REMAIN_TOTAL_AMOUNT\":93085.0,\"CURR_TERM\":6,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"93085\",\"PRINCIPAL\":\"83335.0\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290210\"}],\"FIRST_PMT_DATE\":\"20280910\",\"LOAN_INIT_PRIN\":\"500000.0\",\"UPFRONT_ADMIN_FEE_RATE\":0.05,\"UPFRONT_ADMIN_FEE\":\"25000.0\",\"LOAN_INIT_TERM\":6,\"TOTAL_AMOUNT\":558500.0},{\"MONTH_INST_HANDLE_FEE_RATE\":\"0.0195\",\"MONTH_ORIG_INST_HANDLE_FEE\":9750,\"FUND_AMT\":\"470000.0\",\"SCHEDULE_LIST\":[{\"REMAIN_TOTAL_AMOUNT\":617000.0,\"CURR_TERM\":1,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20280910\"},{\"REMAIN_TOTAL_AMOUNT\":565584.0,\"CURR_TERM\":2,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281010\"},{\"REMAIN_TOTAL_AMOUNT\":514168.0,\"CURR_TERM\":3,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281110\"},{\"REMAIN_TOTAL_AMOUNT\":462752.0,\"CURR_TERM\":4,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20281210\"},{\"REMAIN_TOTAL_AMOUNT\":411336.0,\"CURR_TERM\":5,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290110\"},{\"REMAIN_TOTAL_AMOUNT\":359920.0,\"CURR_TERM\":6,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290210\"},{\"REMAIN_TOTAL_AMOUNT\":308504.0,\"CURR_TERM\":7,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290310\"},{\"REMAIN_TOTAL_AMOUNT\":257088.0,\"CURR_TERM\":8,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290410\"},{\"REMAIN_TOTAL_AMOUNT\":205672.0,\"CURR_TERM\":9,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290510\"},{\"REMAIN_TOTAL_AMOUNT\":154256.0,\"CURR_TERM\":10,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290610\"},{\"REMAIN_TOTAL_AMOUNT\":102840.0,\"CURR_TERM\":11,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51416\",\"PRINCIPAL\":\"41666\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290710\"},{\"REMAIN_TOTAL_AMOUNT\":51424.0,\"CURR_TERM\":12,\"ORIG_INST_HANDLE_FEE\":\"9750\",\"AMOUNT\":\"51424\",\"PRINCIPAL\":\"41674.0\",\"SERVICE_FEE\":\"0\",\"LAST_PMT_DUE_DATE\":\"20290810\"}],\"FIRST_PMT_DATE\":\"20280910\",\"LOAN_INIT_PRIN\":\"500000.0\",\"UPFRONT_ADMIN_FEE_RATE\":0.06,\"UPFRONT_ADMIN_FEE\":\"30000.0\",\"LOAN_INIT_TERM\":12,\"TOTAL_AMOUNT\":617000.0}],\"CURRENT_DATE\":\"01/08/2028\",\"CURRENT_TIME\":\"01/08/2028 14:43:46\",\"NAME\":\"Uyfkngm Slkmws\"}",
                            "SORT_NO": 0
                        }
                    ],
                    "DECISION_CONTRACT_TIME": "1728543840409",
                    "LOAN_LIST": [
                        {
                            "LOAN_INIT_PRIN": 500000,
                            "LOAN_INIT_TERM": 1,
                            "LOAN_TOTAL_INST_HANDLE_FEE": 24750,
                            "INT_RATE": 0,
                            "UPFRONT_ADMIN_FEE_RATE": 0.06,
                            "SCHEDULE_LIST": [
                                {
                                    "AMOUNT": 524750,
                                    "START_DATE": "20280412",
                                    "PMT_DUE_DATE": "20280501",
                                    "CURR_TERM": 1,
                                    "PRINCIPAL": 500000,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 524750,
                                    "LAST_PMT_DUE_DATE": "20280510"
                                }
                            ],
                            "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 24750,
                            "MONTH_INST_HANDLE_FEE_RATE": 0.0495,
                            "UPFRONT_ADMIN_FEE": 30000,
                            "FIRST_PMT_DATE": "20280510",
                            "FUND_AMT": 470000,
                            "LOAN_TOTAL_INTEREST": 0,
                            "TOTAL_AMOUNT": 524750,
                            "FIRST_BILL_DATE": "20280501",
                            "BILLING_CYCLE": 1,
                            "FIRST_BILL_AMT": 524750,
                            "LOAN_TOTAL_FEE": 0,
                            "LOAN_TOTAL_WAIVED_INT": 0,
                            "MONTH_ORIG_INST_HANDLE_FEE": 24750
                        },
                        {
                            "LOAN_INIT_PRIN": 500000,
                            "LOAN_INIT_TERM": 3,
                            "LOAN_TOTAL_INST_HANDLE_FEE": 74250,
                            "INT_RATE": 0,
                            "UPFRONT_ADMIN_FEE_RATE": 0.06,
                            "SCHEDULE_LIST": [
                                {
                                    "AMOUNT": 191416,
                                    "START_DATE": "20280412",
                                    "PMT_DUE_DATE": "20280501",
                                    "CURR_TERM": 1,
                                    "PRINCIPAL": 166666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 574250,
                                    "LAST_PMT_DUE_DATE": "20280510"
                                },
                                {
                                    "AMOUNT": 191416,
                                    "START_DATE": "20280501",
                                    "PMT_DUE_DATE": "20280601",
                                    "CURR_TERM": 2,
                                    "PRINCIPAL": 166666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 382834,
                                    "LAST_PMT_DUE_DATE": "20280610"
                                },
                                {
                                    "AMOUNT": 191418,
                                    "START_DATE": "20280601",
                                    "PMT_DUE_DATE": "20280701",
                                    "CURR_TERM": 3,
                                    "PRINCIPAL": 166668,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 191418,
                                    "LAST_PMT_DUE_DATE": "20280710"
                                }
                            ],
                            "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 74250,
                            "MONTH_INST_HANDLE_FEE_RATE": 0.0495,
                            "UPFRONT_ADMIN_FEE": 30000,
                            "FIRST_PMT_DATE": "20280510",
                            "FUND_AMT": 470000,
                            "LOAN_TOTAL_INTEREST": 0,
                            "TOTAL_AMOUNT": 574250,
                            "FIRST_BILL_DATE": "20280501",
                            "BILLING_CYCLE": 1,
                            "FIRST_BILL_AMT": 191416,
                            "LOAN_TOTAL_FEE": 0,
                            "LOAN_TOTAL_WAIVED_INT": 0,
                            "MONTH_ORIG_INST_HANDLE_FEE": 24750
                        },
                        {
                            "LOAN_INIT_PRIN": 500000,
                            "LOAN_INIT_TERM": 6,
                            "LOAN_TOTAL_INST_HANDLE_FEE": 148500,
                            "INT_RATE": 0,
                            "UPFRONT_ADMIN_FEE_RATE": 0.06,
                            "SCHEDULE_LIST": [
                                {
                                    "AMOUNT": 108083,
                                    "START_DATE": "20280412",
                                    "PMT_DUE_DATE": "20280501",
                                    "CURR_TERM": 1,
                                    "PRINCIPAL": 83333,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 648500,
                                    "LAST_PMT_DUE_DATE": "20280510"
                                },
                                {
                                    "AMOUNT": 108083,
                                    "START_DATE": "20280501",
                                    "PMT_DUE_DATE": "20280601",
                                    "CURR_TERM": 2,
                                    "PRINCIPAL": 83333,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 540417,
                                    "LAST_PMT_DUE_DATE": "20280610"
                                },
                                {
                                    "AMOUNT": 108083,
                                    "START_DATE": "20280601",
                                    "PMT_DUE_DATE": "20280701",
                                    "CURR_TERM": 3,
                                    "PRINCIPAL": 83333,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 432334,
                                    "LAST_PMT_DUE_DATE": "20280710"
                                },
                                {
                                    "AMOUNT": 108083,
                                    "START_DATE": "20280701",
                                    "PMT_DUE_DATE": "20280801",
                                    "CURR_TERM": 4,
                                    "PRINCIPAL": 83333,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 324251,
                                    "LAST_PMT_DUE_DATE": "20280810"
                                },
                                {
                                    "AMOUNT": 108083,
                                    "START_DATE": "20280801",
                                    "PMT_DUE_DATE": "20280901",
                                    "CURR_TERM": 5,
                                    "PRINCIPAL": 83333,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 216168,
                                    "LAST_PMT_DUE_DATE": "20280910"
                                },
                                {
                                    "AMOUNT": 108085,
                                    "START_DATE": "20280901",
                                    "PMT_DUE_DATE": "20281001",
                                    "CURR_TERM": 6,
                                    "PRINCIPAL": 83335,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 108085,
                                    "LAST_PMT_DUE_DATE": "20281010"
                                }
                            ],
                            "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 148500,
                            "MONTH_INST_HANDLE_FEE_RATE": 0.0495,
                            "UPFRONT_ADMIN_FEE": 30000,
                            "FIRST_PMT_DATE": "20280510",
                            "FUND_AMT": 470000,
                            "LOAN_TOTAL_INTEREST": 0,
                            "TOTAL_AMOUNT": 648500,
                            "FIRST_BILL_DATE": "20280501",
                            "BILLING_CYCLE": 1,
                            "FIRST_BILL_AMT": 108083,
                            "LOAN_TOTAL_FEE": 0,
                            "LOAN_TOTAL_WAIVED_INT": 0,
                            "MONTH_ORIG_INST_HANDLE_FEE": 24750
                        },
                        {
                            "LOAN_INIT_PRIN": 500000,
                            "LOAN_INIT_TERM": 12,
                            "LOAN_TOTAL_INST_HANDLE_FEE": 297000,
                            "INT_RATE": 0,
                            "UPFRONT_ADMIN_FEE_RATE": 0.06,
                            "SCHEDULE_LIST": [
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20280412",
                                    "PMT_DUE_DATE": "20280501",
                                    "CURR_TERM": 1,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 797000,
                                    "LAST_PMT_DUE_DATE": "20280510"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20280501",
                                    "PMT_DUE_DATE": "20280601",
                                    "CURR_TERM": 2,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 730584,
                                    "LAST_PMT_DUE_DATE": "20280610"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20280601",
                                    "PMT_DUE_DATE": "20280701",
                                    "CURR_TERM": 3,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 664168,
                                    "LAST_PMT_DUE_DATE": "20280710"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20280701",
                                    "PMT_DUE_DATE": "20280801",
                                    "CURR_TERM": 4,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 597752,
                                    "LAST_PMT_DUE_DATE": "20280810"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20280801",
                                    "PMT_DUE_DATE": "20280901",
                                    "CURR_TERM": 5,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 531336,
                                    "LAST_PMT_DUE_DATE": "20280910"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20280901",
                                    "PMT_DUE_DATE": "20281001",
                                    "CURR_TERM": 6,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 464920,
                                    "LAST_PMT_DUE_DATE": "20281010"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20281001",
                                    "PMT_DUE_DATE": "20281101",
                                    "CURR_TERM": 7,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 398504,
                                    "LAST_PMT_DUE_DATE": "20281110"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20281101",
                                    "PMT_DUE_DATE": "20281201",
                                    "CURR_TERM": 8,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 332088,
                                    "LAST_PMT_DUE_DATE": "20281210"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20281201",
                                    "PMT_DUE_DATE": "20290101",
                                    "CURR_TERM": 9,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 265672,
                                    "LAST_PMT_DUE_DATE": "20290110"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20290101",
                                    "PMT_DUE_DATE": "20290201",
                                    "CURR_TERM": 10,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 199256,
                                    "LAST_PMT_DUE_DATE": "20290210"
                                },
                                {
                                    "AMOUNT": 66416,
                                    "START_DATE": "20290201",
                                    "PMT_DUE_DATE": "20290301",
                                    "CURR_TERM": 11,
                                    "PRINCIPAL": 41666,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 132840,
                                    "LAST_PMT_DUE_DATE": "20290310"
                                },
                                {
                                    "AMOUNT": 66424,
                                    "START_DATE": "20290301",
                                    "PMT_DUE_DATE": "20290401",
                                    "CURR_TERM": 12,
                                    "PRINCIPAL": 41674,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 66424,
                                    "LAST_PMT_DUE_DATE": "20290410"
                                }
                            ],
                            "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 297000,
                            "MONTH_INST_HANDLE_FEE_RATE": 0.0495,
                            "UPFRONT_ADMIN_FEE": 30000,
                            "FIRST_PMT_DATE": "20280510",
                            "FUND_AMT": 470000,
                            "LOAN_TOTAL_INTEREST": 0,
                            "TOTAL_AMOUNT": 797000,
                            "FIRST_BILL_DATE": "20280501",
                            "BILLING_CYCLE": 1,
                            "FIRST_BILL_AMT": 66416,
                            "LOAN_TOTAL_FEE": 0,
                            "LOAN_TOTAL_WAIVED_INT": 0,
                            "MONTH_ORIG_INST_HANDLE_FEE": 24750
                        },
                        {
                            "LOAN_INIT_PRIN": 500000,
                            "LOAN_INIT_TERM": 18,
                            "LOAN_TOTAL_INST_HANDLE_FEE": 445500,
                            "INT_RATE": 0,
                            "UPFRONT_ADMIN_FEE_RATE": 0.06,
                            "SCHEDULE_LIST": [
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20280412",
                                    "PMT_DUE_DATE": "20280501",
                                    "CURR_TERM": 1,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 945500,
                                    "LAST_PMT_DUE_DATE": "20280510"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20280501",
                                    "PMT_DUE_DATE": "20280601",
                                    "CURR_TERM": 2,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 892973,
                                    "LAST_PMT_DUE_DATE": "20280610"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20280601",
                                    "PMT_DUE_DATE": "20280701",
                                    "CURR_TERM": 3,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 840446,
                                    "LAST_PMT_DUE_DATE": "20280710"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20280701",
                                    "PMT_DUE_DATE": "20280801",
                                    "CURR_TERM": 4,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 787919,
                                    "LAST_PMT_DUE_DATE": "20280810"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20280801",
                                    "PMT_DUE_DATE": "20280901",
                                    "CURR_TERM": 5,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 735392,
                                    "LAST_PMT_DUE_DATE": "20280910"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20280901",
                                    "PMT_DUE_DATE": "20281001",
                                    "CURR_TERM": 6,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 682865,
                                    "LAST_PMT_DUE_DATE": "20281010"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20281001",
                                    "PMT_DUE_DATE": "20281101",
                                    "CURR_TERM": 7,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 630338,
                                    "LAST_PMT_DUE_DATE": "20281110"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20281101",
                                    "PMT_DUE_DATE": "20281201",
                                    "CURR_TERM": 8,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 577811,
                                    "LAST_PMT_DUE_DATE": "20281210"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20281201",
                                    "PMT_DUE_DATE": "20290101",
                                    "CURR_TERM": 9,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 525284,
                                    "LAST_PMT_DUE_DATE": "20290110"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290101",
                                    "PMT_DUE_DATE": "20290201",
                                    "CURR_TERM": 10,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 472757,
                                    "LAST_PMT_DUE_DATE": "20290210"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290201",
                                    "PMT_DUE_DATE": "20290301",
                                    "CURR_TERM": 11,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 420230,
                                    "LAST_PMT_DUE_DATE": "20290310"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290301",
                                    "PMT_DUE_DATE": "20290401",
                                    "CURR_TERM": 12,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 367703,
                                    "LAST_PMT_DUE_DATE": "20290410"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290401",
                                    "PMT_DUE_DATE": "20290501",
                                    "CURR_TERM": 13,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 315176,
                                    "LAST_PMT_DUE_DATE": "20290510"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290501",
                                    "PMT_DUE_DATE": "20290601",
                                    "CURR_TERM": 14,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 262649,
                                    "LAST_PMT_DUE_DATE": "20290610"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290601",
                                    "PMT_DUE_DATE": "20290701",
                                    "CURR_TERM": 15,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 210122,
                                    "LAST_PMT_DUE_DATE": "20290710"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290701",
                                    "PMT_DUE_DATE": "20290801",
                                    "CURR_TERM": 16,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 157595,
                                    "LAST_PMT_DUE_DATE": "20290810"
                                },
                                {
                                    "AMOUNT": 52527,
                                    "START_DATE": "20290801",
                                    "PMT_DUE_DATE": "20290901",
                                    "CURR_TERM": 17,
                                    "PRINCIPAL": 27777,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 105068,
                                    "LAST_PMT_DUE_DATE": "20290910"
                                },
                                {
                                    "AMOUNT": 52541,
                                    "START_DATE": "20290901",
                                    "PMT_DUE_DATE": "20291001",
                                    "CURR_TERM": 18,
                                    "PRINCIPAL": 27791,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 52541,
                                    "LAST_PMT_DUE_DATE": "20291010"
                                }
                            ],
                            "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 445500,
                            "MONTH_INST_HANDLE_FEE_RATE": 0.0495,
                            "UPFRONT_ADMIN_FEE": 30000,
                            "FIRST_PMT_DATE": "20280510",
                            "FUND_AMT": 470000,
                            "LOAN_TOTAL_INTEREST": 0,
                            "TOTAL_AMOUNT": 945500,
                            "FIRST_BILL_DATE": "20280501",
                            "BILLING_CYCLE": 1,
                            "FIRST_BILL_AMT": 52527,
                            "LOAN_TOTAL_FEE": 0,
                            "LOAN_TOTAL_WAIVED_INT": 0,
                            "MONTH_ORIG_INST_HANDLE_FEE": 24750
                        },
                        {
                            "LOAN_INIT_PRIN": 500000,
                            "LOAN_INIT_TERM": 24,
                            "LOAN_TOTAL_INST_HANDLE_FEE": 594000,
                            "INT_RATE": 0,
                            "UPFRONT_ADMIN_FEE_RATE": 0.06,
                            "SCHEDULE_LIST": [
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20280412",
                                    "PMT_DUE_DATE": "20280501",
                                    "CURR_TERM": 1,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1094000,
                                    "LAST_PMT_DUE_DATE": "20280510"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20280501",
                                    "PMT_DUE_DATE": "20280601",
                                    "CURR_TERM": 2,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1048417,
                                    "LAST_PMT_DUE_DATE": "20280610"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20280601",
                                    "PMT_DUE_DATE": "20280701",
                                    "CURR_TERM": 3,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1002834,
                                    "LAST_PMT_DUE_DATE": "20280710"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20280701",
                                    "PMT_DUE_DATE": "20280801",
                                    "CURR_TERM": 4,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 957251,
                                    "LAST_PMT_DUE_DATE": "20280810"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20280801",
                                    "PMT_DUE_DATE": "20280901",
                                    "CURR_TERM": 5,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 911668,
                                    "LAST_PMT_DUE_DATE": "20280910"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20280901",
                                    "PMT_DUE_DATE": "20281001",
                                    "CURR_TERM": 6,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 866085,
                                    "LAST_PMT_DUE_DATE": "20281010"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20281001",
                                    "PMT_DUE_DATE": "20281101",
                                    "CURR_TERM": 7,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 820502,
                                    "LAST_PMT_DUE_DATE": "20281110"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20281101",
                                    "PMT_DUE_DATE": "20281201",
                                    "CURR_TERM": 8,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 774919,
                                    "LAST_PMT_DUE_DATE": "20281210"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20281201",
                                    "PMT_DUE_DATE": "20290101",
                                    "CURR_TERM": 9,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 729336,
                                    "LAST_PMT_DUE_DATE": "20290110"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290101",
                                    "PMT_DUE_DATE": "20290201",
                                    "CURR_TERM": 10,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 683753,
                                    "LAST_PMT_DUE_DATE": "20290210"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290201",
                                    "PMT_DUE_DATE": "20290301",
                                    "CURR_TERM": 11,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 638170,
                                    "LAST_PMT_DUE_DATE": "20290310"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290301",
                                    "PMT_DUE_DATE": "20290401",
                                    "CURR_TERM": 12,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 592587,
                                    "LAST_PMT_DUE_DATE": "20290410"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290401",
                                    "PMT_DUE_DATE": "20290501",
                                    "CURR_TERM": 13,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 547004,
                                    "LAST_PMT_DUE_DATE": "20290510"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290501",
                                    "PMT_DUE_DATE": "20290601",
                                    "CURR_TERM": 14,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 501421,
                                    "LAST_PMT_DUE_DATE": "20290610"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290601",
                                    "PMT_DUE_DATE": "20290701",
                                    "CURR_TERM": 15,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 455838,
                                    "LAST_PMT_DUE_DATE": "20290710"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290701",
                                    "PMT_DUE_DATE": "20290801",
                                    "CURR_TERM": 16,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 410255,
                                    "LAST_PMT_DUE_DATE": "20290810"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290801",
                                    "PMT_DUE_DATE": "20290901",
                                    "CURR_TERM": 17,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 364672,
                                    "LAST_PMT_DUE_DATE": "20290910"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20290901",
                                    "PMT_DUE_DATE": "20291001",
                                    "CURR_TERM": 18,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 319089,
                                    "LAST_PMT_DUE_DATE": "20291010"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20291001",
                                    "PMT_DUE_DATE": "20291101",
                                    "CURR_TERM": 19,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 273506,
                                    "LAST_PMT_DUE_DATE": "20291110"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20291101",
                                    "PMT_DUE_DATE": "20291201",
                                    "CURR_TERM": 20,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 227923,
                                    "LAST_PMT_DUE_DATE": "20291210"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20291201",
                                    "PMT_DUE_DATE": "20300101",
                                    "CURR_TERM": 21,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 182340,
                                    "LAST_PMT_DUE_DATE": "20300110"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20300101",
                                    "PMT_DUE_DATE": "20300201",
                                    "CURR_TERM": 22,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 136757,
                                    "LAST_PMT_DUE_DATE": "20300210"
                                },
                                {
                                    "AMOUNT": 45583,
                                    "START_DATE": "20300201",
                                    "PMT_DUE_DATE": "20300301",
                                    "CURR_TERM": 23,
                                    "PRINCIPAL": 20833,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 91174,
                                    "LAST_PMT_DUE_DATE": "20300310"
                                },
                                {
                                    "AMOUNT": 45591,
                                    "START_DATE": "20300301",
                                    "PMT_DUE_DATE": "20300401",
                                    "CURR_TERM": 24,
                                    "PRINCIPAL": 20841,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 45591,
                                    "LAST_PMT_DUE_DATE": "20300410"
                                }
                            ],
                            "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 594000,
                            "MONTH_INST_HANDLE_FEE_RATE": 0.0495,
                            "UPFRONT_ADMIN_FEE": 30000,
                            "FIRST_PMT_DATE": "20280510",
                            "FUND_AMT": 470000,
                            "LOAN_TOTAL_INTEREST": 0,
                            "TOTAL_AMOUNT": 1094000,
                            "FIRST_BILL_DATE": "20280501",
                            "BILLING_CYCLE": 1,
                            "FIRST_BILL_AMT": 45583,
                            "LOAN_TOTAL_FEE": 0,
                            "LOAN_TOTAL_WAIVED_INT": 0,
                            "MONTH_ORIG_INST_HANDLE_FEE": 24750
                        },
                        {
                            "LOAN_INIT_PRIN": 500000,
                            "LOAN_INIT_TERM": 36,
                            "LOAN_TOTAL_INST_HANDLE_FEE": 891000,
                            "INT_RATE": 0,
                            "UPFRONT_ADMIN_FEE_RATE": 0.06,
                            "SCHEDULE_LIST": [
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20280412",
                                    "PMT_DUE_DATE": "20280501",
                                    "CURR_TERM": 1,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1391000,
                                    "LAST_PMT_DUE_DATE": "20280510"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20280501",
                                    "PMT_DUE_DATE": "20280601",
                                    "CURR_TERM": 2,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1352362,
                                    "LAST_PMT_DUE_DATE": "20280610"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20280601",
                                    "PMT_DUE_DATE": "20280701",
                                    "CURR_TERM": 3,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1313724,
                                    "LAST_PMT_DUE_DATE": "20280710"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20280701",
                                    "PMT_DUE_DATE": "20280801",
                                    "CURR_TERM": 4,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1275086,
                                    "LAST_PMT_DUE_DATE": "20280810"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20280801",
                                    "PMT_DUE_DATE": "20280901",
                                    "CURR_TERM": 5,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1236448,
                                    "LAST_PMT_DUE_DATE": "20280910"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20280901",
                                    "PMT_DUE_DATE": "20281001",
                                    "CURR_TERM": 6,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1197810,
                                    "LAST_PMT_DUE_DATE": "20281010"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20281001",
                                    "PMT_DUE_DATE": "20281101",
                                    "CURR_TERM": 7,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1159172,
                                    "LAST_PMT_DUE_DATE": "20281110"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20281101",
                                    "PMT_DUE_DATE": "20281201",
                                    "CURR_TERM": 8,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1120534,
                                    "LAST_PMT_DUE_DATE": "20281210"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20281201",
                                    "PMT_DUE_DATE": "20290101",
                                    "CURR_TERM": 9,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1081896,
                                    "LAST_PMT_DUE_DATE": "20290110"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290101",
                                    "PMT_DUE_DATE": "20290201",
                                    "CURR_TERM": 10,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1043258,
                                    "LAST_PMT_DUE_DATE": "20290210"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290201",
                                    "PMT_DUE_DATE": "20290301",
                                    "CURR_TERM": 11,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 1004620,
                                    "LAST_PMT_DUE_DATE": "20290310"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290301",
                                    "PMT_DUE_DATE": "20290401",
                                    "CURR_TERM": 12,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 965982,
                                    "LAST_PMT_DUE_DATE": "20290410"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290401",
                                    "PMT_DUE_DATE": "20290501",
                                    "CURR_TERM": 13,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 927344,
                                    "LAST_PMT_DUE_DATE": "20290510"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290501",
                                    "PMT_DUE_DATE": "20290601",
                                    "CURR_TERM": 14,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 888706,
                                    "LAST_PMT_DUE_DATE": "20290610"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290601",
                                    "PMT_DUE_DATE": "20290701",
                                    "CURR_TERM": 15,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 850068,
                                    "LAST_PMT_DUE_DATE": "20290710"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290701",
                                    "PMT_DUE_DATE": "20290801",
                                    "CURR_TERM": 16,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 811430,
                                    "LAST_PMT_DUE_DATE": "20290810"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290801",
                                    "PMT_DUE_DATE": "20290901",
                                    "CURR_TERM": 17,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 772792,
                                    "LAST_PMT_DUE_DATE": "20290910"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20290901",
                                    "PMT_DUE_DATE": "20291001",
                                    "CURR_TERM": 18,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 734154,
                                    "LAST_PMT_DUE_DATE": "20291010"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20291001",
                                    "PMT_DUE_DATE": "20291101",
                                    "CURR_TERM": 19,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 695516,
                                    "LAST_PMT_DUE_DATE": "20291110"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20291101",
                                    "PMT_DUE_DATE": "20291201",
                                    "CURR_TERM": 20,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 656878,
                                    "LAST_PMT_DUE_DATE": "20291210"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20291201",
                                    "PMT_DUE_DATE": "20300101",
                                    "CURR_TERM": 21,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 618240,
                                    "LAST_PMT_DUE_DATE": "20300110"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300101",
                                    "PMT_DUE_DATE": "20300201",
                                    "CURR_TERM": 22,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 579602,
                                    "LAST_PMT_DUE_DATE": "20300210"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300201",
                                    "PMT_DUE_DATE": "20300301",
                                    "CURR_TERM": 23,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 540964,
                                    "LAST_PMT_DUE_DATE": "20300310"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300301",
                                    "PMT_DUE_DATE": "20300401",
                                    "CURR_TERM": 24,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 502326,
                                    "LAST_PMT_DUE_DATE": "20300410"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300401",
                                    "PMT_DUE_DATE": "20300501",
                                    "CURR_TERM": 25,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 463688,
                                    "LAST_PMT_DUE_DATE": "20300510"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300501",
                                    "PMT_DUE_DATE": "20300601",
                                    "CURR_TERM": 26,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 425050,
                                    "LAST_PMT_DUE_DATE": "20300610"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300601",
                                    "PMT_DUE_DATE": "20300701",
                                    "CURR_TERM": 27,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 386412,
                                    "LAST_PMT_DUE_DATE": "20300710"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300701",
                                    "PMT_DUE_DATE": "20300801",
                                    "CURR_TERM": 28,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 347774,
                                    "LAST_PMT_DUE_DATE": "20300810"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300801",
                                    "PMT_DUE_DATE": "20300901",
                                    "CURR_TERM": 29,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 309136,
                                    "LAST_PMT_DUE_DATE": "20300910"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20300901",
                                    "PMT_DUE_DATE": "20301001",
                                    "CURR_TERM": 30,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 270498,
                                    "LAST_PMT_DUE_DATE": "20301010"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20301001",
                                    "PMT_DUE_DATE": "20301101",
                                    "CURR_TERM": 31,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 231860,
                                    "LAST_PMT_DUE_DATE": "20301110"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20301101",
                                    "PMT_DUE_DATE": "20301201",
                                    "CURR_TERM": 32,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 193222,
                                    "LAST_PMT_DUE_DATE": "20301210"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20301201",
                                    "PMT_DUE_DATE": "20310101",
                                    "CURR_TERM": 33,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 154584,
                                    "LAST_PMT_DUE_DATE": "20310110"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20310101",
                                    "PMT_DUE_DATE": "20310201",
                                    "CURR_TERM": 34,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 115946,
                                    "LAST_PMT_DUE_DATE": "20310210"
                                },
                                {
                                    "AMOUNT": 38638,
                                    "START_DATE": "20310201",
                                    "PMT_DUE_DATE": "20310301",
                                    "CURR_TERM": 35,
                                    "PRINCIPAL": 13888,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 77308,
                                    "LAST_PMT_DUE_DATE": "20310310"
                                },
                                {
                                    "AMOUNT": 38670,
                                    "START_DATE": "20310301",
                                    "PMT_DUE_DATE": "20310401",
                                    "CURR_TERM": 36,
                                    "PRINCIPAL": 13920,
                                    "INTEREST": 0,
                                    "FEE": 0,
                                    "INST_HANDLE_FEE": 24750,
                                    "ORIG_INST_HANDLE_FEE": 24750,
                                    "REMAIN_TOTAL_AMOUNT": 38670,
                                    "LAST_PMT_DUE_DATE": "20310410"
                                }
                            ],
                            "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 891000,
                            "MONTH_INST_HANDLE_FEE_RATE": 0.0495,
                            "UPFRONT_ADMIN_FEE": 30000,
                            "FIRST_PMT_DATE": "20280510",
                            "FUND_AMT": 470000,
                            "LOAN_TOTAL_INTEREST": 0,
                            "TOTAL_AMOUNT": 1391000,
                            "FIRST_BILL_DATE": "20280501",
                            "BILLING_CYCLE": 1,
                            "FIRST_BILL_AMT": 38638,
                            "LOAN_TOTAL_FEE": 0,
                            "LOAN_TOTAL_WAIVED_INT": 0,
                            "MONTH_ORIG_INST_HANDLE_FEE": 24750
                        }
                    ],
                    "DESC": " Successful trade ",
                    "CODE": "80530000"
                },
                "system_time": "20241010150400",
                "hj_biz_no": "24101014D08048GSL0000Js1MlF2wqti"
            }
        ).as("loan");
        cy.intercept(
            "GET",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/password\/get\/random_factor/,
            {
                body: {
                    "ret_code": "0000",
                    "ret_msg": "amet do irure",
                    "ret_data": {
                        "factor": "pariatur proident ex",
                        "encryptType": "amet nostrud aliqua voluptate et"
                    }
                },
                statusCode: 200,
            }
        ).as("randomFactor");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/password\/validate/,
            {
                body: {
                    "ret_code": "0000",
                    "ret_msg": "Excepteur aliquip dolore id nostrud",
                    "ret_data": {
                        "dayErrorCount": 9171391,
                        "officia_91": -36266787.82802899
                    }
                },
                statusCode: 200,
            }
        ).as("validate");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/apply\/loan/,
            {
                body: {
                    "ret_code": "0000",
                    "ret_msg": "fugiat occaecat ipsum commodo",
                    "ret_data": {
                        "STATUS": "sed consequat irure",
                        "APP_NO": "id incididunt quis",
                        "TXN_ID": "dolore",
                        "LOAN_INIT_PRIN": -99207702.28915186,
                        "RECON_DATE": "consectetur",
                        "ACCT_NAME": "qui in tempor",
                        "ACCT_NO": "in nisi occaecat adipisicing cupidatat",
                        "RECEIPT_NBR": "velit ipsum reprehenderit",
                        "LOAN_FAIL_DESC": "proident in elit",
                        "NEXT_PMT_DATE": "Ut et",
                        "PMT_DATE": "ullamco elit veniam ipsum",
                        "LOAN_STATUS": "ut aliquip dolore ad",
                        "NBS_ORDER_NO": "commodo"
                    }
                },
                statusCode: 200,
            }
        ).as("applyLoan");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/query\/transaction_status/,
            {
                body: {
                    "ret_data": {
                        "LOAN_LIST": [
                            {
                                "LOAN_RECEIPT_NBR": "amet Excepteur do mollit ex",
                                "UPDATE_TIME": "non est fugiat ex in",
                                "LOAN_RESULT_CODE": "dolore veniam ipsum",
                                "LOAN_RESULT_DESC": "enim reprehenderit in",
                                "LOAN_STATUS": "S",
                                "LOAN_INIT_PRIN": -41183841.80022625,
                                "ACTION_CODE": "incididunt pariatur"
                            },
                            {
                                "LOAN_RECEIPT_NBR": "in fugiat",
                                "UPDATE_TIME": "Lorem esse nostrud amet quis",
                                "LOAN_RESULT_CODE": "sint Lorem fugiat exercitation consectetur",
                                "LOAN_RESULT_DESC": "consectetur velit",
                                "LOAN_STATUS": "esse dolor occaecat est tempor",
                                "LOAN_INIT_PRIN": 19799574.73463063,
                                "ACTION_CODE": "dolore"
                            },
                            {
                                "LOAN_RECEIPT_NBR": "in Excepteur est pariatur dolor",
                                "UPDATE_TIME": "quis non sed et dolore",
                                "LOAN_RESULT_CODE": "velit labore nostrud",
                                "LOAN_RESULT_DESC": "ad ea consequat occaecat",
                                "LOAN_STATUS": "aliqua nulla in Duis",
                                "LOAN_INIT_PRIN": -60188365.87138123,
                                "ACTION_CODE": "fugiat mollit sint aliquip ipsum"
                            }
                        ]
                    },
                    "ret_code": "0000",
                    "ret_msg": "laboris magna"
                },
                statusCode: 200,
            }
        ).as("transactionStatus");
        cy.visit("http://localhost:3000/#/pay-later/home");
        cy.wait(1000);
        cy.wait("@preCheck")
        cy.wait("@personalCenter")
        cy.wait("@emailVerify")
        cy.wait("@coupon")
        cy.wait("@ddtpWhitelist")
        cy.removeLoadingAndScreenshot("home", { capture: 'fullPage' });
        cy.get('.shepherd-footer button').eq('0').click()
        cy.get('.shepherd-footer button').eq('1').click()
        cy.get('.we-button-body', { timeout: 5000 }).contains('Get Cash').if().click()
        cy.url().should("include", "/service/withdraw/intro");
        cy.get('.title').contains('What is Instant Cash?').should('be.visible');
        cy.get('.we-button-body', { timeout: 5000 }).contains('Get Cash Now').click()
        cy.removeLoadingAndScreenshot("get cash", { capture: 'fullPage' });
        cy.get('.we-virtual-input', { timeout: 5000 }).click()
        cy.get('.we-number-keyboard-item-body').contains('8').click()
        cy.get('.we-number-keyboard-item-body').contains('6').click()
        cy.get('.we-number-keyboard-item-body').contains('00').click()
        cy.get('.we-icon-arrow-down').click()
        cy.wait('@loan')
        cy.get('.installment-cell').eq('3').click()
        cy.get('.coupons-cell ').click()

        cy.removeLoadingAndScreenshot('coupons', { capture: 'fullPage', scale: true })
        cy.get('.coupon-card').eq('1').get('.we-button-body').contains('Use').click()
        cy.get('.repayment-plan').click()
        cy.removeLoadingAndScreenshot("repay plan", { capture: 'fullPage' });
        cy.get('.we-icon-arrow-left').eq('0').click()
        cy.get('.we-button-body').contains('Continue').click()
        cy.removeLoadingAndScreenshot("Confirm", { capture: 'fullPage' });
        cy.get('.we-checkbox-input').click()
        cy.get('.we-button-body').contains('Continue').click()

        cy.get(".key").contains("2").click();
        cy.get(".key").contains("5").click();
        cy.get(".key").contains("2").click();
        cy.removeLoadingAndScreenshot("pin get bash");
        cy.get(".key").contains("2").click();
        cy.get(".key").contains("2").click();
        cy.get(".key").contains("2").click();
        cy.wait("@randomFactor")
        cy.wait("@validate")
        cy.wait('@applyLoan')
        cy.wait('@transactionStatus')
        cy.wait(100)
        cy.removeLoadingAndScreenshot("final");
    });
});