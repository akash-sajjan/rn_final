module.exports = {
  'Add button click should add contact to FlatList and should clear the inputs':
    function (browser) {
      browser
        .url(browser.launch_url)
        .clearValue('#txt-name')
        .clearValue('#txt-phone')
        .setValue('#txt-name', 'fresco')
        .setValue('#txt-phone', '8795689751')
        .click("div[data-testid='btn-add']")
        .verify.value('#txt-name', '')
        .verify.value('#txt-phone', '')
        .elements('css selector', '.txt-name', function (result) {
          browser.verify.equal(result.value.length, 1);
          browser.elementIdText(result.value[0].ELEMENT, ele => {
            if (ele.value.toLowerCase().includes('fresco')) {
              browser.verify.equal(true, true);
            } else {
              browser.verify.equal(true, false);
            }
          });
        })
        .elements('css selector', '.txt-phone', function (result) {
          browser.verify.equal(result.value.length, 1);
          browser.elementIdText(result.value[0].ELEMENT, ele => {
            if (ele.value.toLowerCase().includes('8795689751')) {
              browser.verify.equal(true, true);
            } else {
              browser.verify.equal(true, false);
            }
            browser.end();
          });
        });
    },
  'Add button click should add contact to FlatList': function (browser) {
    browser
      .url(browser.launch_url)
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco')
      .setValue('#txt-phone', '8795689751')
      .click("div[data-testid='btn-add']")
      .elements('css selector', '.txt-name', function (result) {
        browser.verify.equal(result.value.length, 1);
        browser.elementIdText(result.value[0].ELEMENT, ele => {
          if (ele.value.toLowerCase().includes('fresco')) {
            browser.verify.equal(true, true);
          } else {
            browser.verify.equal(true, false);
          }
        });
      })
      .elements('css selector', '.txt-phone', function (result) {
        browser.verify.equal(result.value.length, 1);
        browser.elementIdText(result.value[0].ELEMENT, ele => {
          if (ele.value.toLowerCase().includes('8795689751')) {
            browser.verify.equal(true, true);
          } else {
            browser.verify.equal(true, false);
          }
          browser.end();
        });
      });
  },
  'Add button click should not add contact to FlatList if phone is invalid':
    function (browser) {
      browser
        .url(browser.launch_url)
        .clearValue('#txt-name')
        .clearValue('#txt-phone')
        .setValue('#txt-name', 'fresco')
        .setValue('#txt-phone', '8795689')
        .click("div[data-testid='btn-add']")
        .verify.elementNotPresent('#txt-phone')
        .verify.elementNotPresent('#txt-name')
        .end();
    },
  'Add button click should not add contact to FlatList if name is invalid':
    function (browser) {
      browser
        .url(browser.launch_url)
        .clearValue('#txt-name')
        .clearValue('#txt-phone')
        .setValue('#txt-name', 'fd')
        .setValue('#txt-phone', '8795486215')
        .click("div[data-testid='btn-add']")
        .verify.elementNotPresent('#txt-phone')
        .verify.elementNotPresent('#txt-name')
        .end();
    },
  'Add button click should not add contact to FlatList if either phone and name is invalid':
    function (browser) {
      browser
        .url(browser.launch_url)
        .clearValue('#txt-name')
        .clearValue('#txt-phone')
        .setValue('#txt-name', 'fd')
        .setValue('#txt-phone', '879548621512')
        .click("div[data-testid='btn-add']")
        .verify.elementNotPresent('#txt-phone')
        .verify.elementNotPresent('#txt-name')
        .end();
    },
  'Add button should be disabled if name is invalid': function (browser) {
    browser
      .url(browser.launch_url)
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fd')
      .setValue('#txt-phone', '8795632145')
      .getAttribute(
        "div[data-testid='btn-add']",
        'disabled',
        function (result) {
          browser.verify.equal(result.value, 'true');
          browser.end();
        },
      );
  },
  'Add button should be disabled if phone is invalid': function (browser) {
    browser
      .url(browser.launch_url)
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco')
      .setValue('#txt-phone', '879548621512')
      .getAttribute(
        "div[data-testid='btn-add']",
        'disabled',
        function (result) {
          browser.verify.equal(result.value, 'true');
          browser.end();
        },
      );
  },
  'Add button should be enabled if both phone and name are valid': function (
    browser,
  ) {
    browser
      .url(browser.launch_url)
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco')
      .setValue('#txt-phone', '8795486215')
      .getAttribute(
        "div[data-testid='btn-add']",
        'disabled',
        function (result) {
          browser.verify.equal(result.value, null);
          browser.end();
        },
      );
  },
  'Multiple contacts should be added': function (browser) {
    browser
      .url(browser.launch_url)
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco1')
      .setValue('#txt-phone', '8795486531')
      .click("div[data-testid='btn-add']")
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco2')
      .setValue('#txt-phone', '8795486532')
      .click("div[data-testid='btn-add']")
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco3')
      .setValue('#txt-phone', '8795486533')
      .click("div[data-testid='btn-add']")
      .elements('css selector', '.txt-name', function (result) {
        browser.verify.equal(result.value.length, 3);
        for (let i = 0; i < result.value.length; i++) {
          browser.elementIdText(result.value[i].ELEMENT, ele => {
            if (ele.value.toLowerCase().includes(`fresco${i + 1}`)) {
              browser.verify.equal(true, true);
            } else {
              browser.verify.equal(true, false);
            }
          });
        }
      })
      .elements('css selector', '.txt-phone', function (result) {
        browser.verify.equal(result.value.length, 3);
        for (let i = 0; i < result.value.length; i++) {
          browser.elementIdText(result.value[i].ELEMENT, ele => {
            if (ele.value.toLowerCase().includes(`879548653${i + 1}`)) {
              browser.verify.equal(true, true);
            } else {
              browser.verify.equal(true, false);
            }
            if (i == result.value.length - 1) browser.end();
          });
        }
      });
  },
  'Delete button click should delete the contact': function (browser) {
    browser
      .url(browser.launch_url)
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco1')
      .setValue('#txt-phone', '8795486531')
      .click("div[data-testid='btn-add']")
      .elements('css selector', '.txt-name', function (result) {
        browser.verify.equal(result.value.length, 1);
        browser
          .click("div[data-testid='btn-delete-0']")
          .elements('css selector', '.txt-name', function (res) {
            browser.verify.equal(res.value.length, 0);
            browser.end();
          });
      });
  },
  'should delete multiple contacts': function (browser) {
    browser
      .url(browser.launch_url)
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco1')
      .setValue('#txt-phone', '8795486531')
      .click("div[data-testid='btn-add']")
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco2')
      .setValue('#txt-phone', '8795486532')
      .click("div[data-testid='btn-add']")
      .clearValue('#txt-name')
      .clearValue('#txt-phone')
      .setValue('#txt-name', 'fresco3')
      .setValue('#txt-phone', '8795486533')
      .click("div[data-testid='btn-add']")
      .elements('css selector', '.txt-phone', function (result) {
        browser.verify.equal(result.value.length, 3);
        browser
          .click("div[data-testid='btn-delete-1']")
          .elements('css selector', '.txt-name', function (res) {
            browser.verify.equal(res.value.length, 2);
            browser
              .click("div[data-testid='btn-delete-0']")
              .elements('css selector', '.txt-name', function (res) {
                browser.verify.equal(res.value.length, 1);
                browser.end();
              });
          });
      });
  },
};
