import React from 'react';
import Card from './Card'; // Import the Card component

const Course = () => {
  // Card data
  const cardData = [
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/coding-grandmaster.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/coding-prodigy.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/coding-champion.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/scratch-programming.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/game-development.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/app-development.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/roblox-champion.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/web-development.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/python-champion.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/data-science.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/ioi-algorithms.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
    {
      image: 'https://fastly.codingal.com/images/home/courses/card/ap-computer-science-a.png?auto=webp&optimize=medium&width=640',
      title: 'Coding Grandmaster: Master Coding Skills',
      gradeRange: 'Grade 1-10',
      activities: '350+ Activities',
      lessons: '144 Lessons',
      duration: '12-18',
      description: 'Embark on an amazing learning journey with 144 lessons for kids and teens to master coding.',
      outcomes: [
        'Learn to build apps, games & websites',
        'Mastery in all coding skills',
        'Project-based learning',
        'Coding Grandmaster certificate accredited by STEM.org',
      ],
    },
  ];

  return (
    <div className="container mt-5" style={{ backgroundColor: "#F3F4F7" }}>
      <h1 className='text-center mt-5'>
        Choose a <span style={{ textDecoration: "underline", textDecorationColor: "orange" }}>coding course</span> that excites your child
      </h1>
      <div className="row mt-5" style={{backgroundColor:"#f9f9f9"}}>
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 p-1"> {/* Added padding instead of margin */}
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
