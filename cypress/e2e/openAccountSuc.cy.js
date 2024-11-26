describe("template spec", { defaultCommandTimeout: 300000 }, () => {
  before(() => {
    // 注册 uncaught:exception 事件处理器
    Cypress.on("uncaught:exception", (err, runnable) => {
      // 这里可以记录错误信息
      console.error("Uncaught Exception:", err);

      // 返回 false 以防止测试失败
      return false;
    });
  });

  it("开户开户 ------", { timeout: 300000 }, () => {
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/common\/get\/page/,
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
    ).as("getPage");
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
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/common\/get\/banner/,
      {
        body: {
          "ret_code": "0000",
          "ret_message": "do elit sed",
          "ret_data": {
            "bannerInfos": [
              {
                "imageLink": "",
                "type": "0",
                "imageSrc": "http://webank-ui.oa.com/example/img/sample_3.7da801f.jpg",
                "id": "1",
                "sort": "0"
              },
              {
                "imageLink": "",
                "type": "0",
                "imageSrc": "http://webank-ui.weoa.com/example/img/sample_2.c0f43b2.jpg",
                "id": "2",
                "sort": "1"
              }
            ]
          }
        },
        statusCode: 200,
      }
    ).as("getBanner");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/query\/cdn_tpl_url/,
      {
        body: {
          "ret_code": "0000",
          "ret_msg": "ex cillum ut enim",
          "ret_data": {
            "TENANT_ID": "in",
            "DOC_TPL_RESP_LIST": [
              {
                "DOC_TPL_CODE": "voluptate officia nisi fugiat ipsum",
                "QUERY_TYPE": "incididunt aute ipsum anim cupidatat",
                "DOC_TPL_VERSION": "ipsum irure adipisicing",
                "CDN_INFO": {
                  "CDN_TPL_MD5": "incididunt mollit dolore",
                  "DOC_TPL_CODE": "sed sint deserunt sit elit",
                  "CDN_TPL_DESC": "consequat do dolore",
                  "CDN_TPL_VERSION": "elit nulla Lorem",
                  "CDN_TPL_NAME": "occaecat minim sed esse",
                  "DOC_TPL_VERSION": "Excepteur nulla nisi enim",
                  "CDN_TPL_URL": "https://arlenzheng-1259099819.cos.ap-guangzhou.myqcloud.com/payLaterApplyTnc-V1.0.html"
                },
                "SEQ_NO": "aliquip enim et Lorem"
              }
            ]
          }
        },
        statusCode: 200,
      }
    ).as("cdn");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/report\/events/,
      {
        body: {
          "ret_code": "0000",
          "ret_message": "non",
          "ret_data": {
            "commonPages": [
              {
                "id": "quis",
                "type": "retention",
                "imageSrc": "https://arlenzheng-1259099819.cos.ap-guangzhou.myqcloud.com/retention-EN.svg",
                "language": "EN"
              }
            ],
            "creditLimitSwitch": [
              "INCREASE_ENTRANCE_SWITCH",
              "FLEXIBLE_LIMIT_SWITCH",
              "REPAYMENT_INCREASE_SWITCH"
            ],
            "referralCodeSwitch": "Y"
          }
        },
        statusCode: 200,
      }
    ).as("events");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/save\/protocol/,
      {
        body: {
          "ret_code": "0000",
          "ret_msg": "ex cillum ut enim",
          "ret_data": {
            "TENANT_ID": "in",
            "DOC_TPL_RESP_LIST": [
              {
                "DOC_TPL_CODE": "voluptate officia nisi fugiat ipsum",
                "QUERY_TYPE": "incididunt aute ipsum anim cupidatat",
                "DOC_TPL_VERSION": "ipsum irure adipisicing",
                "CDN_INFO": {
                  "CDN_TPL_MD5": "incididunt mollit dolore",
                  "DOC_TPL_CODE": "sed sint deserunt sit elit",
                  "CDN_TPL_DESC": "consequat do dolore",
                  "CDN_TPL_VERSION": "elit nulla Lorem",
                  "CDN_TPL_NAME": "occaecat minim sed esse",
                  "DOC_TPL_VERSION": "Excepteur nulla nisi enim",
                  "CDN_TPL_URL": "https://arlenzheng-1259099819.cos.ap-guangzhou.myqcloud.com/payLaterApplyTnc-V1.0.html"
                },
                "SEQ_NO": "aliquip enim et Lorem"
              }
            ]
          }
        },
        statusCode: 200,
      }
    ).as("protocol");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/check_whitelist/,
      {
        body: {
          "ret_code": "0000",
          "ret_msg": "anim tempor",
          "biz_no": "mollit cillum dolor sunt qui",
          "ret_data": {
            "whitelistFlag": "Y"
          }
        },
        statusCode: 200,
      }
    ).as("checkWhitelist");
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
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/check\/flow/,
      {
        body: {
          "ret_code": "80430000",
          "ret_msg": "Successful",
          "ret_data": {
            "nextAction": "FACE_SCANNING",
            "flowContext": {
              "ocrOrg": "ex laborum",
              "isRealNameFaceScanning": "ut cupidatat fugiat do enim"
            },
            "flowId": "21012203A08147100000000000004046",
            "status": "0002"
          }
        },
        statusCode: 200,
      }
    ).as("flow");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/get\/faceid/,
      {
        body: {
          "ret_code": "0000",
          "ret_msg": "aute ad",
          "ret_data": {
            "faceId": "et sint aute ipsum",
            "ticket": "labore ad nisi cillum",
            "faceOrg": "nulla officia cillum fugiat"
          }
        },
        statusCode: 200,
      }
    ).as("faceid");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/submit\/flow/,
      {
        body: {
          "ret_code": "80430000",
          "ret_msg": "Successful",
          "ret_data": {
            "nextAction": "FACE_SCANNING",
            "status": "0003",
            "flowContext": {
              "isRealNameFaceScanning": "enim"
            },
            "idNo": "eiusmod pariatur irure non nisi"
          },
          "biz_no": "5788265301788356"
        },
        statusCode: 200,
      }
    ).as("submitFlow");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/query\/flow/,
      {
        body: {
          "ret_code": "0000",
          "ret_msg": "errrr",
          "ret_data": {
            "bizServiceId": "incididunt",
            "nextAction": "FACE_SCANNING",
            "flowContext": {
              "ocrSeqNo": "anim Duis in enim",
              "otpSeqNo": "cupidatat id sed",
              "vbSeqNo": "incididunt amet",
              "faceSeqNo": "consequat quis",
              "pinSeqNo": "veniam in deserunt laboris nisi",
              "canOpenPrimeAcct": "amet anim exercitation qui eu",
              "ocrOrg": "nostrud eu officia ipsum aute",
              "isRealNameFaceScanning": "dolore id ex magna"
            },
            "status": "0000"
          }
        },
        statusCode: 200,
      }
    ).as("queryFlow");
    // 拦截 GET 请求到 /ams/account/query/flow
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/query\/flow/,
      {
        body: {
          ret_code: "0000",
          ret_msg: "errrr",
          ret_data: {
            bizServiceId: "incididunt",
            nextAction: "FACE_SCANNING",
            flowContext: {
              ocrSeqNo: "anim Duis in enim",
              otpSeqNo: "cupidatat id sed",
              vbSeqNo: "incididunt amet",
              faceSeqNo: "consequat quis",
              pinSeqNo: "veniam in deserunt laboris nisi",
              canOpenPrimeAcct: "Y",
              ocrOrg: "nostrud eu officia ipsum aute",
              isRealNameFaceScanning: "dolore id ex magna",
            },
            status: "0000",
          },
        },
        statusCode: 200,
      }
    ).as("getAccount");
    // 拦截 GET 请求到 /ams/account/query/flow
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/save\/ext_info/,
      {
        body: { "ret_code": "0000", "ret_msg": "aliqua" },
        statusCode: 200,
      }
    ).as("extInfo");
    cy.intercept(
      "GET",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/vb\/pre_check/,
      {
        body: {
          "ret_code": "0000",
          "ret_msg": "sunt esse",
          "ret_data": {
            "count": 2,
            "sit1__": "ex cupidatat"
          }
        },
        statusCode: 200,
      }
    ).as("vbCheck");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/submit\/antifraud/,
      {
        body: {
          "ret_code": "0000",
          "ret_msg": "quis fugiat qui sed sit",
          "ret_data": {
            "actionType": "1",
            "controlPeriod": "aute eiusmod"
          }
        },
        statusCode: 200,
      }
    ).as("antifraud");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/apply\/credit/,
      {
        body: {
          "ret_code": "85840000",
          "ret_msg": "fadsfads",
          "ret_data": {
            "OPEN_ACCT_CASE_NO": "34432143543541",
            "APP_NO": "34324354242"
          }
        },
        statusCode: 200,
      }
    ).as("credit");
    cy.intercept(
      "POST",
      /^http:\/\/apidesign\.weoa\.com\/apidesign-core\/mock\/5049\/ams\/account\/query\/apply_result/,
      {
        body: {
          "ret_code": "85840000",
          "ret_msg": "fdfd",
          "ret_data": {
            "STATUS": "1016",
            "RISK_CODE": "deserunt enim ut in magna",
            "CREDIT_LIMIT": 323
          }
        },
        statusCode: 200,
      }
    ).as("result");
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
    cy.visit("http://localhost:3000/#/pay-later/apply");
    // 拦截 GET 请求到 /ams/account/query/flow

    cy.wait(1000);
    cy.wait("@preCheck")
    cy.wait("@getPage")
    cy.wait("@getBanner")
    // cy.wait("@accountStatus")
    cy.wait("@events")
    cy.removeLoadingAndScreenshot("home", { capture: 'fullPage' });
    // 点击协议
    cy.get(".tnc-contain").click();
    // 验证点击后的效果（例如，检查某个元素是否可见）
    cy.wait("@cdn")
    cy.get(".float-btn").should("be.visible").click(); // 替换为您要验证的元素选择器
    // 获取所有具有类名 "tnc" 的元素
    cy.get(".we-checkbox-body").each(($el) => {
      // 点击每个元素
      cy.wrap($el).click();
    });
    cy.removeLoadingAndScreenshot("protoco");
    cy.get(".we-button-body").click();
    cy.wait("@protocol")
    cy.wait("@checkWhitelist")
    cy.wait(1000);
    cy.removeLoadingAndScreenshot("pin", { capture: 'fullPage' });
    // 输入pin
    cy.get(".key").contains("2").click();
    cy.get(".key").contains("5").click();
    cy.get(".key").contains("2").click();
    cy.removeLoadingAndScreenshot("pin2");
    cy.get(".key").contains("2").click();
    cy.get(".key").contains("2").click();
    cy.get(".key").contains("2").click();
    cy.get(".we-button-body").click();
    cy.wait("@randomFactor")
    cy.wait("@validate")
    cy.wait("@flow")
    cy.wait("@faceid")
    cy.wait("@submitFlow")
    // cy.wait("@queryFlow")
    cy.get('[data-testid="address"] .we-input-input').clear().type("first");
    cy.get('[data-testid="rt"] #char-0 span').invoke("text", "9");
    cy.get('[data-testid="Industry"]').click();
    cy.get(".we-form-item").eq(1).click();
    cy.get('[data-testid="occupation"]').click();
    cy.get(".we-form-item").eq(1).click();
    cy.get('[data-testid="position"]').click();
    cy.get(".we-form-item").eq(1).click();
    cy.get('[data-testid="monthlyIncome"]').click();
    cy.get(".we-form-item").eq(1).click();
    cy.get('[data-testid="source"]').click();
    cy.get(".we-form-item").eq(1).click();
    cy.get('[data-testid="purpose"]').click();
    cy.get(".we-form-item").eq(1).click();
    cy.get('[data-testid="maritalStatus"]').click();
    cy.get(".we-form-item").eq(1).click();
    cy.get(".we-button-body").click();
    cy.wait("@getAccount");
    cy.wait("@extInfo")
    cy.wait("@vbCheck")
    cy.wait("@antifraud")
    cy.wait("@credit")
    cy.wait("@result")
    cy.removeLoadingAndScreenshot("form", { capture: 'fullPage' });
    cy.wait("@personalCenter")
    cy.wait("@emailVerify")
    cy.wait("@coupon")
    cy.wait("@ddtpWhitelist")
    // 等待页面跳转到 /page
    //  cy.url().should("include", "/h");
    // cy.wait(5000);
    // 确保所有请求都已完成
    cy.removeLoadingAndScreenshot("final", { capture: 'fullPage' });
  });
});