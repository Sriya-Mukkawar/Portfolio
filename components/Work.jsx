'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/work3.png',
        category: 'react js',
        name: 'GroceryList',
        description: 'A React-based application',
        link: 'https://grocerylist-two.vercel.app/',
        github: 'https://github.com/Sriya-Mukkawar/react_grocerylist_gh',
    },
    {
        image: '/work/work4.png',
        category: 'react js',
        name: 'PopcornPal',
        description: 'React Movie Search Website',
        link: 'https://popcorn-pal.vercel.app/',
        github: 'https://github.com/Sriya-Mukkawar/PopcornPal',
    },
    {
        image: '/work/work2.png',
        category: 'Machine Learning',
        name: 'Airline Classification',
        description: 'ML classification website',
        link: '/',
        github: 'https://github.com/Sriya-Mukkawar/Airline-Review-Classification',
    },
    {
        image: '/work/2.png',
        category: 'Full Stack',
        name: 'GoalSetter',
        description: 'A fullstack website to set your goals',
        link: '/',
        github: 'https://github.com/Sriya-Mukkawar/Airline-Review-Classification',
    },
];

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>My Projects</h2>
                    <p className='subtitle mb-8'>Blah Blah Blah Blah Blah Blah Blah Blah.</p>
                    <Link href='/projects'><Button>All Projects</Button></Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[480px] '
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        //grabCursor={true}
                        pagination={{ clickable: true }} // Disabled pagination dots
                    >
                        {projectData.slice(0, 4).map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
