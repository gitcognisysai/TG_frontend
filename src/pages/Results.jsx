
import { useState } from "react";
import { Search } from "lucide-react";

import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function Results() {
  const [showResult, setShowResult] = useState(false);
  const [regno, setRegno] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <SiteLayout>
      <PageBanner title="Results" crumbs={[{ label: "Results" }]} />

      <div className="container mx-auto max-w-4xl py-12 px-4">

        {/* Search Box */}
        <div className="max-w-xl mx-auto shadow-md border border-gray-200 rounded-xl bg-white">

          <div className="bg-gray-100 border-b px-6 py-4 rounded-t-xl">
            <h2 className="text-xl font-serif text-[#06254D]">
              Check Your Result
            </h2>
          </div>

          <div className="p-6">
            <form onSubmit={handleSearch} className="space-y-4">

              <input
                type="text"
                placeholder="Enter Registration Number"
                value={regno}
                onChange={(e) => setRegno(e.target.value)}
                className="w-full h-10 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[#06254D] text-white py-2 rounded-md hover:opacity-90 transition"
              >
                <Search className="w-4 h-4 mr-2" />
                Get Result
              </button>

            </form>
          </div>
        </div>

        {/* Result Display */}
        {showResult && (
          <div className="mt-10">
            <div className="shadow-lg border border-gray-200 rounded-xl bg-white">

              <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-semibold">Result Details</h3>
              </div>

              <div className="p-6 space-y-2 text-sm">
                <p><strong>Name:</strong> Rahul Sharma</p>
                <p><strong>Registration No:</strong> {regno || "PGCET20261234"}</p>
                <p><strong>Marks:</strong> 82 / 100</p>
                <p><strong>Rank:</strong> 1245</p>
                <p className="text-green-600 font-bold">Qualified</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </SiteLayout>
  );
}