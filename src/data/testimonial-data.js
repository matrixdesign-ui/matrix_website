import testimonial_img_1 from "../../public/assets/img/testimonial/testi-logo-up-3.png"
import testimonial_img_2 from "../../public/assets/img/testimonial/testi-logo-up-4.png"
import testimonial_img_3 from "../../public/assets/img/testimonial/testi-logo-up-5.png"
import testimonial_img_4 from "../../public/assets/img/testimonial/testi-logo-up-6.png"
import testimonial_img_5 from "../../public/assets/img/testimonial/testi-logo-up-1.png"
import testimonial_img_6 from "../../public/assets/img/testimonial/testi-logo-up-5.png"
import testimonial_img_7 from "../../public/assets/img/testimonial/testi-logo-up-3.png"
import testimonial_img_8 from "../../public/assets/img/testimonial/testi-logo-up-4.png"
import testimonial_img_9 from "../../public/assets/img/testimonial/testi-logo-up-5.png"
import testimonial_img_10 from "../../public/assets/img/testimonial/testi-logo-up-6.png"
import testimonial_img_11 from "../../public/assets/img/testimonial/testi-logo-up-1.png"
import testimonial_img_12 from "../../public/assets/img/testimonial/testi-logo-up-5.png"

import author_img_1 from "../../public/assets/img/testimonial/testi-icon-5-4.png"
import author_img_2 from "../../public/assets/img/testimonial/testi-icon-5-2.png"
import author_img_3 from "../../public/assets/img/testimonial/testi-icon-5-4.png"
import author_img_4 from "../../public/assets/img/testimonial/testi-icon-5-3.png"
import author_img_5 from "../../public/assets/img/testimonial/testi-icon-5-4.png"
import author_img_6 from "../../public/assets/img/testimonial/testi-icon-5-1.png"
import author_img_7 from "../../public/assets/img/testimonial/testi-icon-5-4.png"
import author_img_8 from "../../public/assets/img/testimonial/testi-icon-5-2.png"
import author_img_9 from "../../public/assets/img/testimonial/testi-icon-5-4.png"
import author_img_10 from "../../public/assets/img/testimonial/testi-icon-5-3.png"
import author_img_11 from "../../public/assets/img/testimonial/testi-icon-5-4.png"
import author_img_12 from "../../public/assets/img/testimonial/testi-icon-5-1.png"


import brand_icon_1 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_2 from "../../public/assets/img/testimonial/testi-logo-5-1.png"
import brand_icon_3 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_4 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_5 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_6 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_7 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_8 from "../../public/assets/img/testimonial/testi-logo-5-1.png"
import brand_icon_9 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_10 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_11 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_12 from "../../public/assets/img/testimonial/testi-logo-5-2.png"

const testimonial_data = [
    // for home 01
    {
        id: 1, 
        img: testimonial_img_1,
        name: "Wanjiku Njoroge",
        title: "Communication Authority of Kenya", 
        count: 94, 
        description: <>“Our Legal Management Software has greatly streamlined our regulatory processes. It's a game-changer for managing complex legal frameworks and ensuring compliance.”</>,
        sub_des: <>We've seen a 40% improvement in our legal case management and document retrieval, making our team more efficient.</>
    },
    {
        id: 2, 
        img: testimonial_img_2,
        name: "Samuel Otieno",
        title: "Kenya Bureau of Standards (KEBS)", 
        count: 59, 
        description: <>“The Legal Management Software we implemented has made managing our standards compliance and legal disputes far more organized. It's a critical tool for our legal department.”</>,
        sub_des: <>The software's case tracking and reporting features have improved our operational efficiency by over 30%.</>
    },
    {
        id: 3, 
        img: testimonial_img_3,
        name: "Faith Wambui",
        title: "Kenya Revenue Authority (KRA)", 
        count: 82, 
        description: <>“Our new Legal Management Software has transformed how we handle tax-related legal cases. It provides a centralized platform for document management and case-file access, which is crucial for our operations.”</>,
        sub_des: <>The system has significantly reduced the time it takes to prepare for court cases and has improved collaboration among our legal teams.</>
    },
    {
        id: 4, 
        img: testimonial_img_4,
        name: "Dr. Ken Muli",
        title: "Nairobi Hospital", 
        count: 99, 
        description: <>“The Electronic Board Management (E-Board) system has revolutionized our board meetings. It's secure, easy to use, and has made sharing confidential documents with our board members simple and efficient.”</>,
        sub_des: <>Our board communication and meeting preparations have been streamlined, leading to more focused and productive discussions.</>
    },
    {
        id: 5, 
        img: testimonial_img_5,
        name: "Prof. Agnes Chege",
        title: "Machakos University", 
        count: 81, 
        description: <>“We are proud of the advancements in our educational services, particularly our modern academic programs in Engineering and Health Sciences. We provide a **secure learning environment** that fosters innovation and growth.”</>,
        sub_des: <>Our commitment to providing a safe and productive campus is a priority, and our security solutions play a major role in that.</>
    },
    {
        id: 6, 
        img: testimonial_img_6,
        name: "John Omondi",
        title: "International Livestock Research Institute (ILRI)", 
        count: 83, 
        description: <>“The CCTV system we've implemented at our facility has significantly enhanced our security protocols. It provides peace of mind, knowing our valuable research and assets are well-protected around the clock.”</>,
        sub_des: <>With the new surveillance system, we've improved our site monitoring and security response times, ensuring a safer environment for our staff and research.</>
    },
    {
        id: 7, 
        img: testimonial_img_7,
        name: "Sarah Mwangi",
        title: "Communication Authority of Kenya", 
        count: 94, 
        description: <>“The Legal Management Software has been a critical tool for our organization. It provides an efficient way to manage our extensive regulatory documentation and legal filings, ensuring we stay on top of all our responsibilities.”</>,
        sub_des: <>The system's advanced search and reporting features have drastically cut down the time spent on administrative tasks, allowing us to focus on our core mandate.</>
    },
    {
        id: 8, 
        img: testimonial_img_8,
        name: "David Kipkorir",
        title: "Kenya Bureau of Standards (KEBS)", 
        count: 59, 
        description: <>“Our Legal Management Software has made it easier to manage the legal aspects of our import inspections and product certifications. It's an indispensable asset for our legal compliance team.”</>,
        sub_des: <>The software's streamlined workflow has improved our legal document management, leading to faster and more accurate handling of cases.</>

    },
    {
        id: 9, 
        img: testimonial_img_9,
        name: "Lillian Adhiambo",
        title: "Kenya Revenue Authority (KRA)", 
        count: 82, 
        description: <>“The implementation of a modern Legal Management Software has had a major impact on our day-to-day operations. It's a reliable platform for managing our legal documents and case records efficiently.”</>,
        sub_des: <>We've significantly enhanced our legal team's ability to collaborate and access important information, which has improved overall productivity.</>

    },
    {
        id: 10, 
        img: testimonial_img_10,
        name: "Mercy Chepkoech",
        title: "Nairobi Hospital", 
        count: 99, 
        description: <>“Our Electronic Board Management (E-Board) system has provided a seamless and secure platform for all our board members. It has made accessing meeting agendas, minutes, and confidential reports much more convenient and safe.”</>,
        sub_des: <>The system has greatly enhanced our governance processes and has made our board meetings more effective and paperless.</>

    },
    {
        id: 11, 
        img: testimonial_img_11,
        name: "Michael Kiprotich",
        title: "Machakos University", 
        count: 81, 
        description: <>“As a university, providing a safe and secure environment is paramount. We have invested in robust security solutions to protect our students and staff, which has been a major factor in our growth.”</>,
        sub_des: <>The security measures we have in place have created a secure environment that is conducive to learning and innovation for our students.</>

    },
    {
        id: 12, 
        img: testimonial_img_12,
        name: "Jane Wanjiku",
        title: "International Livestock Research Institute (ILRI)", 
        count: 83, 
        description: <>“The **CCTV** system has proven to be an excellent investment for our research facility. It allows us to monitor our labs and animal pens 24/7, ensuring the safety of our valuable research materials and livestock.”</>,
        sub_des: <>The security provided by the CCTV system is top-notch, allowing us to focus on our research without worrying about the safety of our premises.</>

    },

    // for home 05
    {
        id: 13, 
        author_img: author_img_1,
        brand_icon: brand_icon_1,
        name: "Musa Abdi",
        title: "ICT Innovator",  
        description: <>“The Legal Management Software from this provider is a true lifesaver. It has made managing our legal documentation and compliance with CA regulations a breeze.”</>,

    },
    {
        id: 14, 
        author_img: author_img_2,
        brand_icon: brand_icon_2,
        name: "Amina Yusuf",
        title: "Food Producer",  
        description: <>“The **Legal Management Software** has been instrumental in helping us navigate the legal requirements of KEBS certification. It simplifies the entire process and keeps us organized.”</>,

    },
    {
        id: 15, 
        author_img: author_img_3,
        brand_icon: brand_icon_3,
        name: "Peter Kariuki",
        title: "Business Owner",  
        description: <>“The **Legal Management Software** has transformed how we handle our tax-related legal matters with KRA. It's an intuitive system that has saved us countless hours.”</>,

    },
    {
        id: 16, 
        author_img: author_img_4,
        brand_icon: brand_icon_4,
        name: "Dr. Jane Mumo",
        title: "Medical Practitioner",  
        description: <>“The **Electronic Board Management (E-Board)** system has made our board meetings at Nairobi Hospital seamless and efficient. It's a secure and user-friendly platform that we rely on.”</>,

    },
    {
        id: 17, 
        author_img: author_img_5,
        brand_icon: brand_icon_5,
        name: "Kevin Ochieng",
        title: "Student",  
        description: <>“Machakos University's commitment to our well-being is clear. Their investment in **security solutions** makes me feel safe and allows me to focus on my studies without worry.”</>,

    },
    {
        id: 18, 
        author_img: author_img_6,
        brand_icon: brand_icon_6,
        name: "Esther Wanjiru",
        title: "Pastoralist Farmer",  
        description: <>“The **CCTV** system at ILRI has been a great addition. It enhances the security of the facility and protects the important work they do for the agricultural community.”</>,

    }, 
    {
        id: 19, 
        author_img: author_img_7,
        brand_icon: brand_icon_7,
        name: "Joyce Wanjiru",
        title: "Technology Consultant",  
        description: <>“The Legal Management Software provided to the CA is a testament to its effectiveness. It's a robust system that helps manage complex regulatory affairs with ease.”</>,

    },
    {
        id: 20, 
        author_img: author_img_8,
        brand_icon: brand_icon_8,
        name: "Samson Macharia",
        title: "Manufacturing Manager",  
        description: <>“With the **Legal Management Software**, we've been able to better manage our legal documentation related to KEBS standards. It's a vital tool for our business.”</>,

    },
    {
        id: 21, 
        author_img: author_img_9,
        brand_icon: brand_icon_9,
        name: "Grace Achieng",
        title: "Accountant",  
        description: <>“Our work with KRA is much smoother thanks to the **Legal Management Software**. It's an efficient system for keeping track of all our legal and tax-related documents.”</>,

    },
    {
        id: 22, 
        author_img: author_img_10,
        brand_icon: brand_icon_10,
        name: "Dr. Paul Kariuki",
        title: "Public Health Officer",  
        description: <>“The **Electronic Board Management (E-Board)** system at Nairobi Hospital has improved the efficiency of our board meetings and ensured all sensitive information is handled securely.”</>,

    },
    {
        id: 23, 
        author_img: author_img_11,
        brand_icon: brand_icon_11,
        name: "Lydia Kemunto",
        title: "Researcher",  
        description: <>“Machakos University's commitment to safety, supported by their comprehensive **security solutions**, has created a safe environment for me to conduct my research.”</>,

    },
    {
        id: 24, 
        author_img: author_img_12,
        brand_icon: brand_icon_12,
        name: "Daniel Omondi",
        title: "Agribusiness Entrepreneur",  
        description: <>“ILRI's research is critical to our industry. The **CCTV** system they've implemented ensures the security of their facility and gives me confidence in their work.”</>,

    },
];

export default testimonial_data