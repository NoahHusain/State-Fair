// Import and invoke the ticket booth component function

import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { TicketBooth } from "./TicketBooth.js";
import { GameTicketHolder } from "./games/GameTicketHolder.js";
import { SideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js";
import { ticketsSold, fourTicketsSold } from "./TicketCounter.js";

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolder()
SideshowTicketHolder()
ticketsSold()
fourTicketsSold()