import React from 'react';
import './About.css';

const sections = [
  { title: "Cosmetic Dentistry",
  imgSrc: "https://media.istockphoto.com/id/185331512/photo/beautiful-smile-with-dental-mirror.webp?b=1&s=170667a&w=0&k=20&c=aTskScoUeW0U2SZeZTBJ6vZ9iaUzAMVM_RDgoXdIafQ=",
  description: "it primarily focuses on improvement in dental aesthetics in color, position, shape, size, alignment and overall smile appearance. Many dentists refer to themselves as cosmetic dentists regardless of their specific education, specialty, training, and experience in this field." 
},
  { title: "Dental Implants", 
    imgSrc: "https://media.istockphoto.com/id/880988192/photo/dentist-showing-teeth-dentures-to-a-patient.webp?b=1&s=170667a&w=0&k=20&c=biCxi0f3a4ws2sknno3JJIsUaNCW8elEvQtvMLB-w-c=", 
    description: "Female dentist talking to a patient and showing her teeth dentures Dentists use this method to assess the health of your gums and teeth, and the numbers they call out hold valuable information about the condition of your oral tissues. Let's break it down step by step." 

  },
  { title: "General Dentistry",
     imgSrc: "https://media.istockphoto.com/id/171116621/photo/beautiful-smile-with-dental-floss.webp?b=1&s=170667a&w=0&k=20&c=gIhaaYwwfsoSox25QT_VEiCjavROrMfX4XKXBiiOzhQ=", 
    description: "Beautiful smiling model with dental General dentists are trained in all aspects of oral health, from preventive care to early detection of problems to the treatment of dental conditions. They also work with patients of all ages, which means they can provide comprehensive care for the whole family.." 

  },
  { title: "Root Canal Theraphy", 
    imgSrc: "https://media.istockphoto.com/id/1543511026/photo/root-canal.webp?b=1&s=170667a&w=0&k=20&c=tEAMfa6PX5U2XEpxiknzlQS0F7kBJuMq_W9HbfU1-N0=", 
    description: "A root canal treatment is a dental procedure to remove inflamed or infected pulp on the inside of the tooth which is then carefully cleaned and disinfected, then filled and sealed." 

  },
  { title: "Orthodontics",
     imgSrc: "https://media.istockphoto.com/id/691755354/photo/woman-showing-her-teeth-with-braces.webp?b=1&s=170667a&w=0&k=20&c=dxItP2bx11vP6iyGgWGjF4VBCZBRK2zfgM5sRkCd8Qk=",
     description: "Dentist and orthodontist concept. Woman smile showing her white teeth with blue braces.Dentist and orthodontist concept. Woman smile showing her white teeth with blue braces." 

  },
  { title: "Pediatric Dentistrt", 
    imgSrc: "https://media.istockphoto.com/id/819818166/photo/happy-dentist-looking-at-an-x-ray-with-his-young-patient.webp?b=1&s=170667a&w=0&k=20&c=apG3uFZEezj9DjFM-nlaKVvrdW5geYomM1OBN6LNIVk=", 
    description: "Happy dentist looking at an x-ray with his young patient at the office - healthcare and medicine concepts his young patient at the office - healthcare." 

  },
  { title: "Wisdom Teeth", 
    imgSrc: "https://media.istockphoto.com/id/1193841061/photo/3d-render-of-teeth-in-gums-with-cyst.jpg?s=612x612&w=0&k=20&c=tgCaQ95l-vTtdmt5bHBexjLQVBDeBKZwKe65PAiHU04=", 
    description: "They are located at the back of the upper and lower jaws and are the last teeth to emerge in the oral cavity They usually erupt between ages 17 and 25; however, in some individuals, wisdom teeth have erupted ."
  },
  { title: "Preventive Dentistry",
     imgSrc: "https://media.istockphoto.com/id/1442593082/photo/close-up-of-open-mouth-during-oral-checkup.webp?b=1&s=170667a&w=0&k=20&c=2Ttlp3hFbcBtSuU7ZQj-zu0_SByn8pNxRlChB_hFwGQ=", 
    description: "Preventive dentistry is dental care that helps to maintain good oral health. It emphasizes the importance of ongoing hygiene procedures and daily practices to prevent dental diseases and conditions.." 

  },
];

function About() {
  return (
    <>
      <div className="main-about">
        <h1>About Us</h1>
        <div className="middle-about">
          <img src="https://www.groupdentistrynow.com/wp-content/uploads/2020/01/dentists2.png" alt="Dentist Group" title='Dentist Group'/>
        </div>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="about-container">
        {sections.map((section, index) =>(
          <div key={index} className="content-group">
            <h1>{section.title}</h1>
            <div className="main-content">
              <img src={section.imgSrc} alt={section.title} />
              <p>{section.description}</p>
            </div>
          </div>
        ))}
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet delectus temporibus quia alias accusamus corporis quibusdam reiciendis eligendi vel, perspiciatis dolorem iure nulla recusandae eum. Autem itaque dolores magnam?  
</p>

      </div>
    </>
  );
}

export default About;
