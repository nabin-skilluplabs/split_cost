(() => {

    function User(firstName, lastName, email, mobile, profilePicture) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.profilePicture = profilePicture;
    }

    function ExpensesItem(description, amount) {
        this.description = description;
        this.amount = amount;
        this.isSettled = false;
        this.date = new Date();
    }

    function SplitCost() {
        this.users = getUsers();
        this.expenses = [];
        this.unsettledAmount = 0;

        this.addNewExpenses = function(newExpenses) {
            this.expenses.unshift(newExpenses);
        }

        this.settleNow = function() {
                // 
        }

        this.calculateUnsettledAmount = function() {
            // 
        }
    }



    function getUsers() {
        const user1 = new User("Utsab", "Baral", "utsab.baral@gmail.com", "0420400163", "https://api.multiavatar.com/Binx Bond.svg");
        const user2 = new User("Alex", "Lee", "alex.lee@gmail.com", "0420400123", "https://api.multiavatar.com/kathrin.svg");
        const user3 = new User("Steve", "Jobs", "steve.jobs@gmail.com", "0420120163", "https://api.multiavatar.com/Binx Bond.svg");
        const user4 = new User("Elon", "Mustk", "elon.musk@gmail.com", "0420400124", "https://api.multiavatar.com/zoe.svg");
        
        const users = [user1, user2, user3, user4];
        return users;
    }

    function getExpenses() {
        const expenses1 = new ExpensesItem("Woolworths Shopping", 120);
        const expenses2 = new ExpensesItem("Aldi", 160.00);
        expenses2.settled = true;
        const allExpenses = [expenses1, expenses2, expenses1, expenses2];
        return allExpenses;
    }   


    function populateUsers(users) {
        const userContainer = document.querySelector(".users-container");
        const userElements = users.map((user) => {
            return `
            <div><img width="112" src="${user.profilePicture}" alt="${user.firstName} ${user.lastName}" /></div>
            `
        });
        userContainer.innerHTML = userElements.join("");
    }

    function populateExpenses(expenses) {
        const expensesContainer = document.querySelector("#all-expenses");
        const expenseElements = expenses.map((expense) => {
            return `
            <div ${expense.settled ? "class=settled-row" : ""}>
                <div>
                    <span>${expense.description}</span>
                    <time>${expense.date}</time>
                </div>
                <div  class="amount">
                    $${expense.amount}
                </div>
            </div>
            `
        });
        expensesContainer.innerHTML = expenseElements.join("");
    }

    function addNewExpense(event) {
        event.preventDefault();
        const description = document.querySelector("textarea").value;
        const amount = document.querySelector("input").value;
        const newExpense = new ExpensesItem(description, parseFloat(amount));
        splitCostObject.addNewExpenses(newExpense);
        populateExpenses(splitCostObject.expenses);
    }

    function addNewEventListener() {
        const newButtonElement = document.querySelector(".new-container button");
        newButtonElement.addEventListener("click", addNewExpense);
    }


    addNewEventListener();

    const splitCostObject = new SplitCost();
    populateUsers(splitCostObject.users);
    populateExpenses(splitCostObject.expenses);

    

    
    
})();