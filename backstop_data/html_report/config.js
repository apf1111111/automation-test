report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_test\\yd_qq_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20180720-103342\\yd_qq_0_document_0_phone.png",
        "selector": "document",
        "fileName": "yd_qq_0_document_0_phone.png",
        "label": "qq",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.29",
          "analysisTime": 34
        },
        "diffImage": "..\\bitmaps_test\\20180720-103342\\failed_diff_yd_qq_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_test\\yd_qq_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20180720-103342\\yd_qq_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "yd_qq_0_document_1_tablet.png",
        "label": "qq",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found C:\\Users\\FF\\Desktop\\test_demo\\backstop_data\\bitmaps_test\\yd_qq_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "yd"
});