export default function Example() {
  return (
    <>
      <main
        className="h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-base font-semibold text-black text-opacity-50">VHDLLab Plus Plus</p>
          <p className="text-xs font-semibold text-black text-opacity-50">Made by <a href="https://github.com/JakovGlavac">ALFA</a></p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Život je prekratak za digitalnu</h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            Copy Pastaj i uživaj u modificiranoj verziji VHDLLab-a
          </p>
          <div className="mt-6">
            <a
              download
              href="https://github.com/JakovGlavac/vhdllab-plus-plus/releases/download/epic/vhdl.plus.plus.jar"
              className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Prezumi VHDLLab Plus Plus
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
