export const serviceDetailsPromise = email => {
    return fetch(`http://localhost:3000/services?email=${email}`).then(res => res.json())
}