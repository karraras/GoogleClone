import { useGlobalContext } from "../component/Context";

function Images() {
  const { data, loading } = useGlobalContext();
  if (loading) {
    return (
      <section>
        <div className="container flex items-center justify-center">
          loading....
        </div>
      </section>
    );
  }
  return (
    <section className="overflow-y-auto flex-1 ">
      <div className="container  grid grid-cols-2 gap-y-6 gap-x-24">
        {data?.results?.map((item, index) => {
          return (
            <div key={index}>
              <p className="my-2 text-[12px] text-text">{item.url}</p>
              <p className="text-blue text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Images;
