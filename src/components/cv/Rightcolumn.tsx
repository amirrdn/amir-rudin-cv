
const Rightcolumn = ({ dictionary }: { dictionary: { intro: string; exprience?: { title: string; company: string; date_work: []; jobdesc: string; address_work: string }[] } }) => {
    return(<>
        <div className="flex-shrink-0 w-full h-px bg-current" />
        <div className="mt-2 mb-2">
          <svg
            fill="currentColor"
            className="w-6 h-6 float-left me-5"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"></path>
              <path d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"></path>
              <path d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path>
            </g>
          </svg>
          <span className="font-lg">EDUCATION</span>
        </div>
        <div className="flex-shrink-0 w-full h-px bg-current" />
        <div className="mb-2 mt-2">
            <div className="flex flex-col">
                <div className="relative">
                    <div className="absolute w-1 h-full bg-gray-300 left-1 transform -translate-x-1/1"></div>
                    <div className="flex flex-col space-y-2">
                        <div className=" items-center">
                            <div className="w-3 h-3 rounded-full bg-current"></div>
                            <div className="ml-4">
                                <p className="text-lg font-bold">Diploma 3</p>
                                <p>Bina Saran Informatika</p>
                                <p className="text-sm">2011 - 2014</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-5 mt-10">
            <div className="flex-shrink-0 w-full h-px bg-current" />
            <div className="mt-2 mb-2">
            <svg
                className="w-8 h-8 float-left me-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                <path
                    d="M18 18.7083C18 17.0886 16.8283 15 15 15H9C7.17172 15 6 17.0886 6 18.7083M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                ></path>
                </g>
            </svg>
            <span className="font-lg">EXPERIENCE</span>
            </div>
            <div className="flex-shrink-0 w-full h-px bg-current mt-4" />
            <div className="mb-2 mt-2">
            <div className="flex flex-col">
                <div className="relative">
                    {
                        dictionary.exprience && dictionary.exprience.map((b, index) => (
                            <div key={index}>
                            <div className="absolute top-5 w-1 h-full bg-current left-1 transform -translate-x-1/1"></div>
                            <div className="flex flex-col space-y-5 mb-5">
                                <div className="items-center">
                                    <div className="w-3 h-3 relative top-5 rounded-full bg-current"></div>
                                    <div className="ml-10">
                                        <p className="text-2xl font-bold mb-2">{b.title}</p>
                                        <p className="text-base font-bold mb-2">{b.company}</p>
                                        <p className="text-sm mb-2">{b.address_work}</p>
                                        <p className="text-sm mb-2"> {b.date_work.join(' - ')}</p>
                                        <p>
                                            {b.jobdesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-5 w-1 h-full bg-current left-1 transform -translate-x-1/1"></div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
        </div>
    </>)
}

export default Rightcolumn;