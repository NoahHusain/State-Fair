const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolder = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="player person"></div>`
        }
    )
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="bigSpender person"></div>`
        }
    )
}
