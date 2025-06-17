export const serviceDetailsPromise = (email, accessToken) => {
    return fetch(`https://servcheck-server.vercel.app/myServices?email=${email}`, {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            }

        )
        .then(res => res.json())
}