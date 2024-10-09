import { html, fixture, expect } from '@open-wc/testing';
import '../loan-application.js';


describe('LoanApplication', () => {
  // Write test cases inside this block
  let myelement;

  beforeEach('Has to be Accessable', async () => {
    myelement = await fixture(html`<loan-applicationt></loan-application>`);
  });

  it('checking for the dashboard contians all related components avail', async()=>{
    expect(myelement).to.be.accessible();
    expect(myelement).shadowDom.to.equal(`<div><dash-board></dash-board></div>`);
    expect(myelement).shadowDom.to.equal(`<loan-header></loan-header><div id="outlet"></div>`);
  });


});
