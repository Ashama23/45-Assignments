let guestList : string[] = ["Owais","Ali","Ashama"]
console.log("Great news! we found a bigger table.");
guestList.unshift("Sara")
guestList.splice(Math.floor(guestList.length/2),0, "Saniya")
guestList.push("Sahar")
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited for a dinner party.`);
    
})