const scrollCumple = document.getElementById("scrollCumple");
const flavoursContainer = document.getElementById("scrollCumple")
const flavoursScrollWidth = flavoursContainer.scrollWidth
        window.addEventListener("load", () => {
            console.log(self)
            console.log(flavoursContainer.scrollLeft)            
            console.log(flavoursScrollWidth)
            limite = flavoursContainer.scrollWidth - flavoursContainer.offsetWidth
            flag = true 
            self.setInterval(() => {          

                if(flavoursContainer.scrollLeft != limite && (flag == true) ) {                    
                    flavoursContainer.scrollTo(flavoursContainer.scrollLeft+1, 0);
                }else{
                    flag = false
                    flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 1, 0);
                    if (flavoursContainer.scrollLeft == 0){
                        flag = true
                    }
                }

            }, 30);
        })    