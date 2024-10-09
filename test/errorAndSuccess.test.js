import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  var successElement;
  beforeEach('Has to be Accessable', async () => {
    successElement = await fixture(html`<loan-success></loan-success>`);
  });

  it('checking test html component', async () =>{
    successEleinner = await fixture(html`<div></div>`);
    expect(successEleinner).to.be.accessible();
    expect(successEleinner).shadowRoot.querySelector('h2').to.equal('string');
    expect(successEleinner).shadowRoot.querySelector('p').to.equal('string');
  });
  it("Navigate to Dashboard function", async () => {
    const myFunctionStub = Sinon.stub(successElement, '_toDashboard');
    successElement.requestUpdate();
    await successElement.updateComplete;
    successElement.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);

  });



});

describe('error screen', () => {
  // Write test cases inside this block
  var errorElement;
  beforeEach('Has to be Accessable', async () => {
    errorElement = await fixture(html`<loan-error></loan-error>`);
  });

  it('checking test html component', async (done) =>{
    errorval = await fixture(html`<div></div>`);
    expect(errorval).to.be.accessible();
    expect(errorval).shadowRoot.querySelector('h2').to.equal('string');
    expect(errorval).shadowRoot.querySelector('p').to.equal('string');
    done();
  });
  it("Navigate to Dashboard function", async (done) => {
    const myFunctionStub = Sinon.stub(errorElement, '_toDashboard');
    errorElement.requestUpdate();
    await errorElement.updateComplete;
    errorElement.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);
    done();
  });
});
