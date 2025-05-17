import React from "react";

const RecentWorks = () => {
  const workContent = [
    {
      img: "src/assets/img/1hi.png",
      title: "Beef Shawarma, Tikka, Burger",
      Category: "Digital Marketing",
      uploadDate: "Mar 8 2025",
      Views: 1403,
      Likes: 65,
      Source: "Youtube",
    },
    {
      img: "src/assets/img/2hi.png",
      title: "Beef Shawarma, Tikka, Burger",
      Category: "Digital Marketing",
      uploadDate: "Mar 8 2025",
      Views: 1403,
      Likes: 65,
      Source: "Youtube",
    },
    {
      img: "src/assets/img/3hi.png",
      title: "Beef Shawarma, Tikka, Burger",
      Category: "Digital Marketing",
      uploadDate: "Mar 8 2025",
      Views: 0,
      Likes: 65,
      Source: "Instagram",
    },
    {
      img: "src/assets/img/4hi.png",
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
      <div className="w-5/6 flex-1 flex-wrap flex flex-col lg:flex-row justify-evenly items-center space-y-5 mb-10">
        {workContent.map((item, index) => (
          <div key={index} className="w-full lg:w-5/12 flex space-x-5">
            <img
              src={item.img}
              alt="Work"
              width="100%"
              height="100%"
              className="w-3/12 border-2 border-[#AAAAAA50] rounded-2xl card"
            />
            <div className="card rounded-2xl w-5/6 space-y-5 p-5 text-[#555] dark:text-[#AAA]">
              <h2>{item.title}</h2>
              <h1 className="text-black dark:text-white">{item.Category}</h1>
              <h2 className="text-black dark:text-white">Statistics</h2>
              <div className="w-5/6 mx-auto">
                <p>
                  Uploaded on{" "}
                  <span className="text-black dark:text-white sora">{item.uploadDate}</span>
                </p>
                {item.Views > 0 ? (
                  <p>
                    Got <span className="text-black dark:text-white sora">{item.Views}</span>{" "}
                    Views
                  </p>
                ) : null}
                <p>
                  Got <span className="text-black dark:text-white sora">{item.Likes}</span>{" "}
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
