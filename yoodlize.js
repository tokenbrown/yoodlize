module.exports = {
  beforeEach: browser => {
    browser.url("https://alpha.yoodlize.com/")
  },
  after: browser => {
    browser.end()
  },
  'Recreational': browser => {
    browser
      .useXpath()
      .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
      .pause(5000)
      .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Recreational Vehicles")
  },
  'Outdoor Gear': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Outdoor Gear")
  },
  'Electronics': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Electronics")
  },
  'Party & wedding': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Party & Wedding Equipment")
  },
  'Tools': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Tools")
  },
  'Clothing': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Clothing")
  },
  'Home & Kitchen': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Home and Kitchen")
  },
  'Toys & Games': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Toys and Games")
  },
  'Lawn & Garden': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Lawn and Garden")
  },
  'Sporting Goods': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Sporting Equipment")
  },
  'DVDs': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: DVDs")
  },
  'Venues': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Venues")
  },
  'Music': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Music")
  },
  'Business Equipment': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Business Equipment")
  },
  'Misc': browser => {
    browser
    .useXpath()
    .click('(//*[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
    .pause(5000)
    .expect.element('(//*[@class="sc-jKVCRD jSqgxr"])').text.to.contain("category: Misc")
  },
}
