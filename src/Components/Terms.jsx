import React from 'react'
import { useBreakpointValue, useClipboard } from '@chakra-ui/react'
import { Box, Grid, Flex, Input, Button, Editable, EditablePreview, EditableInput } from "@chakra-ui/react"
import Navbar from './Navbar'
import Footer from './Footer';
import '../Styles/terms.css'
import Login from './Login';
function Terms() {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
    <div id="terms">
     
    <Navbar/>
   
      <h1>Terms and Conditions | Policies | Cookies</h1>
      <br/>
      <h2>Terms and Conditions</h2>
      <br/>
      <p>1.General</p>
      <br/>
      <p>THE CUSTOMER’S ATTENTION IS, IN 
      PARTICULAR, DRAWN TO THE PROVISIONS OF CLAUSE 7.2 IN THE SECTION ENTITLED LIABILITY.</p>
    <br/>
    <p>1.For the purposes hereof “the Company” shall mean 
    Amerix Wellness (a business registered in Kenya
       with number BN-JRCGKBL8) and all divisions thereof from time
        to time, and “the Customer” shall mean the party (whether a 
          person, firm, company, organization or other entity or body) to whom the relevant invoice is issued by the Company or who otherwise contracts to acquire the relevant Products and/or Services from the Company. The “Products” shall mean any and all physical or digital products, data, files, goods, materials or other items supplied by the Company to the Customer pursuant to any Contract and the “Services” shall mean any and all services provided by the Company to the Customer pursuant to any Contract. These Terms and Conditions shall apply to the supply by the Company of both Products and Services except where the application to one or the other is specified (or where the context otherwise requires).</p>
     <p>2.Every contract concluded between the Company and the 
     Customer shall comprise solely of the relevant invoice and these
      standard Terms and Conditions which shall be attached thereto and/or
       made available to the Customer beforehand (“the Contract”). All 
       other terms, conditions or representations are hereby specifically excluded including, without limitation, any terms or conditions that the Customer purports or attempts to (i) add, impose, apply, incorporate by way of (or otherwise endorse on) any purchase order, order confirmation or similar document, or in any other manner, and whether or not any such document is referred to in the Contract or (ii) imply by trade, custom, practice or course of dealing, save (in each and any such case) for any additional terms and conditions that are expressly and specifically agreed in writing and in advance between a director of the Company and the Customer. In the event of any conflict arising between these Terms and Conditions and any terms or conditions so added, the former shall prevail. These Terms and Conditions override and replace any other standard or published terms and conditions of the Company from time to time. The Contract constitutes the entire agreement between the parties. The Customer acknowledges that it has not relied on any statement, undertaking, warranty, promise or representation made or given by (or on behalf of) the Company which is 
     not set out in the Contract.</p>
     <p>3. The Company’s proposals, tenders, rate cards, quotations
      or estimates do not (in any event) constitute an offer. Each order
       made, or acceptance of a proposal, quotation, rate card, tender or
        estimate, for Products and/or Services by the Customer shall be 
        deemed to be an offer by the Customer to buy such Products and/or 
        Services from the Company subject to these Terms and Conditions. 
        No order placed by the Customer shall be deemed to have been 
        accepted by the Company (and no contract shall arise, or be deemed 
          to have been formed, between the Company and the Customer)
           unless and until a written acknowledgement of order has been issued by the Company or (if earlier) the relevant Products and/or Services are delivered to the Customer. The Customer is responsible for ensuring that the terms of its order, and any applicable specification(s), are complete and accurate. The nature, quantity and description of the relevant Products and/or Services shall be as set out in the Company’s proposal, quotation, rate card, tender, estimate or acknowledgement of order. Any proposal, quotation, rate card, tender or estimate given by the Company shall be valid for a period of thirty (30) days, unless previously withdrawn or extended by the Company. In any event, all orders are subject to (i) the Company receiving any and all necessary licenses required to purchase, process and/or use the required materials and/or to manufacture the relevant Products and/or (as applicable) to deliver the relevant Services and (ii) the Company being able to obtain the information and materials required to manufacture the relevant Products and/or (as applicable) to deliver the relevant Services.
           </p>
           <p>4. The Customer will (i) ensure that the terms of each 
           specification and order for Products and/or Services (as applicable) is complete and accurate (ii) co-operate with the Company in all matters relating to the supply of the Products and/or Services and (iii) provide the Company with such information and materials as it reasonably requires in order to supply the relevant Products and/or Services, and ensure that such information is accurate in all material respects. If the Company's performance of any of its obligations under any Contract is prevented or delayed by any act or omission of the Customer or failure of the Customer to perform any relevant obligation (a “Customer Default”) (a) the Company shall, without limiting its other rights or remedies, have the right to suspend performance of the relevant Contract until the Customer remedies the Customer Default, and to rely on the Customer Default to relieve it from the performance of any of its obligations to the extent the Customer Default prevents or delays the Company's performance of any of its obligations (b) the Company shall not be liable for any costs or losses sustained or incurred by the Customer arising directly or indirectly from the Company's failure to perform (or delay in performing) any of its obligations as set out in this clause 1.5 and (c) the Customer shall reimburse the Company on written demand for any costs or losses sustained or incurred by the Company arising directly or indirectly from (or in connection with)
            the Customer Default.</p>
            <Footer/>
          </div>
  )
}
export default Terms
