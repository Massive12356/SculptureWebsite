import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services, faqs } from '../data/mockData';
import {
  ConceptSketch,
  ConsultationSketch,
  InstallationSketch,
  MaterialSketch,
  SculptingSketch,
} from '../components/CommissionSketches';

const commissionSteps = [
  { number: '01', title: 'Consultation', Sketch: ConsultationSketch },
  { number: '02', title: 'Concept & Sketch', Sketch: ConceptSketch },
  { number: '03', title: 'Material Selection', Sketch: MaterialSketch },
  { number: '04', title: 'Sculpting', Sketch: SculptingSketch },
  { number: '05', title: 'Delivery & Installation', Sketch: InstallationSketch },
];

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a single marble for a private room to a bronze that has to live outdoors for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2 text-sm text-gray-700">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gray-400">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Commission Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Five studies from the bench, the way a piece actually begins.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {commissionSteps.map((step, index) => (
              <article
                key={step.number}
                className={`bg-[#f6f1e7] text-gray-900 rounded-sm px-4 pt-3 pb-5 shadow-lg transition-transform duration-300 hover:!rotate-0 ${
                  ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-1'][index]
                }`}
              >
                <p className="text-[11px] tracking-[0.22em] text-gray-500 mb-1">{step.number}</p>
                <step.Sketch />
                <h3 className="mt-2 text-sm font-semibold leading-snug">{step.title}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions we hear first</h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq) => {
              const open = openFaq === faq.id;
              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left py-5 gap-6"
                    aria-expanded={open}
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <span className="text-gray-400 text-2xl leading-none">{open ? '−' : '+'}</span>
                  </button>
                  {open && (
                    <p className="pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg">
            Request a Commission
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;