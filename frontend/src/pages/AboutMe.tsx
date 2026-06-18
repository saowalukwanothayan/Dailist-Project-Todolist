import myimage from '../assets/image/myimage.jpg'
import react from '../assets/image/react.png'
import vite from '../assets/image/vite.png'
import ts from '../assets/image/ts.png'
import tailwind from '../assets/image/tailwind.png'
import node from '../assets/image/node.png'
import postgresql from '../assets/image/postgresql.png'
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


export default function AboutMe() {

  return (
    <div className="flex-1 min-h-0 p-5 bg-bg-content items-center">

        <div className='text-center'>

            <h1 className="font-bold text-[22px] text-dark-green">
                About This Project
            </h1>
            <p className="w-300 font-medium text-text-all text-[14px] mt-1">
                This project was built to explore full-stack web development by connecting a React frontend with an Express.js API and a PostgreSQL database hosted on Neon.<br />
                It demonstrates CRUD operations, persistent data storage, and real-time task management in a modern web application.
            </p>

        </div>

        <div className='px-16 mt-10 mb-10'>
            <div className="grid grid-cols-2 divide-x-3 divide-dark-green font-normal text-dark-green">

                <div> {/*col 1*/}
                    <div className='flex justify-center'>
                        <img
                            className='w-38 h-38 object-cover rounded-full'
                            src={myimage}
                            title='Saowaluk Wanothayan'
                        />
                    </div>
                    <div className='text-center my-2'>
                        <h1 className="font-semibold text-[22px] text-dark-green">
                            Saowaluk wanothayan
                        </h1>
                    </div>
                    <div className='px-20'>
                        <h1 className="font-semibold text-[16px] text-dark-green mb-2">
                            Contact
                        </h1>
                        <div className="grid grid-cols-[10%_20%_5%_1fr]">
                            <div className='flex justify-center text-center'>
                                <SiGmail size={20} color='#EA4335'/>
                            </div>
                            <div>E-mail</div>
                            <div>:</div>
                            <div>
                                <a 
                                    href="mailto:Saowaluk.wanothayan@gmail.com"
                                    className="transition hover:text-green-700 hover:underline">
                                        Saowaluk.wanothayan@gmail.com
                                </a>
                            </div>

                            <div className='flex justify-center text-center'>
                                <IoLogoGithub size={20} color='#000000'/>
                            </div>
                            <div>Github</div>
                            <div>:</div>
                            <div>
                                <a
                                    href="https://github.com/saowalukwanothayan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition hover:text-green-700 hover:underline"
                                    >
                                    saowalukwanothayan
                                </a>
                            </div>

                            <div className='flex justify-center text-center'>
                                <IoLogoLinkedin size={20} color='#0A66C2'/>
                            </div>
                            <div>LinkedIn</div>
                            <div>:</div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/your-linkedin-id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition hover:text-green-700 hover:underline"
                                    >
                                    Saowaluk wanothayan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'> {/*col 2*/}
                    <div className="w-110 text-[15px]">
                        <p>I&apos;m currently expanding my expertise in full-stack<br />
                            web development, focusing on building efficient<br />
                            and production-ready applications with React,<br />
                            backend APIs, and cloud-based databases.</p>
                        <h1 className="font-bold mt-4 mb-2">Purpose</h1>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                            <li>Learning end-to-end full-stack integration between<br />
                            a React frontend and RESTful API services.</li>
                            <li>Demonstrating persistent CRUD operations with<br />
                            a cloud-hosted PostgreSQL database and real-time state updates.</li>
                            <li>Designing a maintainable architecture for future feature expansion.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 

        <div className='text-center mt-5 text-dark-green px-80'>

            <h1 className="font-bold text-[20px]">
                Project Tech Stack
            </h1>

            <div className='mt-4 font-medium text-[16px]'>
                <div className="grid grid-cols-6 gap-x-3">
                        <div className='flex flex-col items-center gap-2'>
                            <img src={react} width={50} />
                            <span className='text-[14px]'>React</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={vite} width={50} />
                            <span className='text-[14px]'>Vite</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={ts} width={50} />
                            <span className='text-[14px]'>Typescript</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={tailwind} width={50} />
                            <span className='text-[14px]'>Tailwind CSS</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={node} width={50} />
                            <span className='text-[14px]'>Express.js <br />
                                <span className='text-[12px]'>(on Node.js)</span>
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={postgresql} width={50} />
                            <span className='text-[14px]'>PostgreSQL <br />
                                <span className='text-[12px]'>(Neon Cloud)</span>
                            </span>
                        </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}