import React from "react";
import "./safety.css";
import logoImg from "/images/logo.png";

const LpgSafety = () => {
  return (
    <div className="lpg-safety-container">
      <div className="lpg-safety-content">
        <div className="safety-logo-icon">
          <div className="safety-logo">
            <img src={logoImg} alt="crown deluxe logo" className="safety-logo-image" />
          </div>
        </div>
        <header className="safety-header">
          <h1>LPG Safety Guide</h1>
          <p className="last-updated">Last updated: September 07, 2025</p>
        </header>

        <section className="introduction">
          <p>
            Safety is our top priority at Crown Deluxe. Liquefied Petroleum Gas (LPG) is 
            a safe and reliable energy source when handled properly. This comprehensive 
            safety guide provides essential information on safe handling, storage, and 
            usage of LPG products.
          </p>

          <p>
            Please read this guide carefully and keep it accessible for reference. Following 
            these safety guidelines will help ensure the safe use of LPG in your home or 
            business. If you have any safety concerns or questions, contact us immediately 
            at <a href="mailto:admin@crowndeluxe.com">admin@crowndeluxe.com</a>.
          </p>

          <div className="emergency-notice">
            <strong>EMERGENCY:</strong> If you smell gas or suspect a leak, do not use 
            electrical switches, lighters, or create sparks. Ventilate the area immediately 
            and contact emergency services and Crown Deluxe.
          </div>
        </section>

        <nav className="table-of-contents">
          <h2>TABLE OF CONTENTS</h2>
          <ol>
            <li>
              <a href="#section-1">UNDERSTANDING LPG</a>
            </li>
            <li>
              <a href="#section-2">SAFE INSTALLATION</a>
            </li>
            <li>
              <a href="#section-3">PROPER STORAGE</a>
            </li>
            <li>
              <a href="#section-4">SAFE OPERATION</a>
            </li>
            <li>
              <a href="#section-5">LEAK DETECTION</a>
            </li>
            <li>
              <a href="#section-6">EMERGENCY PROCEDURES</a>
            </li>
            <li>
              <a href="#section-7">MAINTENANCE AND INSPECTION</a>
            </li>
            <li>
              <a href="#section-8">CYLINDER HANDLING</a>
            </li>
            <li>
              <a href="#section-9">SAFETY DO'S AND DON'TS</a>
            </li>
            <li>
              <a href="#section-10">CHILDREN AND LPG SAFETY</a>
            </li>
            <li>
              <a href="#section-11">CONTACT FOR EMERGENCIES</a>
            </li>
          </ol>
        </nav>

        <section id="section-1" className="safety-section">
          <h2>1. UNDERSTANDING LPG</h2>
          <div className="summary">
            <strong>In Short:</strong> LPG is a clean-burning fuel that requires proper 
            handling and safety awareness.
          </div>
          <p>
            LPG (Liquefied Petroleum Gas) is a mixture of propane and butane gases stored 
            under pressure as a liquid. When released, it vaporizes and burns cleanly, 
            making it an excellent cooking and heating fuel.
          </p>
          <div className="lpg-properties">
            <p>
              <strong>Key Properties:</strong> LPG is heavier than air and will settle in 
              low areas if there's a leak.
            </p>
            <p>
              <strong>Odor:</strong> A strong smell (mercaptan) is added to help detect leaks.
            </p>
            <p>
              <strong>Pressure:</strong> Stored under pressure, requires proper equipment 
              and handling.
            </p>
            <p>
              <strong>Flammability:</strong> Burns cleanly but requires oxygen and proper 
              ignition for safe combustion.
            </p>
          </div>
        </section>

        <section id="section-2" className="safety-section">
          <h2>2. SAFE INSTALLATION</h2>
          <div className="summary">
            <strong>In Short:</strong> Always use qualified professionals for LPG 
            installation and connections.
          </div>
          <p>
            Proper installation is crucial for safe LPG use. Only qualified and certified 
            technicians should install LPG systems and make connections.
          </p>
          <div className="installation-guidelines">
            <p>
              <strong>Professional Installation:</strong> Use only certified LPG technicians 
              for installation and repairs.
            </p>
            <p>
              <strong>Quality Equipment:</strong> Use only approved regulators, hoses, and 
              fittings that meet safety standards.
            </p>
            <p>
              <strong>Proper Ventilation:</strong> Ensure adequate ventilation in the 
              installation area.
            </p>
            <p>
              <strong>Location Requirements:</strong> Install cylinders in well-ventilated, 
              upright positions away from heat sources.
            </p>
            <p>
              <strong>Testing:</strong> All connections must be leak-tested before first use.
            </p>
          </div>
        </section>

        <section id="section-3" className="safety-section">
          <h2>3. PROPER STORAGE</h2>
          <div className="summary">
            <strong>In Short:</strong> Store LPG cylinders upright in well-ventilated, 
            cool areas away from heat sources.
          </div>
          <p>
            Proper storage of LPG cylinders is essential for safety. Follow these guidelines 
            to ensure safe storage conditions.
          </p>
          <div className="storage-requirements">
            <p>
              <strong>Upright Position:</strong> Always store cylinders in an upright 
              position to prevent liquid LPG from entering the regulator.
            </p>
            <p>
              <strong>Ventilation:</strong> Store in well-ventilated areas, preferably 
              outdoors or in ventilated enclosures.
            </p>
            <p>
              <strong>Temperature:</strong> Keep away from heat sources, direct sunlight, 
              and extreme temperatures.
            </p>
            <p>
              <strong>Secure Storage:</strong> Secure cylinders to prevent falling or 
              rolling.
            </p>
            <p>
              <strong>Distance from Buildings:</strong> Store at safe distances from 
              buildings, ignition sources, and electrical equipment.
            </p>
          </div>
        </section>

        <section id="section-4" className="safety-section">
          <h2>4. SAFE OPERATION</h2>
          <div className="summary">
            <strong>In Short:</strong> Follow proper procedures when lighting, using, 
            and turning off LPG appliances.
          </div>
          <p>
            Safe operation procedures help prevent accidents and ensure efficient use of 
            LPG appliances.
          </p>
          <div className="operation-procedures">
            <p>
              <strong>Lighting Procedure:</strong> Light the match or igniter first, then 
              turn on the gas valve gradually.
            </p>
            <p>
              <strong>Flame Adjustment:</strong> Adjust flame to blue color for complete 
              combustion and maximum efficiency.
            </p>
            <p>
              <strong>Supervision:</strong> Never leave appliances unattended while in use.
            </p>
            <p>
              <strong>Turning Off:</strong> Always turn off appliances at the appliance 
              first, then at the cylinder valve.
            </p>
            <p>
              <strong>Regular Use:</strong> Use appliances regularly to prevent buildup 
              of dust and debris in burners.
            </p>
          </div>
        </section>

        <section id="section-5" className="safety-section">
          <h2>5. LEAK DETECTION</h2>
          <div className="summary">
            <strong>In Short:</strong> Know how to detect gas leaks using smell, sound, 
            and soapy water tests.
          </div>
          <p>
            Early detection of gas leaks is crucial for safety. Learn to identify signs 
            of leaks and how to test for them safely.
          </p>
          <div className="leak-detection-methods">
            <p>
              <strong>Smell Test:</strong> LPG has a distinct strong odor. If you smell 
              gas, investigate immediately but do not use flames or electrical switches.
            </p>
            <p>
              <strong>Sound Test:</strong> Listen for hissing sounds near connections and 
              valves that might indicate escaping gas.
            </p>
            <p>
              <strong>Soap Test:</strong> Use soapy water on connections - bubbles indicate 
              a leak. Never use flame to test for leaks.
            </p>
            <p>
              <strong>Visual Inspection:</strong> Look for damage to hoses, connections, 
              and cylinders during regular inspections.
            </p>
          </div>
        </section>

        <section id="section-6" className="safety-section">
          <h2>6. EMERGENCY PROCEDURES</h2>
          <div className="summary">
            <strong>In Short:</strong> In case of gas leak or emergency, act quickly but 
            safely to secure the area and get help.
          </div>
          <p>
            Know what to do in case of a gas leak or LPG emergency. Quick, proper action 
            can prevent serious accidents.
          </p>
          <div className="emergency-steps">
            <p>
              <strong>Immediate Actions:</strong>
            </p>
            <p>• Do not use electrical switches, phones, or create any sparks</p>
            <p>• Extinguish all flames and cigarettes immediately</p>
            <p>• Turn off the gas supply at the cylinder if safely possible</p>
            <p>• Ventilate the area by opening doors and windows</p>
            <p>• Evacuate the area and move to a safe location</p>
            <p>• Call emergency services and Crown Deluxe from a safe distance</p>
            <p>• Do not re-enter until area is declared safe by professionals</p>
          </div>
        </section>

        <section id="section-7" className="safety-section">
          <h2>7. MAINTENANCE AND INSPECTION</h2>
          <div className="summary">
            <strong>In Short:</strong> Regular maintenance and inspection help prevent 
            accidents and ensure optimal performance.
          </div>
          <p>
            Regular maintenance and inspection of your LPG system and appliances are 
            essential for safe operation.
          </p>
          <div className="maintenance-schedule">
            <p>
              <strong>Daily Checks:</strong> Visual inspection of cylinders and connections 
              for damage or leaks.
            </p>
            <p>
              <strong>Weekly Checks:</strong> Test appliance ignition and flame quality.
            </p>
            <p>
              <strong>Monthly Checks:</strong> Inspect hoses and connections with soapy 
              water for leaks.
            </p>
            <p>
              <strong>Annual Service:</strong> Professional inspection and service of 
              entire LPG system by qualified technician.
            </p>
            <p>
              <strong>Replace Components:</strong> Replace hoses every 5 years or as 
              recommended by manufacturer.
            </p>
          </div>
        </section>

        <section id="section-8" className="safety-section">
          <h2>8. CYLINDER HANDLING</h2>
          <div className="summary">
            <strong>In Short:</strong> Handle LPG cylinders carefully to prevent damage 
            and ensure safety.
          </div>
          <p>
            Proper handling of LPG cylinders prevents damage and ensures safe transportation 
            and use.
          </p>
          <div className="handling-guidelines">
            <p>
              <strong>Transportation:</strong> Transport cylinders upright and secure them 
              to prevent rolling or falling.
            </p>
            <p>
              <strong>Lifting:</strong> Use proper lifting techniques and equipment for 
              heavy cylinders.
            </p>
            <p>
              <strong>Valve Protection:</strong> Keep valve caps on during transport and 
              storage to protect valve threads.
            </p>
            <p>
              <strong>Avoid Dropping:</strong> Never drop or throw cylinders, as this can 
              cause damage to safety features.
            </p>
            <p>
              <strong>Inspection:</strong> Inspect cylinders for dents, rust, or damage 
              before use.
            </p>
          </div>
        </section>

        <section id="section-9" className="safety-section">
          <h2>9. SAFETY DO'S AND DON'TS</h2>
          <div className="summary">
            <strong>In Short:</strong> Follow these essential do's and don'ts for LPG safety.
          </div>
          
          <div className="dos-section">
            <h3>DO:</h3>
            <div className="safety-dos">
              <p>• Always turn off gas at the cylinder when not in use</p>
              <p>• Keep spare cylinders outdoors in ventilated areas</p>
              <p>• Use approved equipment and have installations checked by professionals</p>
              <p>• Report any strong gas smells immediately</p>
              <p>• Keep cylinders upright and secure</p>
              <p>• Teach family members about LPG safety</p>
              <p>• Keep fire extinguishing equipment nearby</p>
            </div>
          </div>

          <div className="donts-section">
            <h3>DON'T:</h3>
            <div className="safety-donts">
              <p>• Store cylinders indoors or in enclosed spaces</p>
              <p>• Use damaged or leaking equipment</p>
              <p>• Test for leaks with flame</p>
              <p>• Smoke near LPG cylinders or appliances</p>
              <p>• Use cylinders as supports or rollers</p>
              <p>• Attempt repairs yourself - use professionals only</p>
              <p>• Ignore the smell of gas or signs of leaks</p>
            </div>
          </div>
        </section>

        <section id="section-10" className="safety-section">
          <h2>10. CHILDREN AND LPG SAFETY</h2>
          <div className="summary">
            <strong>In Short:</strong> Keep children safe around LPG by teaching them 
            about dangers and maintaining secure installations.
          </div>
          <p>
            Special precautions are needed when children are present in homes using LPG. 
            Education and security measures help keep children safe.
          </p>
          <div className="child-safety-measures">
            <p>
              <strong>Education:</strong> Teach children about the dangers of gas and 
              what to do if they smell gas.
            </p>
            <p>
              <strong>Supervision:</strong> Never leave children unattended near LPG 
              appliances or cylinders.
            </p>
            <p>
              <strong>Secure Storage:</strong> Keep cylinders and equipment out of reach 
              of young children.
            </p>
            <p>
              <strong>Safety Devices:</strong> Consider installing safety devices like 
              automatic shut-off valves.
            </p>
            <p>
              <strong>Emergency Planning:</strong> Teach children emergency procedures 
              appropriate for their age.
            </p>
          </div>
        </section>

        <section id="section-11" className="safety-section">
          <h2>11. CONTACT FOR EMERGENCIES</h2>
          <p>
            In case of LPG emergencies or safety concerns, contact us immediately:
          </p>
          <div className="emergency-contacts">
            <p>
              <strong>Emergency Hotline:</strong> Available 24/7 for gas emergencies
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:admin@crowndeluxe.com">admin@crowndeluxe.com</a>
            </p>
            <p>
              <strong>General Safety Questions:</strong> Contact us during business hours 
              for non-emergency safety questions.
            </p>
            <p>
              <strong>Professional Service:</strong> We can arrange qualified technicians 
              for installations, repairs, and safety inspections.
            </p>
          </div>
          
          <div className="final-safety-message">
            <strong>Remember:</strong> When in doubt about LPG safety, always err on the 
            side of caution. It's better to be safe than sorry. Contact professionals 
            for any safety concerns or questions.
          </div>
        </section>
      </div>
    </div>
  );
};

export default LpgSafety;