import "./terms.css";
import logoImg from "/images/logo.png";

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions-container">
      <div className="terms-conditions-content">
        <div className="terms-logo-icon">
          <div className="terms-logo">
            <img src={logoImg} alt="crown deluxe logo" className="terms-logo-image" />
          </div>
        </div>
        <header className="terms-header">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last updated: September 07, 2025</p>
        </header>

        <section className="introduction">
          <p>
            Welcome to Crown Deluxe ("Company", "we", "us", or "our"). These terms and 
            conditions ("Terms") govern your use of our website and services. By accessing 
            or using our services, you agree to be bound by these Terms. If you do not 
            agree with any part of these terms, you may not access our services.
          </p>

          <p>
            Please read these Terms carefully before using our services. Your access to 
            and use of the service is conditioned on your acceptance of and compliance 
            with these Terms.
          </p>
        </section>

        <nav className="table-of-contents">
          <h2>TABLE OF CONTENTS</h2>
          <ol>
            <li>
              <a href="#section-1">ACCEPTANCE OF TERMS</a>
            </li>
            <li>
              <a href="#section-2">DESCRIPTION OF SERVICES</a>
            </li>
            <li>
              <a href="#section-3">USER ACCOUNTS</a>
            </li>
            <li>
              <a href="#section-4">PROHIBITED USES</a>
            </li>
            <li>
              <a href="#section-5">PAYMENT TERMS</a>
            </li>
            <li>
              <a href="#section-6">DELIVERY AND FULFILLMENT</a>
            </li>
            <li>
              <a href="#section-7">INTELLECTUAL PROPERTY RIGHTS</a>
            </li>
            <li>
              <a href="#section-8">DISCLAIMER OF WARRANTIES</a>
            </li>
            <li>
              <a href="#section-9">LIMITATION OF LIABILITY</a>
            </li>
            <li>
              <a href="#section-10">TERMINATION</a>
            </li>
            <li>
              <a href="#section-11">GOVERNING LAW</a>
            </li>
            <li>
              <a href="#section-12">CONTACT INFORMATION</a>
            </li>
          </ol>
        </nav>

        <section id="section-1" className="terms-section">
          <h2>1. ACCEPTANCE OF TERMS</h2>
          <div className="summary">
            <strong>In Short:</strong> By using our services, you agree to these terms and conditions.
          </div>
          <p>
            By accessing and using Crown Deluxe's services, you accept and agree to be bound by 
            the terms and provision of this agreement. Additionally, when using Crown Deluxe's 
            specific services, you shall be subject to any posted guidelines or rules applicable 
            to such services.
          </p>
        </section>

        <section id="section-2" className="terms-section">
          <h2>2. DESCRIPTION OF SERVICES</h2>
          <div className="summary">
            <strong>In Short:</strong> We provide LPG gas delivery and related services.
          </div>
          <p>
            Crown Deluxe provides liquefied petroleum gas (LPG) delivery services, including 
            but not limited to home delivery of cooking gas, cylinder refills, and related 
            products. Our services are available in specified areas and subject to availability.
          </p>
          <div className="service-details">
            <p>
              <strong>Service Areas:</strong> Our delivery services are currently available 
              in Lagos, Nigeria and surrounding areas as specified on our website.
            </p>
            <p>
              <strong>Product Quality:</strong> We guarantee the quality and safety of our 
              LPG products in accordance with Nigerian safety standards.
            </p>
          </div>
        </section>

        <section id="section-3" className="terms-section">
          <h2>3. USER ACCOUNTS</h2>
          <div className="summary">
            <strong>In Short:</strong> You are responsible for maintaining your account security.
          </div>
          <p>
            To access certain features of our services, you may be required to create an account. 
            You are responsible for maintaining the confidentiality of your account and password 
            and for restricting access to your computer or device.
          </p>
          <div className="account-requirements">
            <p>
              <strong>Account Information:</strong> You must provide accurate, current, and 
              complete information during registration and keep your account information updated.
            </p>
            <p>
              <strong>Account Security:</strong> You are responsible for all activities that 
              occur under your account and must notify us immediately of any unauthorized use.
            </p>
          </div>
        </section>

        <section id="section-4" className="terms-section">
          <h2>4. PROHIBITED USES</h2>
          <div className="summary">
            <strong>In Short:</strong> Certain activities are strictly prohibited when using our services.
          </div>
          <p>You may not use our services:</p>
          <div className="prohibited-activities">
            <p>• For any unlawful purpose or to solicit others to perform unlawful acts</p>
            <p>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</p>
            <p>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</p>
            <p>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</p>
            <p>• To submit false or misleading information</p>
            <p>• To upload or transmit viruses or any other type of malicious code</p>
          </div>
        </section>

        <section id="section-5" className="terms-section">
          <h2>5. PAYMENT TERMS</h2>
          <div className="summary">
            <strong>In Short:</strong> Payment is required before or upon delivery of products.
          </div>
          <p>
            All prices are subject to change without notice. Payment is due at the time of 
            order or upon delivery, depending on the payment method selected. We accept 
            various payment methods including cash, bank transfer, and digital payments.
          </p>
          <div className="payment-details">
            <p>
              <strong>Price Changes:</strong> Prices may fluctuate based on market conditions 
              and supplier costs.
            </p>
            <p>
              <strong>Failed Payments:</strong> Orders with failed payments will be cancelled 
              and may result in service suspension.
            </p>
          </div>
        </section>

        <section id="section-6" className="terms-section">
          <h2>6. DELIVERY AND FULFILLMENT</h2>
          <div className="summary">
            <strong>In Short:</strong> We strive to deliver products within specified timeframes.
          </div>
          <p>
            We will make every effort to deliver your order within the estimated delivery 
            time. However, delivery times are estimates and not guaranteed. Delays may occur 
            due to weather conditions, traffic, or other unforeseen circumstances.
          </p>
          <div className="delivery-terms">
            <p>
              <strong>Delivery Areas:</strong> Delivery is available in specified service areas only.
            </p>
            <p>
              <strong>Delivery Attempts:</strong> We will attempt delivery up to two times. 
              Failed delivery attempts may result in order cancellation.
            </p>
          </div>
        </section>

        <section id="section-7" className="terms-section">
          <h2>7. INTELLECTUAL PROPERTY RIGHTS</h2>
          <div className="summary">
            <strong>In Short:</strong> All content and materials on our platform are protected by intellectual property laws.
          </div>
          <p>
            The service and its original content, features, and functionality are and will 
            remain the exclusive property of Crown Deluxe and its licensors. The service is 
            protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section id="section-8" className="terms-section">
          <h2>8. DISCLAIMER OF WARRANTIES</h2>
          <div className="summary">
            <strong>In Short:</strong> Our services are provided "as is" without warranties.
          </div>
          <p>
            The information on this website is provided on an "as is" basis. To the fullest 
            extent permitted by law, this Company excludes all representations, warranties, 
            conditions, and terms whether express or implied.
          </p>
        </section>

        <section id="section-9" className="terms-section">
          <h2>9. LIMITATION OF LIABILITY</h2>
          <div className="summary">
            <strong>In Short:</strong> Our liability is limited to the maximum extent permitted by law.
          </div>
          <p>
            In no event shall Crown Deluxe, its directors, employees, partners, agents, 
            suppliers, or affiliates be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including without limitation, loss of profits, 
            data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section id="section-10" className="terms-section">
          <h2>10. TERMINATION</h2>
          <div className="summary">
            <strong>In Short:</strong> We may terminate or suspend your account at any time.
          </div>
          <p>
            We may terminate or suspend your account and bar access to the service immediately, 
            without prior notice or liability, under our sole discretion, for any reason 
            whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section id="section-11" className="terms-section">
          <h2>11. GOVERNING LAW</h2>
          <div className="summary">
            <strong>In Short:</strong> These terms are governed by Nigerian law.
          </div>
          <p>
            These Terms shall be interpreted and governed by the laws of Nigeria. Any disputes 
            relating to these terms shall be subject to the exclusive jurisdiction of the 
            courts of Nigeria.
          </p>
        </section>

        <section id="section-12" className="terms-section">
          <h2>12. CONTACT INFORMATION</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at{" "}
            <a href="mailto:admin@crowndeluxe.com">admin@crowndeluxe.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;