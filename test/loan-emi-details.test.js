import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon, { stub } from 'sinon'; 

describe('Loan EMI details', () => {
  // Write test cases inside this block
  var myelement;
  beforeEach('Has to be Accessable', async () => {
     myelement = await fixture(html`<loanemi-details></loanemi-details>`);
  });

  it('check for the detils in page', async () => {
    const paraval = myelement.shadowRoot.querySelector('p');
    expect(paraval).to.exist;
    expect(paraval.textContent).to.equal('EMI Details');
  });

  it('checking for cancel button click', () => {
    const myfunc = Sinon.stub(myelement, "_toBasicDetails");
    myelement.shadowRoot.querySelector('lion-button.cancel-btn').click();
    expect(myfunc.calledOnce).to.be.true;
  });

  it('checking for next button click', () => {
    const mynext = Sinon.stub(myelement, "_toCustomer");
    myelement.shadowRoot.querySelector('lion-button.continue-btn').click();
    expect(mynext.calledOnce).to.be.true;
  });

});
