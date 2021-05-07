const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML += `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

eventHub.addEventListener("click", (event) => {
    if (event.target.id === 'rideTicket') {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
        // 
        const addCounter = new CustomEvent("ticket")
        eventHub.dispatchEvent(addCounter)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === 'foodTicket') {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
        // 
        const addCounter = new CustomEvent("ticket")
        eventHub.dispatchEvent(addCounter)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === 'gameTicket') {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
        // 
        const addCounter = new CustomEvent("ticket")
        eventHub.dispatchEvent(addCounter)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === 'sideshowTicket') {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
        // 
        const addCounter = new CustomEvent("ticket")
        eventHub.dispatchEvent(addCounter)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === 'fullPackageTicket') {
        const fullPackageTicketEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageTicketEvent)
        // 
        const fullCounter = new CustomEvent("fullPackageticket")
        eventHub.dispatchEvent(fullCounter)
    }
})

