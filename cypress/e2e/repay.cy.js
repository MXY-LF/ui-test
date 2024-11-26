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
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/query\/bill/,
            {
                body: {
                    "ret_code": "0000",
                    "ret_data": {
                        "OVERDUE_DAYS": 2,
                        "UPCOMING_DETAIL": {
                            "STMT_LIST": [
                                {
                                    "START_DATE": "in eu sunt culpa",
                                    "END_DATE": "officia laborum",
                                    "STMT_DATE": "labore officia",
                                    "STMT_MONTH": "aliquip proident nostrud",
                                    "STMT_AMT": 22899695.58529541,
                                    "STMT_STATUS": "ut Excepteur nostrud"
                                },
                                {
                                    "START_DATE": "ea",
                                    "END_DATE": "dolore anim ut amet Excepteur",
                                    "STMT_DATE": "eu velit fugiat pariatur id",
                                    "STMT_MONTH": "in ullamco nulla",
                                    "STMT_AMT": 17612432.048929483,
                                    "STMT_STATUS": "sunt fugiat occaecat"
                                },
                                {
                                    "START_DATE": "commodo nostrud ullamco anim",
                                    "END_DATE": "Duis",
                                    "STMT_DATE": "consectetur non laboris",
                                    "STMT_MONTH": "ut cupidatat",
                                    "STMT_STATUS": "aute",
                                    "STMT_AMT": -40543776.99949478
                                }
                            ],
                            "elitfe": -22203946
                        },
                        "OVERDUE_STMT_LIST": [
                            {
                                "STMT_MONTH": "20210201",
                                "OVERDUE_DAYS": 2,
                                "STMT_BAL_AMT": 21321
                            },
                            {
                                "STMT_MONTH": "20210201",
                                "OVERDUE_DAYS": 2,
                                "STMT_BAL_AMT": 21321
                            },
                            {
                                "OVERDUE_DAYS": 2,
                                "STMT_MONTH": "20210201",
                                "STMT_BAL_AMT": 21321
                            },
                            {
                                "STMT_MONTH": "20210201",
                                "STMT_BAL_AMT": 21321,
                                "OVERDUE_DAYS": 2
                            }
                        ],
                        "STMT_PAID_AMT": 3213214324,
                        "CASH_DETAIL": {
                            "CASH_DETAIL_LIST": [
                                {
                                    "LOAN_INIT_SUM": 35362752.30789122,
                                    "REF_NBR": "labore sit et dolor Excepteur",
                                    "MER_BIZ_NO": "eiusmod sit",
                                    "SCHEDULE_ACTION": "culpa",
                                    "LOAN_DATE": "do mollit irure cillum velit",
                                    "LOAN_INIT_AMT": -446087.12034608424,
                                    "LOAN_INIT_TERM": -75630335.99175179,
                                    "CURR_TERM": 19944114.193782702,
                                    "BIZ_SEQ_NO": "in"
                                },
                                {
                                    "MER_BIZ_NO": "sunt sint eiusmod incididunt nostrud",
                                    "BIZ_SEQ_NO": "deserunt cillum",
                                    "SCHEDULE_ACTION": "ut exercitation",
                                    "REF_NBR": "pariatur sit cupidatat",
                                    "LOAN_INIT_SUM": 61941757.36750251,
                                    "LOAN_INIT_TERM": 90372288.68905497,
                                    "CURR_TERM": -39783121.82005244,
                                    "LOAN_DATE": "consectetur sit ullamco reprehenderit",
                                    "LOAN_INIT_AMT": 66308900.169454396
                                },
                                {
                                    "BIZ_SEQ_NO": "irure tempor in nostrud",
                                    "LOAN_INIT_TERM": -59958138.793273985,
                                    "LOAN_INIT_AMT": -50645339.29253696,
                                    "CURR_TERM": 99421609.32240447,
                                    "LOAN_DATE": "dolore aliquip",
                                    "SCHEDULE_ACTION": "incididunt",
                                    "REF_NBR": "sed nisi dolore nostrud tempor",
                                    "MER_BIZ_NO": "nulla",
                                    "LOAN_INIT_SUM": -26443934.60032685
                                }
                            ],
                            "dolor2": "eu in dolore"
                        },
                        "SPENDING_DETAIL": {
                            "NEXTPAGE_FLG": "mollit ut ea adipisicing incididunt",
                            "LAST_ROW_KEY2": "officia nostrud Ut",
                            "SPENDING_DETAIL_LIST": [
                                {
                                    "REFUND_TIMES": -38051485.958279006,
                                    "TXN_DATE": "20230804",
                                    "REF_NBR": "23324324435",
                                    "TRANSACTION_ID": "32432432423",
                                    "SCHEDULE_ACTION": "L",
                                    "REFUND_STATUS": "voluptate sint veniam in aliqua",
                                    "PMT_DUE_DATE": "20230804",
                                    "LOAN_INIT_TERM": "3",
                                    "ORDER_AMT": "5900000",
                                    "BIZ_SEQ_NO": "4321432",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "CURR_TERM": "2",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TERM_SUM_INIT": "4000000",
                                    "LOAN_INIT_AMT": "20000",
                                    "MER_BIZ_NO": "545435"
                                },
                                {
                                    "REF_NBR": "23324324435",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "TRANSACTION_ID": "32432432423",
                                    "BIZ_SEQ_NO": "4321432",
                                    "LOAN_INIT_AMT": "20000",
                                    "SCHEDULE_ACTION": "L",
                                    "LOAN_INIT_TERM": "1",
                                    "ORDER_AMT": "5900000",
                                    "MER_BIZ_NO": "545435",
                                    "CURR_TERM": "2",
                                    "REFUND_STATUS": "dolore incididunt Duis magna",
                                    "REFUND_TIMES": 65650917.83832052,
                                    "TRANSACTION_TIME": "20240717174036",
                                    "PMT_DUE_DATE": "20230804",
                                    "TERM_SUM_INIT": "4000000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TXN_DATE": "20230804"
                                },
                                {
                                    "PMT_DUE_DATE": "20230804",
                                    "REFUND_STATUS": "dolor laborum",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "MER_BIZ_NO": "545435",
                                    "LOAN_INIT_TERM": "1",
                                    "REFUND_TIMES": -47054102.51444282,
                                    "CURR_TERM": "2",
                                    "TERM_SUM_INIT": "4000000",
                                    "SPENDING_TYPE": "CONSUME",
                                    "TXN_DATE": "20230804",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TRANSACTION_ID": "32432432423",
                                    "BIZ_SEQ_NO": "4321432",
                                    "REF_NBR": "23324324435",
                                    "LOAN_INIT_AMT": "20000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "ORDER_AMT": "5900000",
                                    "SCHEDULE_ACTION": "L"
                                },
                                {
                                    "TRANSACTION_TIME": "20240717174036",
                                    "TRANSACTION_ID": "32432432423",
                                    "REFUND_STATUS": "dolore ipsum nulla",
                                    "ORDER_AMT": "5900000",
                                    "CURR_TERM": "2",
                                    "BIZ_SEQ_NO": "4321432",
                                    "REF_NBR": "23324324435",
                                    "TXN_DATE": "20230804",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "REFUND_TIMES": 48606365.88926917,
                                    "TERM_PRIN_INIT": "6000000",
                                    "PMT_DUE_DATE": "20230804",
                                    "LOAN_INIT_AMT": "20000",
                                    "LOAN_INIT_TERM": "3",
                                    "SPENDING_TYPE": "CONSUME",
                                    "SCHEDULE_ACTION": "C",
                                    "MER_BIZ_NO": "545435",
                                    "TERM_SUM_INIT": "4000000"
                                },
                                {
                                    "SCHEDULE_ACTION": "L",
                                    "TERM_PRIN_INIT": "6000000",
                                    "REFUND_STATUS": "sint ea",
                                    "PMT_DUE_DATE": "20230804",
                                    "REF_NBR": "23324324435",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "TRANSACTION_ID": "32432432423",
                                    "BIZ_SEQ_NO": "4321432",
                                    "LOAN_INIT_TERM": "3",
                                    "ORDER_AMT": "5900000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "CURR_TERM": "2",
                                    "TERM_SUM_INIT": "4000000",
                                    "LOAN_INIT_AMT": "20000",
                                    "TXN_DATE": "20230804",
                                    "MER_BIZ_NO": "545435",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_TIMES": -15385946.116475984
                                },
                                {
                                    "MER_BIZ_NO": "545435",
                                    "TERM_PRIN_INIT": "6000000",
                                    "PMT_DUE_DATE": "20230804",
                                    "SCHEDULE_ACTION": "L",
                                    "CURR_TERM": "2",
                                    "LOAN_INIT_AMT": "20000",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "TXN_DATE": "20230804",
                                    "BIZ_SEQ_NO": "4321432",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "TRANSACTION_ID": "32432432423",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "ORDER_AMT": "5900000",
                                    "REFUND_TIMES": 37890459.85328081,
                                    "LOAN_INIT_TERM": "3",
                                    "TERM_SUM_INIT": "4000000",
                                    "REF_NBR": "23324324435",
                                    "REFUND_STATUS": "deserunt dolore"
                                },
                                {
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_STATUS": "fugiat eiusmod tempor minim veniam",
                                    "CURR_TERM": "2",
                                    "ORDER_AMT": "5900000",
                                    "TERM_SUM_INIT": "4000000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TRANSACTION_ID": "32432432423",
                                    "MER_BIZ_NO": "545435",
                                    "REFUND_TIMES": -88724983.55465774,
                                    "TXN_DATE": "20230804",
                                    "LOAN_INIT_AMT": "20000",
                                    "REF_NBR": "23324324435",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "PMT_DUE_DATE": "20230804",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "BIZ_SEQ_NO": "4321432",
                                    "LOAN_INIT_TERM": "1",
                                    "SCHEDULE_ACTION": "L"
                                },
                                {
                                    "TXN_DATE": "20230804",
                                    "MER_BIZ_NO": "545435",
                                    "TERM_PRIN_INIT": "6000000",
                                    "PMT_DUE_DATE": "20230804",
                                    "LOAN_INIT_TERM": "1",
                                    "REFUND_TIMES": 54220751.77917454,
                                    "TERM_SUM_INIT": "4000000",
                                    "CURR_TERM": "2",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "ORDER_AMT": "5900000",
                                    "BIZ_SEQ_NO": "4321432",
                                    "REF_NBR": "23324324435",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "REFUND_STATUS": "anim veniam cillum ut",
                                    "SCHEDULE_ACTION": "C",
                                    "LOAN_INIT_AMT": "20000",
                                    "TRANSACTION_ID": "32432432423",
                                    "SPENDING_TYPE": "CONSUME_INSTALL"
                                },
                                {
                                    "MER_BIZ_NO": "545435",
                                    "TXN_DATE": "20230804",
                                    "REF_NBR": "23324324435",
                                    "SCHEDULE_ACTION": "C",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TRANSACTION_ID": "32432432423",
                                    "PMT_DUE_DATE": "20230804",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "TERM_SUM_INIT": "4000000",
                                    "REFUND_TIMES": -69264569.99003388,
                                    "CURR_TERM": "2",
                                    "ORDER_AMT": "5900000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_STATUS": "nostrud Ut ullamco anim",
                                    "LOAN_INIT_TERM": "1",
                                    "LOAN_INIT_AMT": "20000"
                                },
                                {
                                    "PMT_DUE_DATE": "20230804",
                                    "TERM_SUM_INIT": "4000000",
                                    "CURR_TERM": "2",
                                    "BIZ_SEQ_NO": "4321432",
                                    "MER_BIZ_NO": "545435",
                                    "TRANSACTION_ID": "32432432423",
                                    "REF_NBR": "23324324435",
                                    "LOAN_INIT_AMT": "20000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "LOAN_INIT_TERM": "3",
                                    "REFUND_STATUS": "reprehenderit",
                                    "SPENDING_TYPE": "CONSUME",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "SCHEDULE_ACTION": "L",
                                    "REFUND_TIMES": 75940802.36043969,
                                    "ORDER_AMT": "5900000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TXN_DATE": "20230804"
                                },
                                {
                                    "TRANSACTION_ID": "32432432423",
                                    "REF_NBR": "23324324435",
                                    "REFUND_STATUS": "pariatur enim eiusmod minim",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "TERM_SUM_INIT": "4000000",
                                    "MER_BIZ_NO": "545435",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "LOAN_INIT_TERM": "3",
                                    "CURR_TERM": "2",
                                    "TERM_PRIN_INIT": "6000000",
                                    "PMT_DUE_DATE": "20230804",
                                    "ORDER_AMT": "5900000",
                                    "SCHEDULE_ACTION": "C",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_TIMES": -11350310.714953423,
                                    "LOAN_INIT_AMT": "20000",
                                    "TXN_DATE": "20230804",
                                    "BIZ_SEQ_NO": "4321432"
                                },
                                {
                                    "LOAN_INIT_TERM": "3",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "REF_NBR": "23324324435",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "ORDER_AMT": "5900000",
                                    "LOAN_INIT_AMT": "20000",
                                    "TXN_DATE": "20230804",
                                    "CURR_TERM": "2",
                                    "TERM_PRIN_INIT": "6000000",
                                    "REFUND_STATUS": "cupidatat do minim qui",
                                    "SCHEDULE_ACTION": "L",
                                    "TERM_SUM_INIT": "4000000",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_TIMES": -67388763.7783611,
                                    "PMT_DUE_DATE": "20230804",
                                    "TRANSACTION_ID": "32432432423",
                                    "MER_BIZ_NO": "545435"
                                },
                                {
                                    "REF_NBR": "23324324435",
                                    "TXN_DATE": "20230804",
                                    "LOAN_INIT_AMT": "20000",
                                    "TERM_SUM_INIT": "4000000",
                                    "PMT_DUE_DATE": "20230804",
                                    "TRANSACTION_ID": "32432432423",
                                    "REFUND_TIMES": -24136108.029924273,
                                    "ORDER_AMT": "5900000",
                                    "MER_BIZ_NO": "545435",
                                    "TERM_PRIN_INIT": "6000000",
                                    "CURR_TERM": "2",
                                    "BIZ_SEQ_NO": "4321432",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "SPENDING_TYPE": "CONSUME",
                                    "SCHEDULE_ACTION": "L",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_STATUS": "aute",
                                    "LOAN_INIT_TERM": "1"
                                },
                                {
                                    "SCHEDULE_ACTION": "C",
                                    "TRANSACTION_ID": "32432432423",
                                    "CURR_TERM": "2",
                                    "TXN_DATE": "20230804",
                                    "TERM_PRIN_INIT": "6000000",
                                    "REF_NBR": "23324324435",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "PMT_DUE_DATE": "20230804",
                                    "MER_BIZ_NO": "545435",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_TIMES": 24313561.1785191,
                                    "LOAN_INIT_AMT": "20000",
                                    "TERM_SUM_INIT": "4000000",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "ORDER_AMT": "5900000",
                                    "BIZ_SEQ_NO": "4321432",
                                    "REFUND_STATUS": "tempor nulla magna in",
                                    "LOAN_INIT_TERM": "3"
                                },
                                {
                                    "TERM_SUM_INIT": "4000000",
                                    "TXN_DATE": "20230804",
                                    "SCHEDULE_ACTION": "C",
                                    "CURR_TERM": "2",
                                    "MER_BIZ_NO": "545435",
                                    "ORDER_AMT": "5900000",
                                    "TRANSACTION_ID": "32432432423",
                                    "LOAN_INIT_TERM": "3",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_STATUS": "cillum reprehenderit",
                                    "SPENDING_TYPE": "CONSUME",
                                    "LOAN_INIT_AMT": "20000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "PMT_DUE_DATE": "20230804",
                                    "REF_NBR": "23324324435",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "REFUND_TIMES": -28153157.995368972
                                },
                                {
                                    "ORDER_AMT": "5900000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "TXN_DATE": "20230804",
                                    "LOAN_INIT_AMT": "20000",
                                    "PMT_DUE_DATE": "20230804",
                                    "SCHEDULE_ACTION": "C",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "TRANSACTION_ID": "32432432423",
                                    "REFUND_TIMES": 5926907.145859197,
                                    "TERM_SUM_INIT": "4000000",
                                    "LOAN_INIT_TERM": "3",
                                    "REF_NBR": "23324324435",
                                    "REFUND_STATUS": "qui dolore deserunt ullamco",
                                    "MER_BIZ_NO": "545435",
                                    "BIZ_SEQ_NO": "4321432",
                                    "CURR_TERM": "2",
                                    "SPENDING_TYPE": "CONSUME_INSTALL"
                                },
                                {
                                    "TERM_SUM_INIT": "4000000",
                                    "MER_BIZ_NO": "545435",
                                    "CURR_TERM": "2",
                                    "TXN_DATE": "20230804",
                                    "REF_NBR": "23324324435",
                                    "TRANSACTION_ID": "32432432423",
                                    "REFUND_STATUS": "velit dolore",
                                    "SCHEDULE_ACTION": "C",
                                    "PMT_DUE_DATE": "20230804",
                                    "ORDER_AMT": "5900000",
                                    "LOAN_INIT_TERM": "1",
                                    "LOAN_INIT_AMT": "20000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_TIMES": -59350498.07869861,
                                    "MERCHANDISE_NAME": "fdsa",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "BIZ_SEQ_NO": "4321432"
                                },
                                {
                                    "SPENDING_TYPE": "CONSUME",
                                    "BIZ_SEQ_NO": "4321432",
                                    "PMT_DUE_DATE": "20230804",
                                    "REF_NBR": "23324324435",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "LOAN_INIT_TERM": "3",
                                    "TRANSACTION_ID": "32432432423",
                                    "TERM_SUM_INIT": "4000000",
                                    "CURR_TERM": "2",
                                    "SCHEDULE_ACTION": "C",
                                    "REFUND_STATUS": "Excepteur adipisicing",
                                    "LOAN_INIT_AMT": "20000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "REFUND_TIMES": -82635725.34313619,
                                    "ORDER_AMT": "5900000",
                                    "MER_BIZ_NO": "545435",
                                    "TXN_DATE": "20230804",
                                    "MERCHANDISE_NAME": "fdsa"
                                },
                                {
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "TERM_PRIN_INIT": "6000000",
                                    "SCHEDULE_ACTION": "C",
                                    "CURR_TERM": "2",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TRANSACTION_ID": "32432432423",
                                    "TXN_DATE": "20230804",
                                    "TERM_SUM_INIT": "4000000",
                                    "MER_BIZ_NO": "545435",
                                    "REFUND_STATUS": "ut non do",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "LOAN_INIT_AMT": "20000",
                                    "PMT_DUE_DATE": "20230804",
                                    "LOAN_INIT_TERM": "3",
                                    "REF_NBR": "23324324435",
                                    "REFUND_TIMES": 72401436.92003396,
                                    "TRANSACTION_TIME": "20240717174036",
                                    "ORDER_AMT": "5900000"
                                },
                                {
                                    "MER_BIZ_NO": "545435",
                                    "CURR_TERM": "2",
                                    "TRANSACTION_ID": "32432432423",
                                    "LOAN_INIT_AMT": "20000",
                                    "ORDER_AMT": "5900000",
                                    "REFUND_TIMES": -97009398.50118004,
                                    "SPENDING_TYPE": "CONSUME",
                                    "LOAN_INIT_TERM": "1",
                                    "PMT_DUE_DATE": "20230804",
                                    "TERM_SUM_INIT": "4000000",
                                    "REF_NBR": "23324324435",
                                    "TERM_PRIN_INIT": "6000000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "TXN_DATE": "20230804",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_STATUS": "id officia",
                                    "SCHEDULE_ACTION": "C"
                                },
                                {
                                    "TRANSACTION_ID": "32432432423",
                                    "TERM_PRIN_INIT": "6000000",
                                    "SCHEDULE_ACTION": "C",
                                    "LOAN_INIT_AMT": "20000",
                                    "ORDER_AMT": "5900000",
                                    "MER_BIZ_NO": "545435",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "BIZ_SEQ_NO": "4321432",
                                    "LOAN_INIT_TERM": "1",
                                    "TXN_DATE": "20230804",
                                    "SPENDING_TYPE": "CONSUME",
                                    "PMT_DUE_DATE": "20230804",
                                    "REF_NBR": "23324324435",
                                    "REFUND_STATUS": "nulla mollit",
                                    "REFUND_TIMES": 14437595.576998726,
                                    "TRANSACTION_TIME": "20240717174036",
                                    "CURR_TERM": "2",
                                    "TERM_SUM_INIT": "4000000"
                                },
                                {
                                    "MER_BIZ_NO": "545435",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TERM_PRIN_INIT": "6000000",
                                    "SCHEDULE_ACTION": "C",
                                    "TXN_DATE": "20230804",
                                    "LOAN_INIT_AMT": "20000",
                                    "TRANSACTION_ID": "32432432423",
                                    "REF_NBR": "23324324435",
                                    "LOAN_INIT_TERM": "3",
                                    "PMT_DUE_DATE": "20230804",
                                    "CURR_TERM": "2",
                                    "ORDER_AMT": "5900000",
                                    "REFUND_STATUS": "sed",
                                    "TERM_SUM_INIT": "4000000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "REFUND_TIMES": -3564872.880534336
                                },
                                {
                                    "TERM_PRIN_INIT": "6000000",
                                    "PMT_DUE_DATE": "20230804",
                                    "TRANSACTION_ID": "32432432423",
                                    "LOAN_INIT_TERM": "1",
                                    "SCHEDULE_ACTION": "L",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "BIZ_SEQ_NO": "4321432",
                                    "REF_NBR": "23324324435",
                                    "MER_BIZ_NO": "545435",
                                    "LOAN_INIT_AMT": "20000",
                                    "CURR_TERM": "2",
                                    "ORDER_AMT": "5900000",
                                    "TXN_DATE": "20230804",
                                    "REFUND_STATUS": "non ut esse dolore mollit",
                                    "REFUND_TIMES": -45105265.21410658,
                                    "TERM_SUM_INIT": "4000000",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "TRANSACTION_TIME": "20240717174036"
                                },
                                {
                                    "CURR_TERM": "2",
                                    "LOAN_INIT_TERM": "1",
                                    "TERM_PRIN_INIT": "6000000",
                                    "TXN_DATE": "20230804",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "MER_BIZ_NO": "545435",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "REFUND_TIMES": 60788653.02574417,
                                    "TERM_SUM_INIT": "4000000",
                                    "SCHEDULE_ACTION": "L",
                                    "REFUND_STATUS": "proident ad",
                                    "BIZ_SEQ_NO": "4321432",
                                    "PMT_DUE_DATE": "20230804",
                                    "ORDER_AMT": "5900000",
                                    "LOAN_INIT_AMT": "20000",
                                    "REF_NBR": "23324324435",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "TRANSACTION_ID": "32432432423"
                                },
                                {
                                    "MERCHANDISE_NAME": "fdsa",
                                    "SCHEDULE_ACTION": "L",
                                    "LOAN_INIT_TERM": "3",
                                    "REFUND_TIMES": 67559819.80325249,
                                    "CURR_TERM": "2",
                                    "TXN_DATE": "20230804",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TERM_PRIN_INIT": "6000000",
                                    "REFUND_STATUS": "proident id in",
                                    "ORDER_AMT": "5900000",
                                    "LOAN_INIT_AMT": "20000",
                                    "SPENDING_TYPE": "CONSUME",
                                    "TERM_SUM_INIT": "4000000",
                                    "TRANSACTION_ID": "32432432423",
                                    "REF_NBR": "23324324435",
                                    "PMT_DUE_DATE": "20230804",
                                    "MER_BIZ_NO": "545435"
                                },
                                {
                                    "PMT_DUE_DATE": "20230804",
                                    "TERM_PRIN_INIT": "6000000",
                                    "LOAN_INIT_AMT": "20000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "REFUND_TIMES": 10288451.356916502,
                                    "CURR_TERM": "2",
                                    "TERM_SUM_INIT": "4000000",
                                    "TRANSACTION_ID": "32432432423",
                                    "TXN_DATE": "20230804",
                                    "REFUND_STATUS": "labore fugiat aliqua ut deserunt",
                                    "MER_BIZ_NO": "545435",
                                    "LOAN_INIT_TERM": "1",
                                    "SCHEDULE_ACTION": "C",
                                    "SPENDING_TYPE": "CONSUME",
                                    "REF_NBR": "23324324435",
                                    "ORDER_AMT": "5900000",
                                    "BIZ_SEQ_NO": "4321432",
                                    "TRANSACTION_TIME": "20240717174036"
                                },
                                {
                                    "REF_NBR": "23324324435",
                                    "TRANSACTION_ID": "32432432423",
                                    "TERM_SUM_INIT": "4000000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "SPENDING_TYPE": "CONSUME",
                                    "LOAN_INIT_TERM": "3",
                                    "ORDER_AMT": "5900000",
                                    "LOAN_INIT_AMT": "20000",
                                    "BIZ_SEQ_NO": "4321432",
                                    "SCHEDULE_ACTION": "L",
                                    "CURR_TERM": "2",
                                    "REFUND_STATUS": "in sed nulla ad dolor",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "MER_BIZ_NO": "545435",
                                    "TXN_DATE": "20230804",
                                    "REFUND_TIMES": 97634189.0776315,
                                    "PMT_DUE_DATE": "20230804"
                                },
                                {
                                    "LOAN_INIT_AMT": "20000",
                                    "REFUND_TIMES": 31656198.718905285,
                                    "MERCHANDISE_NAME": "fdsa",
                                    "LOAN_INIT_TERM": "3",
                                    "SCHEDULE_ACTION": "L",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "ORDER_AMT": "5900000",
                                    "REFUND_STATUS": "esse",
                                    "PMT_DUE_DATE": "20230804",
                                    "MER_BIZ_NO": "545435",
                                    "TERM_PRIN_INIT": "6000000",
                                    "CURR_TERM": "2",
                                    "TRANSACTION_ID": "32432432423",
                                    "SPENDING_TYPE": "CONSUME",
                                    "TXN_DATE": "20230804",
                                    "BIZ_SEQ_NO": "4321432",
                                    "REF_NBR": "23324324435",
                                    "TERM_SUM_INIT": "4000000"
                                },
                                {
                                    "ORDER_AMT": "5900000",
                                    "CURR_TERM": "2",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "TERM_SUM_INIT": "4000000",
                                    "TRANSACTION_ID": "32432432423",
                                    "LOAN_INIT_TERM": "1",
                                    "TERM_PRIN_INIT": "6000000",
                                    "LOAN_INIT_AMT": "20000",
                                    "REFUND_STATUS": "esse pariatur veniam magna",
                                    "TXN_DATE": "20230804",
                                    "REFUND_TIMES": -26502761.015717894,
                                    "MER_BIZ_NO": "545435",
                                    "PMT_DUE_DATE": "20230804",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "REF_NBR": "23324324435",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "BIZ_SEQ_NO": "4321432",
                                    "SCHEDULE_ACTION": "L"
                                },
                                {
                                    "SCHEDULE_ACTION": "C",
                                    "LOAN_INIT_TERM": "3",
                                    "REF_NBR": "23324324435",
                                    "SPENDING_TYPE": "CONSUME_INSTALL",
                                    "PMT_DUE_DATE": "20230804",
                                    "ORDER_AMT": "5900000",
                                    "TERM_PRIN_INIT": "6000000",
                                    "REFUND_STATUS": "voluptate",
                                    "MERCHANDISE_NAME": "fdsa",
                                    "REFUND_TIMES": -82316975.9746118,
                                    "LOAN_INIT_AMT": "20000",
                                    "CURR_TERM": "2",
                                    "TRANSACTION_TIME": "20240717174036",
                                    "TRANSACTION_ID": "32432432423",
                                    "TXN_DATE": "20230804",
                                    "TERM_SUM_INIT": "4000000",
                                    "BIZ_SEQ_NO": "4321432",
                                    "MER_BIZ_NO": "545435"
                                }
                            ],
                            "NEXTPAGE_FLG2": "aute ut",
                            "LAST_ROW_KEY": "ex qui dolor"
                        },
                        "BUSINESS_DATE": "20210222",
                        "CASH_AMT": "12321",
                        "CUR_STMT_BAL_AMT": "3",
                        "REFUND_AMT": 3221123132,
                        "PENALTY_PAID": "321",
                        "SPENDING_AMT": 432,
                        "PMT_DUE_DATE": "20210201",
                        "APP_ACCT_NO": "453251234",
                        "PENALTY_BAL": "2",
                        "CUR_STMT_AMT": "321",
                        "OVERDUE_TIMES": "2",
                        "STMT_DATE": "20210228",
                        "STMT_AMT": 432423,
                        "END_DATE": "20210301",
                        "STMT_BAL_AMT": 4324434,
                        "START_DATE": "20210201",
                        "STMT_STATUS": "N",
                        "APP_TYPE": "ea",
                        "PAID_OUT_DATE": "20210201",
                        "PRODUCT_CD": "43223"
                    },
                    "ret_msg": "et sunt dolore laboris cillum"
                },
                statusCode: 200,
            }
        ).as("bill");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/query\/repay_info/,
            {
                body: {
                    "ret_msg": "laborum sunt culpa",
                    "ret_code": "0000",
                    "ret_data": {
                        "CODE": "eiusmod",
                        "DESC": "mollit cillum",
                        "APP_TYPE": "Ut sunt fugiat",
                        "PRODUCT_CD": "fugiat est in eiusmod",
                        "BUSINESS_DATE": "sit esse",
                        "APP_ACCT_NO": "voluptate non",
                        "STMT_BAL_AMT": 42753358.80958307,
                        "TXN_ID": "commodo fugiat Duis eu",
                        "OVERDUE_TIMES": -17318487,
                        "LOAN_LIST": [
                            {
                                "BAL_AMT": 75400405.45469591,
                                "PRIN_BAL": 62960281.97223386,
                                "INTEREST_BAL": 85680747.2327612,
                                "PENALTY_BAL": 7939862.603526443,
                                "REF_NBR": "consequat Duis",
                                "FEE_BAL": -72908731.59139593,
                                "MONTH_FEE_BAL": -92394202.38363811
                            },
                            {
                                "BAL_AMT": 45210301.94247544,
                                "PRIN_BAL": -92461336.94760194,
                                "INTEREST_BAL": -73644378.98525384,
                                "PENALTY_BAL": -93752266.73289822,
                                "REF_NBR": "nisi aute Lorem",
                                "FEE_BAL": -85966523.2694347,
                                "MONTH_FEE_BAL": 28239252.11064729
                            }
                        ],
                        "IS_AUTO_PAY_ONLINE": "laborum dolor irure",
                        "IS_ACTIVE_PAY_ONLINE": "laboris labore cupidatat",
                        "OVERDUE_STMT_LIST": [
                            {
                                "STMT_MONTH": "do eu reprehenderit ex",
                                "STMT_BAL_AMT": -62196361.63722235,
                                "OVERDUE_DAYS": -84877929
                            },
                            {
                                "OVERDUE_DAYS": -91955045,
                                "STMT_MONTH": "voluptate",
                                "STMT_BAL_AMT": 21848659.57953988
                            }
                        ]
                    }
                },
                statusCode: 200,
            }
        ).as("repayInfo");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/query\/mpc_balance/,
            {
                body: {
                    "ret_code": "0000",
                    "ret_msg": "culpa tempor ad voluptate veniam",
                    "ret_data": {
                        "mpcLevel": "fugiat labore",
                        "balanceAmt": "99999999999",
                        "coreAcctList": [
                            {
                                "balanceAmt": 11965382.497418538,
                                "acctStatus": "dolor ipsum",
                                "acctType": "cupidatat amet consequat",
                                "acctBizType": "do Duis",
                                "avaliableBalanceAmt": 52748580.39793404,
                                "blockedBalanceAmt": 16657053.14677152,
                                "acctNo": "nisi anim"
                            },
                            {
                                "balanceAmt": 13576779.379236475,
                                "acctStatus": "voluptate occaecat proident tempor",
                                "acctType": "cillum nisi nostrud sint eu",
                                "acctBizType": "dolor Excepteur aliqua veniam dolor",
                                "avaliableBalanceAmt": 76714865.63312638,
                                "blockedBalanceAmt": 78270314.4542264,
                                "acctNo": "aliquip sit Ut Excepteur"
                            },
                            {
                                "balanceAmt": 36730733.52160858,
                                "acctStatus": "sit minim",
                                "acctType": "elit laboris",
                                "acctBizType": "eiusmod aliqua enim sit",
                                "avaliableBalanceAmt": 50795554.35000244,
                                "blockedBalanceAmt": 44001327.14245286,
                                "acctNo": "nisi commodo Ut sint"
                            },
                            {
                                "balanceAmt": -7829257.501915604,
                                "acctStatus": "eu Excepteur",
                                "acctType": "officia culpa pariatur amet",
                                "acctBizType": "non mollit laboris",
                                "avaliableBalanceAmt": 13534877.625892833,
                                "blockedBalanceAmt": 86296846.40640555,
                                "acctNo": "nisi velit"
                            }
                        ]
                    },
                    "biz_no": "qui enim ut deserunt exercitation"
                },
                statusCode: 200,
            }
        ).as("mpcBalance");
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
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/apply\/repay/,
            {
                body: {
                    "ret_code": "0000",
                    "ret_msg": "ipsum occaecat esse",
                    "ret_data": {
                        "DESC": "incididunt",
                        "BIZ_SEQ_NO": "202408091212",
                        "MER_BIZ_NO": "202408091212",
                        "VA_ACCT_NO": "202408091212",
                        "RECON_DATE": "202409081234",
                        "CODE": "202408091212",
                        "TOT_AMOUNT": "202408091212",
                        "TXN_ID": "202408091212"
                    }
                },
                statusCode: 200,
            }
        ).as("repay");

        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/query\/repay_result/,
            {
                body: {
                    "ret_code": "0000",
                    "ret_msg": "Lorem occaecat nisi exercitation",
                    "ret_data": {
                        "CODE": "ut velit",
                        "DESC": "officia",
                        "REPAY_STATUS": "S",
                        "REPAY_DESC": "in",
                        "MERCHANT_ID": "ex adipisicing do incididunt velit",
                        "MER_BIZ_NO": "nisi in qui",
                        "TXN_CODE": "we22323243432432432342",
                        "TOT_AMOUNT": "4444",
                        "LOAN_LIST": [
                            {
                                "LOAN_PRIN": "nisi in",
                                "LOAN_INTEREST": "in dolore ad eu",
                                "LOAN_PENALTY": "aliqua ipsum",
                                "LOAN_AMT": "deserunt culpa",
                                "REF_NBR": "ut sint ea"
                            },
                            {
                                "LOAN_PRIN": "quis",
                                "LOAN_INTEREST": "pariatur dolor reprehenderit nostrud culpa",
                                "LOAN_PENALTY": "irure elit et",
                                "LOAN_AMT": "sit occaecat deserunt culpa",
                                "REF_NBR": "cillum elit ex"
                            }
                        ],
                        "REPAY_TIME": "202409261212"
                    }
                },
                statusCode: 200,
            }
        ).as("repayResult");
        cy.intercept(
            "POST",
            /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/core\/trans\/query\/transaction_detail/,
            {
                body: {
                    "ret_data": {
                        "UPFRONT_ADMIN_FEE": "exercitation",
                        "COUNTER_ACCT": "fugiat amet",
                        "COUNTER_BRNAME": "elit anim dolore deserunt",
                        "CURR_TOTAL_TERM": "ea aute nostrud culpa",
                        "ORIG_TOTAL_TERM": "3",
                        "LOAN_REAL_AMT": "proident Ut dolore elit",
                        "SCHEDULE_LIST": [
                            {
                                "TERM": "10",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "Y"
                            },
                            {
                                "TERM": "1",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "N"
                            },
                            {
                                "TERM": "12",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "N"
                            },
                            {
                                "TERM": "7",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "N"
                            },
                            {
                                "TERM": "5",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "Y"
                            },
                            {
                                "TERM": "10",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "N"
                            },
                            {
                                "TERM": "3",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "Y"
                            },
                            {
                                "TERM": "2",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "Y"
                            },
                            {
                                "TERM": "9",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "Y"
                            },
                            {
                                "TERM": "9",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "Y"
                            },
                            {
                                "TERM": "7",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "N"
                            },
                            {
                                "TERM": "1",
                                "LOAN_TERM_AMT": "5000",
                                "PAID_OUT_DATE": "20220924",
                                "SCHEDULE_ACTION": "L",
                                "PMT_DUE_DATE": "20221012",
                                "IS_PAID": "Y"
                            }
                        ],
                        "REPAY_BANK_CODE": "Duis dolor est",
                        "REGISTER_DATE": "veniam elit incididunt magna",
                        "ORIG_TRANSACTION_TYPE": "id dolore Ut",
                        "BUSINESS_DATE": "elit in deserunt",
                        "REFUND_LIST": [],
                        "ORIG_LOAN_TOTAL_FEE": 100000,
                        "MONTH_INST_HANDLE_FEE_RATE": 0.03,
                        "ORIG_LOAN_TOTAL_INST_HANDLE_FEE": 450000,
                        "FEE_RATE": 0.02,
                        "LOAN_TOTAL_INST_HANDLE_FEE": -76556200.69432461,
                        "TRANSACTION_TIME": "202409261222",
                        "TRANSACTION_NO": "20240927123323232",
                        "REFUND_TIME": "20240717174036",
                        "TRANSACTION_AMT": 5000000,
                        "ORDER_NO": "fugiat",
                        "REPAY_OPTION": "irure veniam reprehenderit cillum",
                        "TRANSACTION_STATUS": "S",
                        "REPAY_BANK_NAME": "ut irure laboris",
                        "REFUND_STATUS": "dolor mollit",
                        "APP_TYPE": "sunt non velit cillum",
                        "APP_ACCT_NO": "676754532343454",
                        "MERCHANT_NAME": "eu minim",
                        "REFUND_AMT": -20137586.892074972,
                        "MERCHANDISE_NAME": "voluptate",
                        "PRODUCT_CD": "4343243342"
                    },
                    "ret_code": "00000",
                    "ret_msg": "dolor in non"
                },
                statusCode: 200,
            }
        ).as("transactionDetail");
        cy.visit("http://localhost:3000/#/pay-later/home");
        cy.wait("@preCheck")
        cy.wait("@personalCenter")
        cy.wait("@emailVerify")
        cy.wait("@coupon")
        cy.wait("@ddtpWhitelist")

        cy.get('.shepherd-footer button').eq('0').click()
        cy.get('.shepherd-footer button').eq('1').click()
        cy.removeLoadingAndScreenshot("home", { capture: 'viewport' });
        cy.get(':nth-child(3) > .we-cell-body').click()
        cy.url().should("include", "/pay-later/bill/over-dues");
        cy.wait('@bill')
        cy.removeLoadingAndScreenshot("Bill list", { capture: 'viewport' });
        cy.get('.page-content > :nth-child(3)').click()
        cy.wait('@bill')
        cy.get('a').click()
        cy.get('.left > .we-icon').click()
        cy.get('.we-button-body').click()
        cy.removeLoadingAndScreenshot("Bill Detail", { capture: 'viewport' });
        cy.get('.we-nav-bar-back-button').click()
        cy.wait('@bill')
        cy.get('.we-button-body').click()
        cy.wait('@repayInfo')
        cy.wait('@mpcBalance')
        cy.get('.we-button-body').contains('Repay').click()

        cy.get(".key").contains("2").click();
        cy.get(".key").contains("5").click();
        cy.get(".key").contains("2").click();
        cy.removeLoadingAndScreenshot("pin repay");
        cy.get(".key").contains("2").click();
        cy.get(".key").contains("2").click();
        cy.get(".key").contains("2").click();
        cy.wait("@randomFactor")
        cy.wait("@validate")
        cy.wait("@repay")
        cy.wait("@repayResult")
        cy.removeLoadingAndScreenshot("repay_result");
        cy.get('.btn-secondary > .we-button-body').click()
        cy.wait('@transactionDetail')
        cy.removeLoadingAndScreenshot("transactionDetail");
    });
});