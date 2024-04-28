const computerChoiceDisplay = document.getElementById('computer-choice')
//Αυτό το κομμάτι κώδικα JavaScript δηλώνει μια σταθερά με το όνομα computerChoiceDisplay 
//και την αναθέτει σε ένα στοιχείο του HTML με το αναγνωριστικό computer-choice. Αυτό γίνεται χρησιμοποιώντας τη μέθοδο document.getElementById(), 
//η οποία επιστρέφει το στοιχείο του DOM που έχει το αναγνωριστικό που περνάς ως παράμετρο.

//καλουμε ολα τα span id απο πριν ώστε να εμφανίζει την επιλογή μας πατώντας το κουμπί και την επιλογή του υπολογιστή
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')//διαλέγουμε ολα τα αρχεία button 
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()//καλουμε το function generate... ωστε να καλέσουμε εναν τυχαιο αριθμό
}))
//Αυτό το τμήμα κώδικα JavaScript επιλέγει ένα σύνολο στοιχείων HTML με την 
//κλάση ή το tag possibleChoice και προσθέτει έναν ακροατή γεγονότων click σε 
//κάθε ένα από αυτά τα στοιχεία. Όταν ένα από αυτά τα στοιχεία κάνει κλικ, η 
//συνάρτηση που δίνεται ως δεύτερη παράμετρος εκτελείται. Μέσα σε αυτή τη
//συνάρτηση, ορίζεται η μεταβλητή userChoice με το id του στοιχείου που 
//κλικάρθηκε. Στη συνέχεια, η τιμή αυτή εμφανίζεται σε ένα άλλο στοιχείο με το id 
//userChoiceDisplay. Τέλος, καλείται η συνάρτηση generateComputerChoice()
//που πιθανόν να δημιουργεί μια τυχαία επιλογή του υπολογιστή.

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // μπορουμε να βαλουμε αντι για 3 possibleChoices.length
                         //τωρα που εχουμε το math.random το βαζουμε σε math floor οπου θα μας δωσει εναν τυχαιο αριθμό ακεραιο
                         if (randomNumber === 1) {
                            computerChoice = 'Rock'
                          }
                          if (randomNumber === 2) {
                            computerChoice = 'Scissors'
                          }
                          if (randomNumber === 3) {
                            computerChoice = 'Paper'
                          }
                          computerChoiceDisplay.innerHTML = computerChoice
                        }              
