report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/test_entire-document_0_document_0_desktop.png",
        "test": "../bitmaps_test/20190724-005754/test_entire-document_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "test_entire-document_0_document_0_desktop.png",
        "label": "entire-document",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_single_block_0_qa-block_0_desktop.png",
        "test": "../bitmaps_test/20190724-005754/test_single_block_0_qa-block_0_desktop.png",
        "selector": "#qa-block",
        "fileName": "test_single_block_0_qa-block_0_desktop.png",
        "label": "single block",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "test"
});