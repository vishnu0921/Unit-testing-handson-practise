import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  var myelement;
  beforeEach('Has to be Accessable', async () => {
     myelement = await fixture(html`<basic-details></basic-details>`);
  });

  it('1. Check Basic Details of Name', function(done){
    const _nameInput = myelement.shadowRoot.querySelector('lion-input');
      console.log(_nameInput);
      expect(_nameInput).to.exist;
      expect(_nameInput).to.not.equal('');
    done();
  });

  it('2. Check Basic Details  of Amount', function(){
    const _amountInput = Number(myelement.shadowRoot.querySelector('lion-input-amount').modelValue);
    const minvalue = 9999;
    const maxvalue = 10000000;
    expect(_amountInput).to.exist;
    expect(_amountInput).to.be.greaterThan(minvalue);
    expect(_amountInput).to.be.lessThan(maxvalue);    
  });

  it('3. Check Basic Details of LoanPeiod', function(done){
    const _periodInput =Number(myelement.shadowRoot.querySelector('lion-input-range').value);
    expect(_periodInput).to.be.above(1);
    expect(_periodInput).to.be.below(21);
    expect(_periodInput).to.exist;
    done();
  });
  it("4. Navigate to Dashboard function", async () => {
    const myFunctionStub = Sinon.stub(myelement, '_toDashboard');
    myelement.requestUpdate();
    await myelement.updateComplete;
    myelement.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);
  });
  it("5. To capture Details", async () => {
    const myFuctionStub = Sinon.stub(myelement, '_captureDetails');
    myelement._captureDetails();
    expect(myFuctionStub.calledOnce).to.be.true;
  });

});
