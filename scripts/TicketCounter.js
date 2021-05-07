const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let tickets = 0
contentTarget.innerHTML = `Tickets sold ${tickets}`

export const ticketsSold = () => {
    eventHub.addEventListener("ticket", CustomEvent => {
        tickets ++
        contentTarget.innerHTML = `Tickets sold ${tickets}`
    })
}

export const fourTicketsSold = () => {
    eventHub.addEventListener("fullPackageticket", CustomEvent => {
        tickets += 4
        contentTarget.innerHTML = `Tickets sold ${tickets}`
    })
}