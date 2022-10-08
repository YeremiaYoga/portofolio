const Contacts = () => {
  return (
    <div id="contacts" className="h-full py-20">
      <div>
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="font-semibold text-lg mb-2">Contact</h1>
          </div>
        </div>
        <form>
          <div className="w-full lg:w-1/3 lg:mx-auto">
            <div className="w-full mb-8 px-4">
              <label for="nama">Nama</label>
              <input
                className="w-full bg-slate-200 text-dark p-3 rounded-md"
                type="text"
                id="nama"
              ></input>
            </div>
            <div className="w-full mb-8 px-4">
              <label for="nama">Email</label>
              <input
                className="w-full bg-slate-200 text-dark p-3 rounded-md"
                type="text"
                id="nama"
              ></input>
            </div>
            <div className="w-full mb-8 px-4">
              <label for="nama">Pesan</label>
              <textarea
                className="w-full bg-slate-200 text-dark p-3 rounded-md"
                type="text"
                id="nama"
              ></textarea>
            </div>
            <div className="flex px-4 justify-center">
              <button className=" text-base lg:w-60 bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-2 px-8 border border-sky-500 rounded">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contacts;
