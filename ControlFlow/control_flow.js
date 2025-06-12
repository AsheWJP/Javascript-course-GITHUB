let userRole= "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
}else if(userRole === "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}
console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!";
    }
}else{
        userMessage = "Please log in to access the system";
    }
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown"
}
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication status:", authenticationStatus);

let dietaryRole = "Employee";
let dietaryAccess;

if(dietaryRole === "Employee"){
    dietaryAccess = "Welcome Employee! Access to Dietary Services fully granted.";
} else if(dietaryRole === "Enrolled Member"){
    dietaryAccess = "Welcome Enrolled Member! Full access to Dietary services and One-on-One interactions with dieticians granted.";
}else if(dietaryRole === "Subscriber"){
    dietaryAccess = "Welcome Subscriber! Partial access to Dietary services granted, please enroll for full access!";
} else{
    dietaryAccess = "You are not subscribed! To access Dietary services please subscribe or feel free to enroll as a member for full access to dieticians! Thank you!";
}
console.log("Access to dietary services:", dietaryAccess);