import React from 'react';
import { Link } from 'react-router-dom';
import Pex from "../../../../assets/about.png";
import Happy from "../../../../assets/mofty2.png";
import Hood from "../../../../assets/hood.png";

import Act from "../../../../assets/act.png";
import Maime from "../../../../assets/maime.png";
import Dance from "../../../../assets/stagedance3.png";

import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
// import Circle2 from "../assets/Circle.png";

import './Style.css';


function History() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
          <div class="overlay4"></div>
        </div>
      </section>
      {/* <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/about/administrators-message">
          About
        </CBreadcrumbItem>
        <CBreadcrumbItem active>about Evergreen</CBreadcrumbItem>
      </CBreadcrumb> */}

      <section className="container">
        <div className="comments">
          <div className="intro">
        
            <header>About Evergreen Consult</header>
          </div>
          <div className=" create">
            <div className="sub-cover">
              <ul className="sub-menu">
                {/* <li>
                  <Link to={"/"}>Home</Link>
                </li> */}
                <li>
                  <Link to={"/about/administrators-message"}>
                    Administrator’s Message
                  </Link>
                </li>
              
                <li>
                  <Link className="active" to={"/about/history"}>
                   Evergreen Consult
                  </Link>
                </li>
                <li>
                  <Link to={"/about/Conduct"}>Parents Code of Conduct</Link>
                </li>
                <li>
                  <Link to={"contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <p style={{ paddingTop: "0", margin: "0" }}>
              Evergreen Consult is an education solutions provider that empowers schools and teachers to close the experience gap by closing the gap between what they know and what they do.
            </p>

            <h5 className="bio" style={{ marginTop: "60px" }}>
            Our vision is to raise skilled, confident, world-class educators who will become dependable key players in both local and international educational spheres.
            </h5>
            <p style={{ paddingTop: "0", marginTop: "10px"}}>
            We believe in the power of connection, and we believe that when teachers are empowered to connect with each other, with their students, and with their schools, they can create an incredible learning environment for all involved. That's why we help schools close the experience gap for their teachers—so that teachers can be more effective at what they do. We Hence, we are on a mission:
            </p>
            
          </div>
        </div>

        <div className="col-md-12 flexy mov2 create">
          <div className="col-md-6" style={{marginTop:'40px'}}>
            <img src={Hood} alt="Header" className="img-fluid" />
          </div>
          <div className="col-md-6 create" style={{marginTop:'40px'}}>

            <h6 className="bio" style={{ marginTop: "40px" }}>
            to deploy first-class resources towards the empowerment of teachers and school leaders through training, networking, engagement and internship.
            </h6>
            <p style={{ paddingTop: "0", marginTop: "10px"}}>
            We don't just talk about this stuff with our clients; we get out there and do it ourselves! We've been working with educators from all over the world on projects ranging from retreats to workshops to training days, and we're excited to continue doing so in the future.
            </p>
          </div>
  
        </div>
        <div className="col-md-12 flexy mov2 create">
          <div className="col-md-6 create" style={{marginTop:'0'}}>
              <h4>Student Life</h4>
              <h5>Excursions</h5>
              <span>
              We're all about helping you get the most out of your child's education. That's why we offer a range of international and local field trips that can help your child expand their knowledge in a new and exciting way.
                By taking part in an excursion, your child will have the opportunity to meet new people from different cultures and learn about the world around them. These trips are also an excellent way to increase their skills outside the classroom, since they will be forced to think on their feet, plan ahead, and solve problems that might arise throughout a busy day.
              </span>
              <img src={Happy} alt="Header" className="img-fluid" />
          </div>
          <div className="col-md-6 create" style={{marginTop:'40px'}}>
              <h5>Concerts</h5>
              <span>
              Our end of year concert is a celebration of our graduating pupils and their accomplishments. It's also an opportunity to acknowledge their families and friends who have supported them throughout high school, as well as the entire student body for its hard work and dedication.
              </span>
              <p>
              The concert usually includes an awards ceremony where students can pick up any awards they are eligible for. These include the Creativity and the Award for Most Outstanding Pupil. Parents can also attend this ceremony to receive recognition for their own contributions to the student body.
              </p>
              <p>{' '}</p>
              <h5>Charity</h5>
              <span>
              We know that helping others is one of the most important things you can do in life. That's why every school year; we offer a way to get involved in the community by outreaches to orphanages. 
              </span>
              <p>You'll be able to donate some relief supplies for this yearly outreach which is as much about giving back as it is about the children enjoying themselves.</p>
              <p>{' '}</p>
          </div>
        </div>
        <div className="clearfix">{' '}</div>
        <div className="col-md-12 flexy mov2 create">
          <div className="col-md-6 create" style={{marginTop:'200px'}}>
              <h5>Clubs</h5>
              <span>School clubs are a great way to keep your kids active and engaged in their education. We feature Music, Robotics, Dance, and so on.</span>
              <p>One of the biggest advantages of enrolling your child in a school club is that it will help develop your child's innate talents. All of the activities that they do together will help them learn how to cooperate with one another and share ideas with others. This is great for their social development as well as their academic performance!</p>
              <p>School clubs also provide balance between academic and extracurricular activities. It's important that students have fun while they're learning--and having fun is what makes learning enjoyable! </p>
              <p>{' '}</p>
          </div>
          <div className="col-md-6 create" style={{marginTop:'200px'}}>
                <h5>Finishing School</h5>
                <span>If you're a parent considering sending your child in grade 6 to Finishing School, we want to make sure that you know what to expect.</span>
                <p>First, our school is committed to giving you an education in sexuality, which is critical for our pupils' development as they prepare for secondary school. We also provide opportunities for students to volunteer and participate in dance and etiquette classes.</p>
                <p>Our students are empowered through godly counsel and the opportunity to learn about how to be a good person. They can also gain valuable work experience through internship within the school community.
                <p>We believe that Finishing School is an excellent way for children to mature and develop into responsible adults who appreciate the world around them and understand the importance of teamwork.</p>
                </p>
          </div>
        </div>
          
              
      

        <div className="col-md-12 flexy create" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <h4>About Evergreen Schools</h4>
            <p>
            Evergreen Schools is a faith-based institution founded in September 2012, as an answer to the burden of providing quality result oriented education. With a state-of-the-art curriculum – a blend of local and British curricula, Evergreen Schools is uniquely equipped to ensure that every child takes a proactive approach to their education. Evergreen Schools exist as Crèche, Early Years (Pre-school, Nursery School and Transition), Grade School (grade 1 – 6) and College (junior school: grade 7 – 9 & senior school grade 10 – 12)<br />
              
            </p>
            <p>
            <strong>
                {" "}
                Our Vision:<br />
              </strong>
        
              To be the educational institution of choice devoted to developing world class leaders who are rooted in Christ and skilled in all wisdom.
            </p>
            <p>
            <strong>
                {" "}
                Our Mission:<br />
              </strong>
              Our mission is to equip our learners with essential skills through a Christ-centered and globally relevant educational experience that promotes a lifelong passion for learning, ethical and moral uprightness, social and emotional intelligence, innovation and creativity, a healthy sense of dignity and self-worth, a sense of honour and responsibility and a love for excellence.
            </p>
            <p>
            <strong>
                {" "}
                Our Purpose:<br />
              </strong>
              Evergreen School exists to cater for the education needs of children from Crèche to Year 12 (SS3). We believe that the purpose of education is to shape individuals into lovers of God and mankind with a strong drive to live excellent lives in line with God’s purpose, while making meaningful impact in their world. Education should impact the heart, head and hands of the individual.
              </p>
          </div>

          <div className="col-md-6 create " style={{ marginTop: "50px" }}>
            <h4>Our Philosophy of Christian Education</h4>
            <p>
            Our philosophy of education flows from our visionary’s philosophy of life. As a Christian, our visionary believes that God and His created universe are real. God is good, kind, merciful gracious, longsuffering and eternal. He is the source and sustainer of all creation and the redeemer of all sinful men by faith in Jesus Christ as recorded in the Holy Bible. We hold these beliefs true as a Christian school.
            </p>
            <p>We therefore believe that the world and all that therein is were created by God and that all natural laws of order which guide the universe were put in place by Him. We believe in the reality of the seen and unseen realms as reflection of God’s splendor and majesty. We believe heaven and hell are real.</p>
            <p>We believe God created man in His image and likeness. Although flawed by Sin due to man’s fall from grace, and marred by its consequences, all of mankind is redeemable by faith in Jesus Christ. We believe in God’s redemptive plan initiated through the immaculate conception and resulting birth of Jesus Christ, modeled through His life, executed in His death and resurrection, subscribed to through faith in His finished work and culminating in His second coming. We believe in God’s eternal judgment, His righteousness and divine justice as shown in the reward of the righteous and the punishment of the unrighteous.</p>
            <p>We believe that God is the source of all knowledge and that He created all men with the capacity to learn and know. Men can come to know by divine inspiration, careful study, diligent observation, vivid experiences, scientific experimentation, timely maturity, precise instructions and wise counseling.</p>

          </div>
        </div>

        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}><hr></hr></div>
      
        <div className="col-md-12 flexy create" style={{ marginTop: "0" }}>
          <div className="col-md-6">
            <p>We believe that God is the author of truth. He is the definition of truth and His word is the revelation and communication of the truth. We believe that truth is absolute, not relative, and that God’s laws and commands as contained in the entire volume of scripture are the definition of the standard for what is right and what is wrong. We also believe that human attitudes and character can be correctly shaped by God’s word: He defines what is best and He has given us His word to help us accurately discern this. We therefore consider God’s word as the backbone of our procedures and methods towards fulfilling our stated purpose for education.</p>
              <p>Our Philosophy of Education is hinged on scriptures. According to Ephesians 2:10… 
                <span style={{ffontStyle: "oblique"}}>[NLT] “For we are God’s masterpiece, He has created us anew in Christ Jesus, so we can do the good things He planned for us long ago.”</span>
            </p>
            <p>… we believe that every child has been created by God with the capacity to learn, excel and express themselves as unique individuals. We believe every child is a star in his/her own right. Therefore, we offer every child put in our care equal opportunity to learn while respecting their unique abilities and peculiarities to the end that they are shaped into lovers of God and humanity, excellent people and highly skilled in all wisdom as world-class leaders. This is the kind of education we offer. </p>
            <p>The primary responsibility of education to children is learning. Based upon this conviction, our institution is devoted to promoting learning which shapes attitude and character, imparts skill and life relevance, and develops the child’s mind to create, innovate, solve problems, analyze and keep learning. We believe in engaging the best methods towards achieving our aim of education. We promote a learning that is based on biblical principles, delivered by skilled teachers.</p>
          </div>
          <div className="col-md-6">
            <p>Furthermore,</p>
            <p>Jer. 3:15 [HCSB] says, “And I will give you shepherds who are loyal to me, and they will shepherd you with knowledge and skill. </p>
            <p>We provide godly and highly skilled leadership and instructors, and a safe, friendly, orderly, and intellectually stimulating environment supported by a rich partnership with the home, which is essential for children to become healthy, responsible, tolerant, excellent, honorable, respectful and lifelong learners.</p>
            <p>We believe that every learner can flourish under a good teacher. We therefore define a good teacher, based on our conviction, as one who exhibits Christ-like character. He/she must be a master of knowledge, persistent, resilient, and creative in lesson delivery and assessment. We believe that a good teacher must be caring and affectionate towards learners, firm in correction and discipline, passionate in the discharge of his/her duties, bold and authoritative, and responsible for the learners put in his/her care. A good teacher must be an authentic individual and a role model. We believe that the primary role of the teacher is to ensure learning is taking place through a viable curriculum and education philosophy implementation.</p>
            <p>Our interpretation of our biblically integrated curricula leans on our philosophy of education as stated herein. We therefore believe in curricula which focus on process, content, and learner activities and which communicates knowledge of the world from a biblical worldview. Learning is achieved by eliciting knowledge from learners through engaging activities and demonstrations, directly dispensing information and learner directed proficiency assessment which is both formative and summative. </p>
          </div>
        </div>

        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}><hr></hr></div>

        <div className="col-md-12 flexy create" style={{ marginTop: "0" }}>
          <div className="col-md-6">
            <p>We believe the learning environment should be orderly but flexible enough to allow dynamisms such as group/collaborative learning. There should be sternness enforced through biblical discipline, and the environment should be businesslike. We believe that everyone in the school community can learn to be thoughtful and considerate of words and action, and to intentionally employ thinking tools towards increased learner achievement and overall general satisfaction.</p>
            <p>Finally, we believe there are three key stake holders in every child’s education: the family, the government and the church. As a school recognized by the law of the land, we stand in representation of the government. As a Christian school also, we partner with the Body of Christ to ensure our children are raised in the ways of Christ. We are also active partners with the families our learners belong to. We will therefore work with families exploiting every possible opportunity to ensure we deliver on our aim for education.</p>
            <p>We believe our philosophy of education hereby shared, will guarantee the delivery of our aim of education which is to shape individuals into lovers of God and mankind with a strong drive to live excellent lives in line with God’s purpose, while making meaningful impact in their world. We also believe our philosophy justifies our purpose of existence as indicated by our vision statement and expressed in our mission statement.</p>
            <p>
            <strong>
                {" "}
                Our Core Values::<br />
              </strong>
              Godliness | Character | Leadership | Excellence | Respect | Tolerance | Honour
              </p>
          </div>
          <div className="col-md-6">
            <p><strong>STATEMENT OF FAITH</strong></p>
            <span>The following statements are the declarations of the convictions which drive our vision, mission, philosophy and core values as a Christian school.</span>
            <p>
              <ol>
                <li>We believe God exists and is real and that those who seek Him diligently will be rewarded (Hebrews 11:6; Exodus 6:1-3; 34:5-7)</li>
                <li>We believe in God the Father, God the Son and God the Holy Spirit, three persons in one godhead. (1 John 4:13-14; Luke 3:21-22; Matthew 3:16-17; Galatians 4:4)</li>
                <li>We believe that God the Father, by His word and the move of the Spirit, is the creator of the universe and the author of life on earth. (Genesis 1:1-31; John 1:1-4; Hebrews 1:2)</li>
                <li>We believe God is the sovereign ruler of the universe and that Himself and His word are one. (John 1:1-2; Isaiah 55:10-11; Revelation 4:11) </li>
                <li>We believe that Jesus, the Christ, the incarnate word of God, born of the Mary the virgin, is the Son of God. (Genesis 3:15; Isaiah 7:14; Luke 1: 26-33; 1John 4:15, 5:1; John 1:1-3,14,31-33; Galatians 1:15-16)</li>
                <li>We believe in the birth, death, burial and resurrection of Jesus Christ as God’s redemption plan for man. (Galatians 1:15-16; 1 Corinthians 15:1-4; Revelation 1:18; Colossians 1:13-14,20-23)</li>
                <li>We believe in the Church, Jesus’ headship over the church and the ministry gifts (Apostles, Prophets, Evangelists, Pastors and Teachers) as His system ordained to: 
                  <ul>
                    <li>Showcase the wisdom of His redemptive plan for mankind upon the earth.</li>
                    <li>Propagate the system of the kingdom of God on earth through the preaching of the gospel and the discipline of men.</li>
                    <li>Spiritual leadership for Christians.</li>
                    <li>Model Christ to the community.</li>
                  </ul>
                  (Ephesians 4:11-12, Colossians 1:15-19; I Corinthians 12:12-30; Matthew 28:19-20)
                </li>
                <li>We believe in the ordinances of the scripture – marriage between adult male and adult female, water baptism by immersion and the Eucharist (Holy Communion). Genesis 2:21-24; Matthew 28:19; Acts 19:1-5; Matthew 26:26-28, 1 Corinthians 11:23-26)</li>
                <li>We believe in the baptism of the Holy Ghost with the evidence of speaking in tongues. (Acts 2:1-4, 9:17; 1 Corinthians 14:18; Acts 8:14-18; 10:44-46; 19:1-6)</li>
                <li>
                  We believe that all scripture (the Bible) is inspired of God, is alive and potent, and is beneficial for: 
                  <ul>
                    <li>learning how to differentiate between right and wrong</li>
                    <li>correction</li>
                    <li>modeling godliness</li>
                    <li>instruction in the ways of righteousness,</li>
                  </ul>
                    
                  To the end that the individual who does what it says is thoroughly prepared for significant impact in the world. (2 Timothy 3:16-17; 2 Peter 1:16-21; Psalm 119:11,105; Hebrews 4:12)
                </li>
                <li>We believe in prayer as God’s provision to mankind to meet our needs and help us build intimacy with Him. (Psalm 50:15; Jeremiah 33:3; Isaiah 65:24)</li>
                <li>We believe that Jesus Christ is coming again. (Acts 1:11; Matthew 24:27,30,37,39; Mark 13:26; Luke 21:27)</li>
              </ol>
            </p>
          </div>
        </div>

        {/* <div className="col-md-12 flexy" style={{ marginTop: "90px" }}>
          <div className="col-md-6">
            {" "}
            <img src={Act} alt="Header" className="img-fluid" />
          </div>

          <div className="col-md-6">
            {" "}
            <img src={Maime} alt="Header" className="img-fluid" />
          </div>
        </div> */}
      </section>
    </>
  );
}

export default History