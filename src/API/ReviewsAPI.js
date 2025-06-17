export const reviewByIdPromise = cardId => {
    return fetch(`http://localhost:3000/reviews/${cardId}`).then(res => res.json())
}


export const reviewByEmailPromise = email => {
    return fetch(`http://localhost:3000/reviews?email=${email}`).then(res => res.json())
}