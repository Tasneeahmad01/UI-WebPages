import React from 'react';
import Fetch from './Fetch';

function AApp() {
  const seriesData = [
    {
      imgsrc: "https://wallpapercave.com/wp/wp4056410.jpg", // Stranger Things
      title: "Netflix Original Series",
      sname: "Stranger Things",
      link: "https://www.netflix.com/in/title/80057281",
    },
    {
      imgsrc: "https://wallpapercave.com/wp/wp1917154.jpg", // The Crown
      title: "Netflix Original Series",
      sname: "The Crown",
      link: "https://www.netflix.com/in/title/80025678",
    },
    {
      imgsrc: "https://wallpapercave.com/wp/wp5856419.jpg", // Money Heist
      title: "Netflix Original Series",
      sname: "Money Heist",
      link: "https://www.netflix.com/in/title/80192098",
    },
    {
      imgsrc: "https://www.netflix.com/in/title/70143836", // Breaking Bad
      title: "Netflix Original Series",
      sname: "Breaking Bad",
      link: "https://www.netflix.com/in/title/70143836",
    },
    {
      imgsrc: "https://wallpapercave.com/wp/wp7442496.jpg", // The Witcher
      title: "Netflix Original Series",
      sname: "The Witcher",
      link: "https://www.netflix.com/in/title/80189685",
    },
  ];

  return (
    <div className="container " style={{width:"50%"}}>
      <h1>Netflix Original Series</h1>
      {seriesData.map((series, index) => (
        <Fetch
          key={index}
          imgsrc={series.imgsrc}
          title={series.title}
          sname={series.sname}
          link={series.link}
        />
      ))}
    </div>
  );
}

export default AApp;