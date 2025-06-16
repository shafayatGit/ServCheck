export const reviewByIdPromise = id => {
    return fetch(`http://localhost:3000/reviews/${id}`).then(res => res.json())
}