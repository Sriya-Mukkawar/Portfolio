'use client'
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
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
        github: 'https://github.com/Sriya-Mukkawar/GoalSetter',
    },
];

const uniqueCatgories = ['All Projects', ...new Set(projectData.map((item) => item.category))];


const Projects = () => {
    const [categories, setCategories] = useState(uniqueCatgories);
    const [category, setCategory] = useState('All Projects');
    const filteredProjects = projectData.filter(project => {
        return category === 'All Projects' ? project : project.category === category;
    });

    return <section className='min-h-screen pt-12'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
            <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                    {categories.map((category, index) => {
                        return <TabsTrigger
                            onClick={() => setCategory(category)}
                            value={category}
                            key={index} className='captialize w-[162px] md:w-auto'>
                            {category}
                        </TabsTrigger>

                    })}
                </TabsList>
                <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {filteredProjects.map((project, index) => {
                        return <TabsContent value={category} key={index}>
                            <ProjectCard project={project} />
                        </TabsContent>
                    })}
                </div>
            </Tabs>
        </div>
    </section>
};

export default Projects;