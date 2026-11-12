
type ProcessItem = {
  title: string;
  text: string;
};

type Props = {
  className?: string;
  circles: ProcessItem[];
};

export default function Process({ className, circles }: Props) {
  return (
    <section className={`${className}`}>
      <div className="mt-16 grid flex-col md:grid-cols-[repeat(2,20rem)] 2xl:grid-cols-[repeat(4,20rem)] justify-center gap-8 md:gap-12 items-center ">
        {circles.map((e, index) => (
          <div key={index}>
            <div
              className={`lg:relative h-80 w-80 rounded-full flex flex-col gap-8 items-center border-4 border-sage dark:bg-darkblue`}
            >
              <div className="relative mt-12 bg-sage w-12 h-12 rounded-full flex items-center justify-center font-semibold ">
                {index === 0 && (
                  <div className="hidden 2xl:block absolute z-[-1] left-0 w-[1px] h-[720px] lg:h-2 lg:w-[1120px] border-l-3 lg:border-t-3 border-dashed border-sage"></div>
                )}
                <span className="block text-xl !text-stone-light">{index + 1}</span>
              </div>
              <div>
                <h1 className="text-center">{e.title}</h1>
                <p className="pt-4 w-3/4 mx-auto text-center font-light text-sm">{e.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
