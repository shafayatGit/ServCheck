export const reviewByIdPromise = id => {
    return fetch(`https://servcheck-server.vercel.app/reviews/${id}`).then(res => res.json())
}


export const reviewByEmailPromise = (email, accessToken) => {
    return fetch(`https://servcheck-server.vercel.app/myReviews?email=${email}`, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        })
        .then(res => res.json())
}