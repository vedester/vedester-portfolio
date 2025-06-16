import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xpwrrbzb"); // Your Formspree form ID
  const isSubmitting = state.submitting;
  const succeeded = state.succeeded;
  const hasError = state.errors?.length > 0; // ✅ Safe error check

  return (
    <section id="contact" className="bg-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
        Whether you're looking to hire, collaborate, or just say hi — I'm open to opportunities and conversations.
      </p>

      {succeeded ? (
        <p className="text-green-600 text-lg font-medium">
          ✅ Message sent successfully! I'll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-50 shadow-lg rounded-xl p-8 space-y-6"
        >
          <div className="text-left">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="text-left">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-md font-semibold transition duration-200 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Sending...' : '✉️ Send Message'}
          </button>

          {hasError && (
            <p className="text-red-600 font-medium mt-2">
              ⚠️ Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}

      {/* Contact Links */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-lg">
        <a
          href="mailto:vedester@gmail.com"
          className="text-blue-600 font-medium hover:underline"
        >
          📧 Email Me
        </a>
        <a
          href="https://wa.me/254745389833"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-medium hover:underline"
        >
          💬 WhatsApp
        </a>
        <a
          href="/Vedester_Otieno_CV.pdf"
          download
          className="text-gray-700 font-medium hover:underline"
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
}

export default Contact;
