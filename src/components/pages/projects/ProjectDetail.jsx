import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getProjectById, getUserById } from '../../../utils/api'

export const ProjectDetail = () => {
    const { id } = useParams()
    const [project, setProject] = useState()
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const resp = getProjectById(id)
        setProject(resp)
    }, [id])

    useEffect(() => {
        const users = project?.authors?.map(authorId => getUserById(authorId))
        setAuthors(users)
    }, [project])


    if (!project)
        return <p>Loading...</p>

    return (
        <Container>
            <h3>{project.name}</h3>
            <br />

            <strong>Integrantes</strong>
            {authors?.map((author, i) =>
                <p key={i}>{author.name}</p>
            )}
            {project?.videos?.map(video =>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.url}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            )}
        </Container>
    )
}
