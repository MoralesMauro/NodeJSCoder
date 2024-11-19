class TicketManager{
    #basePriceEarning = 0.15;

    constructor(){
        this.events = []
    }
        getEvents(){
            return this.events;
        }

        addEvents (name, place, price, capacity = 50, date = new Date().toISOString()){
            const id = this.events.length +1
            const participants = []
            this.events.push({id,name,place,price: price * (1 + this.#basePriceEarning), capacity, date, participants })
        }

        addUser(eventId, userId){
            const event = this.events.find(event => event.id === eventId);
            if (!event){
                throw new Error("Event doesn´t exists");
      }
      const userExists = event.participants.includes(userId) === userId;
        if(userExists){
    throw new Error("The user is already")
        }
        event.participants.push(userId)
        }

        putEventOnTour(eventId, place, date){
            const event = this.events.find(event => event.id === eventId);
            if (!event){
                throw new Error ("Event doesn't exists")
            }
            this.events.push({...event, id: this.events.length + 1, participants: [], place, date})
        }
    }const ticketOffice = new TicketManager();

    ticketOffice.addEvents("Madonna´s concert", "Buenos Aires", 30000, 10000);
    ticketOffice.addUser(1, 33)

    const events = ticketOffice.getEvents();

    console.log({events})