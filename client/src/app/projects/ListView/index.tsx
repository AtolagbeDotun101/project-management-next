import Header from '@/components/Header';
import TaskCard from "@/components/TaskCard"
import { useGetTasksQuery, useUpdateTaskStatusMutation } from '@/state/api';
import React from 'react'

type Props = {
    id: string ;
    setIsModalNewTaskOpen : (isOpen : boolean)=> void;
}

const ListView = ({id, setIsModalNewTaskOpen}: Props) => {

    const {data: tasks, isLoading, error} = useGetTasksQuery({projectId: Number(id)});
            if(isLoading){
                return <div>Loading ...</div>
            }
            if(error)return <div>An error occured while fetching data ...</div>


  return (
    <div className='px-4 pb-8 xl:px-6'>
        <div className='pt-5'>
            <Header name= "list"
            buttonComponent={
              <button
                className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
                onClick={() => setIsModalNewTaskOpen(true)}
              >
                Add Task
              </button>
            }
            />
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-col-3 lg:cols-3'>
            {tasks?.map((task)=> <TaskCard key={task.id} task={task}/>)}
        </div>
    </div>
  )
}

export default ListView ;