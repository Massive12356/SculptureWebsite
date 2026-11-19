import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';

const TermsPage = () => {
  return (
    <LegalPage kicker="Terms" title="Terms of Service" updated="November 16, 2026">
      <section>
        <h2>Using the site</h2>
        <p>
          These terms cover your use of the SCULPTMOORE website: the gallery, the journal, the inquiry form, and the pages that describe the practice. By using the site you agree to them. If you do not agree, please do not send a form or copy material from the pages.
        </p>
        <p className="mt-4">
          The studio is at 123 Artisan Lane, Creative District, New York, NY 10001. Reach us at <a href="mailto:studio@sculptmoore.com">studio@sculptmoore.com</a>.
        </p>
      </section>

      <section>
        <h2>A commission is a separate agreement</h2>
        <p>
          Writing to us, booking a visit, or talking through an idea is not an order. A commission begins only when both sides have signed a proposal that states the work, the material, the price, the schedule, and what happens if either side stops. Until that paper is signed, either side may walk away. The price on a proposal is the price. It does not change unless the size, the material, or the site changes, and we say so in writing first.
        </p>
      </section>

      <section>
        <h2>Gallery works</h2>
        <p>
          A work marked Available is offered until it is reserved in writing. Prices and availability on the site can change. A piece marked Sold, Inquire, or Commissioned is not for sale through the page. Asking about a work does not hold it.
        </p>
      </section>

      <section>
        <h2>Photographs, text, and the works themselves</h2>
        <p>
          The photographs, drawings, and words on this site belong to the studio, unless a caption says otherwise. You may look at them and share a link to a page. You may not copy a photograph or a text for sale, for another studio’s promotion, or to train a model, without written permission.
        </p>
        <p className="mt-4">
          Buying a sculpture, when that happens under a proposal, transfers the object. It does not transfer the copyright in the design or in the photographs of it. The studio may show the work in the gallery and the journal unless the proposal says the commission is private.
        </p>
      </section>

      <section>
        <h2>Studio visits</h2>
        <p>
          Visits are by appointment, on the days stated on the contact page. Open Studio Saturdays are the exception: individuals may walk in without a booking. Please follow the maker’s direction around tools, dust, and works in progress. The studio may refuse or end a visit that puts people or work at risk.
        </p>
      </section>

      <section>
        <h2>Messages and studio notes</h2>
        <p>
          The inquiry form is for conversations about the work. Do not send confidential documents through it. We reply in the order they arrive, usually within two working days. Studio notes are occasional. You will only receive them if you opt in, and you can stop them from any note or from the <Link to="/consent">consent page</Link>.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Break into the site, scrape it in a way that degrades it, or send unsolicited bulk mail through the form.</li>
          <li>Post or send anything unlawful, or pretend to be the studio or a client.</li>
          <li>Use the photographs as if they were yours.</li>
        </ul>
      </section>

      <section>
        <h2>The site is a description, not a guarantee</h2>
        <p>
          We keep the pages accurate. Dimensions, dates, and prices can still be wrong until they are confirmed in a proposal. The site is offered as it stands. To the extent the law allows, the studio is not liable for a decision you make from a page alone, before a proposal is signed. Nothing here limits liability that the law does not allow us to limit.
        </p>
      </section>

      <section>
        <h2>Changes and the law that applies</h2>
        <p>
          We may update these terms by posting a new version and changing the date above. The terms you are reading govern your use from that date. They are governed by the law of the State of New York, without regard to conflict-of-law rules. How we handle personal information is set out in the <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </LegalPage>
  );
};

export default TermsPage;
