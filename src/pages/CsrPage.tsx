import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { csrPrograms } from '../data/mockData';

const principles = [
  {
    title: 'The work should outlast the making of it',
    text: 'We choose materials and methods that can be cared for, not just admired on delivery day. A bronze we cannot maintain is a bronze we will not propose.'
  },
  {
    title: 'The neighborhood is part of the studio',
    text: 'Artisan Lane is not a backdrop. Open Saturdays, school visits, and the civic gift program are scheduled the same way commissions are: on the calendar, with a person responsible.'
  },
  {
    title: 'Access is paid for, not extracted',
    text: 'Apprentices are employees. School workshops for public schools inside the city are free. We do not ask young people to work for exposure.'
  }
];

const CsrPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-4"
          >
            Corporate social responsibility
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          >
            What the studio owes the place it works in
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Sculptor Studio sets aside time, material, and money for the neighborhood, for students, and for the stone and metal we cut. This is that work, stated plainly.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.45 }}
                className="border-t-2 border-gray-900 pt-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Programs</h2>
            <p className="text-lg text-gray-600">
              Six commitments we fund from studio income. Priya Nair leads them. James Okonkwo puts them on the same schedule as client work, so they do not slip.
            </p>
          </div>

          <div className="space-y-16">
            {csrPrograms.map((program, index) => (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-2">
                    0{program.id}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-lg text-gray-800 mb-4">{program.summary}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                  <p className="inline-block bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium">
                    {program.impact}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '140', label: 'Visitors on open Saturdays' },
              { value: '18t', label: 'Stone offcut kept in use' },
              { value: '22', label: 'Classroom sessions' },
              { value: '6', label: 'Civic works gifted' }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner with the studio</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Schools, parks, libraries, and foundations can write to us about a workshop, a monument that needs care, or a place for the civic gift. Tell us the site, who it is for, and the season you have in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?inquiry=CSR%20%26%20partnerships&subject=Partnership%20inquiry"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start a partnership
            </Link>
            <Link
              to="/about"
              className="inline-block border border-gray-300 text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CsrPage;
