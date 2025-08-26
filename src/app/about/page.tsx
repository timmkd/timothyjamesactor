import { content } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Timothy James - Actor",
  description:
    "Learn about Timothy James, a professional actor based in Melbourne. View skills, training, and personal details.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-foreground]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[--color-foreground]">
            About
          </h1>
          <p className="mt-2 text-[--color-muted]">
            Professional background and personal details
          </p>
          <div className="mt-4">
            <p className="text-lg text-blue-600 font-medium">
              Actor • Dad • Japanese Speaker • Tech Geek
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Based in Melbourne, Australia
            </p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="card card-hover p-6 mb-8">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
            Personal details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Age range:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.ageRange}
                </span>
              </div>
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Height:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.heightCm}cm
                </span>
              </div>
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Base location:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.baseLocation}
                </span>
              </div>
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Nationality:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.nationality}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Hair colour:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.physical.hairColor}
                </span>
              </div>
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Eye colour:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.physical.eyeColor}
                </span>
              </div>
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Ethnicity:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.ethnicity}
                </span>
              </div>
              <div>
                <span className="font-medium text-[--color-foreground]">
                  Singing range:
                </span>
                <span className="text-[--color-muted] ml-2">
                  {content.profile.singingRange}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="card card-hover p-6 mb-8">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
            Professional summary
          </h2>
          <p
            className="text-[--color-foreground] leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: content.profile.summary }}
          />
          <p className="text-[--color-foreground] leading-relaxed">
            With over 15 years of professional experience across multiple
            continents, Timothy has developed a versatile skill set that spans
            classical theatre, contemporary film, and commercial work. His
            background in musical theatre, combined with his screen experience,
            makes him a dynamic performer capable of adapting to diverse roles
            and production styles.
          </p>
        </div>

        {/* Unique Branding */}
        <div className="card card-hover p-6 mb-8">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
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
                  <h3 className="font-medium text-[--color-foreground]">Dad</h3>
                  <p className="text-sm text-[--color-muted]">
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
                  <h3 className="font-medium text-[--color-foreground]">
                    Tech geek
                  </h3>
                  <p className="text-sm text-[--color-muted]">
                    Currently working as a full-time web developer. Perfect for
                    authentic tech roles and awkward character types.
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
                  <h3 className="font-medium text-[--color-foreground]">
                    Japanese speaker
                  </h3>
                  <p className="text-sm text-[--color-muted]">
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
                  <h3 className="font-medium text-[--color-foreground]">
                    Fitness enthusiast
                  </h3>
                  <p className="text-sm text-[--color-muted]">
                    5 years CrossFit, half marathon runner - ready for
                    physically demanding roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="card card-hover p-6 mb-8">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
            Skills & specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-[--color-foreground] mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm [data-theme=dark]:bg-white/10 [data-theme=dark]:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-[--color-foreground]">
                    Languages:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {content.profile.languages.map((language, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm [data-theme=dark]:bg-white/10 [data-theme=dark]:text-white"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-[--color-foreground]">
                    Accents:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {content.profile.accents.map((accent, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm [data-theme=dark]:bg-white/10 [data-theme=dark]:text-white"
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
        <div className="card card-hover p-6 mb-8">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
            Training & education
          </h2>
          <div className="space-y-4">
            {content.training.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-[--color-foreground]">
                      {item.course}
                    </h3>
                    <p className="text-[--color-muted]">{item.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.years}</span>
                </div>
                <p className="text-sm text-[--color-muted] mt-1">
                  {item.field}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="card card-hover p-6">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
            Career highlights
          </h2>
          <div className="space-y-4">
            <div className="bg-[--color-background] p-4 rounded-lg">
              <h3 className="font-medium text-[--color-foreground] mb-2">
                International experience
              </h3>
              <p className="text-[--color-foreground] text-sm">
                Timothy has worked professionally in Australia, the United
                Kingdom, and the United States, gaining valuable experience
                across different markets and production styles.
              </p>
            </div>
            <div className="bg-[--color-background] p-4 rounded-lg">
              <h3 className="font-medium text-[--color-foreground] mb-2">
                Diverse portfolio
              </h3>
              <p className="text-[--color-foreground] text-sm">
                From major Hollywood blockbusters like &ldquo;Guardians of the
                Galaxy&rdquo; and &ldquo;Star Wars: Rogue One&rdquo; to intimate
                theatre productions and commercial campaigns, Timothy&apos;s
                work spans the full spectrum of performance media.
              </p>
            </div>
            <div className="bg-[--color-background] p-4 rounded-lg">
              <h3 className="font-medium text-[--color-foreground] mb-2">
                Musical theatre excellence
              </h3>
              <p className="text-[--color-foreground] text-sm">
                With a strong foundation in musical theatre, Timothy has
                performed leading roles in productions including &ldquo;Les
                Misérables,&rdquo; &ldquo;Next to Normal,&rdquo; and
                &ldquo;Seussical the Musical,&rdquo; showcasing his vocal range
                and dramatic abilities.
              </p>
            </div>
            <div className="bg-[--color-background] p-4 rounded-lg">
              <h3 className="font-medium text-[--color-foreground] mb-2">
                Teaching & mentoring
              </h3>
              <p className="text-[--color-foreground] text-sm">
                Timothy taught at The Actors Centre in London from 2014-2016,
                working with actors on technique and performance skills. This
                teaching experience deepened his understanding of different
                acting methodologies.
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
