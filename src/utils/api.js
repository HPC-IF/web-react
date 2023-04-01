import projects from "../models/projects.json"
import members from "../models/members.json"

export function getProjectById(projectId) {
    return projects.find(project => project.id === projectId)
}

export function getUserById(userId) {
    return members.find(user => user.id === userId)
}