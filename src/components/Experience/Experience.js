import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {


    return (
        <>
            <div className='p-5 mt-10' id='experience'>
                <div>
                    <h1 className='font-kanit text-center text-5xl underline underline-offset-8 decoration-red dark:text-white text-black'>EXPERIENCE</h1>
                </div>
                <div className='mt-10'>
                    <VerticalTimeline lineColor='white'>
                    <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#D2FBD0', color: '#0A5F07' }}
                            contentArrowStyle={{ borderRight: '7px solid  #D2FBD0' }}
                            date="Jan 2023 - Current"
                            dateClassName='date-con text-black dark:text-gray'
                            iconStyle={{ background: 'black', color: '#fff' }}
                            icon={<i className="fa-solid fa-briefcase text-2xl ml-1 p-1 lg:text-4xl lg:p-2"></i>}

                        >
                            <h3 className="vertical-timeline-element-title">Software Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Cignex, Remote</h4>
                            <p>
                            Developing and managing projects in ReactJs,DotNet and in other low code technologies like Appian and Sitecore  
                            </p>
                        </VerticalTimelineElement>
                    
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(251, 208, 218)', color: '#5F081C' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(251, 208, 218)' }}
                            date="Sep 2021 - Dec 2022"
                            dateClassName='date-con text-black dark:text-gray'
                            iconStyle={{ background: 'black', color: '#fff' }}
                            icon={<i className="fa-solid fa-briefcase text-2xl ml-1 p-1 lg:text-4xl lg:p-2"></i>}

                        >
                            <h3 className="vertical-timeline-element-title">Software Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Trantor, Chandigarh</h4>
                            <p>
                                Closely worked in Ziosk project.Created Employee Management Portal.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#D2FBD0', color: '#0A5F07' }}
                            contentArrowStyle={{ borderRight: '7px solid  #D2FBD0' }}
                            date="Feb 2021 - Aug 2021"
                            dateClassName='date-con text-black dark:text-gray'
                            iconStyle={{ background: 'black', color: '#fff' }}
                            icon={<i className="fa-solid fa-briefcase text-2xl ml-1 p-1 lg:text-4xl lg:p-2"></i>}

                        >
                            <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">TCIL IT, Chandigarh</h4>
                            <p>
                                Created various Machine Learning Models. Worked on Fake job post detector in NLP technology.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(251, 208, 218)', color: '#5F081C' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(251, 208, 218)' }}
                            date="June 2018 - July 2018"
                            dateClassName='date-con text-black dark:text-gray'
                            iconStyle={{ background: 'black', color: '#fff' }}
                            icon={<i className="fa-solid fa-briefcase text-2xl ml-1 p-1 lg:text-4xl lg:p-2"></i>}

                        >
                            <h3 className="vertical-timeline-element-title">Trainee</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ansh InfoTech, Ludhiana</h4>
                            <p>
                                Learnt Python and worked on a project called BookOcean.
                            </p>
                        </VerticalTimelineElement>
         
                        
                    </VerticalTimeline>
                </div>
               
            </div>
        </>
    )
}

export default Experience