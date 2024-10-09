import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
 var mycustele;
  beforeEach('Checking for customer details', async () => {
    mycustele =  await fixture(html`<customer-details></customer-details>`);
 });
  it.skip('1. checking name values', function(){
    const firstname = mycustele.shadowRoot.querySelector('lion-input[id="first_name"]').value;
    const lastname = mycustele.shadowRoot.querySelector('lion-input[id="last_name"]').value;
    expect(firstname).to.exist;
    expect(firstname).to.be('text');
    expect(lastname).to.exist;
    expect(lastname).to.be('text');
  });
  it('2. date of birth checks greter than 18', function(){
    const dobelement = mycustele.shadowRoot.querySelector('lion-input[id="dateof_birth"]').value;
    const newdate = new Date('2006-01-01');
    expect(dobelement).to.exist;
    expect(dobelement).to.greaterThan(newdate);
    expect(dobelement).to.be.true;
  });
  it('3. date of birth checks less than 80', function(){
    const dobelement = mycustele.shadowRoot.querySelector('lion-input[id="dateof_birth"]').value;
    const newdate = new Date('1944-01-01');
    expect(dobelement).to.exist;
    expect(dobelement).to.greaterThan(newdate);
    expect(dobelement).to.be.true;
  });
  it('4. Email id check', function(){
    const emailelement = mycustele.shadowRoot.querySelector('lion-input[id="email"]').value;
    expect(emailelement).to.exist;
  });
  it('5. mobile number checks', function(){
    const mobileelement = mycustele.shadowRoot.querySelector('lion-input[id="mobile_number"]').value;
    expect(mobileelement).to.exist;
    expect(mobileelement).lengthOf.equal(10);
  });
  it('6. Monthly salary checks', function(){
    const montlysalele = mycustele.shadowRoot.querySelector('lion-input[id="monthly_salary"]').value;
    expect(montlysalele).to.exist;
  });
  it('7. terms box checked', function(){
    const checkval = mycustele.shadowRoot.querySelector('lion-input[id="terms"]:checked');
    expect(checkval).to.be.true;
  });

  it("8. Navigate back function", async () => {
    const myFunctionback = Sinon.stub(mycustele, '_toemidetails');
    myelement.requestUpdate();
    await myelement.updateComplete;
    myelement.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionback).to.have.callCount(1);
  });
  
  it("9. Navigate next function", async () => {
    const submitButton = myelement.shadowRoot.querySelector('#nextbtn');
    myelement.requestUpdate();
    await myelement.updateComplete;
    myelement.shadowRoot.querySelector('lion-button').click();
    expect(submitButton).to.have.callCount(1);

  });





});
 