import projects from "../models/projects.json"
import articles from "../models/articles.json"
import members from "../models/members.json"

export function getProjectById(projectId) {
    return projects.find(project => project.id === projectId)
}

export function getUserById(userId) {
    return members.find(user => user.id === userId)
}

export function getArticlesByUserId(userId) {
    return articles.filter(article => article?.authors?.some(author => author === userId))
}

export function getUsersByArticle(articleId) {
    const authorsArray = []

    const article = articles.find(article => article.id === articleId)

    article.authors
        .forEach(authorId => {
            authorsArray.push(members.find(member => member.id === authorId))
        });


    return {
        authors: authorsArray,
        otherAuthors: article.otherAuthors
    }
}