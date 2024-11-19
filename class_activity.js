class Counter {
constructor(name){
    this.name = name
    this.counter = 0
}

static globalCounter = 0

getResponsable (){
    return this.name
}

count(){
    this.counter++
    Counter.globalCounter++
}

getIndividualCount(){
    return this.counter
}

getGlobalCount(){
    return Counter.globalCounter
}

}

const count1 = new Counter("Mauro")
const count2 = new Counter("Martin")

count1.count()
count1.count()
count1.count()

count2.count()
count2.count()

console.log(`Responsible of the counter number 1 is ${count1.getResponsable()}`)
console.log(`Responsible of the counter number 2 is ${count2.getResponsable()}`)
console.log(`Responsible of the counter number 1 is ${count1.getResponsable()}`)
