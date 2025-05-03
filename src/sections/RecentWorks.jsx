import React from "react";

const RecentWorks = () => {
  const workContent = [
    {
      img: "src/assets/img/serviceImg/0.svg",
      title: "Beef Shawarma, Tikka, Burger",
      Category: "Digital Marketing",
      uploadDate: "Mar 8 2025",
      Views: 1403,
      Likes: 65,
      Source: "Youtube",
    },
    {
      img: "src/assets/img/serviceImg/1.svg",
      title: "Beef Shawarma, Tikka, Burger",
      Category: "Digital Marketing",
      uploadDate: "Mar 8 2025",
      Views: 1403,
      Likes: 65,
      Source: "Youtube",
    },
    {
      img: "src/assets/img/serviceImg/2.svg",
      title: "Beef Shawarma, Tikka, Burger",
      Category: "Digital Marketing",
      uploadDate: "Mar 8 2025",
      Views: 0,
      Likes: 65,
      Source: "Instagram",
    },
    {
      img: "src/assets/img/serviceImg/3.svg",
      title: "Beef Shawarma, Tikka, Burger",
      Category: "Digital Marketing",
      uploadDate: "Mar 8 2025",
      Views: 0,
      Likes: 65,
      Source: "Instagram",
    },
  ];

  return (
    <section className="flex flex-col justify-evenly items-center w-full min-h-screen space-y-10 text-justify border-b">
      <h1 className="text-3xl pt-10 w-5/6">Recent Works</h1>
      <div className="w-5/6 flex-1 flex-wrap flex flex-row justify-evenly items-center">
        {workContent.map((item, index) => (
          <div key={index} className="w-2/5 flex space-x-5">
            <img
              src={item.img}
              alt="Work"
              width="100%"
              height="100%"
              className="w-3/12 border-2 border-[#AAAAAA50] rounded-2xl"
            />
            <div className="card rounded-2xl w-4/6 space-y-5 p-5 text-[#AAA]">
              <h2>{item.title}</h2>
              <h1 className="text-white">{item.Category}</h1>
              <h2 className="text-white">Statistics</h2>
              <div className="indent-5">
                <p>
                  Uploaded on{" "}
                  <span className="text-white sora">{item.uploadDate}</span>
                </p>
                {item.Views > 0 ? (
                  <p>
                    Got <span className="text-white sora">{item.Views}</span>{" "}
                    Views
                  </p>
                ) : null}
                <p>
                  Got <span className="text-white sora">{item.Likes}</span>{" "}
                  Likes
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
