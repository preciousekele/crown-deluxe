import "./return.css";
import logoImg from "/images/logo.png";

const ReturnsRefund = () => {
  return (
    <div className="return-refund-container">
      <div className="return-refund-content">
        <div className="return-logo-icon">
          <div className="return-logo">
            <img src={logoImg} alt="crown deluxe logo" className="return-logo-image" />
          </div>
        </div>
        <header className="return-header">
          <h1>Return and Refund Policy</h1>
          <p className="last-updated">Last updated: September 07, 2025</p>
        </header>

        <section className="introduction">
          <p>
            At Crown Deluxe, we are committed to providing high-quality LPG products and 
            services. We understand that there may be circumstances where you need to return 
            a product or request a refund. This Return and Refund Policy outlines the 
            conditions and procedures for returns and refunds.
          </p>

          <p>
            Please read this policy carefully to understand your rights and our procedures 
            regarding returns and refunds. If you have any questions, please contact us at{" "}
            <a href="mailto:admin@crowndeluxe.com">admin@crowndeluxe.com</a>.
          </p>
        </section>

        <nav className="table-of-contents">
          <h2>TABLE OF CONTENTS</h2>
          <ol>
            <li>
              <a href="#section-1">GENERAL RETURN POLICY</a>
            </li>
            <li>
              <a href="#section-2">REFUND CONDITIONS</a>
            </li>
            <li>
              <a href="#section-3">NON-RETURNABLE ITEMS</a>
            </li>
            <li>
              <a href="#section-4">RETURN PROCESS</a>
            </li>
            <li>
              <a href="#section-5">REFUND PROCESSING</a>
            </li>
            <li>
              <a href="#section-6">EXCHANGES</a>
            </li>
            <li>
              <a href="#section-7">DAMAGED OR DEFECTIVE PRODUCTS</a>
            </li>
            <li>
              <a href="#section-8">DELIVERY ISSUES</a>
            </li>
            <li>
              <a href="#section-9">CUSTOMER RESPONSIBILITIES</a>
            </li>
            <li>
              <a href="#section-10">CONTACT INFORMATION</a>
            </li>
          </ol>
        </nav>

        <section id="section-1" className="return-section">
          <h2>1. GENERAL RETURN POLICY</h2>
          <div className="summary">
            <strong>In Short:</strong> Returns are accepted within 24 hours of delivery for 
            unused products in original condition.
          </div>
          <p>
            We accept returns of unused LPG cylinders and related products within 24 hours 
            of delivery. Products must be in their original condition, unused, and with all 
            original packaging and safety seals intact.
          </p>
          <div className="return-conditions">
            <p>
              <strong>Time Frame:</strong> All return requests must be initiated within 24 
              hours of product delivery.
            </p>
            <p>
              <strong>Product Condition:</strong> Products must be unused, unopened, and in 
              original packaging with safety seals intact.
            </p>
            <p>
              <strong>Documentation:</strong> Original receipt or order confirmation required 
              for all returns.
            </p>
          </div>
        </section>

        <section id="section-2" className="return-section">
          <h2>2. REFUND CONDITIONS</h2>
          <div className="summary">
            <strong>In Short:</strong> Refunds are processed after successful return and 
            inspection of products.
          </div>
          <p>
            Refunds will be issued once we receive and inspect the returned product. The 
            refund amount will be the full purchase price minus any applicable delivery 
            charges, unless the return is due to our error.
          </p>
          <div className="refund-details">
            <p>
              <strong>Eligible Refunds:</strong> Full purchase price for products returned 
              in acceptable condition within the specified time frame.
            </p>
            <p>
              <strong>Delivery Charges:</strong> Delivery charges are non-refundable unless 
              the return is due to damaged or incorrect products delivered by us.
            </p>
            <p>
              <strong>Processing Time:</strong> Refunds are processed within 7-10 business 
              days after we receive the returned product.
            </p>
          </div>
        </section>

        <section id="section-3" className="return-section">
          <h2>3. NON-RETURNABLE ITEMS</h2>
          <div className="summary">
            <strong>In Short:</strong> Certain items cannot be returned for safety and 
            hygiene reasons.
          </div>
          <p>For safety and hygiene reasons, the following items cannot be returned:</p>
          <div className="non-returnable-items">
            <p>• Used or partially used LPG cylinders</p>
            <p>• Products with broken or tampered safety seals</p>
            <p>• Accessories that have been used or show signs of wear</p>
            <p>• Products damaged due to customer misuse or negligence</p>
            <p>• Custom or specially ordered items</p>
            <p>• Products returned after the 24-hour return window</p>
          </div>
        </section>

        <section id="section-4" className="return-section">
          <h2>4. RETURN PROCESS</h2>
          <div className="summary">
            <strong>In Short:</strong> Contact us first, then follow our return instructions.
          </div>
          <p>To initiate a return, please follow these steps:</p>
          <div className="return-process-steps">
            <p>
              <strong>Step 1:</strong> Contact our customer service team at 
              admin@crowndeluxe.com or call our hotline within 24 hours of delivery.
            </p>
            <p>
              <strong>Step 2:</strong> Provide your order number, reason for return, and 
              photos of the product if applicable.
            </p>
            <p>
              <strong>Step 3:</strong> Receive return authorization and instructions from 
              our team.
            </p>
            <p>
              <strong>Step 4:</strong> Package the product securely with original packaging 
              and documentation.
            </p>
            <p>
              <strong>Step 5:</strong> Schedule pickup or drop-off as instructed by our team.
            </p>
          </div>
        </section>

        <section id="section-5" className="return-section">
          <h2>5. REFUND PROCESSING</h2>
          <div className="summary">
            <strong>In Short:</strong> Refunds are processed to original payment method 
            within 7-10 business days.
          </div>
          <p>
            Once we receive and inspect your returned product, we will process your refund 
            to the original method of payment. Processing times may vary depending on your 
            bank or payment provider.
          </p>
          <div className="refund-processing">
            <p>
              <strong>Payment Method:</strong> Refunds are issued to the original payment 
              method used for purchase.
            </p>
            <p>
              <strong>Bank Transfers:</strong> 3-5 business days for bank transfers.
            </p>
            <p>
              <strong>Digital Payments:</strong> 1-3 business days for digital payment 
              platforms.
            </p>
            <p>
              <strong>Cash Payments:</strong> Cash refunds processed during pickup or 
              available for collection.
            </p>
          </div>
        </section>

        <section id="section-6" className="return-section">
          <h2>6. EXCHANGES</h2>
          <div className="summary">
            <strong>In Short:</strong> We offer exchanges for defective products or wrong 
            items delivered.
          </div>
          <p>
            We offer exchanges for products that are defective or if we delivered the wrong 
            item. Exchanges are subject to product availability and must be requested within 
            the same time frame as returns.
          </p>
          <div className="exchange-policy">
            <p>
              <strong>Eligible Exchanges:</strong> Defective products, wrong items delivered, 
              or damaged products due to shipping.
            </p>
            <p>
              <strong>Exchange Process:</strong> Follow the same process as returns, but 
              specify that you want an exchange rather than a refund.
            </p>
          </div>
        </section>

        <section id="section-7" className="return-section">
          <h2>7. DAMAGED OR DEFECTIVE PRODUCTS</h2>
          <div className="summary">
            <strong>In Short:</strong> We take full responsibility for damaged or defective 
            products and offer immediate resolution.
          </div>
          <p>
            If you receive a damaged or defective product, please contact us immediately. 
            We will provide a full refund or replacement at no additional cost, including 
            pickup and redelivery charges.
          </p>
          <div className="damage-policy">
            <p>
              <strong>Immediate Action:</strong> Report damaged or defective products within 
              2 hours of delivery for fastest resolution.
            </p>
            <p>
              <strong>Photo Evidence:</strong> Please provide clear photos of the damage or 
              defect to expedite the process.
            </p>
            <p>
              <strong>Safety Concerns:</strong> If a product poses safety risks, stop using 
              it immediately and contact us for emergency pickup.
            </p>
          </div>
        </section>

        <section id="section-8" className="return-section">
          <h2>8. DELIVERY ISSUES</h2>
          <div className="summary">
            <strong>In Short:</strong> Issues with delivery timing or missed deliveries are 
            handled with priority and may qualify for refunds.
          </div>
          <p>
            If there are issues with delivery such as significant delays, missed delivery 
            appointments, or failure to deliver, you may be eligible for a partial or full 
            refund depending on the circumstances.
          </p>
          <div className="delivery-issues">
            <p>
              <strong>Delayed Delivery:</strong> Refunds or credits offered for deliveries 
              significantly later than promised time windows.
            </p>
            <p>
              <strong>Missed Delivery:</strong> Full refund available if delivery cannot be 
              completed due to our scheduling issues.
            </p>
          </div>
        </section>

        <section id="section-9" className="return-section">
          <h2>9. CUSTOMER RESPONSIBILITIES</h2>
          <div className="summary">
            <strong>In Short:</strong> Customers must handle products properly and follow 
            return procedures correctly.
          </div>
          <p>
            To ensure smooth returns and refunds, customers are responsible for:
          </p>
          <div className="customer-duties">
            <p>• Inspecting products upon delivery and reporting issues immediately</p>
            <p>• Keeping products in original condition until return is authorized</p>
            <p>• Following proper safety procedures when handling LPG products</p>
            <p>• Providing accurate information when initiating returns</p>
            <p>• Being available for scheduled pickups or drop-offs</p>
            <p>• Retaining all original packaging and documentation</p>
          </div>
        </section>

        <section id="section-10" className="return-section">
          <h2>10. CONTACT INFORMATION</h2>
          <p>
            For all return and refund inquiries, please contact us:
          </p>
          <div className="contact-details">
            <p>
              <strong>Email:</strong> <a href="mailto:admin@crowndeluxe.com">admin@crowndeluxe.com</a>
            </p>
            <p>
              <strong>Response Time:</strong> We respond to all return requests within 2 hours 
              during business hours.
            </p>
            <p>
              <strong>Emergency Returns:</strong> For safety-related returns, contact us 
              immediately for priority handling.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReturnsRefund;