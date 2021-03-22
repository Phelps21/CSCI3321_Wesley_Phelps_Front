// Make two arrays that will store clicked numbers and operations
var nums = new Array;
var ops = new Array;


function updateDisplay(newValue){
    // find the display box
    var d = document.getElementById('display');
    
    // Pause all actions if there is a = in the display
    if(!d.innerHTML.includes("=")){
        switch (newValue){
        case '':
            d.innerHTML = ''
            nums = []
            ops = []
            break

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            switch(d.innerHTML.slice(-1)){
                case '':
                case '+':
                case '-':
                case '/':
                case '*':
                    nums.push(newValue)
                    d.innerHTML += newValue
                    break

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    
                // Make a variable out of the last 2 variables, pop both from the array and push the concatenated item
                    nums.push(newValue)
                    var item = nums[nums.length-2] + nums[nums.length-1]
                    nums.pop()
                    nums.pop()
                    nums.push(item)
                    d.innerHTML += newValue
                    break
            }
            break

        case '+':
        case '-':
        case '/':
        case '*':
            switch(d.innerHTML.slice(-1)){
            // Don't let the user push more than 1 operator at a time
                case '':
                case '=':
                case '+':
                case '-':
                case '/':
                case '*':
                    break

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    ops.push(newValue)
                    d.innerHTML += newValue
                    break
            }
            break       
        
        case '=':
            switch(d.innerHTML.slice(-1)){
                case '+':
                case '-':
                case '/':
                case '*':
                 // Display Err if you press = right after an operator
                    d.innerHTML = "Err"
                    break

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                   
                // Call the method that actually calculates
                    d.innerHTML += newValue + calculate()
                    break

            }
        }
    }
// Lets the user clear the display
    else if(newValue === '')
        d.innerHTML = ''
}    

// Make a method that calculates equations given stored numbers and operations
function calculate(){
    var current = +nums[0]

    // num2 will be what operates the current number
    var num2 = current
    
    // Set i to 1 since the first num2 will num[2]
    for(var i = 1; i < nums.length; i++){
            num2 = +nums[i]
            console.log("hi")
            // Set ops to i-1 since op[0] will be the first op
            switch(ops[i-1]){
                case '+':
                current += num2
                break

                case '-':
                current -= num2
                break

                case '*':
                current *= num2
                break

                case '/':
                current /= num2
                break
                }
            }

            // Clear the arrays
            nums = []
            ops = []
        return current
}

