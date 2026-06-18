import myImage from '../assets/image/myimage.jpg'
import react from '../assets/image/react.png'
import vite from '../assets/image/vite.png'
import ts from '../assets/image/ts.png'
import py from '../assets/image/py.png'
import fastapi from '../assets/image/fastapi.png'
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


export default function AboutMe() {

  return (
    <div className="flex-1 min-h-0 p-5 bg-bg-content items-center">

        <div className='text-center'>

            <h1 className="font-bold text-[22px] text-dark-green">
                About this “ To-do-list Web ”
            </h1>
            <p className="w-300 font-medium text-text-all text-[14px] mt-1">
                This is a to-do list website built to demonstrate the integration between frontend and backend systems.<br />
                It helps users organize daily tasks, prioritize responsibilities,
                and track progress through a clean and intuitive interface.
            </p>

        </div>

        <div className='px-16 mt-7 mb-3'>
            <div className="grid grid-cols-2 divide-x-3 divide-dark-green font-normal text-dark-green">

                <div> {/*col 1*/}
                    <div className='flex justify-center'>
                        <img
                            className='w-42 h-42 object-cover rounded-full'
                            src={myImage}
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
                            <div>Saowaluk.wanothayan@gmail.com</div>

                            <div className='flex justify-center text-center'>
                                <IoLogoGithub size={20} color='#000000'/>
                            </div>
                            <div>Github</div>
                            <div>:</div>
                            <div>saowalukwanothayan</div>

                            <div className='flex justify-center text-center'>
                                <IoLogoLinkedin size={20} color='#0A66C2'/>
                            </div>
                            <div>LinkedIn</div>
                            <div>:</div>
                            <div>Saowaluk wanothayan</div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'> {/*col 2*/}
                    <div className="w-90 text-[16px]">
                        <p>I&apos;m currently learning Full-stack Development, focusing on building real-world web applications using React and backend APIs.</p>
                        <h1 className="font-bold mt-6 mb-3">Purpose</h1>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                            <li>Focus on connecting frontend components with backend services.</li>
                            <li>Showcase CRUD operations and complex state handling in React.</li>
                            <li>Practice building a functional system that is easy to maintain and scale.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 

        <div className='text-center mt-5 text-dark-green px-80'>

            <h1 className="font-bold text-[20px]">
                Tech Stack of this Website
            </h1>

            <div className='mt-4 font-medium text-[16px]'>
                <div className="grid grid-cols-5 gap-x-3">
                        <div className='flex flex-col items-center gap-2'>
                            <img src={react} width={65} />
                            <span>React</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={vite} width={65} />
                            <span>Vite</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={ts} width={65} />
                            <span>Typescript</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={py} width={65} />
                            <span>Python</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={fastapi} width={65} />
                            <span>FastAPI</span>
                        </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}