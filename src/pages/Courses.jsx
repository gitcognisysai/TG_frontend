


import SiteLayout from "@/components/layout/SiteLayout"
import PageBanner from "@/components/layout/PageBanner"

const btechCourses = [
  { sl: "01", code: "CIV", name: "Civil Engineering" },
  { sl: "02", code: "EEE", name: "Electrical and Electronics Engineering" },
  { sl: "03", code: "ANE", name: "Aeronautical Engineering" },
  { sl: "04", code: "AUT", name: "Automobile Engineering" },
  { sl: "05", code: "IPE", name: "Industrial Production Engineering" },
  { sl: "06", code: "MCT", name: "Mechanical (Mechatronics) Engineering" },
  { sl: "07", code: "MEC", name: "Mechanical Engineering" },
  { sl: "08", code: "ARB", name: "Automation and Robotics" },
  { sl: "09", code: "MMT", name: "Metallurgy and Material Engineering" },
  { sl: "10", code: "MET", name: "Metallurgical Engineering" },
  { sl: "11", code: "MIN", name: "Mining Engineering" },
  { sl: "12", code: "ECE", name: "Electronics and Communication Engineering" },
  { sl: "13", code: "ECI", name: "Electronics Communication and Instrumentation Engineering" },
  { sl: "14", code: "EIE", name: "Electronics and Instrumentation Engineering" },
  { sl: "15", code: "ETM", name: "Electronics and Telematics" },
  { sl: "16", code: "ECM", name: "Electronics and Computer Engineering" },
  { sl: "17", code: "AI", name: "Artificial Intelligence" },
  { sl: "18", code: "AID", name: "Artificial Intelligence and Data Science" },
  { sl: "19", code: "AIM", name: "Artificial Intelligence and Machine Learning" },
  { sl: "20", code: "CME", name: "Computer Engineering" },
  { sl: "21", code: "CSB", name: "Computer Science and Business System" },
  { sl: "22", code: "CSC", name: "Computer Science and Engineering (Cyber Security)" },
  { sl: "23", code: "CSD", name: "Computer Science and Engineering (Data Science)" },
  { sl: "24", code: "CSE", name: "Computer Science and Engineering" },
  { sl: "25", code: "CSG", name: "Computer Science & Design" },
  { sl: "26", code: "CSI", name: "Computer Science and Information Technology" },
  { sl: "27", code: "CSM", name: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)" },
  { sl: "28", code: "CSN", name: "Computer Science & Engineering (Networks)" },
  { sl: "29", code: "CSO", name: "Computer Science and Engineering (IoT)" },
  { sl: "30", code: "CST", name: "Computer Science and Technology" },
  { sl: "31", code: "CSW", name: "Computer Engineering (Software Engineering)" },
  { sl: "32", code: "INF", name: "Information Technology" },
  { sl: "33", code: "CIC", name: "CSE (IoT and Cyber Security including Block Chain Technology)" },
  { sl: "34", code: "CHE", name: "Chemical Engineering" },
  { sl: "35", code: "TEX", name: "Textile Technology" },
  { sl: "36", code: "BME", name: "Bio-Medical Engineering" },
]

// const pharmacyCourses = [
//   { sl: "01", code: "PHM", name: "Pharmacy" },
//   { sl: "02", code: "PHE", name: "Pharmaceutical Engineering" },
// ]

function CourseCard({ course }) {
  return (
    <div className="h-full rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded-md bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground">
          {course.sl}
        </span>

        <span className="text-lg font-serif font-bold text-primary">
          {course.code}
        </span>
      </div>

      <h3 className="font-medium text-foreground leading-relaxed">
        {course.name}
      </h3>
    </div>
  )
}

export default function Courses() {
  return (
    <SiteLayout>
      <PageBanner title="Courses Offered" crumbs={[{ label: "Courses" }]} />

      <div className="container mx-auto max-w-6xl py-16 px-4">
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10 text-lg">
          List of B.E./B.Tech. courses for 2026-2027 lateral entry candidates.
        </p>

        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            B.E / B.Tech Courses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {btechCourses.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </div>
{/* 
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            B. Pharmacy Courses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {pharmacyCourses.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </div> */}

        <div className="mt-12 text-sm md:text-base text-[#0B2C5F] leading-8">
          <p>
            <span className="font-bold">Note:</span>{" "}
            The eligibility criteria for admission into the new B.E./B.Tech. programmes
            permitted by the Government of Telangana will be considered at the time of
            admission based on the Telangana Government Orders for the academic year
            2026-2027.
          </p>
        </div>
      </div>
    </SiteLayout>
  )
}