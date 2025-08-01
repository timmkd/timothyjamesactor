import { content } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">About</h1>
          <p className="mt-2 text-gray-600">
            Professional background and personal details
          </p>
          <div className="mt-4">
            <p className="text-lg text-blue-600 font-medium">
              Dad • Actor • Web Developer • Sometimes Japanese Speaker
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Based in Melbourne, Australia
            </p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Personal details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900">Age Range:</span>
                <span className="text-gray-600 ml-2">
                  {content.profile.ageRange}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Height:</span>
                <span className="text-gray-600 ml-2">
                  {content.profile.heightCm}cm
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">
                  Base Location:
                </span>
                <span className="text-gray-600 ml-2">
                  {content.profile.baseLocation}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Nationality:</span>
                <span className="text-gray-600 ml-2">
                  {content.profile.nationality}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900">Hair Color:</span>
                <span className="text-gray-600 ml-2">
                  {content.profile.physical.hairColor}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Eye Color:</span>
                <span className="text-gray-600 ml-2">
                  {content.profile.physical.eyeColor}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Ethnicity:</span>
                <span className="text-gray-600 ml-2">
                  {content.profile.ethnicity}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">
                  Singing Range:
                </span>
                <span className="text-gray-600 ml-2">
                  {content.profile.singingRange}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Professional summary
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {content.profile.summary}
          </p>
          <p className="text-gray-700 leading-relaxed">
            With over 15 years of professional experience across multiple
            continents, Timothy has developed a versatile skill set that spans
            classical theatre, contemporary film, and commercial work. His
            background in musical theatre, combined with his screen experience,
            makes him a dynamic performer capable of adapting to diverse roles
            and production styles.
          </p>
        </div>

        {/* Unique Branding */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            What makes me unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Dad</h3>
                  <p className="text-sm text-gray-600">
                    Bringing authentic family dynamics and relatability to roles
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white p-2 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Web developer</h3>
                  <p className="text-sm text-gray-600">
                    Also working as a coder and web developer. Technical
                    understanding for tech-focused roles and projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500 text-white p-2 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Japanese speaker
                  </h3>
                  <p className="text-sm text-gray-600">
                    Cultural versatility and language skills for international
                    projects
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 text-white p-2 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Fitness enthusiast
                  </h3>
                  <p className="text-sm text-gray-600">
                    5 years CrossFit, half marathon runner - ready for
                    physically demanding roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Skills & specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {content.profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Languages:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {content.profile.languages.map((language, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Accents:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {content.profile.accents.map((accent, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {accent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training & Education */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Training & education
          </h2>
          <div className="space-y-4">
            {content.training.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.course}</h3>
                    <p className="text-gray-600">{item.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.years}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.field}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Career highlights
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                International experience
              </h3>
              <p className="text-gray-700 text-sm">
                Timothy has worked professionally in Australia, the United
                Kingdom, and the United States, gaining valuable experience
                across different markets and production styles.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Diverse portfolio
              </h3>
              <p className="text-gray-700 text-sm">
                From major Hollywood blockbusters like &ldquo;Guardians of the
                Galaxy&rdquo; and &ldquo;Star Wars: Rogue One&rdquo; to intimate
                theatre productions and commercial campaigns, Timothy&apos;s
                work spans the full spectrum of performance media.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Musical theatre excellence
              </h3>
              <p className="text-gray-700 text-sm">
                With a strong foundation in musical theatre, Timothy has
                performed leading roles in productions including &ldquo;Les
                Misérables,&rdquo; &ldquo;Next to Normal,&rdquo; and
                &ldquo;Seussical the Musical,&rdquo; showcasing his vocal range
                and dramatic abilities.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Teaching & mentoring
              </h3>
              <p className="text-gray-700 text-sm">
                Timothy has shared his expertise as a teacher at The Actors
                Centre in London, mentoring emerging actors and contributing to
                the development of the next generation of performers. This
                experience demonstrates his deep understanding of acting
                techniques and his commitment to the craft.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Physical fitness & endurance
              </h3>
              <p className="text-gray-700 text-sm">
                With 5 years of CrossFit training and experience running half
                marathons, Timothy brings physical stamina and athleticism to
                roles requiring action or demanding physical performance. This
                fitness background enhances his versatility for physically
                challenging productions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
