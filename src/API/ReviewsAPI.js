export const reviewByIdPromise = cardId => {
    return fetch(`http://localhost:3000/reviews/${cardId}`).then(res => res.json())
}


export const reviewByEmailPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/reviews?email=${email}`, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        })
        .then(res => res.json())
}