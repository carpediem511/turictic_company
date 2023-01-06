/* let places = [
    {
    title: "водопады Бахо",
    addToFavorites: "./icon-like.png",
    price: "100$",
    duration: "5 часов",
    daysOfWeek: "понедельник",
    more: "./icon-right.png",
    image: "./image-baho.png",
    },

    {
        title: "пляж Доклет",
        addToFavorites: "./icon-like.png",
        price: "100$",
        duration: "5 часов",
        daysOfWeek: "пятница",
        more: "./icon-right.png",
        image: "./image-beech.jpg",
        },

        {
            title: "Далат",
            addToFavorites: "./icon-like.png",
            price: "250$",
            duration: "2 дня",
            daysOfWeek: "суббота",
            more: "./icon-right.png",
            image: "./image-dalat.jpg",
            },

            {
                title: "Vinperl - парк развлечений",
                addToFavorites: "./icon-like.png",
                price: "150$",
                duration: "целый день",
                daysOfWeek: "воскресенье",
                more: "./icon-right.png",
                image: "./vinperl.jpg",
                },

                {
                    title: "Hotel <Crazy House>",
                    addToFavorites: "./icon-like.png",
                    price: "110$",
                    duration: "4 часа",
                    daysOfWeek: "вторник",
                    more: "./icon-right.png",
                    image: "./image-hotel.png",
                    },

                    {
                        title: "Гастрономический тур",
                        addToFavorites: "./icon-like.png",
                        price: "50$",
                        duration: "3 часа",
                        daysOfWeek: "среда",
                        more: "./icon-right.png",
                        image: "./image-food.png",
                        },
]
*/


let isOpen = false




   let menuImg = document.getElementById("iconMenu")
   let openMobileMenu = document.getElementById("mobileMenu")
   let buttonOpenMenu = document.getElementById("openMenuButton")

   buttonOpenMenu.addEventListener("click", openMenu)

   function openMenu() {
 
   if (buttonOpenMenu) { // если у нас нажали на элемент 
		if (isOpen) { // если он уже был открыт, значит, нажали еще раз - закрываем
			// поменять иконку
      openMobileMenu.style.display = "none"
            menuImg.src = "./src/images/icon-menu.png"
			isOpen = false // установить закрытым
   
		} else {
			// поменять иконку	
      openMobileMenu.style.display = "flex"
         menuImg.src = "./src/images/icon-menu2.png"
			isOpen = true // установить открытым
        
		}
 	}
}
