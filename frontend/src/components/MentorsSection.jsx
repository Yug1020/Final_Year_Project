import React, { useEffect, useState, useMemo } from "react";

const MentorsSection = () => {
  const [mentorsData, setMentorsData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch mentors.json from public/data/Mentors/
  useEffect(() => {
  fetch("/data/Mentors/mentors.json")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log("✅ Mentors loaded:", data);
      setMentorsData(data);
    })
    .catch((err) => console.error("❌ Error loading mentors:", err));
}, []);

  const allMentors = mentorsData?.mentors || [];

  const filteredMentors = useMemo(() => {
    if (!searchQuery.trim()) return allMentors;
    const q = searchQuery.toLowerCase();
    return allMentors.filter(
      (m) =>
        (m.name && m.name.toLowerCase().includes(q)) ||
        (m.university && m.university.toLowerCase().includes(q))
    );
  }, [allMentors, searchQuery]);

  if (!mentorsData) {
    return (
      <div className="text-center text-gray-600 py-20 text-xl">
        Loading mentors...
      </div>
    );
  }

  const getPhotoSrc = (photoPath) => {
    if (!photoPath) return "";
    // If photoPath is already just a filename, use it directly
    if (!photoPath.includes('/') && !photoPath.includes('\\')) {
      const src = `/data/Mentors/Photos.master/${encodeURIComponent(photoPath)}`;
      return src;
    }
    // If it's a full path, extract the filename
    const parts = photoPath.split(/[\\/]/);
    const filename = parts[parts.length - 1];
    const src = `/data/Mentors/Photos.master/${encodeURIComponent(filename)}`;
    return src;
  };

  const rowA = filteredMentors.filter((_, i) => i % 2 === 0);
  const rowB = filteredMentors.filter((_, i) => i % 2 === 1);

  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">
          Find Your Perfect Mentor
        </h2>

        {/* 🔍 Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by mentor name or university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* 🔹 Search Results */}
        {searchQuery.trim() ? (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 w-[320px]"
              >
                <img
                  src={getPhotoSrc(mentor.photo)}
                  alt={mentor.name}
                  className="w-[90%] h-[220px] object-cover rounded-xl mx-auto mt-4"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9Ijc1IiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEyNSA3NSAxMDAgMTAwIDEwMEMxMjUgMTAwIDE1MCAxMjUgMTUwIDE1MFYxNzBINTAgVjE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                    e.target.onerror = null;
                  }}
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-indigo-500 font-medium">
                    {mentor.university}
                  </p>
                  <p className="text-gray-500">{mentor.country}</p>
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform mt-3">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // 🔹 Marquee Rows
          <div className="flex flex-col gap-10 overflow-hidden">
            <div className="flex animate-scroll gap-6">
              {[...rowA, ...rowA].map((mentor, index) => (
                <div
                  key={`${mentor.id}-a-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-md w-[320px]"
                >
                  <img
                    src={getPhotoSrc(mentor.photo)}
                    alt={mentor.name}
                    className="w-[90%] h-[220px] object-cover rounded-xl mx-auto mt-4"
                    onError={(e) => {
                      e.target.src = '/data/Mentors/Photos.master/default-avatar.png';
                      e.target.onerror = null;
                    }}
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold">{mentor.name}</h3>
                    <p className="text-indigo-500 font-medium">
                      {mentor.university}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex animate-scroll-reverse gap-6">
              {[...rowB, ...rowB].map((mentor, index) => (
                <div
                  key={`${mentor.id}-b-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-md w-[320px]"
                >
                  <img
                    src={getPhotoSrc(mentor.photo)}
                    alt={mentor.name}
                    className="w-[90%] h-[220px] object-cover rounded-xl mx-auto mt-4"
                    onError={(e) => {
                      e.target.src = '/data/Mentors/Photos.master/default-avatar.png';
                      e.target.onerror = null;
                    }}
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold">{mentor.name}</h3>
                    <p className="text-indigo-500 font-medium">
                      {mentor.university}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 🔁 Animations */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 35s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 35s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default MentorsSection;
