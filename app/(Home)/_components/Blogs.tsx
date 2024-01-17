"use client";
import Image from "next/image";

const data = [
  {
    title: "The Astonishing Origins of 6 Common Compound Words",
    description: "The “Cob” in “Cobweb,” the “Hodge” in “Hodgepodge,” and more lovely old oddities that still cling to life in compounds.",
    date: "Dec 20, 2023",
    time: "10 min read",
    topic: ['Software development'],
    coverimage: "https://miro.medium.com/v2/resize:fill:200:134/0*cpo4BkH-JSLZopKm.png"
  },
  {
    title: "How I Won Singapore’s GPT-4 Prompt Engineering Competition",
    description: "The “Cob” in “Cobweb,” the “Hodge” in “Hodgepodge,” and more lovely old oddities that still cling to life in compounds.",
    date: "Dec 20, 2023",
    time: "10 min read",
    topic: ['Self Reflection'],
    coverimage: "https://miro.medium.com/v2/resize:fill:200:134/1*RAI4cBXe1_zaxVykHz79oA.jpeg"
  }, {
    title: "Advice to my younger self and you after 20 years in programming",
    description: "The “Cob” in “Cobweb,” the “Hodge” in “Hodgepodge,” and more lovely old oddities that still cling to life in compounds.",
    date: "Dec 20, 2023",
    time: "10 min read",
    topic: ['Software development'],
    coverimage: "https://miro.medium.com/v2/resize:fill:200:134/1*RAI4cBXe1_zaxVykHz79oA.jpeg"
  },
  {
    title: "Martin Luther King Jr Was More Radical Than You Think",
    description: "The “Cob” in “Cobweb,” the “Hodge” in “Hodgepodge,” and more lovely old oddities that still cling to life in compounds.",
    date: "Dec 20, 2023",
    time: "10 min read",
    topic: ['Software development'],
    coverimage: "https://miro.medium.com/v2/resize:fill:200:134/1*JYQVP8UxJN0w5orcEoZpQA.png"
  }
]

export const Blogs = () => {
  return (
    <div className="min-h-full py-6">
      <div className="max-w-custom px-8 m-auto flex flex-col gap-y-2 items-center justify-center">
        <div className="w-full md:grid md:grid-cols-custom flex flex-col-reverse items-start gap-y-4 gap-x-24">
          <div className="flex flex-col min-h-screen gap-12">
            {
              data?.map((x?: any, index?: any) => {
                return <div className="w-full pb-12 gap-y-12 border-b border-[rgba(0,0,0,.2)] flex flex-col-reverse md:flex-row items-start md:items-center gap-2">
                  <div className="flex w-full flex-col gap-3">
                    <h3 className="text-xl font-blog-bold font-bold text-text_dark_1">
                      {x?.title}
                    </h3>
                    <h4 className="text-base font-blog-light font-normal text-text_grey_1">
                      {x?.description}
                    </h4>
                    <div className="flex mt-3 items-center gap-4">
                      <h5 className="text-[12px] font-blog-light font-normal text-text_grey_1">
                        {x?.date}
                      </h5>
                      <h5 className="text-[12px] font-blog-light font-normal text-text_grey_1">
                        {x?.time}
                      </h5>
                      <span className="text-[12px] py-1.5 px-3 bg-[rgba(0,0,0,.09)] rounded-full font-blog-light font-normal text-text_grey_1">
                        {x?.topic[0]}
                      </span>
                    </div>
                  </div>
                  <Image
                    alt="Cotion"
                    className='w-[280px]'
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src={x?.coverimage}
                  />
                </div>
              })
            }
          </div>
          <div className="flex px-0 py-6 md:px-4 relative top-[0] md:sticky md:top-[10%] flex-col gap-12">
            <div className="flex flex-col gap-3 gap-y-6">
              <h5 className="text-lg font-bold font-blog-bold text-text_dark_1">Discover more of what matters to you</h5>
              <div className="flex flex-wrap font-blog-light font-light text-sm text-text_dark_1 items-center gap-2">
                <span className="text-[14] py-3 px-3 bg-[rgba(0,0,0,.06)] rounded-full font-blog-light font-normal">
                  Programming
                </span>
                <span className="text-[14px] py-3 px-3 bg-[rgba(0,0,0,.06)] rounded-full font-blog-light font-normal">
                  Reactjs
                </span><span className="text-[14px] py-3 px-3 bg-[rgba(0,0,0,.06)] rounded-full font-blog-light font-normal">
                  Jobs
                </span><span className="text-[14px] py-3 px-3 bg-[rgba(0,0,0,.06)] rounded-full font-blog-light font-normal">
                  Society
                </span>
                <span className="text-[14px] py-3 px-3 bg-[rgba(0,0,0,.06)] rounded-full font-blog-light font-normal">
                  Football
                </span>
                <span className="text-[14px] py-3 px-3 bg-[rgba(0,0,0,.06)] rounded-full font-blog-light font-normal">
                  Self Improvement
                </span>
              </div>
            </div>
            <div className="flex flex-wrap  font-blog-light font-light text-sm text-text_grey_1 items-center gap-8">
              <h4>Help</h4>
              <h4>Status</h4>
              <h4>About Me </h4>
              <h4>Status</h4>
              <h4>About Me </h4> 
              <h4>Status</h4>
              <h4>About Me </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
