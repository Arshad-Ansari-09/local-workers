

export default function Page() {
  return (
    <section className="w-full bg-zinc-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
            About Local Workers
          </h2>
          <p className="text-zinc-600 max-w-3xl mx-auto">
            A smart platform that connects people with trusted service professionals
            in their local area — fast, simple, and reliable.
          </p>
        </div>

        {/* What is Local Workers */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-zinc-900">
              What is Local Workers?
            </h3>
            <p className="text-zinc-600">
              Local Workers helps customers find verified electricians, plumbers,
              cleaners, delivery helpers, and more from their nearby area.
              We remove middlemen and make hiring local services easy, safe, and digital.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <ul className="space-y-4 text-zinc-700">
              <li>✔ Location-based worker discovery</li>
              <li>✔ Verified professional profiles</li>
              <li>✔ Direct chat & booking</li>
              <li>✔ No commission or agents</li>
              <li>✔ Fast & secure platform</li>
            </ul>
          </div>
        </div>

        {/* How it Works */}
        <div className="space-y-10">
          <h3 className="text-3xl font-semibold text-center text-zinc-900">
            How It Works
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Sign Up",
                desc: "Create an account as a Customer or Worker."
              },
              {
                title: "Set Location",
                desc: "We use your location to show nearby services."
              },
              {
                title: "Connect",
                desc: "Chat and book workers instantly."
              },
              {
                title: "Get Work Done",
                desc: "Complete the job safely and easily."
              }
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg text-zinc-900">
                  {step.title}
                </h4>
                <p className="text-zinc-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-zinc-900 rounded-2xl p-12 text-center text-white space-y-6">
          <h3 className="text-3xl font-bold">Our Mission</h3>
          <p className="max-w-3xl mx-auto text-zinc-300">
            We aim to digitize local jobs and create income opportunities for
            skilled workers while making daily services reliable and easy for everyone.
          </p>
        </div>

      </div>
    </section>
  );
}
