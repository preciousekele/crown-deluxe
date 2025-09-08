import React from "react";
import "./privacypolicy.css";
import logoImg from "/images/logo.png";
import Footer from "../../Footer/Footer";
const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <div className="privacy-logo-icon">
          <div className="privacy-logo">
            <img src={logoImg} alt="crown deluxe logo" className="privacy-logo-image" />
          </div>
        </div>
        <header className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: September 07, 2025</p>
        </header>

        <section className="introduction">
          <p>
            Thank you for choosing to be part of our community at Crown Deluxe
            ("Company", "we", "us", or "our"). We are committed to protecting
            your personal information and your right to privacy. If you have any
            questions or concerns about our policy or our practices with regards
            to your personal information, please contact us at{" "}
            <a href="mailto:admin@crowndeluxe.com">admin@crowndeluxe.com</a>.
          </p>

          <p>
            When you visit our website and use our services, you trust us with
            your personal information. We take your privacy very seriously. In
            this privacy policy, we seek to explain to you in the clearest way
            possible what information we collect, how we use it, and what rights
            you have in relation to it.
          </p>

          <p>
            This privacy policy applies to all information collected through our
            website and/or any related services, sales, marketing, or events (we
            refer to them collectively in this privacy policy as the
            "Services").
          </p>
        </section>

        <nav className="table-of-contents">
          <h2>TABLE OF CONTENTS</h2>
          <ol>
            <li>
              <a href="#section-1">WHAT INFORMATION DO WE COLLECT?</a>
            </li>
            <li>
              <a href="#section-2">
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </a>
            </li>
            <li>
              <a href="#section-3">
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href="#section-4">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
            </li>
            <li>
              <a href="#section-5">
                IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </a>
            </li>
            <li>
              <a href="#section-6">
                WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
              </a>
            </li>
            <li>
              <a href="#section-7">HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </li>
            <li>
              <a href="#section-8">DO WE COLLECT INFORMATION FROM MINORS?</a>
            </li>
            <li>
              <a href="#section-9">WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </li>
            <li>
              <a href="#section-10">CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </li>
            <li>
              <a href="#section-11">DO WE MAKE UPDATES TO THIS POLICY?</a>
            </li>
            <li>
              <a href="#section-12">
                HOW CAN YOU CONTACT US ABOUT THIS POLICY?
              </a>
            </li>
          </ol>
        </nav>

        <section id="section-1" className="policy-section">
          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>

          <div className="subsection">
            <h3>Personal information you disclose to us</h3>
            <p className="summary">
              <strong>In Short:</strong> We collect personal information that
              you provide to us, such as name, address, contact information,
              passwords and security data, and payment information.
            </p>

            <p>
              We collect personal information that you voluntarily provide to us
              when registering on the Services, expressing an interest in
              obtaining information about us or our products and services, when
              participating in activities on the Services (such as posting
              messages in our online forums or entering competitions, contests,
              or giveaways), or otherwise contacting us.
            </p>

            <p>
              The personal information we collect can include the following:
            </p>

            <div className="info-types">
              <p>
                <strong>Credentials.</strong> We collect passwords, password
                hints, and similar security information used for authentication
                and account access.
              </p>
              <p>
                <strong>Social Media Login Data.</strong> We provide you with
                the option to register using social media account details, like
                your Facebook, X (formerly Twitter), or other social media
                account. If you choose to register in this way, we will collect
                the information described in the section called "HOW DO WE
                HANDLE YOUR SOCIAL LOGINS?"
              </p>
            </div>

            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </div>

          <div className="subsection">
            <h3>Information automatically collected</h3>
            <p className="summary">
              <strong>In Short:</strong> Some information—such as IP address
              and/or browser and device characteristics—is collected
              automatically when you visit our website.
            </p>

            <p>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information.
            </p>

            <p>
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </p>
          </div>
        </section>

        <section id="section-2" className="policy-section">
          <h2>2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
          <p className="summary">
            <strong>In Short:</strong> We only share information with your
            consent, to comply with laws, to provide you with services, to
            protect your rights, or to fulfill business obligations.
          </p>

          <p>
            We may process or share data based on the following legal basis:
          </p>

          <div className="legal-basis">
            <p>
              <strong>Consent:</strong> We may process your data if you have
              given us specific consent to use your personal information for a
              specific purpose.
            </p>
            <p>
              <strong>Legitimate Interests:</strong> We may process your data
              when it is reasonably necessary to achieve our legitimate business
              interests.
            </p>
            <p>
              <strong>Performance of a Contract:</strong> Where we have entered
              into a contract with you, we may process your personal information
              to fulfill the terms of our contract.
            </p>
            <p>
              <strong>Legal Obligations:</strong> We may disclose your
              information where we are legally required to do so in order to
              comply with applicable law, governmental requests, a judicial
              proceeding, court order, or legal process.
            </p>
            <p>
              <strong>Vital Interests:</strong> We may disclose your information
              where we believe it is necessary to investigate, prevent, or take
              action regarding potential violations of our policies, suspected
              fraud, situations involving potential threats to the safety of any
              person and illegal activities.
            </p>
          </div>

          <p>
            More specifically, we may need to process your data or share your
            personal information in the following situations:
          </p>

          <div className="sharing-situations">
            <p>
              <strong>
                Vendors, Consultants, and Other Third-Party Service Providers.
              </strong>{" "}
              We may share your data with third-party vendors, service
              providers, contractors, or agents who perform services for us or
              on our behalf.
            </p>
            <p>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition.
            </p>
            <p>
              <strong>Third-Party Advertisers.</strong> We may use third-party
              advertising companies to serve ads when you visit the Services.
            </p>
            <p>
              <strong>Affiliates.</strong> We may share your information with
              our affiliates, in which case we will require those affiliates to
              honor this privacy policy.
            </p>
            <p>
              <strong>Business Partners.</strong> We may share your information
              with our business partners to offer you certain products,
              services, or promotions.
            </p>
            <p>
              <strong>Other Users.</strong> When you share personal information
              or otherwise interact with public areas of the Services, such
              personal information may be viewed by all users.
            </p>
          </div>
        </section>

        <section id="section-3" className="policy-section">
          <h2>3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p className="summary">
            <strong>In Short:</strong> We may use cookies and other tracking
            technologies to collect and store your information.
          </p>
          <p>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Policy.
          </p>
        </section>

        <section id="section-4" className="policy-section">
          <h2>4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p className="summary">
            <strong>In Short:</strong> If you choose to register or log in to
            our services using a social media account, we may have access to
            certain information about you.
          </p>
          <p>
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or X
            logins). Where you choose to do this, we will receive certain
            profile information about you from your social media provider.
          </p>
        </section>

        <section id="section-5" className="policy-section">
          <h2>5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
          <p className="summary">
            <strong>In Short:</strong> We may transfer, store, and process your
            information in countries other than your own.
          </p>
          <p>
            Our servers are located in Nigeria. If you are accessing our
            Services from outside Nigeria, please be aware that your information
            may be transferred to, stored, and processed by us in our facilities
            and by those third parties with whom we may share your personal
            information.
          </p>
        </section>

        <section id="section-6" className="policy-section">
          <h2>6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
          <p className="summary">
            <strong>In Short:</strong> We are not responsible for the safety of
            any information that you share with third-party providers who
            advertise, but are not affiliated with, our websites.
          </p>
          <p>
            The Services may contain advertisements from third parties that are
            not affiliated with us and which may link to other websites, online
            services, or mobile applications. We cannot guarantee the safety and
            privacy of data you provide to any third parties.
          </p>
        </section>

        <section id="section-7" className="policy-section">
          <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p className="summary">
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this privacy policy
            unless otherwise required by law.
          </p>
          <p>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy policy, unless a
            longer retention period is required or permitted by law.
          </p>
        </section>

        <section id="section-8" className="policy-section">
          <h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p className="summary">
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under 18 years of age.
          </p>
          <p>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that you are the parent or guardian of such a minor and
            consent to such minor dependent's use of the Services.
          </p>
        </section>

        <section id="section-9" className="policy-section">
          <h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p className="summary">
            <strong>In Short:</strong> You may review, change, or terminate your
            account at any time.
          </p>
          <p>
            If you are a resident of Nigeria and you believe we are unlawfully
            processing your personal information, you also have the right to
            complain to the Nigeria Data Protection Commission (NDPC).
          </p>

          <div className="rights-details">
            <h3>Account Information</h3>
            <p>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can contact us
              using the contact information provided.
            </p>

            <h3>Opting out of email marketing</h3>
            <p>
              You can unsubscribe from our marketing email list at any time by
              clicking on the unsubscribe link in the emails that we send or by
              contacting us using the details provided below.
            </p>
          </div>
        </section>

        <section id="section-10" className="policy-section">
          <h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online.
          </p>
        </section>

        <section id="section-11" className="policy-section">
          <h2>11. DO WE MAKE UPDATES TO THIS POLICY?</h2>
          <p className="summary">
            <strong>In Short:</strong> Yes, we will update this policy as
            necessary to stay compliant with relevant laws.
          </p>
          <p>
            We may update this privacy policy from time to time. The updated
            version will be indicated by an updated "Last updated" date, and the
            updated version will be effective as soon as it is accessible.
          </p>
        </section>

        <section id="section-12" className="policy-section">
          <h2>12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
          <p>
            If you have questions or comments about this policy, you may email
            us at{" "}
            <a href="mailto:admin@crowndeluxe.com">admin@crowndeluxe.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
