import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';

const PrivacyPage = () => {
  return (
    <LegalPage kicker="Privacy" title="Privacy Policy" updated="November 16, 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          SCULPTMOORE is the atelier at 123 Artisan Lane, Creative District, New York, NY 10001. When this policy says “the studio,” “we,” or “us,” it means that practice. Questions about your information go to <a href="mailto:studio@sculptmoore.com">studio@sculptmoore.com</a> or (555) 123-4567.
        </p>
      </section>

      <section>
        <h2>What you give us</h2>
        <p>We only hold information you choose to send.</p>
        <ul>
          <li>Inquiry form: your name, email, the kind of inquiry, subject, and message.</li>
          <li>Studio visits and commissions: the same details, plus anything you later send about a site, a budget, or a deadline.</li>
          <li>Newsletter: your email address, and the fact that you asked for studio notes.</li>
          <li>Consent form: the choices you make about essential storage, remembered preferences, and studio notes.</li>
        </ul>
        <p className="mt-4">
          We do not ask for payment card numbers on this website. A commission is paid under the written proposal, not through this form.
        </p>
      </section>

      <section>
        <h2>What the site stores on its own</h2>
        <p>
          The consent banner saves your choice in this browser so we do not ask again on every page. That record stays on your device. If you choose “essential only,” we keep that choice and nothing else. We do not run advertising trackers, and we do not sell a profile of you.
        </p>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To answer the message you sent.</li>
          <li>To prepare a proposal, schedule a visit, or carry out a commission you asked for.</li>
          <li>To send studio notes, only if you opted in.</li>
          <li>To keep a record of a finished commission, including care instructions, for as long as the work needs looking after.</li>
        </ul>
      </section>

      <section>
        <h2>Who else sees it</h2>
        <p>
          The studio staff who need it: James for commissions and visits, and Diana for the work itself. If a piece has to be cast or installed, the foundry or the rigging crew receives only what they need to do that job — dimensions, site notes, and a contact for delivery. We do not give your details to mailing lists, galleries we do not work with, or data brokers.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <ul>
          <li>Unanswered inquiries: until we have replied, then up to two years in case you write again.</li>
          <li>Commission files: for the life of the work, and seven years after the last invoice, so we can still answer a question about the material or the install.</li>
          <li>Newsletter: until you unsubscribe.</li>
          <li>Consent choice: until you change it or clear this browser.</li>
        </ul>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You can ask us to correct a message, send you a copy of what we hold from you, or delete an inquiry that did not become a commission. Write to <a href="mailto:studio@sculptmoore.com">studio@sculptmoore.com</a> with the address you used. You can change cookies and studio-notes consent any time on the <Link to="/consent">consent page</Link>. Unsubscribing from a studio note stops the mail.
        </p>
        <p className="mt-4">
          School workshops are arranged with the school. We do not collect a child’s contact details through this website.
        </p>
      </section>

      <section>
        <h2>This policy</h2>
        <p>
          If we change what we collect or why, we will update the date at the top of this page. The current version is the one on the site.
        </p>
      </section>
    </LegalPage>
  );
};

export default PrivacyPage;
