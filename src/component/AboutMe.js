import React from 'react'

const AboutMe = () => {
  return (
    <div className='container mx-auto my-20 px-4 md:ml-36'>
      <a href="#" className="flex flex-col items-stretch bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg" src="https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg" alt="Coding Background" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Developer: Mahipal Singh</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            With a rich background in both business and technology, I am a Full Stack Developer with a passion for creating innovative solutions. My journey began with a Bachelor's degree in Computer Application, followed by an MBA, which equipped me with the unique blend of technical proficiency and business acumen.
            <br /><br />
            In my role at Pesto Tech, I've honed my skills in Front End and Back End development, mastering languages such as HTML5, CSS3, JS ES6 to ES14, Jquery, ReactJS and NodeJS. I've also gained expertise in DBMS (SQL & NoSQL), Responsive Web Design, UI Testing and SEO.
            <br /><br />
            My experience extends beyond coding; as a Relationship Manager at ICICI Bank Ltd., I managed 23 branches and led a team of 7+ members. This role taught me the importance of collaboration and effective communication - skills that are invaluable in software development.
            <br /><br />
            I'm now seeking opportunities as a Software Developer where I can leverage my technical skills and business understanding to build robust applications that drive growth. If you're looking for someone who can bridge the gap between technology and business needs, let's connect!. EMAIL-ID: <span className='text-orange-600'>mahipalsingh450@gmail.com</span>
          </p>
        </div>
      </a>
    </div>
  )
}

export default AboutMe
