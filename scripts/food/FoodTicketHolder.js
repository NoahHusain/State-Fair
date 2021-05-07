const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="eater person"></div>`
        }
    )
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="bigSpender person"></div>`
        }
    )
}
