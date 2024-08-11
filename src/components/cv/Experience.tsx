const Experience = () => {
    return (
      <section className="mt-8 py-10 bg-gray-900 text-white py-20 pl-10 mt-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-4">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Web Developer at XYZ Company</h3>
            <p className="">Jan 2021 - Present</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Developed and maintained the company website using Next.js and Tailwind CSS.</li>
              <li>Collaborated with the design team to create a responsive and user-friendly interface.</li>
            </ul>
          </div>
          {/* Tambahkan pengalaman lain di sini */}
        </div>
      </section>
    );
};

export default Experience;