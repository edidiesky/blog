"use client";
import Image from "next/image";

const data = {
  title: "The Astonishing Origins of 6 Common Compound Words",
  description: "The “Cob” in “Cobweb,” the “Hodge” in “Hodgepodge,” and more lovely old oddities that still cling to life in compounds.",
  date: "Dec 20, 2023",
  time: "10 min read",
  topic: ['Software development'],
  coverimage: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Pb0-j607x_RI0sPst86M1Q.jpeg"
}

export const Details = () => {
  return (
    <div className="min-h-full py-6">
      <div className="max-w-custom_2 px-8 py-12 m-auto flex flex-col gap-y-2 items-center justify-center">
        <div className="w-full flex flex-col items-start gap-y-4 gap-x-24">
          <div className="w-full pb-12 gap-y-12 flex flex-col items-start gap-2">
            <div className="flex w-full flex-col gap-4">
              <h3 className=" text-4xl lg:text-6xl font-blog-bold font-bold text-text_dark_1">
                {data?.title}
              </h3>
              <h4 className="text-xl lg:text-2xl font-blog-light font-normal text-text_grey_1">
                {data?.description}
              </h4>
              <div className="flex mt-3 items-center gap-4">
                <h5 className="text-[14px] font-blog-light font-normal text-text_grey_1">
                  {data?.date}
                </h5>
                <h5 className="text-[14px] font-blog-light font-normal text-text_grey_1">
                  {data?.time}
                </h5>
                <span className="text-[14px] font-blog-light font-normal text-text_grey_1">
                  {data?.topic[0]}
                </span>
              </div>
              <div className="flex justify-between py-6 px-4 border-t border-b border-[rgba(0,0,0,.08)] mt-3 items-center gap-4">
                <h5 className="text-[14px] font-blog-light font-normal text-text_grey_1">
                  {data?.date}
                </h5>

              </div>
            </div>
            <Image
              alt="Cotion"
              className='w-[100%] mt-6 mb-6'
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
              src={data?.coverimage}
            />
          </div>


          {/* paragraphs */}
          <div className="w-100 py-4 text-lg lg:text-xl text-text_dark_1 font-medium leading-[30px] font-blog-styles">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold font-blog-bold">What is Ollama?</h3>
              <h4 className="w-100 text-lg lg:text-xl text-text_dark_1 font-medium leading-[3] font-blog-styles">
                Ever thought of running your own large language models (LLMs) or vision language models (VLMs) on your own device? You probably did, but the thoughts of setting things up from scratch, having to manage the environment, downloading the right model weights, and the lingering doubt of whether your device can even handle the model has probably given you some pause.

                Let’s go one step further than that. Imagine operating your own LLM or VLM on a device no larger than a credit card — a Raspberry Pi. Impossible? Not at all. I mean, I’m writing this post after all, so it definitely is possible.

                Possible, yes. But why would you even do it?
                LLMs at the edge seem quite far-fetched at this point in time. But this particular niche use case should mature over time, and we will definitely see some cool edge solutions being deployed with an all-local generative AI solution running on-device at the edge.

                It’s also about pushing the limits to see what’s possible. If it can be done at this extreme end of the compute scale, then it can be done at any level in between a Raspberry Pi and a big and powerful server GPU.

                Traditionally, edge AI has been closely linked with computer vision. Exploring the deployment of LLMs and VLMs at the edge adds an exciting dimension to this field that is just emerging.

                Most importantly, I just wanted to do something fun with my recently acquired Raspberry Pi 5.

                So, how do we achieve all this on a Raspberry Pi? Using Ollama!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
