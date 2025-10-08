"use client"
import React, { useState } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";
import BoardView from '../BoardView';
import ListView from '../ListView';
import TimelineView from  '../TimelineView'
import TableView from '../TableView'
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
     params: Promise<{ id: string }>;
}

const Project = ({params}: Props) => {
    const {id} = React.use(params); 
    
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);


  return (
    <div>
        <ModalNewTask
          isOpen = {isModalTaskOpen}
          onClose = {()=> setIsModalTaskOpen(false)}
          id={id}
        />
        <ProjectHeader activeTab= {activeTab} setActiveTab = {setActiveTab} />
          {activeTab === "Board" && (
            <BoardView id={id} setIsModalNewTaskOpen={setIsModalTaskOpen} />
          )}
          {activeTab === "List" && (
            <ListView  id ={id} setIsModalNewTaskOpen={setIsModalTaskOpen}/>
          )}
      {activeTab === "Timeline" && (
        <TimelineView  id ={id} setIsModalNewTaskOpen={setIsModalTaskOpen}/>
      )}
      {activeTab === "Table" && (
        <TableView  id ={id} setIsModalNewTaskOpen={setIsModalTaskOpen}/>
      )}
    </div>
  )
}

export default Project