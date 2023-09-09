export default function Layout({ children }) {
    return (
      <>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section
          className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
        >
          <img
            alt="Night"
            src="https://widyawicara.com/wp-content/uploads/2022/02/Perusahaan_Tentang_Kami-41-1024x683.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <img
              alt="Logo Widya Wicara"
              src="https://tts.widyawicara.com/_next/static/images/logo_widya-20608f15712f8f7c534b87ca23713551.png"
              className="h-16 sm:h-20"
            />

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to the Widya Wicara Knowledge Test Results
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              This application is built using Next.js and Tailwind CSS and serves as the frontend for the Knowledge Test REST API.
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <div
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              >
                <img
                  alt="Logo Widya Wicara"
                  src="https://tts.widyawicara.com/_next/static/images/logo_widya-20608f15712f8f7c534b87ca23713551.png"
                />
              </div>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to the Widya Wicara Knowledge Test Results
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                This application is built using Next.js and Tailwind CSS and serves as the frontend for the Knowledge Test REST API.
              </p>

            </div>
            
            <div>{children}</div>

          </div>
        </main>
      </div>
      </>
    )
  }